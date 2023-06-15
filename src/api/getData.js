export async function getData(url) {
    const response= await fetch(
    url
    );
    const result = await response.json()
    console.log(result.data)
    return result.data
}