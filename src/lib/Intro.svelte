<script lang="ts">
	import Icon from './helpers/Icon.svelte';
	import ArrowKeys from './ArrowKeys.svelte';
	import Links from './Links.svelte';
	import { slide, fly } from 'svelte/transition';
	export let intro: string;
	export let email: string;
	let carousel = ['data visualization engineer', 'artist', 'data journalist', 'software developer'];
	let i = 0;
	const foo = () => (i == 3 ? (i = 0) : (i = i + 1));
	setInterval(foo, 5000);
</script>

<section id="intro">
	<h2>
		I'm Edil Baiyzbekov<br /> An award-winning data visualization engineer and artist👨🏽‍💻
		<span class="relative">
			<!-- {#key i}<span in:fly class=""> {carousel[i]} 👨🏽‍💻</span>{/key} -->

			<!-- <span style="font-weight:normal"></span>  -->
		</span>
	</h2>
	<p class="text">{intro}</p>
	<a class="text" href="mailto:{email}" target="_blank">{email}</a>

	<Links />
	<div class="instructions">
		<p><span class="desktop">Use arrow keys or </span>tap below to navigate</p>
		<div class="keys">
			<ArrowKeys active="down" />
		</div>
	</div>

	<p class="next">
		My stack
		<span class="icon-arrow"> <Icon name="arrow-down" /></span>
	</p>
</section>

<style>
	section {
		margin: 0 auto;
		max-width: 70em;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	p {
		margin: 0.5em 0;
	}

	h2 {
		font-size: 1.5em;
		font-weight: bold;
		/* text-align: center; */
	}
	.instructions {
		text-transform: uppercase;
		margin-top: 2em;
		text-align: center;
	}

	.keys {
		display: flex;
		justify-content: center;
	}

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
		font-size: 1em;
		display: flex;
		align-items: center;
		color: var(--off-white);
		text-transform: uppercase;
	}

	.icon-arrow {
		margin-left: 0.5em;
		display: flex;
		align-items: center;
	}
	.desktop {
		display: none;
	}
	.next {
		bottom: 1em;
	}
	.text {
		font-size: 0.8em;
	}
	@media only screen and (max-width: 300px) and (max-height: 480px) {
		.text {
			font-size: 0.75em;
		}
	}
	@media only screen and (min-width: 375px) {
		.text {
			font-size: 1em;
		}
	}

	@media only screen and (min-width: 640px) {
		h2 {
			font-size: 2em;
		}
		.desktop {
			display: inline;
		}
		section {
			margin-top: var(--nav-height);
		}
		.text {
			font-size: 1.25em;
		}
	}

	@media only screen and (min-width: 1200px) {
		h2 {
			font-size: 2.5em;
		}
	}
</style>
