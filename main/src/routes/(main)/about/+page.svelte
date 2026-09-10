<script>
  import CardContainer from "./CardContainer.svelte";
</script>

<main class="text-white w-full h-full flex flex-col gap-7">
  <CardContainer>
    <h1 class="text-3xl font-medium">Summary</h1>
    <p>I am John</p>
    <h1 class="text-3xl font-medium">Currently, I am:</h1>
    <p>Look for a new opportunity in the tech industry in Europe.</p>
  </CardContainer>

  <CardContainer>
    <h1 class="text-3xl font-medium">Education</h1>
    <p>I received my bachelors degree at...</p>
  </CardContainer>

  <CardContainer>
    <h1 class="text-3xl font-medium">Work Experience</h1>
    <p>I have worked at two tech companies – both start-ups – for around three years each.</p>
    <h2>UNAFFI</h2>
  </CardContainer>
</main>
