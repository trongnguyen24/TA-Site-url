import type { LayoutServerLoad } from '$types';
import { serializeNonPOJOs } from '$lib/utils';

export const load: LayoutServerLoad = async ({ locals, url }) => {
	const pathname = url.pathname;

	if (locals.user) {
		return {
			user: locals.user,
			pathname
			// clubs
		};
	}

	return {
		user: undefined,
		pathname
		// clubs
	};
};
