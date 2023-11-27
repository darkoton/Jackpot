const currency = [
  {
    title: "BNB",
    img: "./img/main/binance.png",
    price: 229,

  },
  {
    title: "Tether",
    img: "./img/main/tether.png",
    price: 1
  },
  {
    title: "Ethereum",
    img: "./img/main/ethereum.png",
    price: 2052
  },
  {
    title: "Tron",
    img: "./img/main/tron.png",
    price: 0.11
  },
  {
    title: "GMZ",
    img: "./img/main/gmz-token.png",
    price: 7.3
  },

]

const list = document.querySelector(".main__select-list")

currency.forEach(el => {
  list.innerHTML += `<li onclick="select('${el.title}')" class="main__select-option flex items-center gap-x-2 py-2 px-4 cursor-pointer">
  <img src="${el.img}" alt="">
  <span>${el.title}</span>
</li>`
})

window.addEventListener("click", event => {
  if (!(event.target.classList.contains("main__select")
    || event.target.offsetParent.classList.contains("main__select"))) {
    list.classList.remove("active")
  }
})

let selectValue = currency[0]
function select(value) {
  selectValue = currency[currency.findIndex(el => el.title == value)]
  document.querySelector(".main__select-value-main").innerHTML = `
    <span class="main__select-img">
    <img src="${selectValue.img}" alt="" class="w-full">
  </span>
  <p class="main__select-text text-lg">${selectValue.title}</p>`

  calculator()
}

function calculator(reverse = false) {
  if (reverse) {

    const value = document.querySelectorAll(".main__form-input")[1].value
    const money = 7.3 * value
    const result = money / selectValue.price

    document.querySelectorAll(".main__form-input")[0].value = result;


    return
  }

  const value = document.querySelectorAll(".main__form-input")[0].value
  const money = selectValue.price * value
  const result = money / 7.3

  document.querySelectorAll(".main__form-input")[1].value = result;
}