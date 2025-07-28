// Content Service for Suhba - Bridge between database and game logic
import { islamicContentService } from '$lib/database/islamicContent';
import { newGameContent } from '$lib/gameContent';

export interface GameContentItem {
  id?: number;
  prompt: string;
  prompt_ar?: string;
  options: string[];
  options_ar?: string[];
  correct: number;
  explanation: string;
  explanation_ar?: string;
  hadith?: string;
  hadith_ar?: string;
  sources?: string[];
  difficulty: string;
  category: string;
  scholarly_opinion?: string;
}

export class ContentService {
  private useDatabase = false; // Flag to switch between file and database

  // Get game content - can switch between file and database source
  async getGameContent(gameType: string, difficulty?: string): Promise<GameContentItem[]> {
    if (this.useDatabase) {
      return await this.getContentFromDatabase(gameType, difficulty);
    } else {
      return this.getContentFromFiles(gameType, difficulty);
    }
  }

  // Get random question for gameplay
  async getRandomQuestion(gameType: string, difficulty: string, excludeIds: number[] = []): Promise<GameContentItem | null> {
    const content = await this.getGameContent(gameType, difficulty);
    if (!content.length) return null;

    const availableQuestions = content.filter(q => !excludeIds.includes(q.id || 0));
    if (!availableQuestions.length) return null;

    return availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  }

  // Get content from database (when implemented)
  private async getContentFromDatabase(gameType: string, difficulty?: string): Promise<GameContentItem[]> {
    try {
      const questions = await islamicContentService.getGameQuestions(gameType, difficulty);
      
      return await Promise.all(questions.map(async (question) => {
        const questionWithOptions = await islamicContentService.getQuestionWithOptions(question.id);
        if (!questionWithOptions) return null;

        return {
          id: question.id,
          prompt: question.prompt,
          prompt_ar: question.promptArabic || '',
          options: questionWithOptions.options.map(opt => opt.optionText),
          options_ar: questionWithOptions.options.map(opt => opt.optionTextArabic || opt.optionText),
          correct: questionWithOptions.options.findIndex(opt => opt.isCorrect),
          explanation: question.explanation || '',
          explanation_ar: question.explanationArabic || '',
          hadith: question.hadithReference || '',
          hadith_ar: question.hadithReferenceArabic || '',
          sources: question.sources ? JSON.parse(question.sources) : [],
          difficulty: question.difficulty,
          category: question.category || '',
          scholarly_opinion: question.scholarlyOpinion || ''
        };
      })).then(results => results.filter(Boolean) as GameContentItem[]);
    } catch (error) {
      console.error('Database content fetch failed, falling back to files:', error);
      return this.getContentFromFiles(gameType, difficulty);
    }
  }

  // Get content from files (current implementation)
  private getContentFromFiles(gameType: string, difficulty?: string): GameContentItem[] {
    const gameContentMap: Record<string, any> = {
      'fiqh_master': newGameContent.fiqhMaster,
      'fiqhMaster': newGameContent.fiqhMaster,
      'wisdom_seeker': newGameContent.wisdomSeeker,
      'wisdomSeeker': newGameContent.wisdomSeeker,
      'iman_defender': newGameContent.imanDefender,
      'imanDefender': newGameContent.imanDefender
    };

    const gameData = gameContentMap[gameType];
    if (!gameData) return [];

    if (difficulty) {
      return gameData[difficulty] || [];
    }

    // Return all difficulties combined
    return [
      ...(gameData.easy || []),
      ...(gameData.medium || []),
      ...(gameData.hard || [])
    ];
  }

  // Enable database mode (after migration)
  enableDatabaseMode(enabled: boolean = true) {
    this.useDatabase = enabled;
    console.log(`🕌 Content Service: ${enabled ? 'Database' : 'File'} mode enabled`);
  }

  // Get statistics about available content
  async getContentStats() {
    if (this.useDatabase) {
      return await islamicContentService.getAllStats();
    } else {
      // Calculate stats from file content
      const stats = [];
      const games = ['fiqhMaster', 'wisdomSeeker', 'imanDefender'];
      
      for (const game of games) {
        const content = this.getContentFromFiles(game);
        const difficulties = {
          easy: content.filter(q => q.difficulty === 'easy').length,
          medium: content.filter(q => q.difficulty === 'medium').length,
          hard: content.filter(q => q.difficulty === 'hard').length
        };
        
        stats.push({
          gameName: this.getGameDisplayName(game),
          totalQuestions: content.length,
          difficulties
        });
      }
      
      return stats;
    }
  }

  // Search content across all games
  async searchContent(query: string, gameType?: string): Promise<GameContentItem[]> {
    const games = gameType ? [gameType] : ['fiqhMaster', 'wisdomSeeker', 'imanDefender'];
    const results: GameContentItem[] = [];
    
    for (const game of games) {
      const content = await this.getGameContent(game);
      const matching = content.filter(item => 
        item.prompt.toLowerCase().includes(query.toLowerCase()) ||
        item.explanation.toLowerCase().includes(query.toLowerCase()) ||
        (item.prompt_ar && item.prompt_ar.includes(query))
      );
      results.push(...matching);
    }
    
    return results;
  }

  private getGameDisplayName(gameType: string): string {
    switch (gameType) {
      case 'fiqhMaster':
      case 'fiqh_master': 
        return 'Fiqh Master';
      case 'wisdomSeeker':
      case 'wisdom_seeker': 
        return 'Wisdom Seeker';
      case 'imanDefender':
      case 'iman_defender': 
        return 'Iman Defender';
      default: 
        return gameType;
    }
  }

  // Utility methods for Islamic content
  async getRandomVerse(): Promise<any> {
    // This would integrate with the Quran database when implemented
    return {
      surah: 'Al-Fatiha',
      verse: 1,
      arabic: 'بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ',
      translation: 'In the name of Allah, the Most Gracious, the Most Merciful'
    };
  }

  async getRandomHadith(): Promise<any> {
    // This would integrate with the Hadith database when implemented
    return {
      collection: 'Sahih Bukhari',
      text: 'The best of people are those who benefit others',
      narrator: 'Ibn Umar'
    };
  }
}

// Export singleton instance
export const contentService = new ContentService();