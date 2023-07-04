import { getData } from "../getData";

export async function getTreatments(url) {
    const data = await getData(url);
  return data;
}
