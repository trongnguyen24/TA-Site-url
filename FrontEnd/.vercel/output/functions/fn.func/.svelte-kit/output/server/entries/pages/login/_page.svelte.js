import { c as create_ssr_component } from "../../../chunks/index3.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="flex flex-col items-center h-full w-full"><h2 class="my-12 text-center text-3xl font-bold text-slate-800 dark:text-slate-50">Login to your account
	</h2>
	<form action="?/login" method="POST" class="w-full max-w-sm"><div class="mb-6"><label for="email" class="block text-sm font-semibold leading-6 text-gray-700 dark:text-slate-200">Email address
			</label>
			<input type="email" name="email" class="mt-2 appearance-none text-slate-800 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none dark:bg-gray-800 dark:bg-opacity-30 dark:text-slate-400 dark:ring-gray-700 dark:focus:ring-gray-600 placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"></div>
		<div class="mb-6"><label for="password" class="block text-sm font-semibold leading-6 text-gray-700 dark:text-slate-200">Password
			</label>
			<input type="password" name="password" class="mt-2 appearance-none text-slate-800 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none dark:bg-gray-800 dark:bg-opacity-30 dark:text-slate-400 dark:ring-gray-700 dark:focus:ring-gray-600 placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"></div>

		<div class="w-full max-w-md pt-2"><button type="submit" class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-800 text-white hover:bg-slate-700 w-full dark:bg-lime-600 dark:border dark:border-lime-500 dark:hover:bg-lime-500 transition-colors duration-150">Login</button></div>

		
		${form?.notVerified ? `<div class="alert alert-error shadow-lg w-full max-w-md"><div><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
					<span>You must verify your email before you can login.</span></div></div>` : ``}</form></div>`;
});
export {
  Page as default
};
