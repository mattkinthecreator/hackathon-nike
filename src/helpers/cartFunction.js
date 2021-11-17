export function getCountProductsInCart() {
  const cart = JSON.parse(localStorage.getItem('cart'))
  return cart ? cart.shoes.length : 0
}

export function calcSubPrice(shoes) {
  return shoes.count * shoes.item.price
}

export function calcTotalPrice(shoes) {
  let totalPrice = 0
  shoes.forEach((item) => {
    totalPrice += item.subPrice
  })
  return totalPrice
}

export function checkProductInCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart'))
  if (!cart) {
    cart = {
      products: [],
      totalPrice: 0,
    }
  }
  let newCart = cart.shoes.filter((elem) => elem.item.id === id)
  return newCart.length > 0 ? true : false
}
