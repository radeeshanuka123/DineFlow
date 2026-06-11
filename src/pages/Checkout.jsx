function Checkout() {
  return (
    <div className="container">
      <h1 className="page-title">Checkout</h1>

      <div className="form-box">
        <input type="text" placeholder="Customer Name" />
        <input type="text" placeholder="Phone Number" />
        <textarea placeholder="Delivery Address"></textarea>
        <button>Place Order</button>
      </div>
    </div>
  );
}

export default Checkout;