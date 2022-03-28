function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );
  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  
}

// / / / / / / / / / / / / Cupones de descuento / / / / / / / / / / / /

function onClickButtonPriceDiscountCoupon (){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const inputCoupon = document.getElementById("InputCupon");
    const couponValue = inputCoupon.value;

    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      discountValue
    );

    const isCouponValueValid = function (coupon) {
      return coupon.name === couponValue;
    };
    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
      alert("El cupon " + userCoupon + " no es valido");
    } else {
      const descuento = userCoupon.discount;
      const precioDescuento = calcularPrecioConDescuento(
        precioConDescuento,
        descuento
      );

      const resultP = document.getElementById("ResultCoupon");
      resultP.innerText = "El precio con descuento son: $ " + precioDescuento;
    }
}
const coupons = [
  {
    name: "fito-es-batman",
    discount: 15,
  },
  {
    name: "pero-no-le-digas-a-nadie",
    discount: 30,
  },
  {
    name: "es-un-secreto",
    discount: 25,
  },
];


