import { useState } from "react";

function ListGroup() {
  let kota = ["Jakarta", "Bandung", "Semarang", "Yogyakarta", "Surabaya"];
  const [SelIndex, SetIndex] = useState(-1);

  return (
    <>
      <h1> Pilih Kota:</h1>
      {/* conditional untuk render, jadi jika kota kosong maka render 'Tidak Ada
      Item'. Kalau tidak kosng render dibawahnya */}
      {kota.length == 0 && <p>Tidak Ada Item</p>}
      <ul className="list-group">
        {kota.map((city, index) => (
          <li
            className={
              SelIndex === index ? "list-group-item active" : "list-group-item"
            }
            key={city}
            onClick={() => SetIndex(index)}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
