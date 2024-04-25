import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Listview from "./pages/Listview";
import Mapview from "./pages/Mapview";
import { useDispatch } from "react-redux";
import { getflights } from "./redux/actions/flightactions";
import Modal from "./components/Modal"; // Boşluk düzeltilmiş

function App() {
  const [ismapview, setismapview] = useState(true);
  const [ucak, setucak] = useState(null); // uçak ismini düzeltildi
  const [open, setisopen] = useState(false); // Başlangıç değeri false olarak belirtildi

  const dispatch = useDispatch();

  const openmodal = (id) => {
    setucak(id);
    setisopen(true);
  };

  const closemodal = () => {
    setisopen(false);
    setucak(null);
  };

  useEffect(() => {
    dispatch(getflights());
  }, [dispatch]); // useEffect içinde dispatch bağımlılığı eklendi

  return (
    <>
      <Header />

      <div className="view-button">
        <button
          className={ismapview ? "active" : ""}
          onClick={() => setismapview(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={!ismapview ? "active" : ""}
          onClick={() => setismapview(false)}
        >
          Liste Görünümü
        </button>
      </div>

      {ismapview ? <Mapview openmodal={openmodal} /> : <Listview openmodal={openmodal} />}

      {open && <Modal ucak={ucak} closemodal={closemodal} />}
    </>
  );
}

export default App;
