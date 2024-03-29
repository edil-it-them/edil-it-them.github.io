<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Icon from "./Icon.svelte";

  export let debug = false;
  export let enableKeyboard = false;
  export let full = false;
  export let showArrows: boolean | string[] = false; // boolean or array of directions
  export let disable = [];
  export let directions = ["left", "right"];
  export let arrowStroke = "#000";
  export let arrowStrokeWidth = "2";
  export let arrowPosition = "center"; // start, center, end

  const dispatch = createEventDispatcher();
  let innerHeight: number;
  let innerWidth: number;

  $: size = innerWidth < 640 ? "72px" : "64px";
  $: arrowSize = innerWidth < 640 ? "64px" : "48px";

  // modified
  $: getW = (dir: string) =>
    ["left", "right"].includes(dir) ? size : full ? "100%" : "172px";
  $: getH = (dir: string) =>
    ["up", "down"].includes(dir) ? size : full ? "100%" : size;

  $: onKeyDown = (e: KeyboardEvent) => {
    const dir = e.key.replace("Arrow", "").toLowerCase();
    const hasDir = directions.includes(dir);
    if (enableKeyboard && hasDir) {
      e.preventDefault();
      dispatch("tap", dir);
    }
  };

  $: visibleArrows = directions.filter((d) =>
    typeof showArrows === "boolean" ? showArrows : showArrows.includes(d)
  );
</script>

<svelte:window on:keydown="{onKeyDown}" bind:innerHeight bind:innerWidth />

<section class:debug style="height: {innerHeight}px;">
  {#each directions as dir}
    <button
      on:click="{() => dispatch('tap', dir)}"
      style="width: {getW(dir)}; height: {getH(dir)};"
      aria-label="{dir}"
      class="{dir} {arrowPosition}"
      class:full
      class:visible="{visibleArrows.includes(dir)}"
      disabled="{disable.includes(dir)}"
    >
      {#if visibleArrows.includes(dir)}
        <span style="font-size: {arrowSize};"
          ><Icon
            name="chevron-{dir}"
            stroke="{arrowStroke}"
            strokeWidth="{arrowStrokeWidth}"
          /></span
        >
      {/if}
    </button>
  {/each}
</section>

<style>
  section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: var(--z-overlay);
    pointer-events: none;
  }

  button {
    position: absolute;
    cursor: pointer;
    background: none;
    border-radius: 0;
    outline: none;
    border: none;
    box-shadow: none;
    pointer-events: auto;
    display: flex;
  }

  button:disabled {
    opacity: 0.2;
    cursor: not-allowed;
    pointer-events: none;
  }

  .left {
    left: 0;
    top: 0;
    /* text-align: left; */
  }

  .right {
    right: 0;
    top: 0;
    /* text-align: right; */
  }

  .left.start,
  .right.start {
    align-items: flex-start;
  }

  .left.center,
  .right.center {
    top: 50%;
    transform: translateY(-50%);
  }

  .left.end,
  .right.end {
    bottom: 0;
    top: auto;
  }

  .up {
    top: 0;
    left: 0;
  }

  .down {
    bottom: 0;
    left: 0;
  }

  .up.center,
  .down.center {
    left: 50%;
    transform: translateX(-50%);
  }

  /* modified */
  .up.end,
  .down.end {
    left: 50%;
    transform: translateX(-50%);
  }

  /* full positions */
  .full.left.start,
  .full.right.start {
    align-items: flex-start;
  }

  .full.left.center,
  .full.right.center {
    align-items: center;
  }

  .full.left.end,
  .full.right.end {
    align-items: flex-end;
  }

  .full.up.start,
  .full.down.start {
    justify-content: flex-start;
  }

  .full.up.center,
  .full.down.center {
    justify-content: center;
  }

  .full.up.end,
  .full.down-end {
    justify-content: flex-end;
  }

  span {
    display: inline-block;
    line-height: 1;
    opacity: 0.5;
  }

  .debug .left {
    background: red;
    opacity: 0.5;
  }

  .debug .right {
    background: red;
    opacity: 0.5;
  }

  .debug .up {
    background: orange;
    opacity: 0.5;
  }

  .debug .down {
    background: orange;
    opacity: 0.5;
  }

  @media only screen and (min-width: 640px) {
    button.visible.left:hover,
    button.visible.right:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
</style>
