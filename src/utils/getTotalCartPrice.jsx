export const getTotalCartPrice = cart => {
[
 { title: "algo", price: 20},
 { title: "another", price:40},
]

/*let accum = 0
cart.forEach(i=> {
    accum = accum + i.price
}) */

/*let accum = 0
cart.reduce ((accum, curr)=> accum + curr.price, 0) */

const totalPrice = cart.reduce((accum, curr) => accum + curr.price, 0);
return totalPrice.toFixed(2);
};
