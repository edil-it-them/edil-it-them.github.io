<script>
	let links = [
		{
			name: 'comeback into the bass',
			url: 'https://soundcloud.com/edil-it-them/comeback-into-vibe'
		},
		{
			name: 'Arab and Ukrainian bass resistance',
			url: 'https://soundcloud.com/edil-it-them/arab-and-ukrainian-bass-resistance-mix'
		},
		{
			name: 'REGULARDISCO',
			url: 'https://soundcloud.com/gasolineradio/regulardisco-w-edil-itthem-02072023'
		},
		{
			name: 'daydream & heal',
			url: 'https://refugeworldwide.com/radio/daydream-and-heal-edil-it-them-12-jan-2023'
		},
		{
			name: 'razyob-and-pizdyachka',
			url: 'https://soundcloud.com/edil-it-them/razyob-and-pizdyachka'
		},
		{ name: 'afterglow practice', url: 'https://soundcloud.com/edil-it-them/afterglow-practice' }
	];
</script>

<div class="flex flex-col h-full mx-4">
	<div class="flex flex-col max-w-md mx-auto text-center text-white my-auto w-full">
		<h2
			class="text-2xl font-bold animate-color-transition"
		>
			DJ shows
		</h2>
		{#each links as link}
			<a
				href={link.url}
				target="_blank"
				class="bg-white hover:bg-opacity-90 text-black rounded-md hover:scale-105 transition-all
            my-4 w-full py-2 px-2 shadow-orange shadow-lg"
				>{link.name}
			</a>
		{/each}
	</div>
</div>

<style>
    @keyframes color-transition {
    0% {
      color: #ffffff; /* Start color */
    }
    50% {
      color: #F56D20; /* Middle color */
    }
    100% {
      color: #ffffff; /* End color */
    }
  }
  .animate-color-transition {
		animation: color-transition 4s infinite;
	}
	/* .animated-gradient-text_foreground__PuOdy {
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(90deg, #ffffff00, #f56d20);
		position: relative;
		z-index: 1;
	}
	.animated-gradient-text_foreground-1__s2FIH {
		animation: animated-gradient-text_fade-foreground-1__3rW7l 8s infinite;
	}
	@keyframes animated-gradient-text_fade-foreground-1__3rW7l {
		0%,
		to {
			background-image: linear-gradient(90deg, #ffffff00, #f56d20);
		}

		50% {
			background-image: linear-gradient(90deg, #ffffff00, #f56d20);
		}
	} */
</style>
