import { getData } from "../getData";

export async function getGallery(url) {

  const result = await getData(url);
      console.log(result);
  const data = result[0].attributes.image.data;
    console.log(data);
  return data;
}
