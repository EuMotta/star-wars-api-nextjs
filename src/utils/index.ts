/* eslint-disable @typescript-eslint/no-explicit-any */
export const extractId = (url: string) => {
  const match = url.match(/\/(\d+)\/$/);
  return match ? match[1] : null;
};

export function addImage(dataArray: any[], endpoint: string) {
  return dataArray.map(async (item: any) => {
    const res = await fetch(item.url);
    const itemData = await res.json();
    item.image = `/star-wars/${endpoint}/${extractId(item.url)}.jpg`;
    return itemData;
  });
}
