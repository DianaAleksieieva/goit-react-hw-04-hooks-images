function fetchImages(query, page) {
    return fetch(`https://pixabay.com/api/?key=16471285-08281fa67152cd8514adcae08&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`).then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.refect(new Error('EROR'))
    })
}
const imagesAPI = {
    fetchImages
}
export default imagesAPI