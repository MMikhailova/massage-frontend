export async function getData(url) {
    const response= await fetch(
    url
    );
    const result = await response.json()
    return result.data
}