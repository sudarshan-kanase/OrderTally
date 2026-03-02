import { useState, useEffect } from "react";
import OfficeSelect from "./components/OfficeSelect";
import Menu from "./components/Menu";
import Summary from "./components/Summary";

const defaultMenu = [
  { name: "Cutting Chai", price: 12, qty: 0 },
  { name: "Medium Chai", price: 20, qty: 0 },
  { name: "Full Chai", price: 25, qty: 0 },
  { name: "Half Coffee", price: 15, qty: 0 },
  { name: "Coffee", price: 25, qty: 0 },
];

function App() {

  const [office, setOffice] = useState("capri");
  const [menu, setMenu] = useState(defaultMenu);

  useEffect(() => {
    const data = localStorage.getItem("chai_" + office);

    if (data) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMenu(JSON.parse(data));
    } else {
      setMenu(defaultMenu.map(i => ({ ...i })));
    }
  }, [office]);

  useEffect(() => {
    localStorage.setItem(
      "chai_" + office,
      JSON.stringify(menu)
    );
  }, [menu, office]);

  return (
    <div
      className="container py-3 text-white"
      style={{
        maxWidth: "450px",
        paddingBottom: "130px"
      }}
    >

      <h2 className="text-center fw-bold mb-3">
        अभिनंदन कडक स्पेशल चहा <br />
        ☕ Chai Counter
      </h2>

      <OfficeSelect office={office} setOffice={setOffice}/>
      <Menu menu={menu} setMenu={setMenu}/>
      <Summary menu={menu}/>

    </div>
  );
}

export default App;