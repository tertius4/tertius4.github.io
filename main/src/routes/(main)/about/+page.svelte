<script>
  import CardContainer from "./CardContainer.svelte";
</script>

<main class="text-white w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 max-sm:gap-4 gap-8 h-full max-lg:p-4">
  <CardContainer class="sm:col-span-1 xl:col-span-2">
    <h1 class="text-3xl font-medium">Summary</h1>
    <p>I am John</p>
  </CardContainer>
  <CardContainer class="sm:row-span-2">
    <h1 class="text-3xl font-medium">Currently, I am:</h1>
    <p>Look for a new opportunity in the tech industry in Europe.</p>
  </CardContainer>

  <CardContainer class="sm:col-span-1 xl:col-span-2">
    <h1 class="text-3xl font-medium">Education</h1>
    <p>I received my bachelors degree at...</p>
  </CardContainer>

  <CardContainer class="sm:col-span-2 xl:col-span-3">
    <h1 class="text-3xl font-medium">Work Experience</h1>
    <p>I have worked at two tech companies – both start-ups – for around three years each.</p>
    <h2>UNAFFI</h2>
  </CardContainer>
</main>
