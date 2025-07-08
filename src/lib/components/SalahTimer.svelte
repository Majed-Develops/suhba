<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { salahStore } from '$lib/stores/salah';
  import { currentLanguage } from '$lib/stores/language';
  import { translations } from '$lib/stores/translations';
  import { Clock, Sun, Moon, Sunrise, Calendar, Compass } from 'lucide-svelte';
  
  let { currentTheme = { text: 'text-white/80' }, theme = 'desert' } = $props();
  
  const t = $derived(translations[$currentLanguage.code]);
  
  // Theme-based clock icon and text
  const clockProps = $derived({
    desert: { icon: Sun, text: $currentLanguage.code === 'ar' ? 'وقت الصحبة' : 'Suhba Time' },
    scroll: { icon: Compass, text: $currentLanguage.code === 'ar' ? 'وقت الصحبة' : 'Suhba Time' },
    midnight: { icon: Moon, text: $currentLanguage.code === 'ar' ? 'وقت الصحبة' : 'Suhba Time' }
  }[theme] || { icon: Clock, text: 'Next Salah' });
  
  onMount(() => {
    salahStore.init();
  });
  
  onDestroy(() => {
    salahStore.destroy();
  });
</script>

<div class="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 text-sm {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}">
  <svelte:component this={clockProps.icon} class="w-4 h-4 {currentTheme.iconColor}" />
  <div class="{currentTheme.suhbaColor} font-medium">
    {#if $salahStore.next}
      <span class="text-xs opacity-80">{clockProps.text}:</span>
      <span class="font-bold {$currentLanguage.direction === 'rtl' ? 'mr-1' : 'ml-1'}">
        {$currentLanguage.code === 'ar' ? $salahStore.next.arabicName : t[$salahStore.next.name]}:
      </span>
      <span class="{currentTheme.iconColor} font-bold {$currentLanguage.direction === 'rtl' ? 'mr-1' : 'ml-1'}">
        {$salahStore.timeUntilNext}
      </span>
    {:else}
      <span>{clockProps.text}</span>
    {/if}
  </div>
</div>

<style>
  /* Ensure the component is always visible */
  div {
    min-width: fit-content;
  }
</style>