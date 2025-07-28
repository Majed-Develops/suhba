// PWA utilities for Suhba Islamic Trivia App
import { browser } from '$app/environment';

// Register service worker for offline functionality
export async function registerServiceWorker(): Promise<void> {
  if (!browser || !('serviceWorker' in navigator)) {
    console.log('🚫 Service Worker not supported');
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js');
    console.log('🕌 Suhba Service Worker registered:', registration.scope);

    // Handle updates
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New version available
            console.log('📱 New Suhba version available');
            showUpdateNotification();
          }
        });
      }
    });

  } catch (error) {
    console.error('❌ Service Worker registration failed:', error);
  }
}

// Show update notification to user
function showUpdateNotification(): void {
  // This could integrate with your existing toast system
  if (confirm('🌟 New version of Suhba available! Would you like to update?')) {
    navigator.serviceWorker.controller?.postMessage({ type: 'SKIP_WAITING' });
    window.location.reload();
  }
}

// Check if app is running as PWA
export function isPWA(): boolean {
  if (!browser) return false;
  
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as any).standalone === true ||
    document.referrer.includes('android-app://')
  );
}

// Install prompt for PWA
let deferredPrompt: any = null;

export function initPWAInstall(): void {
  if (!browser) return;

  window.addEventListener('beforeinstallprompt', (e) => {
    console.log('📱 PWA install prompt available');
    e.preventDefault();
    deferredPrompt = e;
  });

  window.addEventListener('appinstalled', () => {
    console.log('🎉 Suhba PWA installed successfully!');
    deferredPrompt = null;
  });
}

// Show install prompt
export async function showInstallPrompt(): Promise<boolean> {
  if (!deferredPrompt) {
    console.log('❌ Install prompt not available');
    return false;
  }

  try {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log('📱 Install prompt result:', outcome);
    
    deferredPrompt = null;
    return outcome === 'accepted';
  } catch (error) {
    console.error('❌ Install prompt error:', error);
    return false;
  }
}

// Enhanced for Islamic app context
export function getInstallInstructions(): string {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);
  
  if (isIOS) {
    return '📱 Tap the Share button and select "Add to Home Screen" to install Suhba for quick access to Islamic trivia!';
  } else if (isAndroid) {
    return '📱 Tap the menu (⋮) and select "Add to Home Screen" to install Suhba as an app!';
  } else {
    return '📱 Look for the install button in your browser to add Suhba to your device!';
  }
}