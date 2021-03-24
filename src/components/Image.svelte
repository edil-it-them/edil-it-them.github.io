<script>
  export let name;

  const data = {
    d3js: {
      src: "d3js.gif",
      alt: "gif of my scrollitelling project",
      caption: "Click to see the project, <a target='_blank' href='https://rolikasi.github.io/kenesh_visual_eng'>eng</a>",
      href: "https://rus.azattyk.org/a/30807488.html",
      date: "2020",
    },
    unity: {
      src: "unity.gif",
      alt: "gif of my unity project",
      caption: "",
      href: "https://rolikasi.github.io/covid_ukraine_unity/Tiny3D.html",
      date: "2021",
    },
    telegram: {
      src: "telegram.gif",
      alt: "gif of my telegram project",
      caption: "",
      href: "https://t.me/ClickHelpKg_bot",
      date: "2020",
    },
    insta: {
      src: "insta.gif",
      alt: "gif of my instastory project",
      caption: "",
      href: "https://rus.azattyk.org/a/30692108.html",
      date: "2020",
    },
    gender: {
      src: "gender.gif",
      alt: "gif of my AR project",
      caption: "",
      href: "https://www.instagram.com/ar/174810097277579/",
      date: "2020",
    },
    arcovid: {
      src: "arcovid.gif",
      alt: "gif of my AR project",
      caption: "Yeah, that's me!😜",
      href:
        "https://www.instagram.com/ar/286683049640292/?ch=OTEyODk0MDBhNTdkZmQ1NjUzZjNkZDVjNjBiYmQyOTA%3D",
      date: "2020",
    },
    maps: {
      src: "maps.gif",
      alt: "gif of my QGIS project",
      caption: "",
      href:
        "https://kloop.kg/blog/2019/07/26/pochemu-v-bishkeke-tak-zharko-obyasnyaem-na-teplokartah/",
      date: "2019",
    },
    femicid: {
      src: "femicid.jpg",
      alt: "preview of the femicid project",
      caption: "",
      href:
        "https://kloop.kg/blog/2020/12/17/ya-by-ee-vse-ravno-ubil-issledovanie-kloopa-o-femitside-v-kyrgyzstane/",
      date: "2020",
    },
    air: {
      src: "air.jpg",
      alt: "preview of my air pollution project",
      caption: "",
      href:
        "https://cabar.asia/en/how-harmful-is-the-air-in-central-asia-explained-on-the-graphs",
      date: "2020",
    },
    currenttv: {
      src: "currenttv.jpg",
      alt: "preview of currenttime project",
      caption: "",
      href:
        "https://www.currenttime.tv/a/kyrgyz-parliament-out-of-order/30870707.html",
      date: "2020",
    },
  };
</script>

<figure>
  <span>{data[name].date}</span>
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
    padding: 1em;
  }
  img {
    border-radius: 4px;
    max-height: 13em;
    box-shadow: 0 0 8px 0px var(--fg);
    transition: transform .2s; /* Animation */
  }
  img:hover{
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

  @media only screen and (min-width: 375px) {
    img {
      max-width: 15em;
    }
  }
  @media only screen and (min-width: 640px) {
    img {
      max-width: 20em;
    }
  }
</style>
