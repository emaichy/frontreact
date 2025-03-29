const BASE_URL = "http://18.220.73.186/"

export async function getAllUsers(params) {
    const response = await fetch(BASE_URL+'users/')
    return response.json();   
}