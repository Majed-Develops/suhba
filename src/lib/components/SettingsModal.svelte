<script lang="ts">
  import { currentLanguage, languages, type Language } from '$lib/stores/language';
  import { translations } from '$lib/stores/translations';
  import { Settings, X, Globe, Palette } from 'lucide-svelte';
  
  let { isOpen = false, onClose, currentTheme = 'desert', onThemeChange } = $props<{
    isOpen?: boolean;
    onClose: () => void;
    currentTheme?: string;
    onThemeChange: (theme: string) => void;
  }>();
  
  const t = $derived(translations[$currentLanguage.code]);
  
  function handleLanguageChange(lang: Language) {
    currentLanguage.setLanguage(lang);
  }
  
  // Reactive theme names that update with language changes
  const themes = $derived([
    { id: 'desert', name: t.themeDesert, emoji: '🏜️' },
    { id: 'scroll', name: t.themeScroll, emoji: '📜' },
    { id: 'midnight', name: t.themeMidnight, emoji: '🌙' }
  ]);
</script>

{#if isOpen}
  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div class="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl max-w-md w-full p-6 {$currentLanguage.direction === 'rtl' ? 'text-right' : 'text-left'}">
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center space-x-3 {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}">
          <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Settings class="w-5 h-5 text-white" />
          </div>
          <h2 class="text-xl font-bold text-gray-800">{t.settings}</h2>
        </div>
        <button
          onclick={onClose}
          class="p-2 hover:bg-gray-100 rounded-xl transition-colors"
        >
          <X class="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
      <!-- Language Settings -->
      <div class="mb-8">
        <div class="flex items-center space-x-2 mb-4 {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}">
          <Globe class="w-5 h-5 text-gray-600" />
          <h3 class="font-semibold text-gray-800">{t.language}</h3>
        </div>
        <div class="space-y-2">
          {#each languages as lang}
            <button
              onclick={() => handleLanguageChange(lang)}
              class="w-full p-3 rounded-xl border-2 transition-all duration-300 flex items-center justify-between {
                $currentLanguage.code === lang.code 
                  ? 'bg-gradient-to-r from-indigo-100 to-purple-100 border-indigo-300' 
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }"
            >
              <div class="flex items-center space-x-3 {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}">
                {#if lang.code === 'en'}
                  <svg class="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#3B82F6"/>
                    <text x="12" y="16" text-anchor="middle" class="text-xs font-bold fill-white">EN</text>
                  </svg>
                {:else}
                  <svg class="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#10B981"/>
                    <text x="12" y="16" text-anchor="middle" class="text-xs font-bold fill-white">AR</text>
                  </svg>
                {/if}
                <span class="font-medium text-gray-800">{lang.name}</span>
              </div>
              {#if $currentLanguage.code === lang.code}
                <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
              {/if}
            </button>
          {/each}
        </div>
      </div>
      
      <!-- Theme Settings -->
      <div class="mb-6">
        <div class="flex items-center space-x-2 mb-4 {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}">
          <Palette class="w-5 h-5 text-gray-600" />
          <h3 class="font-semibold text-gray-800">{t.theme}</h3>
        </div>
        <div class="grid grid-cols-3 gap-2">
          {#each themes as theme}
            <button
              onclick={() => onThemeChange(theme.id)}
              class="p-3 rounded-xl border-2 transition-all duration-300 text-center {
                currentTheme === theme.id 
                  ? 'bg-gradient-to-r from-indigo-100 to-purple-100 border-indigo-300' 
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }"
            >
              <div class="text-2xl mb-1">{theme.emoji}</div>
              <div class="text-xs font-medium text-gray-700">{theme.name}</div>
            </button>
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}