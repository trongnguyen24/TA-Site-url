import { writable } from 'svelte/store';

export const createSearchStore = (data) => {
	const { subscribe, set, update } = writable({
		data: data,
		filtered: data,
		search: ''
	});

	return {
		subscribe,
		set,
		update
	};
};

export const searchHandler = (store) => {
	const searchTerm = store.toLowerCase() || '';
	store.filtered = store.data.filter((item) => {
		return item.searchTerm.toLowerCase().includes(searchTerm);
	});
};
