require('./index.scss')
import Logo from './logo.png'
import Happy from './happy.jpg'

let dom = document.getElementById('app')
let img1 = new Image()
let img2 = new Image()
img1.src = Happy
img2.src = Logo
dom.append(img1,img2)
console.log('hello webpack!')