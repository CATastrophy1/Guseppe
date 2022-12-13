//NAV
const burgerBtn = document.querySelector('.nav__bar-burger-btn')
const navBox = document.querySelector('.nav__link-box')
const navLink = document.querySelectorAll('.nav__link-box-link')
const nav = document.querySelector('.nav')
const navBar = document.querySelector('.nav__bar')

//50faces
const facesImgs = document.querySelectorAll('.faces50__img-box-img')
let numArr = []
//WHEEL
const wheel = document.querySelector('.tribute__box-wheel')
const spinBtn = document.querySelector('.tribute__box-spin-btn')
const finalValue = document.querySelector('.tribute__final-value')
const tributeAudio = document.querySelector('.tribute__audio')

//OPINIONS 
const cards = document.querySelectorAll('.guseppism__cards-card')
const btns = document.querySelectorAll('.guseppism__cards-btn')
const btn1 = document.querySelector('.guseppism__cards-btn--1')
const btn2 = document.querySelector('.guseppism__cards-btn--2')
const btn3 = document.querySelector('.guseppism__cards-btn--3')


//WHEEL

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

			if (randomDegree > 1 && randomDegree < 45) {
				topping = 'z salami'
			} else if (randomDegree > 45 && randomDegree < 90) {
				topping = 'z pepperoni'
			} else if (randomDegree > 90 && randomDegree < 135) {
				topping = 'z pieczarkami'
			} else if (randomDegree > 135 && randomDegree < 180) {
				topping = 'margheritę'
			} else if (randomDegree > 180 && randomDegree < 225) {
				topping = 'z serami'
			} else if (randomDegree > 225 && randomDegree < 270) {
				topping = 'z ananasem'
			} else if (randomDegree > 270 && randomDegree < 315) {
				topping = `z brokułem`
			} else if (randomDegree > 315 && randomDegree < 360) {
				topping = 'z cebulą'
			}

			finalValue.textContent = `Musisz podarować Paniczowi pizzę ${topping}`
		}
	}, 1)
}
//OPINIONS



const slideRight = () => {
	if(cards[0].classList.contains('active-card')) {
		btns.forEach(btn => btn.style.background='#ddd')
	btn2.style.background='#000'
		cards[0].classList.remove('active-card')
		cards[1].classList.add('active-card')
	} else if (cards[1].classList.contains('active-card')) {
		btns.forEach(btn => btn.style.background='#ddd')
	btn3.style.background='#000'
		cards[1].classList.remove('active-card')
		cards[2].classList.add('active-card')
	} else {
		btns.forEach(btn => btn.style.background='#ddd')
	btn1.style.background='#000'
		cards[2].classList.remove('active-card')
		cards[0].classList.add('active-card')
	}
}
const intervalFunction = () => {
	
	const sliderInterval = setInterval(slideRight,5000)
}

const handleDotsBtns = (e) => {
	btns.forEach(btn => btn.style.background='#ddd')
	e.target.style.background='#000'
	cards.forEach(card => {
				card.classList.remove('active-card')
			})
	if(e.target===btn1) {	cards[0].classList.add('active-card')

	} else if (e.target===btn2) {cards[1].classList.add('active-card')

	} else if (e.target===btn3) {
		cards[2].classList.add('active-card')
	}
}


//50FACES
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

facesImgs.forEach(img => {
	const random = generateUniqueRandom(20)

	img.style.backgroundImage = `url('dist/img/${random}.jpg')`
})


//NAV
const openNav = () => {
	navBox.classList.toggle('active-link-box')
	nav.classList.toggle('active-nav')
}
function addShadow () {
	if (window.scrollY >= 500) {
	navBar.style.backgroundColor= 'rgba(0,0,0,.4)'
	} else {navBar.style.background = 'none'}

}

burgerBtn.addEventListener('click', openNav)
navLink.forEach(link =>
	link.addEventListener('click', () => {
		nav.classList.remove('active-nav')

		navBox.classList.remove('active-link-box')
	})
)
//WHEEL
spinBtn.addEventListener('click', handleInterval)
//OPINIONS

btns.forEach(btn => btn.addEventListener('click', handleDotsBtns))
intervalFunction()
window.addEventListener('scroll', addShadow)