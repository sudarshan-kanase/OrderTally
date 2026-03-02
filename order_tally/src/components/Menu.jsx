function Menu({ menu, setMenu }) {

  const updateQty = (index, type) => {
    const newMenu = [...menu];

    if (type === "add") newMenu[index].qty += 1;
    else if (newMenu[index].qty > 0)
      newMenu[index].qty -= 1;

    setMenu(newMenu);
  };

  return (
    <div className="mt-3">

      {menu.map((item,i)=>(
        <div
          key={i}
          className="mb-3 p-3"
          style={{
            borderRadius:"18px",
            background:"rgba(255,255,255,0.12)",
            backdropFilter:"blur(10px)"
          }}
        >

          <div className="d-flex justify-content-between align-items-center">

            <div>
              <h5 className="fw-bold">{item.name}</h5>
              <small>₹ {item.price}</small>
            </div>

            <div className="d-flex align-items-center">

              <button
                className="btn btn-danger btn-lg rounded-circle"
                onClick={()=>updateQty(i,"minus")}
              >
                -
              </button>

              <span className="mx-3 fs-3 fw-bold">
                {item.qty}
              </span>

              <button
                className="btn btn-success btn-lg rounded-circle"
                onClick={()=>updateQty(i,"add")}
              >
                +
              </button>

            </div>

          </div>

        </div>
      ))}

    </div>
  );
}

export default Menu;