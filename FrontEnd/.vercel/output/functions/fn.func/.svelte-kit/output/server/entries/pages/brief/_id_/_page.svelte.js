import { c as create_ssr_component, a as subscribe, j as is_promise, n as noop } from "../../../../chunks/index3.js";
import "../../../../chunks/utils.js";
import { p as page } from "../../../../chunks/stores.js";
import "svelte-headlessui";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.params.id;
  const fetchdata = (async () => {
    const response = await fetch("https://lazy-traffic.pockethost.io//api/collections/brief/records?filter=(club~%277nldrfiragiimw4%27)&sort=-created");
    return await response.json();
  })();
  $$unsubscribe_page();
  return `<div class="flex flex-col items-center h-full w-full"><div class="w-full">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
			<p class="text-center">...waiting</p>
		`;
    }
    return function(brief) {
      return `
			<div class="w-full max-w-4xl mx-auto prose"><!-- HTML_TAG_START -->${brief.items[0].brief}<!-- HTML_TAG_END --></div>
		`;
    }(__value);
  }(fetchdata)}</div></div>`;
});
export {
  Page as default
};
