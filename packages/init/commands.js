let spawnPoints = require('./spawn_points.json').SpawnPoints;

console.log('S_commands.js connected')
mp.events.addCommand('c', (player, _, veh) => {
	let cVeh = player.getVariable('adminVeh' + player.id)
	// if (cVeh != null) 
	// {
	// 	cVeh.destroy()
	// }

	let adminVeh = mp.vehicles.new(mp.joaat(veh), player.position,
	{
		color : [[125, 125, 125],[125, 125, 125]],
		numberPlate: 'DIMAN',
		locked : false
	})
	player.setVariable('adminVeh' + player.id, adminVeh)
	player.putIntoVehicle(adminVeh, -1);
	// console.log(veh)
	// veh = mp.vehicles.new(mp.joaat(veh), player.position,
	// {
	//     numberPlate: 'DIMAN',
	//     alpha: '50',
	//     locked: true,
	//     engine: false,
	// })
	// player.setVariable('veh'+player.id)
	// console.log(player.getVariable('veh'+player.id))
	// player.putIntoVehicle(veh, -1);
	// // if (veh == undefined) return player.outputChatBox('/c [carname]')

});

mp.events.addCommand('s', (player) => {
    player.spawn(spawnPoints[Math.floor(Math.random() * spawnPoints.length)]);
    player.health = 100;
});

mp.events.addCommand('pos', player => {
	console.log(player.position.x.toFixed(1), ',', player.position.y.toFixed(1), ',', player.position.z.toFixed(1))
})



 