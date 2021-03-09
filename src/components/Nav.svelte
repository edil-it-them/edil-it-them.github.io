<script>
  import NavLevel from "./NavLevel.svelte";
  import { visibleIndex } from "../stores/nav.js";

  export let levels;

  $: visible = $visibleIndex > 0;
</script>

<nav class:visible>
  {#each levels as { version, slides }, i}
    <NavLevel version="{version}" slides="{slides}" index="{i + 1}" on:jump />
  {/each}
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    padding: 0.5em;
    position: fixed;
    width: 100%;
    top: 0;
    left: 50%;
    max-width: 30em;
    opacity: 0;
    pointer-events: none;
    transition: opacity 150ms ease-out;
    transform: translateX(-50%);
  }
  nav.visible {
    z-index: var(--z-overlay);
    opacity: 1;
    pointer-events: auto;
    transition: opacity 300ms 150ms ease-in;
  }
</style>
