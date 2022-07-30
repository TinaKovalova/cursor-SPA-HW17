import {CHARACTERS_IMAGES_URL} from '../src/constants';
import avatar from '../src/assets/darth-vader.png'


export default class Service {
    _BASE_URL = CHARACTERS_IMAGES_URL;

    getData = async (url = this._BASE_URL) => {
        const request = await fetch(url);
        if (!request.ok) {
            throw  new Error(`Couldn't not fetch ${url}, status: ${request.status}`);
        }
        const response = await request.json()
        return this._changeBrokeImages(response);
    }

    _changeBrokeImages(data) {
        const request = data.map(character => new Promise((resolve) =>
            fetch(character.image)
                .then(res => {
                    if (res.status == 404) {
                        character.image = avatar;
                    }
                    resolve(character)
                })));
        return Promise.all(request).then(resp => resp);
    }

}