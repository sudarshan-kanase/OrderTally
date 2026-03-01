function Summary({ menu }) {

  const total = menu.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const count = menu.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <div
      className="position-fixed bottom-0 inset-s-0 w-100 bg-dark text-white shadow-lg"
      style={{ maxWidth: "450px", margin: "auto", right: 0 }}
    >
      <div className="d-flex justify-content-between align-items-center p-3">

        <div>
          <small>Total Items</small>
          <h5 className="mb-0">{count}</h5>
        </div>

        <div className="text-end">
          <small>Total Bill</small>
          <h4 className="mb-0">₹ {total}</h4>
        </div>

      </div>
    </div>
  );
}

export default Summary;