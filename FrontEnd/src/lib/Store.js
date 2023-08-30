import { writable } from 'svelte/store';
import { dev } from '$app/environment';
import { PUBLIC_DEV_API_URL, PUBLIC_BUILD_API_URL } from '$env/static/public';
// Kiểm tra xem môi trường có phải là "dev" hay không
const isDev = dev;

// Sử dụng biến môi trường để import API link tương ứng
const apiUrl = isDev ? PUBLIC_DEV_API_URL : PUBLIC_BUILD_API_URL;

// const data = await fetch('https://api.cryberpig.xyz/api/collections/club/records?sort=-created');

const data = await fetch(apiUrl + '/api/collections/club/records?perPage=500');
const data2 = await fetch(apiUrl + '/api/collections/club/records?perPage=500&sort=name');

const club = await data.json();
const club2 = await data2.json();

const clubs = writable(club.items);
const club2s = writable(club2.items);

export { clubs, club2s };
