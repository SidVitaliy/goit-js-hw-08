import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    id: 236203659,
    width: 640
});
localStorage.setItem('videoplayer-current-time', time)

player.on('timeupdate', function (data) {
        // data is an object containing properties specific to that event
    });


