<script lang="ts">
	import Meta from '$lib/Meta.svelte';
	import Intro from '$lib/Intro.svelte';
	import Slides from '$lib/Slides.svelte';
	import Tap from '$lib/helpers/Tap.svelte';
	import Progress from '$lib/helpers/Progress.svelte';
	import Slider from '$lib/helpers/Slider.svelte';
	import Slide from '$lib/helpers/Slider.Slide.svelte';
	import loadImage from '../utils/loadImage.js';

	import { innerH } from '../stores/nav.js';
	import copy from '../data/copy.json';
	import viewport from '$stores/viewport.js';

	const gif = 'https://pudding.cool/assets/img/custom.gif';

	let innerWidth: number;
	let innerHeight: number;

	let sliderY: { next(): void; prev(): void; jump(): void };
	let activeY: number;
	let countY: number;

	let sliderX = [];
	let activeX = [];
	let countX = [];

	let currentX = 0;

	var xDown = null;
	var yDown = null;

	function getTouches(evt: TouchEvent) {
		return evt.touches; // browser API
	}

	function handleTouchStart(evt: TouchEvent) {
		const firstTouch = getTouches(evt)[0];
		xDown = firstTouch.clientX;
		yDown = firstTouch.clientY;
	}

	function handleTouchMove(evt: TouchEvent) {
		if (!xDown || !yDown) {
			return;
		}

		var xUp = evt.touches[0].clientX;
		var yUp = evt.touches[0].clientY;

		var xDiff = xDown - xUp;
		var yDiff = yDown - yUp;

		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			/*most significant*/
			if (xDiff > 0) {
				/* left swipe */
				sliderX.forEach((s) => s.next());
			} else {
				/* right swipe */
				sliderX.forEach((s) => s.prev());
			}
		} else {
			if (yDiff > 0) {
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
	}

	const onTap = ({ detail }) => {
		if (detail === 'left') sliderX.forEach((s) => s.prev());
		else if (detail === 'right') sliderX.forEach((s) => s.next());
		else if (detail === 'up') sliderY.prev();
		else if (detail === 'down') sliderY.next();
	};

	const updateArrows = () => {
		currentX = activeX[activeY - 1];
	};

	let visited = [];

	const log = (y: number) => {
		if (!visited[y]) loadImage(`${gif}?key=y&value=${visited[visited.length - 1]}`);
		visited[y] = true;
	};

	$: mobile = innerWidth < 640;
	$: full = !mobile;
	$: arrowPosition = mobile ? 'end' : 'center';
	$: activeX.join(''), activeY, updateArrows();
	$: showArrows = activeY > 0 ? ['left', 'right'] : false;
	$: disableUD = activeY === 0 ? 'up' : activeY === countY - 1 ? 'down' : '';
	$: disableLR = currentX === countX[activeY - 1] - 1 ? 'right' : currentX === 0 ? 'left' : '';
	$: disable = [disableLR, disableUD].filter((d) => d);
	$: if (activeY > 0) log(activeY);
	$: $innerH = innerHeight;
</script>

<svelte:window
	on:touchmove={handleTouchMove}
	on:touchstart={handleTouchStart}
	bind:innerWidth
	bind:innerHeight
/>

<Meta {...copy} />

<Progress total={countX[activeY - 1] - 1} current={currentX} />

<Tap
	directions={['up', 'down', 'left', 'right']}
	{showArrows}
	{full}
	{disable}
	enableKeyboard={true}
	{arrowPosition}
	on:tap={onTap}
/>

<article style={`height: ${$viewport.height}`}>
	<Slider direction="vertical" bind:this={sliderY} bind:count={countY} bind:active={activeY}>
		<Slide theme="dark">
			<Intro intro={copy.intro} email={copy.email} />
		</Slide>

		{#each copy.levels as level, i}
			<Slide theme={false}>
				<Slider
					direction="horizontal"
					bind:this={sliderX[i]}
					bind:count={countX[i]}
					bind:active={activeX[i]}
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
