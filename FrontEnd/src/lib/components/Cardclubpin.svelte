<script>
	import { createEventDispatcher } from 'svelte';
	export let club;
	const dispatch = createEventDispatcher();
	let item;
	function removeBookmark() {
		dispatch('removeBookmark', {
			idClub: club.id
		});
	}
</script>

<article
	class=" bg-[#F6FAFE] transform group overflow-hidden border-l border-t relative border-white rounded-lg shadow dark:bg-[#1D1D23] dark:border-gray-800"
>
	<button
		on:click={removeBookmark}
		class="hidden w-5 h-5 absolute right-1 top-3.5 group-hover:block bookmark"
	>
		<svg
			class="stroke-slate-400 hover:stroke-red-500 transition-colors"
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14.74 9L14.394 18M9.606 18L9.26 9M19.228 5.79C19.57 5.842 19.91 5.897 20.25 5.956M19.228 5.79L18.16 19.673C18.1164 20.2382 17.8611 20.7662 17.445 21.1512C17.029 21.5363 16.4829 21.7502 15.916 21.75H8.084C7.5171 21.7502 6.97102 21.5363 6.55498 21.1512C6.13894 20.7662 5.88359 20.2382 5.84 19.673L4.772 5.79M19.228 5.79C18.0739 5.61552 16.9138 5.4831 15.75 5.393M4.772 5.79C4.43 5.841 4.09 5.896 3.75 5.955M4.772 5.79C5.92613 5.61552 7.08623 5.4831 8.25 5.393M15.75 5.393V4.477C15.75 3.297 14.84 2.313 13.66 2.276C12.5536 2.24064 11.4464 2.24064 10.34 2.276C9.16 2.313 8.25 3.298 8.25 4.477V5.393M15.75 5.393C13.2537 5.20008 10.7463 5.20008 8.25 5.393"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
	<div
		class="flex items-center h-12 justify-left px-8 py-4 bg-white dark:bg-gray-800 dark:bg-opacity-10"
	>
		<p class="text-sm w-full text-center font-medium text-slate-700 dark:text-zinc-200">
			{club.name}
		</p>
	</div>
	<div class="flex flex-col gap-4 border-t border-slate-100 dark:border-gray-900">
		<div class="flex font-code text-center text-xs divide-x divide-slate-200 dark:divide-slate-900">
			<a rel="noreferrer" class="w-full" target="_blank" href="https://{club.dev}/page"
				><div
					class=" py-2 px-2 bg-slate-50 text-slate-500 dark:text-slate-400 border-slate-300 dark:border-slate-600 dark:bg-slate-700 group-hover:hover:text-sky-500 group-hover:text-slate-600 group-hover:bg-white dark:bg-opacity-30 dark:hover:bg-opacity-60 dark:group-hover:hover:text-sky-500 dark:group-hover:bg-slate-800 dark:group-hover:text-slate-300 transition-colors duration-150"
				>
					Dev
				</div></a
			>

			<a rel="noreferrer" class="w-full" target="_blank" href="https://{club.live}/page"
				><div
					class=" py-2 px-2 bg-slate-50 text-slate-500 dark:text-slate-400 border-slate-300 dark:border-slate-600 dark:bg-slate-700 group-hover:hover:text-lime-500 group-hover:text-slate-600 group-hover:bg-white dark:bg-opacity-30 dark:hover:bg-opacity-60 dark:group-hover:bg-slate-800 dark:group-hover:hover:text-lime-500 dark:group-hover:text-slate-300 transition-colors duration-150"
				>
					Live
				</div></a
			>
		</div>
	</div>
</article>
