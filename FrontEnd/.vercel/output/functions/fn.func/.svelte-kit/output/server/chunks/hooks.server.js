import PocketBase from 'pocketbase';
import { s as serializeNonPOJOs } from './utils.js';
const handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase('https://api.cryberpig.xyz');
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
	} else {
		event.locals.user = void 0;
	}
	const response = await resolve(event);
	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));
	return response;
};
export { handle };
