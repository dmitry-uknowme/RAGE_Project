console.log('C_events.js connected')
const player = mp.players.local
const browser = mp.browsers.new('package://ui/main_menu/index.html')
let vehicle = mp.players.local.vehicle


mp.gui.cursor.show(false, false)
mp.keys.bind(0x74, true, function() {
    mp.events.callRemote('keypress:F5'); 
    mp.gui.chat.push('F5 key is pressed.');
    mp.events.callRemote('flyOn')
});

mp.keys.bind(0x08, true, function() {
    mp.events.callRemote('keypress:BACK'); 
    if (browser!=null) {
    	browser.destroy()
    }
    mp.gui.cursor.show(false, false)
});

       

mp.events.add('setGM', () =>  {
	player.setInvincible(true)
})


mp.events.add('setStartMoney', (money) => {
	// console.log(player.money)
	// mp.game.stats.statSetInt(mp.game.joaat('SP0_TOTAL_CASH'), 1000, true);	
	// console.log(player.money)
	mp.gui.chat.push(`У вас на счету ${money}`)
	return money
})

mp.events.add('seatInCar'), (veh) => {
	console.log('сесть в машину')
	player.setIntoVehicle(veh, 1);
}

mp.events.add('showMenu', (money) => {	
	browser.execute(`showMenu()`)
	mp.gui.cursor.show(true, true)
	mp.gui.cursor.visible=true;
	browser.execute(`
		let i = 0
		let profile = document.querySelector('#profile')
		let profileInfo = ["Имя: ${mp.players.local.name}", "Уровень: ${mp.players.local.id}", "Деньги: ${money}"]
		profile.addEventListener('click', () => {
			for (let rightMenuLink of rightMenuLinks) {
				rightMenuLink.innerHTML = profileInfo[i]
				i++		
			}
		})
	`);

})

mp.events.add('hideMenu', () => {
	browser.execute(`hideMenu()`)
	mp.gui.cursor.show(false, false)
})
	
mp.events.add('browserOpened', () => {
	if (browser!=null) {
		mp.gui.chat.push('Браузер открыт')
	} 
	else return fals
})

// mp.events.add('getSpeed', () => {
// 	mp.gui.chat.push(vehicle.getAcceleration())
// })
// let sceneryCamera = mp.cameras.new('default', new mp.Vector3(player.position.x+=1, player.position.y+=1, player.position.z=+1), new mp.Vector3(0,0,0), 40);

// sceneryCamera.pointAtCoord(player.position.x+=1, player.position.y+=1, player.position.z=+1); //Changes the rotation of the camera to point towards a location
// sceneryCamera.setActive(true);
// mp.game.cam.renderScriptCams(true, false, 0, true, false);