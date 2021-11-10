<script lang="ts">
  import Slide from "./helpers/Slider.Slide.svelte";
  // import Chart from "./Chart.svelte";
  // import Special from "./Special.svelte";
  import Image from "./Image.svelte";

  import ArrowKeys from "./ArrowKeys.svelte";
  import Icon from "./helpers/Icon.svelte";
  import Links from "./Links.svelte";

  export let level: string;
  export let text: string;
  export let slides: ArrayLike<any>;
  export let next: string = undefined;
  export let gif: string = undefined;
  export let tech: string = undefined;
  export let awards: string = undefined;
  export let outro: string = undefined;
  export let theme: string = undefined;
</script>

<Slide theme={theme}>
  <div class="slide-content intro">
    {#if +level > 0}
      <p class="prev">
        {parseInt(level, 10) == 1 ? "My Stack" : "Project " + (parseInt(level, 10) - 1)}
        <span> <Icon name="arrow-up" /></span>
      </p>
    {/if}

    <p class="{+level >= 1 ? 'text bold' : 'text'}">{@html text}</p>
    {#if gif}
      <Image name="{gif}" />
    {/if}
    <p class="text">
      {tech ?  ("👨🏽‍💻 " + tech) : ""}
      {#if awards}
        <br />
        <span>🏅 </span>{@html awards}
      {/if}
      {#if outro}
        <div class="special">
          <p>{@html outro}</p>
          <Links gray={true} />
        </div>
      {/if}
    </p>
    <ArrowKeys active="right" />
    {#if +level == 8}
      <p class="text last"><mark>Tap right to see other projects</mark></p>
    {/if}
    {#if +level < 8}
      <p class="next">
        {+level == 7 ? "Other projects" : "Project " + (+level + 1)}
        <span class="complex">: {next}</span>
        <span class="arrow"> <Icon name="arrow-down" /></span>
      </p>
    {/if}
  </div>
</Slide>

{#each slides as { text, className, chart, image, theme }, i}
  <Slide theme={theme}>
    <div class="slide-content {className || ''}">
      {#if +level > 1 && i === slides.length - 1}
        <p class="prev">
          Project
          {+level - 1}
          <span> <Icon name="arrow-up" /></span>
        </p>
      {/if}

      {#if typeof text === "string"}
        <div class="graf">
          <p class="text">
            {@html text}
          </p>
        </div>
      {:else if typeof text === "object"}
        <div class="graf">
          {#each text as { value }}
            <p>
              {@html value}
            </p>
          {/each}
        </div>
      {/if}

      {#if chart}
        <div class="chart">
          <!-- <Chart name="{chart}" /> -->
        </div>
      {/if}

      {#if image}
        <Image name="{image}" />
      {/if}

      {#if +level < 8 && i === slides.length - 1}
        <p class="next">
          {+level == 7 ? "Other projects" : "Project " + (+level + 1)}
          <span class="arrow"> <Icon name="arrow-down" /></span>
        </p>
      {/if}
    </div>
  </Slide>
{/each}

<style>
  .intro {
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .slide-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    font-size: 17px;
    justify-content: center;
  }

  .slide-content p {
    margin: 1em auto;
    max-width: 35em;
    padding: 0 1em;
  }
  .text {
    font-size: 0.8em;
  }

  .chart {
    width: 100%;
    user-select: none;
  }

  .intro p {
    margin: 0.5rem 0;
  }

  .level {
    opacity: 0.75;
    text-transform: uppercase;
    font-size: 0.75em;
  }
  .bold {
    font-weight: bold;
  }

  .reverse {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }

  p.prev,
  p.next {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    padding: 0.5em 0.75em;
    background-color: var(--fg);
    line-height: 1;
    margin: 0.1em;
    border-radius: 4px;
    font-size: 0.75em;
    display: flex;
    align-items: center;
    color: var(--off-white);
    text-transform: uppercase;
  }

  .prev span,
  .next span.arrow {
    margin-left: 0.5em;
    display: flex;
    align-items: center;
  }

  .prev {
    top: 1em;
  }

  .next {
    bottom: 1em;
  }

  .complex {
    display: none;
  }
  .last {
    font-size: 0.65em;
  }
  @media only screen and (max-width: 300px) and (max-height: 480px) {
    .text {
      font-size: 0.75em;
    }
    .last {
    font-size: 0.6em;
  }
  }
  @media only screen and (min-width: 375px) {
    .text {
      font-size: 1em;
    }
    .last {
    font-size: 0.7em;
  }
  }

  @media only screen and (min-width: 640px) {
    .slide-content {
      font-size: 21px;
      padding: 0 4rem;
      justify-content: center;
    }

    .text {
      font-size: 1.25em;
    }
    .last {
    font-size: 0.9em;
  }

    .reverse {
      justify-content: center;
    }
    .complex {
      display: inline;
    }
  }
</style>
