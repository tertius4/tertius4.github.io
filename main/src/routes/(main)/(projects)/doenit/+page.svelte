<script lang="ts">
  import {
    faqs,
    features,
    footer_links,
    footer_social,
    footer_support,
    links,
    screenshots,
    stats,
    testimonials,
    tone_classes,
  } from "$lib/data/doenit";
  import { revealEmail } from "$lib/email";

  const site = "https://tertius4.github.io";
  const title = "Doenit – Afrikaanse Taaklys-toep/ToDo app";
  const short_description =
    "Organiseer jou lewe vanlyn, veilig en in jou moedertaal. Geen internet nodig nie, geen geraas – net jy en jou take.";
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="icon" href="/doenit-logo.webp" />
  <meta
    name="description"
    content="Doenit is die eerste Afrikaanse ToDo/Taaklys toepassing. Organiseer jou lewe vanlyn, veilig en in jou moedertaal. Geen internet nodig nie, geen geraas – net jy en jou take."
  />
  <meta
    name="keywords"
    content="Doenit, Afrikaans, app, toep, toepassing, taaklys, todo, vanlyn, herhalende take, Suid-Afrika, produktiwiteit"
  />
  <meta property="og:title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta property="og:url" content="{site}/doenit" />
  <meta name="twitter:url" content="{site}/doenit" />
  <meta property="og:description" content={short_description} />
  <meta name="twitter:description" content={short_description} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:domain" content="tertius4.github.io" />
  <meta property="og:image" content="{site}/doenit-logo.webp" />
  <meta name="twitter:image" content="{site}/doenit-logo.webp" />
  <link rel="canonical" href="{site}/doenit" />
</svelte:head>

