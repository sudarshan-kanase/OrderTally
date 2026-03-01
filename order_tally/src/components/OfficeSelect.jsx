function OfficeSelect({ office, setOffice }) {
  return (
    <select
      className="form-select mb-3"
      value={office}
      onChange={(e) => setOffice(e.target.value)}
    >
      <option value="capri">Capri</option>
      <option value="ppfs">PPFS</option>
      <option value="office18_19">18 / 19</option>
      <option value="office10">10</option>
      <option value="bhandari">Bhandari</option>
      <option value="bank">Bank</option>
      <option value="envision">Envision</option>
    </select>
  );
}

export default OfficeSelect;