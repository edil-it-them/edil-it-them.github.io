<script lang="ts">
  import { getContext } from "svelte";
  const { direction, width, height } = getContext("Slider");
  export let theme:string | undefined;
  $: w = $direction === "horizontal" ? `${$width}px` : "100%";
  $: h = $direction === "vertical" ? `${$height}px` : "100%";
</script>

<div class="slide {theme ? theme :""}" style="width: {w}; height: {h};">
  <slot />
</div>

<style>
  .slide {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
