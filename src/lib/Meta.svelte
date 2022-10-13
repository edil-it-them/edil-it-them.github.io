<script>
  export let hed;
  export let dek;
  export let introSeo;
  export let keywords;
</script>
<svelte:head>
  <title>{hed} - {dek}</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="description" content={introSeo} />
  <meta name="author" content="Edil Baiyzbekov" />
  <meta name="keywords" content={keywords} />

  <meta property="og:title" content={hed} />
  <meta property="og:site_name" content={hed} />
  <meta property="og:url" content="https://edil.dev" />
  <meta property="og:description" content={introSeo} />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_US" />

  <meta property="og:image" content="https://edil.dev/assets/img/ogimage.jpg" />
  <meta property="og:image:secure_url" content="https://edil.dev/assets/img/ogimage.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1490" />
  <meta property="og:image:height" content="928" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="https://edil.dev" />
  <meta name="twitter:creator" content={hed} />
  <meta name="twitter:title" content={hed} />
  <meta name="twitter:description" content={introSeo} />
  <meta name="twitter:image:src" content="https://edil.dev/assets/img/ogimage.jpg" />

  <meta name="robots" content="max-image-preview:large" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏽‍💻</text></svg>">
  <link rel="canonical" href="https://edil.dev" />
</svelte:head>
