import React from "react";
import { useSelector } from "react-redux"; 
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import ReactPaginate from "react-paginate";
const Listview = ({openmodal}) => {
  const state = useSelector((store) => store);

  // Gösterilicek ilk elemanı hesaplar.. 
  const [itemOffset, setItemOffset] = useState(0);

   // sayfa başına gösterilicek eleman sayısı 
   const itemsPerPage= 10;


   // gösterilicek son elemanı hesaplar 
  const endOffset = itemOffset + itemsPerPage;

  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  // elimizdeki aralığa göre verileri kesiyoruz.
  const currentItems =state.  flights.flight?.slice(itemOffset, endOffset);

  // toplam sayfa sayısını hesapla
  const pageCount = Math.ceil(state.flights.flight?.length / itemsPerPage);

  //Her sayfa değiştiğinde çalışır..
  const handlePageClick = (event) => {

    // gösterilicek ilk elemanı belirler
    const newOffset = (event.selected * itemsPerPage)
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
     // state i günceller
    setItemOffset(newOffset);
  };


  return (
    <div className="p-4">
      <table className="table table-dark table-hover mt-5">
        <thead>
          <tr>
            <th>İD</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>Bilgi</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((i) => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.code}</td>
              <td>{i.lat}</td>
              <td>{i.lng}</td>

              <td>
                <button onClick={() => openmodal(i.id)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        breakLabel="..."
        nextLabel="İleri >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Geri"
        className="pagination"
      />



    </div>
  );
};

export default Listview;
