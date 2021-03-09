<script>
  export let name;

  const data = {
    email: {
      src: "email.jpg",
      alt: "Screenshot of an email from a tweet",
      caption:
        "Letter to the editor of the USA Today crossword screenshot from <a href='https://twitter.com/smileyb97/status/1228105944061685760'>a tweet.</a>",
    },
    mukbang: {
      src: "mukbang.jpg",
      alt: "Screenshot of two people eating oreos with mustard",
      caption:
        "Shay Mitchell tries an Oreo with mustard on <a href='https://www.youtube.com/watch?v=FA1FCW_DmEI?t=83'>YouTube.</a>",
    },
    aoc: {
      src: "aoc.jpg",
      alt: "Screenshot of Ken Jennings tweet about AOC and LBJ",
      caption:
        "Ken Jennings <a href='https://twitter.com/KenJennings/status/1070120490864336896'>tweeting</a> crossword constructing tips.",
    },
    chef: {
      src: "chef.png",
      alt: "Chef kiss",
      caption: "",
    },
    d3js: {
      src: "d3js.gif",
      alt: 'gif of my scrollitelling project',
      caption: "Click to see the project",
      href: 'https://rus.azattyk.org/a/30807488.html',
    },
    unity: {
      src: "unity.gif",
      alt: 'gif of my unity project',
      caption: "Click to see the project",
      href: "https://rolikasi.github.io/covid_ukraine_unity/Tiny3D.html",
    },
    telegram: {
      src: 'telegram.gif',
      alt: 'gif of my telegram project',
      caption: "",
      href: 'https://t.me/ClickHelpKg_bot',
    },
    insta: {
      src: 'insta.gif',
      alt: "",
      caption: "",
      href:"",
    },
    gender: {
      src: 'gender.gif',
      alt: '',
      caption: '',
      href: '',
    },
    arcovid: {
      src: 'arcovid.gif',
      alt: '',
      caption: '',
      href: '',
    }

  };
</script>

<figure>
  <a href={data[name].href} target="_blank">
  <img
    loading="lazy"
    src="assets/img/{data[name].src}"
    alt="{data[name].alt}" />
  </a>
  <figcaption>
    {@html data[name].caption}
  </figcaption>
</figure>

<style>
  figure {
    margin: 0 auto;
    max-width: 18em;
    padding: 1em;
  }
  img {
    border-radius: 4px;
    max-height: 23em;
    box-shadow: 0 0 8px 0px var(--fg);
  }
  figcaption {
    margin-top: 1em;
    font-style: italic;
    font-size: 0.75em;
  }
</style>
