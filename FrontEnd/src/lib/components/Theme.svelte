<script>
	import Transition from 'svelte-transition';
	import { browser } from '$app/environment';

	export let theme = { dark: true };

	export let show = true;

	function toggleTheme() {
		theme.dark = !theme.dark;

		localStorage.setItem('theme', theme.dark ? 'dark' : 'light');

		theme.dark
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			theme.dark = true;
		} else {
			document.documentElement.classList.remove('dark');
			theme.dark = false;
		}
	}
</script>

<div class="relative w-6 h-6">
	{#if theme.dark}
		<Transition
			{show}
			appear
			enter="duration-[400ms]"
			enterFrom="opacity-0 rotate-[-240deg] scale-50"
			enterTo="opacity-100 rotate-0 scale-100"
			leave="duration-200 transition ease-in-out"
			leaveFrom="opacity-100 rotate-0 scale-100"
			leaveTo="opacity-0 rotate-[120deg] scale-95"
		>
			<button class="absolute" on:click={toggleTheme}>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21.752 15.002C20.5633 15.4975 19.2879 15.7517 18 15.75C12.615 15.75 8.25 11.385 8.25 5.99999C8.25 4.66999 8.516 3.40299 8.998 2.24799C7.22147 2.9891 5.70397 4.23934 4.63663 5.84124C3.56928 7.44314 2.99984 9.32507 3 11.25C3 16.635 7.365 21 12.75 21C14.6749 21.0002 16.5568 20.4307 18.1587 19.3634C19.7606 18.296 21.0109 16.7785 21.752 15.002Z"
						stroke="#84CC16"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M18 9.75L18.259 8.715C18.4073 8.12147 18.7142 7.57941 19.1468 7.14681C19.5794 6.71421 20.1215 6.40733 20.715 6.259L21.75 6L20.715 5.741C20.1215 5.59267 19.5794 5.28579 19.1468 4.85319C18.7142 4.42059 18.4073 3.87854 18.259 3.285L18 2.25L17.741 3.285C17.5927 3.87841 17.286 4.42038 16.8536 4.85297C16.4212 5.28556 15.8794 5.59251 15.286 5.741L14.25 6L15.286 6.259C15.8794 6.40749 16.4212 6.71444 16.8536 7.14703C17.286 7.57962 17.5927 8.12159 17.741 8.715L18 9.75Z"
						stroke="#A3E635"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</Transition>
	{:else}
		<Transition
			{show}
			appear
			enter="duration-[400ms]"
			enterFrom="opacity-0 rotate-[-120deg] scale-50"
			enterTo="opacity-100 rotate-0 scale-100"
			leave="duration-200 transition ease-in-out"
			leaveFrom="opacity-100 rotate-0 scale-100"
			leaveTo="opacity-0  rotate-[120deg] scale-95"
		>
			<button class="absolute" on:click={toggleTheme}>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 3V5.25M18.364 5.636L16.773 7.227M21 12H18.75M18.364 18.364L16.773 16.773M12 18.75V21M7.227 16.773L5.636 18.364M5.25 12H3M7.227 7.227L5.636 5.636M15.75 12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75C11.0054 15.75 10.0516 15.3549 9.34835 14.6517C8.64509 13.9484 8.25 12.9946 8.25 12C8.25 11.0054 8.64509 10.0516 9.34835 9.34835C10.0516 8.64509 11.0054 8.25 12 8.25C12.9946 8.25 13.9484 8.64509 14.6517 9.34835C15.3549 10.0516 15.75 11.0054 15.75 12Z"
						stroke="#FACC15"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</Transition>
	{/if}
</div>
