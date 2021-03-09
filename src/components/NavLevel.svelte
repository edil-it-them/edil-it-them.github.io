<script>
  import { createEventDispatcher } from "svelte";
  export let version;
  export let slides;
  export let index;

  const dispatch = createEventDispatcher();

  const onClick = () => {
    dispatch("jump", index);
  };
</script>

<button class="{version}" on:click="{onClick}">
  <span class="title">{version}</span>
  <div class="cookie"></div>
  <div class="progress">
    {#each slides as slide}<span class="slide"></span>{/each}
  </div>

  <div class="cookie"></div>
</button>

<style>
  button {
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 6em;
  }
  .title {
    margin-bottom: 0.5em;
    text-transform: capitalize;
    color: var(--fg);
  }
  .progress {
    width: 2.5em;
  }
  .slide {
    height: 3px;
    display: block;
    background: var(--off-white);
  }
  .cookie {
    width: 3em;
    height: 0.25em;
    background: var(--brown);
    border-radius: 2px;
  }
</style>
