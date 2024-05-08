export const getDerivedCart = (cart) => {
    const derivedCart = [];
    //iterate over each item in cart
    cart.forEach((item) => {
      const existingItem = derivedCart.find((dItem) => dItem.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += item.price;
      } else {
        derivedCart.push({
          id: item.id,
          name: item.title,
          quantity: 1,
          totalPrice: item.price,
        });
      }
    });
    return derivedCart;
  };