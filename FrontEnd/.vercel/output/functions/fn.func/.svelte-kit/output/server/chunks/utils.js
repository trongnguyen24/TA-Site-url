await import("node:crypto");
const serializeNonPOJOs = (obj) => {
  return structuredClone(obj);
};
export {
  serializeNonPOJOs as s
};
