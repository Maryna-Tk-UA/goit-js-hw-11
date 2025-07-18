import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import axios from 'axios';

export function getImagesByQuery(query) {
    const API_KEY = "51359402-e1cf81f867165d4b6bb985455";
    const BASE_URL = 'https://pixabay.com/api/';

       const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true 
        };
    
        return axios.get(BASE_URL, { params })
            .then(response => response.data)
            .catch(error => {
                 iziToast.error({
           message: "Ooooops! Something went wrong",
            position: 'topRight',
            backgroundColor: '#ef4040',
            progressBar: false,
            messageColor: "white",
            icon: "",
            iconUrl: new URL('../img/error.svg', import.meta.url).href,
            close: false
        })
            }           
            );

}