<div lang="af" class="min-h-screen bg-page text-normal font-sans w-full overflow-y-auto">
  <!-- Hero -->
  <section
    class="relative bg-linear-to-br from-primary/20 via-neutral-950 to-neutral-900 text-center py-20 px-4 overflow-hidden"
  >
    <div class="absolute inset-0 opacity-5" aria-hidden="true">
      <div class="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full"></div>
      <div class="absolute bottom-20 right-20 w-24 h-24 border border-primary rounded-full"></div>
      <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/20 rounded-full"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto">
      <div class="mb-8">
        <img
          src="/doenit-logo.webp"
          alt="Doenit logo"
          width="192"
          height="192"
          class="mx-auto mb-6 w-48 h-48 drop-shadow-lg"
        />
      </div>

      <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-foreground to-primary bg-clip-text">Doenit</h1>
      <p class="text-xl md:text-2xl text-muted mb-2">Die eerste Afrikaanse taaklys-app</p>
      <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Organiseer jou lewe op 'n eenvoudige en veilige wyse en in jou eie taal. Geen internet nodig nie — net jy en jou
        take.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <a
          href={links.play}
          target="_blank"
          rel="noopener noreferrer"
          class="bg-primary hover:bg-primary/80 text-white py-4 w-full sm:w-[40%] text-center rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl flex items-center gap-2"
        >
          <span class="w-full text-center text-nowrap">📲 Kry dit op Google Play</span>
        </a>
        <a
          href={links.ios_waiting_list}
          target="_blank"
          rel="noopener noreferrer"
          class="bg-card border border-default text-center w-full py-4 sm:w-[40%] rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <span class="w-full text-center text-nowrap">🍎 iOS Waglys</span>
        </a>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
        {#each stats as stat (stat.label)}
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">{stat.value}</div>
            <div class="text-sm text-muted">{stat.label}</div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="bg-surface py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-strong">Hoekom Doenit?</h2>
        <p class="text-lg text-muted max-w-2xl mx-auto">
          Ontwerp vir Afrikaanse gebruikers wat waarde heg aan eenvoud, privaatheid en doeltreffendheid.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each features as feature (feature.title)}
          <div
            class="bg-card p-6 rounded-xl border border-default hover:border-primary/50 transition-all duration-300 group hover:transform hover:scale-105 relative overflow-hidden"
          >
            {#if "badge" in feature}
              <div class="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                {feature.badge}
              </div>
            {/if}
            <div
              class="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors {tone_classes[
                feature.tone
              ].bg}"
            >
              <span class="text-2xl" aria-hidden="true">{feature.icon}</span>
            </div>
            <h3 class="font-bold text-xl mb-3 text-strong">{feature.title}</h3>
            <p class="text-muted leading-relaxed">{feature.text}</p>
          </div>
        {/each}
      </div>

      <div
        class="mt-12 bg-linear-to-r from-primary/10 to-success/10 p-8 rounded-2xl border border-primary/20 text-center"
      >
        <h3 class="text-2xl font-bold mb-4 text-strong flex items-center justify-center gap-2">🇿🇦 Trots Afrikaans</h3>
        <p class="text-lg text-muted max-w-3xl mx-auto">
          Doenit is die <strong class="text-primary">eerste taaklys-toep</strong> wat volledig in Afrikaans ontwerp is. Gebruik
          Doenit en versterk sommer jou taal ook.
        </p>
      </div>
    </div>
  </section>

  <!-- Screenshots -->
  <section class="py-16 px-6 text-center bg-page">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-4 text-strong">Kyk hoe eenvoudig is dit</h2>
      <p class="text-lg text-muted mb-12 max-w-2xl mx-auto">
        'n Paar skermskote om jou te wys hoe maklik dit is om jou lewe te organiseer met Doenit.
      </p>

      <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {#each screenshots as shot (shot.src)}
          <div class="group">
            <div
              class="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                decoding="async"
                class="w-full transform group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div
                class="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <h4 class="font-semibold">{shot.title}</h4>
                <p class="text-sm">{shot.text}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="py-16 px-6 bg-surface">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-strong">Wat sê gebruikers?</h2>
        <p class="text-lg text-muted">Terugvoer van die r/Doenit gemeenskap en Google Play-resensies</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each testimonials as testimonial (testimonial.name)}
          <div class="bg-card p-6 rounded-xl border border-default">
            <div class="flex items-center mb-4">
              <div class="flex text-warning" role="img" aria-label="5 sterre">⭐⭐⭐⭐⭐</div>
            </div>
            <p class="text-muted mb-4 italic">"{testimonial.text}"</p>
            <div class="flex items-center">
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium {tone_classes[
                  testimonial.tone
                ].bg} {tone_classes[testimonial.tone].text}"
              >
                {testimonial.name[0]}
              </div>
              <div class="ml-3">
                <div class="font-medium text-strong">{testimonial.name}</div>
                <div class="text-sm text-muted">Google Play</div>
              </div>
            </div>
          </div>
        {/each}
      </div>

      <div class="mt-12 text-center">
        <div class="inline-flex items-center bg-primary/10 px-6 py-3 rounded-full">
          <span class="text-primary font-semibold">Sluit aan by die gemeenskap op </span>
          <a href={links.reddit} class="text-primary hover:text-primary/80 font-bold ml-1 hover:underline">r/Doenit</a>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="py-16 px-6 bg-page">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-strong">Gereelde vrae</h2>
        <p class="text-lg text-muted">Antwoorde op die mees algemene vrae oor Doenit</p>
      </div>

      <div class="space-y-6">
        {#each faqs as faq (faq.question)}
          <details
            class="bg-surface border border-default rounded-xl p-6 hover:border-primary/30 transition-colors group"
          >
            <summary class="font-semibold text-lg text-strong cursor-pointer flex items-center justify-between">
              {faq.question}
              <span class="text-primary group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
            </summary>
            <div class="mt-4 text-muted leading-relaxed">
              {#each faq.answer as part, index (index)}
                {#if typeof part === "string"}
                  {part}
                {:else if part.href}
                  <a href={part.href} class="text-primary hover:underline">{part.text}</a>
                {:else}
                  <strong>{part.text}</strong>
                {/if}
              {/each}
            </div>
          </details>
        {/each}
      </div>
    </div>
  </section>

  <!-- Community & final CTA -->
  <section class="py-16 px-6 text-center bg-surface">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 text-strong">Word deel van die Doenit-familie</h2>
      <p class="text-lg text-muted max-w-2xl mx-auto mb-8">
        Sluit aan by duisende gebruikers wat reeds hul lewe organiseer met Doenit. Deel idees, kry hulp, en help ons
        Doenit nog beter maak.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <a
          href={links.reddit}
          target="_blank"
          rel="noopener noreferrer"
          class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2"
        >
          💬 r/Doenit gemeenskap
        </a>
        <a
          href={links.x}
          target="_blank"
          rel="noopener noreferrer"
          class="bg-surface hover:bg-card border border-default text-normal px-6 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2"
        >
          🐦 Volg op X (Twitter)
        </a>
      </div>

      <div class="bg-card p-8 rounded-2xl border border-default">
        <h3 class="text-2xl font-bold mb-4 text-strong">Gereed om te begin?</h3>
        <p class="text-muted mb-6">Begin vandag</p>
        <a
          href={links.play}
          target="_blank"
          rel="noopener noreferrer"
          class="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
        >
          📲 Kry Doenit nou - Gratis!
        </a>
        <p class="text-sm text-muted mt-4">Beskikbaar op Android via Google Play Store</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-page border-t border-default py-12 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <div class="md:col-span-2">
          <div class="flex items-center mb-4">
            <img src="/doenit-logo.webp" alt="Doenit logo" width="32" height="32" class="w-8 h-8 mr-2" />
            <span class="text-xl font-bold text-strong">Doenit</span>
          </div>
          <p class="text-muted mb-4 max-w-md">
            Die eerste Afrikaanse taaklys-app. Eenvoudig, veilig en volledig in jou moedertaal.
          </p>
          <div class="flex space-x-4">
            {#each footer_social as link (link.label)}
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                class="text-muted hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            {/each}
          </div>
        </div>

        <div>
          <h3 class="font-semibold text-strong mb-4">Skakels</h3>
          <ul class="space-y-2 text-muted">
            {#each footer_links as link (link.label)}
              <li>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-primary transition-colors">{link.label}</a
                >
              </li>
            {/each}
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-strong mb-4">Ondersteuning</h3>
          <ul class="space-y-2 text-muted">
            {#each footer_support as link (link.label)}
              <li>
                {#if "email" in link}
                  <a
                    href="mailto:"
                    {@attach revealEmail("doenit_support", "subject" in link ? link.subject : undefined)}
                    class="hover:text-primary transition-colors">{link.label}</a
                  >
                {:else}
                  <a href={link.href} class="hover:text-primary transition-colors">{link.label}</a>
                {/if}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>
