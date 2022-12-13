const burgerBtn = document.querySelector('.nav__bar-burger-btn')
const navBox = document.querySelector('.nav__link-box')
const navLink = document.querySelectorAll('.nav__link-box-link')
const nav = document.querySelector('.nav')

const facesImgs = document.querySelectorAll('.faces50__img-box-img')
let numArr = []

const wheel = document.querySelector('.tribute__box-wheel')
const spinBtn = document.querySelector('.tribute__box-spin-btn')
const finalValue = document.querySelector('.tribute__final-value')
const tributeAudio = document.querySelector('.tribute__audio')


let deg = 1
let rounds = 5

const handleInterval = () => {
	tributeAudio.play()
	const randomDegree = Math.floor(Math.random() * 360)
	// console.log(randomDegree)
	const spinInterval = setInterval(() => {
		finalValue.textContent = 'Wyruszyła maszyna losująca'
		wheel.style.transform = `rotate(${deg}deg)`
		deg++
		if (deg >= 360) {
			deg = 1
			rounds--
		}
		// console.log(rounds)
		spinBtn.disabled = true
		if (rounds === 1 && deg === randomDegree) {
			clearInterval(spinInterval)
			rounds = 5
			spinBtn.disabled = false

			let topping

			if(randomDegree > 1 && randomDegree < 45) {
				topping='z salami'	
			} else if (randomDegree > 45 && randomDegree < 90) {
				topping='z pepperoni'
			} else if (randomDegree > 90 && randomDegree < 135) {
				topping='z pieczarkami'
			} else if (randomDegree > 135 && randomDegree < 180) {
				topping='margheritę'
			} else if (randomDegree > 180 && randomDegree < 225) {
				topping='z serami'
			} else if (randomDegree > 225 && randomDegree < 270) {
				topping='z ananasem'
			} else if (randomDegree > 270 && randomDegree < 315) {
				topping = `z brokułem`
			} else if (randomDegree > 315 && randomDegree < 360) {
				topping = 'z cebulą'
			}
			
			finalValue.textContent=`Musisz podarować Paniczowi pizzę ${topping}`
		}
	}, 1)
}

const handleSlider = () => {
	
}


function generateUniqueRandom(maxNr) {
	//Generate random number
	let random = Math.floor(Math.random() * maxNr)
	
	//Coerce to number by boxing
	random = Number(random)
	if (!numArr.includes(random)) {
		numArr.push(random)
		return random
	} else {
		if (numArr.length < maxNr) {
			//Recursively generate number
			return generateUniqueRandom(maxNr)
		} else {
			console.log('No more numbers available.')
			return false
		}
	}
}



// const randomImg = () => {
	
	// }
	
	facesImgs.forEach(img => {
		const random = generateUniqueRandom(20)
		
		img.style.backgroundImage = `url('dist/img/${random}.jpg')`
	})
	
	const openNav = () => {
		window.scrollTo(0, 0)
		navBox.classList.toggle('active-link-box')
	nav.classList.toggle('active-nav')
}

burgerBtn.addEventListener('click', openNav)
navLink.forEach(link =>
	link.addEventListener('click', () => {
		nav.classList.remove('active-nav')
		
		navBox.classList.remove('active-link-box')
	})
	)
	
	spinBtn.addEventListener('click', handleInterval)