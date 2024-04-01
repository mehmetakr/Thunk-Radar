import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((store) => store);
console.log(state)
  console.log(state.flight +"dsgfdhgj");
  return (
    <header>
      <div>
        <img src="\src\components\plane-l.png" />
        <h3>Uçuş Radari</h3>
      </div>

      <p>
        {state.isloading
          ? "Uçuslar hesalanyor"
          : state.iserror
          ? "Üzgünüz Bir hata oluştu"
          : state.flight.length + "Uçuş Bulundu"}
      </p>
    </header>
  );
};
export default Header;
