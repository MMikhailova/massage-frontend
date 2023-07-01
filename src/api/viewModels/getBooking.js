import { getData } from "../getData";

export async function getBooking(url) {
  const result = await getData(url);
 
 
const bookingUrl = result.reduce((acc, obj) => {
  const type = obj.attributes.type;
  const url = obj.attributes.url;
  acc[type] = url;
  return acc;
}, {});
 console.log(bookingUrl);

  return bookingUrl
}
