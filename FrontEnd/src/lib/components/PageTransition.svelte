<script lang="ts">
	import { fly } from 'svelte/transition';
	export let pathname: string = '';
</script>

{#key pathname}
	<div
		class="h-max"
		in:fly={{ y: -12, duration: 800, delay: 400 }}
		out:fly={{ y: 0, duration: 100 }}
	>
		<slot />
	</div>
{/key}
