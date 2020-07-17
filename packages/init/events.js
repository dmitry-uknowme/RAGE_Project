console.log('S_events.js connect')

let spawnPoints = require('./spawn_points.json').SpawnPoints;
let money = 0
mp.events.add('playerReady', player => {
	money = 1000
	player.model = mp.joaat('player_zero');
	player.notify(`~g~Приветствуем игрока ${player.name} на сервере`)
	player.call('setStartMoney', [money])
})



mp.events.add('playerDeath', (player) => {
    player.spawn(spawnPoints[Math.floor(Math.random() * spawnPoints.length)]);
    player.health = 100;
});


mp.events.add('flyOn', player => {
	// console.log(player.position)
	player.alpha = 50
	player.position = new mp.Vector3(player.position.x+=200.10, player.position.y+=300.10, player.position.z)
	player.call('setGM');
	// console.log(player.position) 
});

let someColShape = mp.colshapes.newRectangle(-425.517, 1122.620, 324.8544, 2);
mp.events.add("playerEnterColshape", (player, shape) => {
	if(shape == someColShape) {
	    player.notify(`${player.name} entered the colshape`);
	    // player.alpha = 0
	    
	    player.call('showMenu', [money])
	    // console.log(player.name)
    // player.position = new mp.Vector3(1107.04, -3157.399, -37.51859);
  }
})

mp.events.add('playerExitColshape', (player, shape) => {
	if(shape == someColShape) {
		// player.alpha = 255
		player.call('hideMenu')		
	}

})

mp.markers.new(1,new mp.Vector3(-425.517, 1122.620, 324.8544),1,
{
    "color": [255, 255, 255, 255],
    "direction": 0,
    "dimension": 0,
    "visible": true
});

// mp.events.add('getPlayerInfo', () => {
// 	console.log(player.name)
// })
