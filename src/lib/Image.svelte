<script lang="ts">
	// import type inView from "$utils/inView";
	import inView from '$utils/inView';
	export let name: string;
	let video;

	const data = {
		dpgmap: {
			src: 'dpgmap.mp4',
			caption: '',
			href: 'https://digitalpublicgoods.net/map/',
			date: '2021',
			type: 'video'
		},
		d3js: {
			type: 'video',
			src: 'd3js.mp4',
			caption:
				"Click to see the project, <a target='_blank' href='https://edil-it-them.github.io/kenesh_visual_eng'>eng</a>",
			href: 'https://rus.azattyk.org/a/30807488.html',
			date: '2020'
		},
		unity: {
			type: 'video',
			src: 'unity.mp4',
			alt: 'gif of my unity project',
			caption: '',
			href: 'https://edil-it-them.github.io/covid_ukraine_unity/',
			date: '2021'
		},
		telegram: {
			type: 'video',
			src: 'telegram.mp4',
			alt: 'gif of my telegram project',
			caption: '',
			href: 'https://t.me/ClickHelpKg_bot',
			date: '2020'
		},
		insta: {
			src: 'insta.gif',
			alt: 'gif of my instastory project',
			caption: '',
			href: 'https://rus.azattyk.org/a/30692108.html',
			date: '2020'
		},
		instaVideo: {
			src: 'insta.mp4',
			caption: '',
			href: 'https://rus.azattyk.org/a/30692108.html',
			date: '2020',
			type: 'video'
		},
		gender: {
			src: 'gender.gif',
			alt: 'gif of my AR project',
			caption: '',
			href: 'https://www.instagram.com/ar/174810097277579/',
			date: '2020'
		},
		arcovid: {
			type: 'video',
			src: 'arcovid.mp4',
			caption: "Yeah, that's me!😜",
			href: 'https://www.instagram.com/ar/286683049640292/?ch=OTEyODk0MDBhNTdkZmQ1NjUzZjNkZDVjNjBiYmQyOTA%3D',
			date: '2020'
		},
		maps: {
			src: 'maps.gif',
			alt: 'gif of my QGIS project',
			caption: '',
			href: 'https://kloop.kg/blog/2019/07/26/pochemu-v-bishkeke-tak-zharko-obyasnyaem-na-teplokartah/',
			date: '2019'
		},
		femicid: {
			src: 'femicid.jpg',
			alt: 'preview of the femicid project',
			caption: '',
			href: 'https://kloop.kg/blog/2021/01/28/femicide-in-kyrgyzstan/',
			date: '2020'
		},
		air: {
			src: 'air.jpg',
			alt: 'preview of my air pollution project',
			caption: '',
			href: 'https://cabar.asia/en/how-harmful-is-the-air-in-central-asia-explained-on-the-graphs',
			date: '2020'
		},
		currenttv: {
			src: 'currenttv.jpg',
			alt: 'preview of currenttime project',
			caption: '',
			href: 'https://www.currenttime.tv/a/kyrgyz-parliament-out-of-order/30870707.html',
			date: '2020'
		},
		film: {
			src: 'film.jpg',
			alt: 'preview of documentary film project',
			caption: 'Only russian version',
			href: 'https://www.youtube.com/watch?v=oovOkT1TOwY',
			date: '2017'
		},
		odi: {
			src: 'odi.gif',
			alt: 'preview of odi project',
			caption: '',
			href: 'https://secondary-use-health-data.theodi.org/horizon-scanning/',
			date: '2022'
		},
		dod: {
			src: 'dod.gif',
			alt: 'preview of dod project',
			caption: '',
			href: 'https://dod-mantech.vercel.app/',
			date: '2022'
		}
	};
</script>

<figure>
	<span>{data[name].date}</span>

	<a href={data[name].href} target="_blank">
		{#if data[name].type == 'video'}
			<video
				bind:this={video}
				use:inView
				on:enter={() => video.play()}
				on:exit={() => video.pause()}
				class="img lazy"
				loop
				playsinline
				muted
				src="/img/{data[name].src}"
			>
				<track kind="captions" />
			</video>
		{:else}
			<img class="img" loading="lazy" src="/img/{data[name].src}" alt={data[name].alt} />
		{/if}
	</a>

	<figcaption>
		{@html data[name].caption}
	</figcaption>
</figure>

<style>
	figure {
		margin: 0 auto;
		padding: 1em;
	}
	.img {
		border-radius: 4px;
		max-height: 13em;
		box-shadow: 0 0 8px 0px var(--fg);
		transition: transform 0.2s; /* Animation */
		max-width: 15em;
	}
	.img:hover {
		transform: scale(1.035);
	}
	figcaption {
		margin-top: 0.7em;
		font-style: italic;
		font-size: 0.7em;
	}
	span {
		position: absolute;
		z-index: 999;
		font-size: 12px;
		opacity: 0.8;
		transform: rotate3d(0, 0, 1, -90deg) translateY(-100%) translateY(-60%) translateX(-40%);
	}

	@media only screen and (min-width: 640px) {
		.img {
			max-width: 20em;
		}
	}
</style>
