import axios from "axios";
import { useEffect, useState } from "react";
import { options2 } from "../constant";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { settrail } from "../slices/flightslices";
import { divIcon } from "leaflet";
import moment from "moment/moment";
import "moment/locale/tr";
const Modal = ({ ucak, closemodal }) => {
  const [d, setdata] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    // Useeffect her çalıştığında önceki uçuşun verileri silinecek ve yeni veriler gelecek
    // Bu fonksiyon her çalıştığında setdata null olarak güncellenecek ve loader ekranı çalışacak
    setdata(null); // Her çalışmada verileri sıfırla
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${ucak}`,
        options2
      )
      .then((res) => {
        dispatch(settrail(res.data.trail)); // Redux'a veriyi gönder
        setdata(res.data); // Veriyi state'e kaydet
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Hata durumunda konsola yaz
      });
  }, [ucak]); // ucak veya dispatch değiştiğinde useEffect'i çalıştır

  const formatDate = (unix_time) => {
    const date = new Date(unix_time * 1000).toUTCString();
    return moment(date).calendar();
  };

  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <p className="close-area">
          <span onClick={closemodal}>X</span>
        </p>
        {!d ? (
          <Loader />
        ) : !d.airport.origin || !d.airport.destination ? (
          <div>
            <p>{d.airline.name}</p>
            <br />
            <p>
              Bu uçuşun bilgileri gizlidir. Muhtemelen bir savaş uçağı veya bir
              hayalet uçaktır.
            </p>
          </div>
        ) : (
          <>
            <h2>{d.aircraft.model.text}</h2>
            <h2>{d.aircraft.model.code}</h2>
            <p>{d.aircraft.registrations}</p>

            <img src={d.aircraft.images.large[1].src} />

            <p>
              <span>Şirket : </span>
              <span>{d.airline.name}</span>
            </p>

            <p>
              <span>Kalkış : </span>
              <span>{d.airport.origin.name}</span>
            </p>

            <p>
              <span>Kalkış saati : </span>
              <span>{formatDate(d.time.scheduled.departure)}</span>
            </p>

            <p>
              <span>İniş : </span>
              <span>{d.airport.destination.name}</span>
            </p>

            <p>
              <span>İniş Saati : </span>
              <span>{formatDate(d.time.scheduled.arrival)}</span>
            </p>

            <p className={d.status.icon}>
              <span>{d.status.text}</span>
            </p>
          </>
        )}
      </div>
      Modal
    </div>
  );
};

export default Modal;
