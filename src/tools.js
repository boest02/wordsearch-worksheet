let getJSON = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

const getBackground = async (string, type) => {
    try {
        let response = {};
        switch (type) {
            case "url":
                return string;

            case "image":
                {
                    const pexels = "https://api.pexels.com/v1/search/";
                    const pexels_params = `?query=${encodeURIComponent(string)}&orientation=landscape&size=medium&per_page=15`;

                    response = await fetch(`${pexels}${pexels_params}`, {
                        method: "GET",
                        headers: {
                            Authorization: "lEJRpWpA91jSKHNKM4LaKyPZaM8VeP6acK5D4iA6qctu8F34Uxbb9I2l",
                        },
                    });

                    let data = await response.json();

                    console.dir(data);
                    
                    let ran = Math.floor(Math.random() * data.photos.length);

                    return data.photos[ran].src.original;
                }

            case "illustration":
            default:
                {
                    const API_KEY = '42905891-3bec1966bd1df37f2991f6b49';
                    const pixabay = "https://pixabay.com/api/";
                    const pixabay_params = `?key=${API_KEY}&q=${encodeURIComponent(string)}&image_type=illustration&orientation=horizontal`;
                    response = await fetch(`${pixabay}${pixabay_params}`);

                    let data = await response.json();

                    console.dir(data);
                    
                    let ran = Math.floor(Math.random() * data.hits.length);

                    return data.hits[ran].largeImageURL;
                }
        }

    } catch (error) {
        console.log(error);
        return "";
    }

};

const tools = {
    getJSON,
    getBackground,
};

export default tools;
