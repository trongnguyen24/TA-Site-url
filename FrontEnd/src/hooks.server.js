import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from '$lib/utils';
import { dev } from '$app/environment';
import { PUBLIC_DEV_API_URL, PUBLIC_BUILD_API_URL } from '$env/static/public';

// Kiểm tra xem môi trường có phải là "dev" hay không
const isDev = dev;

// Sử dụng biến môi trường để import API link tương ứng
const apiUrl = isDev ? PUBLIC_DEV_API_URL : PUBLIC_BUILD_API_URL;

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(apiUrl);
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
	} else {
		event.locals.user = undefined;
	}

	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
};
