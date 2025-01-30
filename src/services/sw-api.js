const BASE_URL = "https://swapi.dev/api/starships";
import axios from "axios";

// The main array we want is in the results key

export function getAllStarships() {
    return axios.get(BASE_URL).then((response) => {
        console.log(response.data.results);
        return response.data.results;
    });
}