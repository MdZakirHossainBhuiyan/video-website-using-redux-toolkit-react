import axios from "../../utils/axios"

export const getVideos = async (tags, search, selectedAuthor, lowerLimit, higherLimit) => {
    let queryString = '';
    if(tags?.length > 0) {
        queryString += tags.map(tag => `tags_like=${tag}`).join("&");
    }

    if(search !== ''){
        queryString += `&q=${search}`;
    }

    if(selectedAuthor !== ""){
        queryString += `&author=${selectedAuthor}`;
    }

    queryString += `&_start=${lowerLimit}&_end=${higherLimit}`;

    const response = await axios.get(`/videos/?${queryString}`);

    return response.data;
}