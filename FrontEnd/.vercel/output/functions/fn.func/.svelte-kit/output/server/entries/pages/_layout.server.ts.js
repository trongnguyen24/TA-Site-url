const load = ({ locals, url }) => {
  const pathname = url.pathname;
  if (locals.user) {
    return {
      user: locals.user,
      pathname
    };
  }
  return {
    user: void 0,
    pathname
  };
};
export {
  load
};
