<script lang="ts">
  import feather from "feather-icons";
  export const directions: string[] = [
    "n",
    "ne",
    "e",
    "se",
    "s",
    "sw",
    "w",
    "nw",
  ];

  export let name: string;
  export let direction: string = "n";
  export let strokeWidth: string = undefined;
  export let stroke: string = undefined;
  export let width: string = "1em";
  export let height: string = "1em";

  $: icon = feather.icons[name];
  $: rotation = directions.indexOf(direction) * 45;
  $: if (icon) {
    if (stroke) icon.attrs["stroke"] = stroke;
    if (strokeWidth) icon.attrs["stroke-width"] = strokeWidth;
  }
</script>

{#if icon}
  <svg
    {...icon.attrs}
    style="width: {width}; height: {height}; transform: rotate({rotation}deg);"
  >
    <g>
      {@html icon.contents}
    </g>
  </svg>
{/if}

<style>
  svg {
    width: 1em;
    height: 1em;
    overflow: visible;
    transform-origin: 50% 50%;
  }
</style>
