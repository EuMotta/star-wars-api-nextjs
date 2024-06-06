export const extractId = (url: string) => {
  const match = url.match(/\/(\d+)\/$/);
  return match ? match[1] : null;
};
