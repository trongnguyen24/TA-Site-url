import { r as redirect } from "../../../chunks/index.js";
const DefaultUser = {};
const POST = ({ locals }) => {
  locals.pb.authStore.clear();
  locals.user = DefaultUser;
  throw redirect(303, "/");
};
export {
  POST
};
