<script>
	import { createEventDispatcher } from 'svelte';
	import { getImageURL } from '$lib/utils';
	import { scale } from 'svelte/transition';

	export let club, logincheck;
	const dispatch = createEventDispatcher();
	function addItemToBookmark() {
		dispatch('addItemToBookmark', {
			idClub: club.id
		});
	}
</script>

<article
	class=" bg-[#F6FAFE] group overflow-hidden border-t border-l relative border-white rounded-2xl shadow-soft hover:shadow-3xl dark:hover:bg-[#24242c] transition-shadow duration-300 dark:hover:shadow-3xl-dark dark:bg-[#1D1D23] dark:border-gray-800"
>
	<div
		class="w-6 flex opacity-100 group-hover:opacity-100 transition-all flex-col gap-1 absolute right-2 top-2"
	>
		{#if logincheck != undefined}
			<a class="w-6 h-6" href="club/edit/{club.id}" data-sveltekit-noscroll>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-slate-300 hover:stroke-slate-500 transition-colors hover:animate-spin dark:stroke-slate-600 dark:hover:stroke-slate-400"
				>
					<path
						d="M9.59396 3.94C9.68396 3.398 10.154 3 10.704 3H13.297C13.847 3 14.317 3.398 14.407 3.94L14.62 5.221C14.683 5.595 14.933 5.907 15.265 6.091C15.339 6.131 15.412 6.174 15.485 6.218C15.809 6.414 16.205 6.475 16.56 6.342L17.777 5.886C18.0264 5.79221 18.301 5.78998 18.5518 5.87971C18.8027 5.96945 19.0136 6.14531 19.147 6.376L20.443 8.623C20.576 8.8537 20.6229 9.12413 20.5753 9.38617C20.5277 9.6482 20.3887 9.88485 20.183 10.054L19.18 10.881C18.887 11.121 18.742 11.494 18.749 11.873C18.7506 11.958 18.7506 12.043 18.749 12.128C18.742 12.506 18.887 12.878 19.179 13.118L20.184 13.946C20.608 14.296 20.718 14.9 20.444 15.376L19.146 17.623C19.0128 17.8536 18.8022 18.0296 18.5515 18.1195C18.3008 18.2094 18.0263 18.2074 17.777 18.114L16.56 17.658C16.205 17.525 15.81 17.586 15.484 17.782C15.4115 17.8261 15.3381 17.8688 15.264 17.91C14.933 18.093 14.683 18.405 14.62 18.779L14.407 20.059C14.317 20.602 13.847 21 13.297 21H10.703C10.153 21 9.68296 20.602 9.59296 20.06L9.37996 18.779C9.31796 18.405 9.06796 18.093 8.73596 17.909C8.66181 17.8681 8.58846 17.8258 8.51596 17.782C8.19096 17.586 7.79596 17.525 7.43996 17.658L6.22296 18.114C5.97369 18.2075 5.69933 18.2096 5.44866 18.1199C5.19799 18.0302 4.98727 17.8545 4.85396 17.624L3.55696 15.377C3.4239 15.1463 3.37701 14.8759 3.42462 14.6138C3.47223 14.3518 3.61125 14.1152 3.81696 13.946L4.82096 13.119C5.11296 12.879 5.25796 12.506 5.25096 12.127C5.2494 12.042 5.2494 11.957 5.25096 11.872C5.25796 11.494 5.11296 11.122 4.82096 10.882L3.81696 10.054C3.6115 9.88489 3.47264 9.64843 3.42503 9.38662C3.37743 9.12481 3.42418 8.8546 3.55696 8.624L4.85396 6.377C4.98715 6.14614 5.19797 5.97006 5.44887 5.88014C5.69977 5.79021 5.97445 5.79229 6.22396 5.886L7.43996 6.342C7.79596 6.475 8.19096 6.414 8.51596 6.218C8.58796 6.174 8.66196 6.131 8.73596 6.09C9.06796 5.907 9.31796 5.595 9.37996 5.221L9.59396 3.94Z"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</a>
		{/if}
		<button on:click={addItemToBookmark} class="w-6 h-6 relative">
			{#if club.bookmarked === true}
				<svg
					in:scale={{ duration: 350, delay: 50, opacity: 0, start: 0.7 }}
					out:scale={{ duration: 350, delay: 50, opacity: 0, start: 0.7 }}
					id={club.id}
					class="stroke-red-500 top-0 absolute fill-red-500 hover:stroke-red-500 transition-colors dark:stroke-red-500 dark:hover:stroke-red-500"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21 8.25C21 5.765 18.901 3.75 16.312 3.75C14.377 3.75 12.715 4.876 12 6.483C11.285 4.876 9.623 3.75 7.687 3.75C5.1 3.75 3 5.765 3 8.25C3 15.47 12 20.25 12 20.25C12 20.25 21 15.47 21 8.25Z"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{:else}
				<svg
					in:scale={{ duration: 350, delay: 50, opacity: 0, start: 0.5 }}
					out:scale={{ duration: 350, delay: 50, opacity: 0, start: 1.5 }}
					id={club.id}
					class="stroke-slate-300 top-0 absolute fill-transparent hover:stroke-red-500 transition-colors dark:stroke-slate-600 dark:hover:stroke-red-400"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21 8.25C21 5.765 18.901 3.75 16.312 3.75C14.377 3.75 12.715 4.876 12 6.483C11.285 4.876 9.623 3.75 7.687 3.75C5.1 3.75 3 5.765 3 8.25C3 15.47 12 20.25 12 20.25C12 20.25 21 15.47 21 8.25Z"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{/if}
		</button>
	</div>
	<div
		class="flex items-center gap-4 flex-row h-16 justify-left px-6 py-3 bg-white dark:bg-gray-800 dark:bg-opacity-10"
	>
		<picture class="w-12 h-12">
			<img
				src={club?.thumbnail
					? getImageURL(club.collectionId, club.id, club.thumbnail, '100x100')
					: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${club.name}`}
				alt="club thumbnail"
				loading="lazy"
				width="64"
				height="64"
			/>
		</picture>
		<h2 class="text-sm font-medium text-slate-800 dark:text-slate-200">
			{club.name}
		</h2>
	</div>
	<div class="flex flex-col gap-2 p-4 border-t border-slate-100 dark:border-gray-900">
		<div class="flex flex-col gap-2">
			<a rel="noreferrer" target="_blank" href={club.dev}>
				<div
					class="flex items-center h-6 overflow-hidden text-xs transition-all border divide-x rounded divide-sky-500 font-code border-slate-200 dark:hover:border-slate-600 hover:border-slate-400 dark:border-gray-800"
				>
					<div class="w-10 pl-2 text-slate-700 shrink-0 dark:text-slate-100 select-none">Dev</div>

					<div class="h-6 max-w-full pl-2 leading-6 whitespace-nowrap text-slate-400">
						{club.dev}
					</div>
				</div>
			</a>

			<a rel="noreferrer" target="_blank" href={club.live}>
				<div
					class="flex items-center h-6 overflow-hidden text-xs transition-all border divide-x rounded divide-lime-500 font-code border-slate-200 dark:hover:border-slate-600 hover:border-slate-400 dark:border-gray-800"
				>
					<div class="w-10 pl-2 text-slate-700 shrink-0 dark:text-slate-100 select-none">Live</div>
					<div class="h-6 max-w-full pl-2 leading-6 whitespace-nowrap text-slate-400">
						{club.live}
					</div>
				</div>
			</a>
		</div>
	</div>
</article>
