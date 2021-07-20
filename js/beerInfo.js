let water = document.querySelector('#water')
let barley = document.querySelector('#barley')
let hops = document.querySelector('#hops')
let yeast = document.querySelector('#yeast')
let clickWater = document.querySelector('.miniIconBoxWater')
let clickBarley = document.querySelector('.miniIconBoxBarley')
let clickHops = document.querySelector('.miniIconBoxHop')
let clickYeast = document.querySelector('.miniIconBoxYeast')
const backButtons =document.querySelectorAll('.btn')

function waterInfo() {
  water.classList.remove('hidden');
}

function barleyInfo() {
  barley.classList.remove('hidden');
}

function hopsInfo() {
  hops.classList.remove('hidden');
}

function yeastInfo() {
  yeast.classList.remove('hidden');
}

function backBtn() {
  water.classList.add('hidden');
  barley.classList.add('hidden');
  hops.classList.add('hidden');
  yeast.classList.add('hidden');
}

clickWater.addEventListener("click", waterInfo, false)
clickBarley.addEventListener("click", barleyInfo, false)
clickHops.addEventListener("click", hopsInfo, false)
clickYeast.addEventListener("click", yeastInfo, false)
for (let btn of backButtons) {
  btn.addEventListener("click", backBtn, false)
}
