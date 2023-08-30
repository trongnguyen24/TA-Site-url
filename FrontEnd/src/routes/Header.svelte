<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import { page } from '$app/stores';
	import Transition from 'svelte-transition';
	import { getImageURL } from '$lib/utils';
	import { scale } from 'svelte/transition';
	import { createDialog } from 'svelte-headlessui';
	import { createMenu } from 'svelte-headlessui';
	import Theme from '$lib/components/Theme.svelte';
	import { club2s } from '$lib/Store.js';

	let datasearch;

	const accmenu = createMenu({ label: 'accmenu' });
	function onSelect(e: Event) {
		console.log('select', (e as CustomEvent).detail);
	}

	let searchTerm = '';
	let filteredBooks = [];

	club2s.subscribe((dataclub) => {
		datasearch = dataclub;
	});

	const searchProducts = datasearch.map((datasearch) => ({
		...datasearch,
		searchTerms: `${datasearch.name} ${datasearch.shortname}`
	}));

	const searchBooks = () => {
		return (filteredBooks = searchProducts.filter((searchProducts) => {
			let datasearchTitle = searchProducts.searchTerms.toLowerCase();
			return datasearchTitle.includes(searchTerm.toLowerCase());
		}));
	};
	searchBooks();

	const dialogmenu = createDialog({ label: 'Menu' });
	const dialogsearch = createDialog({ label: 'Search' });
	const dialogacc = createDialog({ label: 'Account' });

	let scrolly;
	export let user;
</script>

