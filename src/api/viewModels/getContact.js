import { getData } from "../getData";

export async function getContact(url) {
  const result = await getData(url);
const data=result[0].attributes
console.log(data)


return data;
}
