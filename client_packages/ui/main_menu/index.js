let main = document.querySelector('.main_menu')
let rightMenuLinks = document.querySelectorAll('.right_menu_link')

function showMenu() {
	main.style.opacity = '1'
}

function hideMenu() {
	main.style.opacity = '0'
}

// let i = 0
// let profile = document.querySelector('#profile')
// let profileInfo = ['Dmitro', '1000$', '1' ]
// profile.addEventListener('click', () => {
// 	for (let rightMenuLink of rightMenuLinks) {
// 		rightMenuLink.innerHTML += profileInfo[i]
// 		i++		
// 	}
// })

// const rightMenu = document.querySelector('.right_menu')

// function setUser(player) {
// 	// rightMenu.innerHTML = player.name
// 	console.log(player.name, player.id)
// }





// mp.trigger('test')