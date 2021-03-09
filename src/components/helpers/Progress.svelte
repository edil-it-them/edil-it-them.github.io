<script>
  export let total;
  export let current;

  $: w = (current / total) * 100;
</script>

<div style="width: {w}%;"></div>

<style>
  div {
    height: 0.5em;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: var(--z-top);
    transition: all 500ms ease-out;
  }
</style>
