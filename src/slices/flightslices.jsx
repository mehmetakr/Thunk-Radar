import { createSlice } from "@reduxjs/toolkit";
import { getflights } from "../redux/actions/flightactions";

const initialState = {
  isloading: false,
  iserror: false,
  flight: [],
  trail: [],
};

// pending  fulfilled rejected gibi durumlarını izlememize yarayan method addcase metodudur.

const flightSlice = createSlice({
  name: "flight",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getflights.pending, (state) => {
      state.isloading = true;
    }); // başarılı oldugunda çalısır.
    builder.addCase(getflights.fulfilled, (state, action) => {
      state.isloading = false;
      state.iserror = false;
      state.flight = action.payload;
    });
    // hata durumunda çalışır..
    builder.addCase(getflights.rejected, (state) => {
      state.isloading = false;
      state.iserror = true; // Hata durumunu güncelle
      state.flight = []; // Hata durumunda flight dizisini boşalt
    });
  },

  reducers: {
    settrail: (state, action) => {
      action.payload.map((i) => [i.lat, i.lng]);
      state.trail = action.payload;
    },
  },
});

export const { settrail } = flightSlice.actions;

export default flightSlice.reducer;
