<script>
  export let name;

  const data = {
    d3js: {
      src: "d3js.gif",
      alt: "gif of my scrollitelling project",
      caption: "Click to see the project",
      href: "https://rus.azattyk.org/a/30807488.html",
    },
    unity: {
      src: "unity.gif",
      alt: "gif of my unity project",
      caption: "Click to see the project",
      href: "https://rolikasi.github.io/covid_ukraine_unity/Tiny3D.html",
    },
    telegram: {
      src: "telegram.gif",
      alt: "gif of my telegram project",
      caption: "",
      href: "https://t.me/ClickHelpKg_bot",
    },
    insta: {
      src: "insta.gif",
      alt: "gif of my instastory project",
      caption: "",
      href: "https://rus.azattyk.org/a/30692108.html",
    },
    gender: {
      src: "gender.gif",
      alt: "gif of my AR project",
      caption: "",
      href: "https://www.instagram.com/ar/174810097277579/",
    },
    arcovid: {
      src: "arcovid.gif",
      alt: "gif of my AR project",
      caption: "",
      href: "",
    },
    maps: {
      src: "maps.gif",
      alt: "gif of my QGIS project",
      caption: "",
      href: "https://kloop.kg/blog/2019/07/26/pochemu-v-bishkeke-tak-zharko-obyasnyaem-na-teplokartah/",
    },
    femicid: {
      src: "femicid.jpg",
      alt: "preview of the femicid project",
      caption: "",
      href: "https://kloop.kg/blog/2020/12/17/ya-by-ee-vse-ravno-ubil-issledovanie-kloopa-o-femitside-v-kyrgyzstane/",
    },
    air: {
      src: "air.gif",
      alt: "preview of my air pollution project",
      caption: "",
      href: "https://kloop.kg/blog/2020/12/17/ya-by-ee-vse-ravno-ubil-issledovanie-kloopa-o-femitside-v-kyrgyzstane/",
    }
  };
</script>

<figure>
  <a href="{data[name].href}" target="_blank">
    <img
      loading="lazy"
      src="assets/img/{data[name].src}"
      alt="{data[name].alt}"
    />
  </a>
  <figcaption>
    {@html data[name].caption}
  </figcaption>
</figure>

<style>
  figure {
    margin: 0 auto;
    max-width: 15em;
    padding: 1em;
  }
  img {
    border-radius: 4px;
    max-height: 20em;
    box-shadow: 0 0 8px 0px var(--fg);
  }
  figcaption {
    margin-top: 1em;
    font-style: italic;
    font-size: 0.75em;
  }
  @media only screen and (min-width: 640px) {
    figure{
      max-width: 20em;
    }
  }
</style>
