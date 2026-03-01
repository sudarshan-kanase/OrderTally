function Menu({ menu, setMenu }) {

  const updateQty = (index, type) => {
    const newMenu = [...menu];

    if (type === "add") {
      newMenu[index].qty += 1;
    } 
    else if (newMenu[index].qty > 0) {
      newMenu[index].qty -= 1;
    }

    setMenu(newMenu);
  };

  return (
    <div className="mt-3">

      {menu.map((item, i) => (
        <div key={i} className="card mb-3 shadow rounded-4">

          <div className="card-body">

            {/* Item Name */}
            <div className="d-flex justify-content-between align-items-center">

              <div>
                <h5 className="fw-bold mb-1">{item.name}</h5>
                <span className="text-muted">₹ {item.price}</span>
              </div>

              {/* Counter Buttons */}
              <div className="d-flex align-items-center">

                <button
                  className="btn btn-danger btn-lg px-3"
                  onClick={() => updateQty(i, "minus")}
                >
                  -
                </button>

                <span className="mx-3 fs-4 fw-bold">
                  {item.qty}
                </span>

                <button
                  className="btn btn-success btn-lg px-3"
                  onClick={() => updateQty(i, "add")}
                >
                  +
                </button>

              </div>

            </div>

          </div>
        </div>
      ))}

    </div>
  );
}

export default Menu;