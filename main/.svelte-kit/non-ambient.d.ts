
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/(main)/(projects)" | "/(main)" | "/" | "/(main)/about" | "/(main)/comps" | "/(main)/comps/layout" | "/(main)/(projects)/doenit" | "/(main)/skills" | "/(main)/(projects)/vinkel-of-koljander";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/(main)/(projects)": Record<string, never>;
			"/(main)": Record<string, never>;
			"/": Record<string, never>;
			"/(main)/about": Record<string, never>;
			"/(main)/comps": Record<string, never>;
			"/(main)/comps/layout": Record<string, never>;
			"/(main)/(projects)/doenit": Record<string, never>;
			"/(main)/skills": Record<string, never>;
			"/(main)/(projects)/vinkel-of-koljander": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/comps" | "/comps/" | "/comps/layout" | "/comps/layout/" | "/doenit" | "/doenit/" | "/skills" | "/skills/" | "/vinkel-of-koljander" | "/vinkel-of-koljander/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/cover-image.webp" | "/doenit-logo.webp" | "/instellings.webp" | "/page-not-found.webp" | "/robots.txt" | "/sitemap.xml" | "/tertius-pic-square.webp" | "/tertius_picture.webp" | "/tradesmith-logo.png" | "/trou-webwerf-logo.webp" | "/tuisblad.webp" | "/vinkel-of-koljander-logo.webp" | "/wysig-taak.webp" | string & {};
	}
}