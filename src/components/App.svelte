<script>
  import { onMount } from "svelte";
  import Meta from "./Meta.svelte";
  // import Header from "./Header.svelte";
  import Nav from "./Nav.svelte";
  import Intro from "./Intro.svelte";
  import Slides from "./Slides.svelte";
  import Tap from "./helpers/Tap.svelte";
  import Progress from "./helpers/Progress.svelte";
  import Slider from "./helpers/Slider.svelte";
  import Slide from "./helpers/Slider.Slide.svelte";
  import loadImage from "../utils/loadImage.js";

  import { visibleIndex, innerH } from "../stores/nav.js";
  import copy from "../data/copy.json";

  const gif = "https://pudding.cool/assets/img/custom.gif";

  let innerWidth;
  let innerHeight;

  let sliderY;
  let activeY;
  let countY;

  let sliderX = [];
  let activeX = [];
  let countX = [];

  let currentX = 0;
// add swiper
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            sliderX.forEach((s) => s.next());
        } else {
            /* right swipe */
            sliderX.forEach((s) => s.prev());
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
            sliderY.next();
        } else { 
            /* down swipe */
            sliderY.prev();
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

  const onTap = ({ detail }) => {
    if (detail === "left") sliderX.forEach((s) => s.prev());
    else if (detail === "right") sliderX.forEach((s) => s.next());
    else if (detail === "up") sliderY.prev();
    else if (detail === "down") sliderY.next();
  };

  const updateArrows = () => {
    currentX = activeX[activeY - 1];
  };

  let visited = [];

  const log = (y) => {
    if (!visited[y])
      loadImage(`${gif}?key=y&value=${visited[visited.length - 1]}`);
    visited[y] = true;
  };

  $: mobile = innerWidth < 640;
  $: full = !mobile;
  $: arrowPosition = mobile ? "end" : "center";
  $: activeX.join(""), activeY, updateArrows();
  $: showArrows = activeY > 0 ? ["left", "right"] : false;
  $: disableUD = activeY === 0 ? "up" : activeY === countY - 1 ? "down" : "";
  $: disableLR =
    currentX === countX[activeY - 1] - 1
      ? "right"
      : currentX === 0
      ? "left"
      : "";
  $: disable = [disableLR, disableUD].filter((d) => d);
  $: if (activeY > 0) log(activeY);
  $: $innerH = innerHeight;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<Meta {...copy} />

<Progress total="{countX[activeY - 1] - 1}" current="{currentX}" />

<Tap
  directions="{['up', 'down', 'left', 'right']}"
  showArrows="{showArrows}"
  full="{full}"
  disable="{disable}"
  enableKeyboard="{true}"
  arrowPosition="{arrowPosition}"
  on:tap="{onTap}"
/>

<article>
  <Slider
    direction="vertical"
    bind:this="{sliderY}"
    bind:count="{countY}"
    bind:active="{activeY}"
  >
    <Slide>
      <Intro hed="{copy.hed}" intro="{copy.intro}" email='{copy.email}' />
    </Slide>

    {#each copy.levels as level, i}
      <Slide>
        <Slider
          direction="horizontal"
          bind:this="{sliderX[i]}"
          bind:count="{countX[i]}"
          bind:active="{activeX[i]}"
        >
          <Slides {...level} />
        </Slider>
      </Slide>
    {/each}
  </Slider>
</article>

<style>
  article {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
