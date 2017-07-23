import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

// Only exposed this method
export function getUsers(){
    return get('users');
}

export function deleteUser(id){
    return del(`users/${id}`);
}

function del(url){
    const request = new Request(baseUrl+url,{
        method:'DELETE'
    });

    return fetch(request).then(onSucess,onError);
}

function get(url){
    return fetch(baseUrl+url).then(onSucess,onError);
}

function onSucess(response){
    return response.json();
}

function onError(error){
    console.log(error); //eslint-disable-line no-console
}