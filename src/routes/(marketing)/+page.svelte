<script lang="ts">
  import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
  } from "./../../config"

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`
</script>

<svelte:head>
  <title>{WebsiteName}</title>
  <meta name="description" content={WebsiteDescription} />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<div class="hero min-h-[60vh]">
  <div class="hero-content text-center py-12">
    <div class="max-w-xl">
      <div
        class="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-3 md:mb-7 pb-1"
      >
        Kids Playground
      </div>

      <div
        class="text-3xl md:text-6xl font-bold px-2"
        style="line-height: 1.2;"
      >
        The
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >open source</span
        >, libertarian and
        <span> kids&#8209;first</span>
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >Adventure&nbsp;Playground</span
        >
      </div>
      <div class="mt-6 md:mt-10 text-sm md:text-lg">
        Built with <a
          href="https://stellar.org"
          class="link font-bold"
          target="_blank">Stellar</a
        >,
        <a href="https://supabase.com" class="link font-bold" target="_blank"
          >Supabase</a
        >,
        <a href="https://tailwindcss.com" class="link font-bold" target="_blank"
          >Tailwind</a
        >,
        <a href="https://daisyui.com" class="link font-bold" target="_blank"
          >DaisyUI</a
        >, and
        <a
          href="https://www.postgresql.org"
          class="link font-bold"
          target="_blank">Postgres</a
        >
      </div>
      <div class="mt-6 md:mt-2">
        <a href="https://github.com/dobrocity/kids.dobro.city">
          <button class="btn btn-primary btn-sm px-6">★ us on Github</button>
        </a>
        <a href="https://docs.dobro.city/ru">
          <button class="btn btn-outline btn-primary btn-sm px-6 mt-3 mx-2"
            >Read the Docs</button
          >
        </a>
      </div>
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="pt-20 pb-8 px-7">
    <div class="max-w-lg mx-auto text-center">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2"
      >
        Click on the 3D model
      </div>
    </div>
  </div>
</div>

<div class="flex justify-center md:mt-2 mb-2 p-4">
  <iframe
    title="Kids Playground"
    src="https://3dwarehouse.sketchup.com/embed/16061056-9774-4954-b000-dd914b5454f7?token=Eceha6TAMKg=&binaryName=s21"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    width="580"
    height="326"
    allowfullscreen
    allowtransparency
  ></iframe>
</div>
