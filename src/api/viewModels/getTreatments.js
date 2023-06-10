import { getData } from "../getData";

export async function getTreatments(url) {
    console.log(url)
    const data = await getData(url);
    console.log(data)
  return data;
}