<svelte:window bind:scrollY={scrolly} />
<header class="relative z-20">
	<nav
		class="fixed w-full transition-colors duration-300 {scrolly > 40
			? 'backdrop-blur border-b bg-white/70 border-b-slate-600/10 dark:bg-zinc-900/90'
			: 'backdrop-blur-none border-b bg-white/30 border-b-slate-400/10 dark:bg-zinc-900/20'}
			"
	>
		<!-- Mobile header -->
		<div class=" w-full flex px-6 h-[3.75rem] justify-between items-center lg:hidden">
			<div class="">
				<img class=" h-10" src="/ta-logo.png" alt="Logo" />
			</div>
			<div class="flex gap-4">
				<button class="block" on:click={dialogsearch.open}>
					<svg
						class="stroke-slate-400 dark:stroke-slate-500"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20.0001 20L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51029 17.2096 6.60256 15.803 5.19599C14.3965 3.78941 12.4887 2.99921 10.4995 2.99921C8.51035 2.99921 6.60262 3.78941 5.19605 5.19599C3.78947 6.60256 2.99927 8.51029 2.99927 10.4995C2.99927 12.4887 3.78947 14.3964 5.19605 15.803C6.60262 17.2096 8.51035 17.9998 10.4995 17.9998C12.4887 17.9998 14.3965 17.2096 15.803 15.803Z"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>

				<button on:click={dialogmenu.open} class="order-3 block">
					<svg
						class="stroke-slate-400 hover:stroke-slate-300 dark:stroke-slate-500 dark:hover:stroke-slate-400"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>

		<!-- Desktop header -->

		<div
			class="w-full container h-[3.75rem] justify-between items-center hidden max-w-screen-2xl lg:flex"
		>
			<div class="flex items-center gap-16 grow">
				<a href="/">
					<img class=" h-10" src="/ta-logo.png" alt="Logo" />
				</a>
				<button
					on:click={dialogsearch.open}
					class="flex w-full items-center max-w-[16rem] gap-2 px-2 py-2 text-gray-500 dark:text-gray-300 bg-slate-500 bg-opacity-0 hover:bg-opacity-5 transition duration-300 rounded-lg"
				>
					<svg
						class="stroke-gray-500 dark:stroke-gray-300"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20.0001 20L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51029 17.2096 6.60256 15.803 5.19599C14.3965 3.78941 12.4887 2.99921 10.4995 2.99921C8.51035 2.99921 6.60262 3.78941 5.19605 5.19599C3.78947 6.60256 2.99927 8.51029 2.99927 10.4995C2.99927 12.4887 3.78947 14.3964 5.19605 15.803C6.60262 17.2096 8.51035 17.9998 10.4995 17.9998C12.4887 17.9998 14.3965 17.2096 15.803 15.803Z"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					Tìm kiếm...
				</button>
			</div>
			<div class="flex gap-8 items-center">
				{#if user != undefined}
					<a
						data-sveltekit-noscroll
						in:scale
						out:scale
						aria-current={$page.url.pathname === '/club/new' ? 'true' : undefined}
						class="font-semibold text-gray-600 transition-colors duration-200 dark:text-gray-200 aria-current:text-lime-500 hover:text-lime-500 dark:aria-current:text-mber"
						href="/club/new">+Project</a
					>
				{/if}
				<!-- <Menu /> -->

				<span class="gap-8 flex items-center">
					<Theme />
					<div class="relative w-8 h-8 justify-center items-center">
						{#if user === undefined}
							<a
								data-sveltekit-noscroll
								class="absolute top-1 left-1"
								in:scale
								out:scale
								href="/login"
							>
								<svg
									width="24"
									height="24"
									class=" stroke-slate-600 dark:stroke-slate-300 hover:stroke-slate-500 dark:hover:stroke-slate-400"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M17.9815 18.7248C16.6121 16.9175 14.4424 15.75 12 15.75C9.55761 15.75 7.38789 16.9175 6.01846 18.7248M17.9815 18.7248C19.8335 17.0763 21 14.6744 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.6744 4.1665 17.0763 6.01846 18.7248M17.9815 18.7248C16.3915 20.1401 14.2962 21 12 21C9.70383 21 7.60851 20.1401 6.01846 18.7248M15 9.75C15 11.4069 13.6569 12.75 12 12.75C10.3431 12.75 9 11.4069 9 9.75C9 8.09315 10.3431 6.75 12 6.75C13.6569 6.75 15 8.09315 15 9.75Z"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</a>
						{:else}
							<div class="relative z-10 inline-block">
								<button
									use:accmenu.button
									on:select={onSelect}
									type="submit"
									class="h-8 w-8 rounded-full overflow-hidden focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
									on:click={dialogacc.open}
								>
									<img
										in:scale
										out:scale
										class="h-8 w-8 rounded-full"
										src="https://api.dicebear.com/6.x/avataaars-neutral/svg?seed=Oreo"
										alt="avatar"
									/>
								</button>
								<Transition
									show={$accmenu.expanded}
									enter="transition ease-out duration-150"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-90"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<div
										use:accmenu.items
										class="absolute right-0 w-36 mt-3 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-gray-200 focus:outline-none dark:ring-gray-700 dark:bg-gray-800"
									>
										<div class="py-1">
											<a
												data-sveltekit-noscroll
												href="/account"
												use:accmenu.item
												class="w-full inline-block text-right px-4 py-2 text-sm text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-slate-100"
											>
												My Account
											</a>

											<form class="" action="/logout" method="POST">
												<button
													use:accmenu.item
													class="w-full text-right px-4 py-2 text-sm text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-slate-100"
													type="submit"
												>
													Logout
												</button>
											</form>
										</div>
									</div>
								</Transition>
							</div>
						{/if}
					</div>
				</span>
			</div>
		</div>
	</nav>

	<div class="relative z-40">
		<Transition show={$dialogmenu.expanded}>
			<Transition
				enter="ease-out duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<button
					class="fixed inset-0 bg-opacity-50 bg-zinc-900 backdrop-blur-sm"
					on:click={dialogmenu.close}
				/>
			</Transition>

			<div class="fixed inset-0 overflow-y-auto">
				<div class="flex justify-end p-4 text-center">
					<Transition
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<div
							class="p-6 overflow-hidden text-left align-middle transition-all transform border-t rounded-lg shadow-xl w-52 bg-slate-100 border-t-white dark:border-t-gray-700 dark:bg-gray-800"
							use:dialogmenu.modal
						>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<ul on:click={dialogmenu.close} class="flex flex-col gap-6">
								<Menu />
							</ul>

							<div
								class="flex justify-between pt-6 mt-6 border-t border-t-gray-200 dark:border-t-gray-700"
							>
								<div class="font-normal text-gray-400 dark:text-gray-500">Switch theme</div>
								<Theme />
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</Transition>
	</div>

	<div class="relative z-40">
		<Transition show={$dialogsearch.expanded}>
			<Transition
				enter="ease-out duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="fixed inset-0 bg-opacity-50 bg-zinc-900 backdrop-blur-sm"
					on:click={dialogsearch.close}
				/>
			</Transition>

			<div class="fixed inset-0 overflow-y-auto">
				<div class="flex items-center justify-center min-h-full p-4 text-center">
					<Transition
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<div
							class="w-full flex flex-col max-w-xl overflow-hidden align-middle transition-all transform border-t rounded-lg shadow-xl h-screen max-h-[37rem] text-slate-600 dark:text-slate-300 bg-slate-100 border-t-white dark:border-t-gray-700 dark:bg-gray-800"
							use:dialogsearch.modal
						>
							<label for="searchbox" class="absolute top-6 left-6">
								<span>
									<svg
										class="stroke-slate-400 dark:stroke-slate-500"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M20.0001 20L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51029 17.2096 6.60256 15.803 5.19599C14.3965 3.78941 12.4887 2.99921 10.4995 2.99921C8.51035 2.99921 6.60262 3.78941 5.19605 5.19599C3.78947 6.60256 2.99927 8.51029 2.99927 10.4995C2.99927 12.4887 3.78947 14.3964 5.19605 15.803C6.60262 17.2096 8.51035 17.9998 10.4995 17.9998C12.4887 17.9998 14.3965 17.2096 15.803 15.803Z"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</span>
							</label>
							<input
								id="searchbox"
								autocomplete="off"
								class="w-full py-6 pl-16 m-0 bg-transparent border-b outline-0 dark:border-b-slate-700 border-b-slate-300 border-opacity-60 dark:border-opacity-50"
								placeholder="Tên dự án..."
								bind:value={searchTerm}
								on:input={searchBooks}
							/>
							<div
								class="flex overflow-y-auto flex-col divide-y divide-slate-200 dark:divide-slate-700 dark:divide-opacity-50"
							>
								{#each filteredBooks as results}
									<div
										class="flex group p-6 items-center transition-colors duration-150 justify-between dark:hover:bg-slate-700 dark:hover:bg-opacity-30 hover:bg-slate-200 hover:bg-opacity-50"
									>
										<div class="flex gap-4">
											<picture class="w-6 h-6">
												<img
													src={results?.thumbnail
														? getImageURL(
																results.collectionId,
																results.id,
																results.thumbnail,
																'100x100'
														  )
														: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${results.name}`}
													alt="club thumbnail"
													loading="lazy"
													width="24"
													height="24"
												/>
											</picture>
											{results.name}
										</div>
										<div class="flex gap-2 font-code text-center text-xs">
											<a rel="noreferrer" target="_blank" href={results.dev}
												><div
													class="border py-0.5 w-9 rounded bg-slate-50 text-slate-400 border-slate-300 dark:border-slate-600 dark:bg-slate-700 group-hover:border-sky-500 group-hover:text-slate-500 group-hover:bg-white dark:bg-opacity-50 dark:hover:bg-opacity-100 dark:group-hover:bg-slate-700 dark:group-hover:text-slate-300 transition-colors duration-150"
												>
													Dev
												</div></a
											>

											<a rel="noreferrer" target="_blank" href={results.live}
												><div
													class="border py-0.5 px-1 w-9 rounded bg-slate-50 text-slate-400 border-slate-300 dark:border-slate-600 dark:bg-slate-700 group-hover:border-lime-500 group-hover:text-slate-500 group-hover:bg-white dark:bg-opacity-50 dark:hover:bg-opacity-100 dark:group-hover:bg-slate-700 dark:group-hover:text-slate-300 transition-colors duration-150"
												>
													Live
												</div></a
											>
										</div>
									</div>
								{/each}
								{#if Object.keys(filteredBooks).length === 0}
									<div class="p-6 text-center">
										Không có kết quả "<span class=" font-semibold">{searchTerm}</span>"
									</div>
								{/if}
							</div>
							<button
								type="button"
								class="px-1 py-0.5 outline outline-1 outline-slate-300 bg-slate-50 absolute right-6 top-[26px] text-xs font-code rounded dark:bg-slate-600 dark:outline-slate-500"
								on:click={dialogsearch.close}
							>
								ESC
							</button>
						</div>
					</Transition>
				</div>
			</div>
		</Transition>
	</div>
</header>
