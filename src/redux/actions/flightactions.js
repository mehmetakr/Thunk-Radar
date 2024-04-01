import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../../constant";

export const getflights = createAsyncThunk(
  "flight/getflights",

  async () => {
    const res = await axios.request(options);
    console.log(res, "fgfsfds");
    // gelen veriyi formatla
    const veri = res.data.aircraft.map((i) => ({
      id: i[0],
      code: i[1],
      lat: i[2],
      lng: i[3],
    }));

    // formatlanan veriyi  paylaod olarak belirle (slice'a aktar)..

    return veri;
  }
);
