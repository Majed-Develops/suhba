<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { registerServiceWorker, initPWAInstall } from '$lib/pwa';

  onMount(() => {
    // Initialize PWA features
    registerServiceWorker();
    initPWAInstall();
  });
</script>

<slot />