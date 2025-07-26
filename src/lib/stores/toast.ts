import { writable } from 'svelte/store';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

// Create writable store for toasts
const toastsStore = writable<Toast[]>([]);

function addToast(message: string, type: ToastType = 'info', duration = 4000) {
  if (typeof window === 'undefined') return ''; // SSR safety
  
  const id = Math.random().toString(36).substring(2, 9);
  const toast: Toast = { id, message, type, duration };
  
  toastsStore.update(toasts => [...toasts, toast]);
  
  if (duration > 0) {
    setTimeout(() => {
      removeToast(id);
    }, duration);
  }
  
  return id;
}

function removeToast(id: string) {
  if (typeof window === 'undefined') return; // SSR safety
  toastsStore.update(toasts => toasts.filter(toast => toast.id !== id));
}

function clearAllToasts() {
  if (typeof window === 'undefined') return; // SSR safety
  toastsStore.set([]);
}

// Convenience methods
function showSuccess(message: string, duration?: number) {
  return addToast(message, 'success', duration);
}

function showError(message: string, duration?: number) {
  return addToast(message, 'error', duration);
}

function showWarning(message: string, duration?: number) {
  return addToast(message, 'warning', duration);
}

function showInfo(message: string, duration?: number) {
  return addToast(message, 'info', duration);
}

export const toastManager = {
  toasts: toastsStore,
  addToast,
  removeToast,
  clearAllToasts,
  showSuccess,
  showError,
  showWarning,
  showInfo
};