
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=4SmEokhdlRVYLYKhiEm5GHO7aB881Mt4`
    const resp = await fetch(url);

    const { data } = await resp.json();
    const gifs = data.map(img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url, //El signo ? pregunta si hay algo y si no hay, no ejecuta el proceso
        }
    })

    return gifs;

}