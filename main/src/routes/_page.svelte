<script>
  import Avatar from "$lib/comps/Avatar.svelte";
  import CardPersonalInfo from "$lib/comps/CardPersonalInfo.svelte";
  import ScrollPastTimelineFab from "$lib/comps/ScrollPastTimelineFab.svelte";
  import Tag from "$lib/comps/Tag.svelte";

  const skills = ["JavaScript", "TypeScript", "Svelte", "Node.js", "Python", "Java", "C", "MongoDB", "Git", "REST API"];

  const projects = [
    {
      name: "Doenit",
      description: "An Afrikaans ToDo list app built to be simple, private, and offline-first.",
      logo_src: "/doenit-logo.webp",
      logo_alt: "Doenit Logo",
      tech: ["SvelteKit", "Capacitor", "Firebase"],
      status: "In Development",
      href: "/doenit",
      tone: "ocean",
    },
    {
      name: "Vinkel Of Koljander",
      description: "A website I created for my family to share recipes",
      logo_src: "/vinkel-of-koljander-logo.webp",
      logo_alt: "Vinkel Of Koljander Logo",
      tech: ["SvelteKit", "Firebase"],
      status: "Improving",
      tone: "citrus",
    },
    {
      name: "My Wedding website",
      description: "A website I built for my wedding for guests to RSVP, find basic information and handle the gift registry.",
      logo_src: "/trou-webwerf-logo.webp",
      logo_alt: "Trouwebwerf Logo",
      tech: ["Vue.js"],
      status: "Completed",
      tone: "sunset",
    },
    {
      name: "Tradesmith",
      description: "A project to automatically trade cryptocurrency based on a set of rules and strategies.",
      logo_src: "/tradesmith-logo.png",
      logo_alt: "Tradesmith Logo",
      tech: ["Vue.js", "Binance API", "Luno API"],
      status: "Shelved",
      tone: "graphite"
    },
    {
      name: "Console Colours",
      description: "A small library to add colour to console output in Node.js.",
      tech: ["Node.js", "Typescript"],
      status: "Shelved",
      tone: "cobalt"
    },
    {
      name: "Woorde Wenk",
      description: "A simple word game built for Afrikaans learners to practice their vocabulary.",
      tech: ["Firebase", "WhatsApp API"],
    }
  ];

  const projectStatusClass = {
    "In Development": "bg-amber-100 text-amber-900 border-amber-300",
    Improving: "bg-emerald-100 text-emerald-900 border-emerald-300",
    Completed: "bg-blue-100 text-blue-900 border-blue-300",
    Shelved: "bg-neutral-200 text-neutral-800 border-neutral-300",
  };

  const projectToneClass = {
    ocean: "border-sky-200",
    citrus: "border-lime-200",
    sunset: "border-orange-200",
    graphite: "border-neutral-300",
    cobalt: "border-indigo-200",
  };

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/tertius-van-niekerk-96a674237/", icon: "💼" },
    { name: "GitHub", url: "https://github.com/tertius4/doenit", icon: "🐙" },
  ];

  const lifeTimeline = [
    {
      year: "2020",
      title: "Graduated in Computer Science",
      description: "Completed my Computer Science degree at the University of Stellenbosch.",
      type: "education",
    },
    {
      year: "2021",
      title: "Started My Professional Career",
      description: "Joined my first start-up role and began building production software full-time.",
      type: "career",
    },
    {
      year: "Now",
      title: "Building Products and Growing",
      description: "Focused on practical full stack development while exploring new ideas through side projects.",
      type: "present",
    },
  ];
</script>

<svelte:head>
  <title>Tertius – Software Developer</title>
  <link rel="icon" href="/tertius_picture.webp" />
  <meta
    name="description"
    content="Personal website of Tertius, a full stack software developer with South African and German citizenship, open to opportunities across Europe."
  />
  <meta
    name="keywords"
    content="full stack developer, web developer, JavaScript, TypeScript, Svelte, Node.js, Europe, Germany, South Africa, multilingual developer"
  />
  <meta property="og:title" content="Tertius – Software Developer" />
  <meta
    property="og:description"
    content="Full stack developer with South African and German citizenship, available for opportunities with European teams."
  />
  <meta property="og:type" content="website" />
