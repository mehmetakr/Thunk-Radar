import { useEffect, useState } from "react";
import Header from "./components/Header";
import Listview from "./pages/Listview";
import Mapview from "./pages/Mapview";
import { useDispatch } from "react-redux";
import { getflights } from "./redux/actions/flightactions";

function App() {
  const [ismapview, setismapview] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getflights());
  }, []);

  // Promise yapısı kodda async await veya try catch bloğu kullanmazsak gelebilicek durumlardan birisidir.

  /* async await apiden veri gelene kadar bekletme  işlemıni gerçekleştirir. */

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

      {/* hangi bileşenin ekrana geleceğini belirleme */}

      {ismapview ? <Mapview /> : <Listview />}
    </>
  );
}

export default App;
