import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((store) => store);

  console.log(state)
  return (
    <header>
      <div>
<img src="\src\components\plane-l.png" />
<h3>Uçuş Radari</h3>
</div>
      <p>
        {state.isloading
          ? "Uçuşlar hesaplanıyor"
          : state.iserror
          ? "Üzgünüz, bir hata oluştu"
          : state.flights.flight.length + " Uçuş Bulundu"}
      </p>
    </header>
  );
};

export default Header;



/* 
 */