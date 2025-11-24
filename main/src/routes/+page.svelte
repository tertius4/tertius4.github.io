<script>
  import Avatar from "$lib/components/Avatar.svelte";
  import Card from "$lib/components/Card.svelte";
  import Tag from "$lib/components/Tag.svelte";

  const skills = ["JavaScript", "TypeScript", "Svelte", "Node.js", "Python", "Java", "C", "MongoDB", "Git", "REST API"];

  const projects = [
    {
      name: "Doenit",
      description: "An Afrikaans ToDo list app built to be simple, private, and offline-first.",
      logo_src: "/doenit-logo.webp",
      logo_alt: "Doenit Logo",
      tech: ["SvelteKit", "Capacitor", "Firebase"],
      status: "In Development",
    },
  ];

  const socialLinks = [
    { name: "X (Twitter)", url: "https://x.com/Tertius39", icon: "🐦" },
    { name: "GitHub", url: "https://github.com/tertius4/doenit", icon: "🐙" },
    { name: "Reddit", url: "https://www.reddit.com/r/doenit/", icon: "🤖" },
  ];
</script>

<svelte:head>
  <title>Tertius - Full Stack Developer</title>
  <link rel="icon" href="/tertius_picture.webp" />
  <meta name="description" content="Personal website of Tertius, a full stack developer from South Africa." />
  <meta
    name="keywords"
    content="full stack developer, web developer, JavaScript, TypeScript, Svelte, Node.js, South Africa"
  />
  <meta property="og:title" content="Tertius - Full Stack Developer" />
  <meta property="og:description" content="Full stack developer from South Africa." />
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
            A full Stack Developer building websites and applications
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
          <Card title="🎓 Education & Background">
            I graduated with a <strong>Computer Science degree</strong> from the University of Stellenbosch in 2020. Since
            starting my professional journey in 2021, I've worked a few start-ups to gain diverse experience and sharpen
            my skills.
          </Card>

          <Card title="💼 Current Role">
            Currently working full-time as a <strong>Full Stack Developer</strong> at an innovative start-up, where I contribute
            to building cutting-edge solutions while continuously expanding my skill set.
          </Card>

          <Card title="🛠️ Technical Skills">
            <div class="flex flex-wrap gap-2">
              {#each skills as skill}
                <Tag class="bg-indigo-100 text-indigo-800 border-indigo-200 text-sm">
                  {skill}
                </Tag>
              {/each}
            </div>
          </Card>

          <Card title="🚀 Passion Projects">
            <p class="text-neutral-700 leading-relaxed">
              In my free time, I enjoy building simple apps to solve others' problems. I enjoy being challenged by new
              ideas and continuously learning.
            </p>
          </Card>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section class="py-16 bg-linear-to-br from-blue-50 to-indigo-50">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-neutral-900 mb-12 text-center">Current Projects</h2>

        <div class="grid gap-8">
          {#each projects as project}
            <a
              href="/doenit"
              class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:bg-neutral-100 transition-all duration-300"
            >
              <div class="p-8">
                <div class="flex justify-between items-start mb-4">
                  <h3 class="text-2xl font-bold text-neutral-900 flex gap-2">
                    <Avatar src={project.logo_src} alt={project.logo_alt} class="w-8 h-8" />
                    {project.name}
                  </h3>
                  <span
                    class="px-3 py-1 bg-yellow-100 text-yellow-600 border border-yellow-600 rounded-full text-sm font-medium"
                  >
                    {project.status}
                  </span>
                </div>

                <p class="text-neutral-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div class="flex flex-wrap gap-2 mb-6">
                  {#each project.tech as tech}
                    <Tag class="bg-purple-100 text-purple-800 border-purple-200 text-sm">
                      {tech}
                    </Tag>
                  {/each}
                </div>

                <div class="flex justify-end">
                  <div
                    class="inline-flex text-nowrap items-center gap-2 px-3 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    <span>🚀</span>
                    Try it out
                  </div>
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="bg-neutral-900 text-white py-16">
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
  </section>
</main>
