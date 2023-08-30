<script>
	import { page } from '$app/stores';

	let menu = [
		{
			title: 'Sites',
			link: '/'
		},
		{
			title: 'Docs',
			link: '/documents'
		}
	];
</script>

<ul class="flex flex-col gap-6 lg:flex-row">
	{#each menu as menulink}
		<li
			aria-current={$page.url.pathname === menulink.link ? 'true' : undefined}
			class="font-semibold text-gray-600 transition-colors duration-200 dark:text-gray-200 aria-current:text-lime-500 hover:text-lime-500 dark:aria-current:text-mber"
		>
			<a data-sveltekit-noscroll class="block" href={menulink.link}>{menulink.title}</a>
		</li>
	{/each}
</ul>
