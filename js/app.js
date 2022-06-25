//Import selectors
import * as UI from './interface.js';
import API from './api.js'

//Register events
UI.formSearch.addEventListener('submit', searchSong);

//Register functions
function searchSong(e) {
    e.preventDefault();
    const artist = document.querySelector('#artist').value;
    const song = document.querySelector('#song').value;
    if(artist === '' || song === '') {
       UI.alert.textContent = 'Completa todos lo campos'
       UI.alert.classList.add('error') 
       setTimeout(() => {
           UI.alert.textContent= ''
           UI.alert.classList.remove('error')
       }, 2000)
       return;
    }
    UI.container.classList.add('opacity')
    UI.load.classList.remove('none')
    const searchApi = new API(artist, song);
    searchApi.consultApi()
}