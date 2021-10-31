import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const player = new Player('vimeo-player', {
    id: 236203659,
    width: 640
});

function onCurrentTime(event) {
    localStorage.setItem('videoplayer-current-time', `${event.seconds}`)
};

player.on('timeupdate', throttle(onCurrentTime, 500));

const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime);