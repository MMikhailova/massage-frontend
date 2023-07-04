import { getData } from "../getData";

export async function getGallery(url) {

  const result = await getData(url);
  const data = result[0].attributes.image.data;
  return data;
}
