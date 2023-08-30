<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
	import beam from '$lib/images/beam.webp';
	import beam_fallback from '$lib/images/beam.png';
	import beam_light from '$lib/images/beam-light.webp';
	import beam_light_fallback from '$lib/images/beam-light.png';
	import PageTransition from '$lib/components/PageTransition.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Header user={data.user} />
<div class="flex flex-col min-h-full">
	<div
		class="absolute z-10 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none select-none"
	>
		<div class="w-[106.25rem] flex-none justify-center">
			<picture class="hidden dark:block">
				<source srcset={beam} type="image/webp" />
				<img src={beam_fallback} alt="BG" />
			</picture>

			<picture class="block dark:hidden">
				<source srcset={beam_light} type="image/webp" />
				<img src={beam_light_fallback} alt="BG" />
			</picture>
		</div>
	</div>

	<main class="w-full grow mx-auto z-10 py-28">
		<PageTransition pathname={data.pathname}>
			<slot />
		</PageTransition>
	</main>
</div>
