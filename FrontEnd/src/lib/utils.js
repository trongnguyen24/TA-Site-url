const { randomBytes } = await import('node:crypto');
import { dev } from '$app/environment';
import { PUBLIC_DEV_API_URL, PUBLIC_BUILD_API_URL } from '$env/static/public';
// Kiểm tra xem môi trường có phải là "dev" hay không
const isDev = dev;

// Sử dụng biến môi trường để import API link tương ứng
const apiUrl = isDev ? PUBLIC_DEV_API_URL : PUBLIC_BUILD_API_URL;

export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};

export const generateUsername = (name) => {
	const id = randomBytes(2).toString('hex');
	return `${name.slice(0, 5)}${id}`;
};

export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
	return apiUrl + `/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};
