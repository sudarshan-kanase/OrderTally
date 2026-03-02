function Summary({ menu }) {

  const total = menu.reduce(
    (sum,item)=> sum + item.price*item.qty,
    0
  );

  const count = menu.reduce(
    (sum,item)=> sum + item.qty,
    0
  );

  return (
    <div
      className="position-fixed bottom-0 w-100 text-white"
      style={{
        maxWidth:"450px",
        margin:"auto",
        right:0,
        background:"rgba(0,0,0,0.85)",
        backdropFilter:"blur(10px)"
      }}
    >
      <div className="d-flex justify-content-between p-3">

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
  );
}

export default Summary;