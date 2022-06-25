//Import selectors 
import * as UI from './interface.js';

//Register Class
class API {
    constructor( artist, song ) {
        this.artist = artist.toUpperCase();
        this.song = song.toUpperCase();
    }
    async consultApi() {
        const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}` 
        try {
            const response = await fetch(url);  
            const result = await response.json( );
            UI.container.classList.remove('opacity')
            UI.load.classList.add('none')
            if ( result.lyrics) {
                const { lyrics } = result;
                UI.divResult.classList.remove('none')
                UI.resultOne.textContent = `LETRA ${this.song} DE ${this.artist}`
                UI.letterResult.textContent = lyrics
                UI.divResult.classList.add('bgResult')
                UI.formSearch.reset()
            } else{
                UI.alert.textContent = 'Canción no encontrada';
                UI.alert.classList.add('error')
                UI.divResult.classList.add('none')
                setTimeout(() => {
                    UI.alert.textContent = ``;
                    UI.alert.classList.remove('error')
                }, 2000) 
            }
        } catch (error) {
            setTimeout(() => {
                UI.container.classList.remove('opacity')
                UI.load.classList.add('none')
                UI.alert.textContent = 'Hubo un error, intenta de nuevo';
                UI.alert.classList.add('error')
                setTimeout(() => {
                    UI.alert.textContent = ``;
                    UI.alert.classList.remove('error')
                }, 2000)
           }, 500)
        }
    }
}
export default API;  //Export Class