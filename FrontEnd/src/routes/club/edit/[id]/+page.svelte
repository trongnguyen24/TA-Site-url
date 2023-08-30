<script>
	// import { enhance } from '$app/forms';
	import { Input } from '$lib/components';
	import { getImageURL } from '$lib/utils';
	import { scale } from 'svelte/transition';
	import { page } from '$app/stores';
	import { createDialog } from 'svelte-headlessui';
	import Transition from 'svelte-transition';
	import { dev } from '$app/environment';
	import { PUBLIC_DEV_API_URL, PUBLIC_BUILD_API_URL } from '$env/static/public';

	// Kiểm tra xem môi trường có phải là "dev" hay không
	const isDev = dev;

	// Sử dụng biến môi trường để import API link tương ứng
	const apiUrl = isDev ? PUBLIC_DEV_API_URL : PUBLIC_BUILD_API_URL;

	const dialogdel = createDialog({ label: 'Del' });

	let idclub = $page.params.id;

	const fetchdata = (async () => {
		const response = await fetch(apiUrl + '/api/collections/club/records/' + idclub);
		return await response.json();
	})();

	const showPreview = (event) => {
		const target = event.target;
		const files = target.files;
		if (files.length > 0) {
			const src = URL.createObjectURL(files[0]);
			const preview = document.getElementById('img-preview');
			preview.src = src;
		}
	};
</script>

<svelte:head>
	<title>Tâm Anh Sites</title>
	<meta name="description" content="Tâm Anh Sites" />
	<meta name="Tâm Anh Sites" content="Tâm Anh Sites" />
	<meta property="og:title" content="Tâm Anh Sites" />
	<meta property="og:type" content="Tâm Anh Sites" />
	<meta property="og:image" content={$page.url.origin + '/og-image.jpg'} />
	<meta property="og:url" content={$page.url.origin} />
</svelte:head>

<div class="flex flex-col items-center h-full w-full">
	<div class="w-full relative">
		{#await fetchdata}
			<p
				class="text-center inline-flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			>
				<svg
					class="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-600 dark:text-mber"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-width="4"
					/>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					/>
				</svg>Processing...
			</p>
		{:then club}
			<form
				in:scale={{ duration: 700, delay: 200, opacity: 0, start: 0.97 }}
				out:scale={{ duration: 250, delay: 0, opacity: 0, start: 1.01 }}
				action="?/updateProject"
				method="POST"
				class="w-full max-w-sm mx-auto"
				enctype="multipart/form-data"
			>
				<h2 class="mb-8 text-center text-2xl font-bold text-slate-800 dark:text-slate-50">
					Edit {club.name}
				</h2>
				{#if club.thumbnail}
					<label for="thumbnail" class="avatar w-20 hover:cursor-pointer">
						<label for="thumbnail" class="absolute -top-1.5 -right-1.5 hover:cursor-pointer" />
						<div class="w-20 h-20 mb-4 mx-auto">
							<img
								id="img-preview"
								src={getImageURL(club.collectionId, club.id, club.thumbnail, '80x80')}
								alt="project thumbnail"
							/>
						</div>
					</label>
				{/if}
				<div class="form-control w-full max-w-lg">
					<label
						for="thumbnail"
						class="block text-sm mb-2 font-semibold leading-6 text-gray-700 dark:text-slate-200"
					>
						<span class="">Thumbnail</span>
					</label>
					<input
						type="file"
						name="thumbnail"
						id="thumbnail"
						on:change={showPreview}
						class="block w-full text-sm text-slate-600 dark:text-slate-400 mb-4
					file:mr-4 file:py-2 file:px-4
					file:rounded file:border-0
					file:text-sm file:font-semibold
					file:bg-sky-100 file:text-sky-600 dark:file:bg-gray-700
					hover:file:bg-sky-200 dark:file:hover:bg-gray-600"
					/>
				</div>
				<Input id="name" required="true" label="Club name" value={club.name ?? ''} />
				<Input id="shortname" label="Short name" value={club.shortname ?? ''} />
				<Input id="dev" label="Dev" value={club.dev ?? ''} />
				<Input id="live" label="Live" value={club.live ?? ''} />

				<div class="w-full flex max-w-lg gap-6 pt-6">
					<button
						type="button"
						on:click={dialogdel.open}
						class="inline-flex w-12 justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-red-500 text-white hover:bg-red-400 dark:bg-red-600 dark:border dark:border-red-500 dark:hover:bg-red-500 transition-colors duration-150"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6 stroke-white dark:stroke-white"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
							/>
						</svg>
					</button>
					<button
						type="submit"
						class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-800 text-white hover:bg-slate-700 w-full dark:bg-blue-600 dark:border dark:border-blue-500 dark:hover:bg-blue-500 transition-colors duration-150"
						>Update Project</button
					>
				</div>
			</form>
		{:catch error}
			<p>An error occurred!</p>
		{/await}
	</div>
</div>

<div class="relative z-60">
	<Transition show={$dialogdel.expanded}>
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
				class="fixed inset-0 dark:bg-gray-900 dark:bg-opacity-80 bg-opacity-60 bg-zinc-50 backdrop-blur-sm"
				on:click={dialogdel.close}
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
						class="w-full flex flex-col gap-8 p-12 max-w-xl overflow-hidden align-middle transition-all transform border-t rounded-lg shadow-xl text-slate-600 dark:text-slate-300 bg-slate-50 border-t-white dark:border-t-gray-700 dark:bg-gray-800"
						use:dialogdel.modal
					>
						<div>
							Are you sure you want to <span class="inline dark:text-red-500 text-red-700 font-bold"
								>DELETE</span
							> this project?
						</div>
						<div class="flex gap-6">
							<button
								type="button"
								class="rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-50 hover:bg-white w-full dark:bg-slate-800 border dark:border-slate-700 dark:hover:bg-slate-700 transition-colors duration-150"
								on:click={dialogdel.close}
							>
								Close
							</button>
							<form class="w-full" action="?/deleteProject" method="POST">
								<input type="hidden" name="id" value={idclub} />
								<button
									type="submit"
									class="rounded-lg text-sm font-semibold text-white py-2.5 px-4 bg-red-500 hover:bg-red-400 w-full dark:bg-red-500 border dark:border-red-400 dark:hover:bg-red-400 transition-colors duration-150"
									>Delete</button
								>
							</form>
						</div>
					</div>
				</Transition>
			</div>
		</div>
	</Transition>
</div>
