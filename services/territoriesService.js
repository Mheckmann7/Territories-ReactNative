// local constant for holding the URL to our api
const BASE_URL = 'http://localhost:3001/api';


// named export of function for making AJAX request
export function fetchTerritoryData() {
    return fetch(BASE_URL + '/territory').then(res => res.json());
}