import {CHARACTERS_IMAGES_URL} from '../src/constants';

export default class Service {
    _BASE_URL = CHARACTERS_IMAGES_URL;

    getData = async (url = this._BASE_URL) => {
        const request = await fetch(url);
        if (!request.ok) {
            throw  new Error(`Couldn't not fetch ${url}, status: ${request.status}`);
        }
        return await request.json();
    }
}