</svelte:head>

<main class="min-h-dvh bg-linear-to-br from-neutral-50 to-neutral-300">
  <section class="container mx-auto px-6 py-16">
    <div class="max-w-4xl mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="relative">
          <Avatar src="/tertius_picture.webp" alt="Tertius - Full Stack Developer" class="w-48 h-48" />
        </div>

        <div class="text-center md:text-left">
          <h1 class="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Hi, I'm <span class="text-blue-600">Tertius</span>
          </h1>
          <p class="text-xl text-neutral-700 mb-6 leading-relaxed">
            Full stack developer building practical products for international teams, with dual South African and German
            citizenship.
          </p>

          <div class="flex flex-wrap justify-center md:justify-start gap-1 sm:gap-2 mb-6">
            <Tag class="bg-blue-100 text-blue-800 border-blue-200">⛰️ Loves Hiking</Tag>
            <Tag class="bg-emerald-100 text-emerald-800 border-emerald-200">🎸 Guitarist</Tag>
            <Tag class="bg-orange-100 text-orange-800 border-orange-200">🇿🇦 Afrikaans</Tag>
          </div>

          <!-- Social Links -->
          <div class="flex justify-center md:justify-start gap-2 sm:gap-4">
            {#each socialLinks as link}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 text-neutral-700 hover:text-blue-600"
              >
                <span class="text-lg">{link.icon}</span>
                <span class="font-medium">{link.name}</span>
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="bg-white py-16">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-neutral-900 mb-8 text-center">About Me</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <CardPersonalInfo title="🎓 Education & Background">
            I graduated with a <strong>Computer Science degree</strong> from the University of Stellenbosch in 2020. Since
            starting my professional journey in 2021, I've worked at start-ups to gain diverse product experience and sharpen
            my delivery skills.
          </CardPersonalInfo>

          <CardPersonalInfo title="💼 Current Role">
            Currently working full-time as a <strong>Full Stack Developer</strong> at an innovative start-up, where I contribute
            to building user-focused solutions while continuously expanding my skill set in fast-paced environments.
          </CardPersonalInfo>

          <CardPersonalInfo title="🌍 Mobility & Languages">
            I hold <strong>dual citizenship: South African and German</strong>, which means I can work across Europe
            without additional visa sponsorship. I am <strong>fluent in Afrikaans and English</strong>, with
            <strong>elementary German</strong>
            proficiency.
          </CardPersonalInfo>

          <CardPersonalInfo title="🛠️ Technical Skills">
            <div class="flex flex-wrap gap-2">
              {#each skills as skill}
                <Tag class="bg-indigo-100 text-indigo-800 border-indigo-200 text-sm">
                  {skill}
                </Tag>
              {/each}
            </div>
          </CardPersonalInfo>

          <CardPersonalInfo title="🚀 Passion Projects">
            <p class="text-neutral-700 leading-relaxed">
              In my free time, I enjoy building simple apps to solve others' problems. I enjoy being challenged by new
              ideas and continuously learning.
            </p>
          </CardPersonalInfo>
        </div>
      </div>
    </div>
  </section>

  <!-- Timeline Section -->
  <section id="life-timeline" class="bg-amber-50 py-16">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-neutral-900 mb-4 text-center">Life Timeline</h2>
        <p class="text-center text-neutral-600 mb-12">Moments and milestones that shaped my path.</p>

        <div class="relative">
          <div class="absolute left-1/2 top-0 bottom-0 w-1 bg-amber-200 -translate-x-1/2 hidden md:block"></div>

          <div class="space-y-8">
            {#each lifeTimeline as event, index (`${event.year}-${event.title}`)}
              <article class="relative">
                <div class="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
                  <div class="w-4 h-4 rounded-full bg-amber-500 border-4 border-amber-100"></div>
                </div>

                <div class="md:grid md:grid-cols-2 md:gap-8 items-center">
                  {#if index % 2 === 0}
                    <div class="md:text-right md:pr-10">
                      <div class="bg-white rounded-xl border border-amber-200 p-6 shadow-sm">
                        <p class="text-sm font-semibold uppercase tracking-wide text-amber-700 mb-2">{event.year}</p>
                        <h3 class="text-xl font-bold text-neutral-900 mb-2">{event.title}</h3>
                        <p class="text-neutral-700 leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                    <div class="hidden md:block"></div>
                  {:else}
                    <div class="hidden md:block"></div>
                    <div class="md:pl-10">
                      <div class="bg-white rounded-xl border border-amber-200 p-6 shadow-sm">
                        <p class="text-sm font-semibold uppercase tracking-wide text-amber-700 mb-2">{event.year}</p>
                        <h3 class="text-xl font-bold text-neutral-900 mb-2">{event.title}</h3>
                        <p class="text-neutral-700 leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  {/if}
                </div>
              </article>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="bg-neutral-100 py-16">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-neutral-900 mb-3 text-center">Selected Projects</h2>
        <p class="text-center text-neutral-700 mb-12 max-w-2xl mx-auto">
          Practical builds across product, automation, and web experiences. Each one sharpened a different engineering muscle.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          {#each projects as project, index (`${project.name}-${project.status}`)}
            <article
              class="group rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md md:p-7 {projectToneClass[project.tone] ?? projectToneClass.ocean}"
            >

              <div class="mb-5 flex items-start justify-between gap-3">
                <div class="flex items-center gap-3 min-w-0">
                  {#if project.logo_src}
                    <Avatar src={project.logo_src} alt={project.logo_alt} class="w-10 h-10 shrink-0 ring-2 ring-white/80" />
                  {:else}
                    <div
                      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80 text-sm font-bold text-neutral-800 shadow-sm"
                    >
                      {project.name[0]}
                    </div>
                  {/if}

                  <h3 class="text-xl md:text-2xl font-bold text-neutral-900 truncate">{project.name}</h3>
                </div>

                <span
                  class="rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide whitespace-nowrap {projectStatusClass[project.status] ?? projectStatusClass['In Development']}"
                >
                  {project.status}
                </span>
              </div>

              <p class="text-neutral-800/90 mb-5 leading-relaxed">
                {project.description}
              </p>

              <div class="flex flex-wrap gap-2 mb-6">
                {#each project.tech as tech (`${project.name}-${tech}`)}
                  <Tag class="bg-neutral-100 text-neutral-800 border-neutral-200 text-sm">
                    {tech}
                  </Tag>
                {/each}
              </div>

              <div class="flex justify-end">
                {#if project.href}
                  <a
                    href={project.href}
                    class="inline-flex text-nowrap items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition-colors duration-200 font-semibold"
                  >
                    <span>Open Project</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                {:else}
                  <div class="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-neutral-200 px-4 py-2.5 font-semibold text-neutral-700">
                    <span>Private Build</span>
                  </div>
                {/if}
              </div>
            </article>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <ScrollPastTimelineFab timeline_id="life-timeline" target_id="projects" label="Scroll past timeline" />

  <!-- Contact Section -->
  <footer class="bg-neutral-900 text-white py-16">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Let's Connect</h2>
        <p class="text-xl text-neutral-300 mb-12 leading-relaxed">
          I'm always interested in discussing new opportunities, receiving feedback, or just having a chat about
          technology and development.
        </p>

        <div class="flex flex-wrap justify-center gap-6">
          {#each socialLinks as link}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 px-6 py-4 bg-neutral-800 rounded-xl hover:bg-neutral-700 transition-all duration-200 hover:scale-105 group"
            >
              <span class="text-2xl group-hover:scale-110 transition-transform duration-200">{link.icon}</span>
              <span class="font-medium text-lg">{link.name}</span>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </footer>
</main>

