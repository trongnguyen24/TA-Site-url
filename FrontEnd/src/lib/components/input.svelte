<script>
	export let value = '';
	export let placeholder = '';
	export let id;
	export let label;
	export let type = 'text';
	export let disabled = false;
	export let required = false;
</script>

<div class="form-control w-full max-w-lg mb-4">
	<label for={id} class="block text-sm font-semibold leading-6 text-gray-700 dark:text-slate-300">
		<span class="">{label}</span>
	</label>
	<input
		class="mt-1 appearance-none text-slate-800 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none dark:bg-gray-800 dark:bg-opacity-20 dark:ring-gray-700 dark:focus:ring-gray-600 dark:text-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
		{type}
		{placeholder}
		{required}
		{disabled}
		{id}
		name={id}
		{value}
	/>
</div>
