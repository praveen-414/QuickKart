import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";
import Button from "../components/Button";

const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  // Calculate total
  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const tax = subTotal * 0.1;
  const total = subTotal + tax;

  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    if (paymentData.cardName === "") {
      newErrors.cardName = "Card holder name is required";
    }

    if (paymentData.cardNumber === "") {
      newErrors.cardNumber = "Card number is required";
    } else if (!/^\d{16}$/.test(paymentData.cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    if (paymentData.expiry === "") {
      newErrors.expiry = "Expiry date is required";
    }

    if (paymentData.cvv === "") {
      newErrors.cvv = "CVV is required";
    } else if (!/^\d{3}$/.test(paymentData.cvv)) {
      newErrors.cvv = "CVV must be 3 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Get previous orders
      const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];

      // Save current cart as orders
      localStorage.setItem(
        "orders",
        JSON.stringify([...oldOrders, ...cartItems])
      );

      // Clear cart
      dispatch(clearCart());

      // Go to success page
      navigate("/orderSuccess");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Payment Details</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2">Card Holder Name</label>
            <input
              type="text"
              name="cardName"
              value={paymentData.cardName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full border rounded-lg px-4 py-3"
            />
            <p className="text-red-500 text-sm">{errors.cardName}</p>
          </div>

          <div>
            <label className="block mb-2">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handleChange}
              placeholder="1234123412341234"
              className="w-full border rounded-lg px-4 py-3"
            />
            <p className="text-red-500 text-sm">{errors.cardNumber}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Expiry Date</label>
              <input
                type="month"
                name="expiry"
                value={paymentData.expiry}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              />
              <p className="text-red-500 text-sm">{errors.expiry}</p>
            </div>

            <div>
              <label className="block mb-2">CVV</label>
              <input
                type="password"
                name="cvv"
                value={paymentData.cvv}
                onChange={handleChange}
                placeholder="123"
                maxLength={3}
                className="w-full border rounded-lg px-4 py-3"
              />
              <p className="text-red-500 text-sm">{errors.cvv}</p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Order Summary</h3>

            <div className="flex justify-between">
              <span>Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Button text="Pay Now" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Payment;