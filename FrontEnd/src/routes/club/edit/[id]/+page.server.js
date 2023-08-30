import { redirect } from '@sveltejs/kit';
import { page } from '$app/stores';

export const load = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}
};

export const actions = {
	updateProject: async ({ request, locals, params }) => {
		const formData = await request.formData();

		const thumbnail = formData.get('thumbnail');

		if (thumbnail.size === 0) {
			formData.delete('thumbnail');
		}

		try {
			await locals.pb.collection('club').update(params.id, formData);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, `/?update`);
	},

	deleteProject: async ({ request, locals }) => {
		const { id } = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('club').delete(id);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
		throw redirect(303, `/?del`);
	}

	// deleteThumbnail: async ({ locals, params }) => {
	// 	try {
	// 		await locals.pb.collection('projects').update(params.projectId, { thumbnail: null });
	// 	} catch (err) {
	// 		console.log('Error: ', err);
	// 		throw error(err.status, err.message);
	// 	}
	// 	return {
	// 		success: true
	// 	};
	// }
};
