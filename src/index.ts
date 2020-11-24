import './styles/style.scss';

const counterElement = document.querySelector('span')
const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.fillStyle = '#424242'
ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2)
ctx.fill()


console.log(JSON.parse(localStorage.getItem('cerne.counter')))
let counter = JSON.parse(localStorage.getItem('cerne.counter'))
const updateCounter = () => {
	localStorage.setItem('cerne.counter', JSON.stringify(counter))
	counterElement.innerText = counter + ''
}
updateCounter()

document.addEventListener('click', e => {
	if (e.clientX >= (canvas.width / 2) - 110 && e.clientX <= (canvas.width / 2) + 110) {
		if (e.clientY >= (canvas.height / 2) - 110 && e.clientY <= (canvas.height / 2) + 110) {
			counter++
			updateCounter()
		}
	}
})
