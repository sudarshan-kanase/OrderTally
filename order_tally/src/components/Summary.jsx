function Summary({ menu }) {

  const total = menu.reduce(
    (sum,item)=> sum + item.price * item.qty,
    0
  );

  const count = menu.reduce(
    (sum,item)=> sum + item.qty,
    0
  );

  return (
    <div className="fixed-bottom d-flex justify-content-center">

      <div
        className="w-100 text-white"
        style={{
          maxWidth:"450px",
          background:"rgba(0,0,0,0.9)",
          backdropFilter:"blur(10px)",
          borderTopLeftRadius:"15px",
          borderTopRightRadius:"15px"
        }}
      >
        <div className="d-flex justify-content-between p-4">

          <div>
            <small>Items</small>
            <h5>{count}</h5>
          </div>

          <div className="text-end">
            <small>Total</small>
            <h4>₹ {total}</h4>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Summary;