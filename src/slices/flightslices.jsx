import { createSlice } from "@reduxjs/toolkit";
import { getflights } from "../redux/actions/flightactions";

const initialState = {
  isloading: false,
  iserror: false,
  flight: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getflights.pending, (state) => {
      state.isloading = true;
      state.iserror = false; // Yeni bir talep yapıldığında hata durumunu sıfırla
    });
    builder.addCase(getflights.fulfilled, (state, action) => {
      state.isloading = false;
      state.iserror = false;
      state.flight = action.payload;
    });
    builder.addCase(getflights.rejected, (state, action) => {
      state.isloading = false;
      state.iserror = true; // Hata durumunu güncelle
      state.flight = []; // Hata durumunda flight dizisini boşalt
    });
  },
});

export default flightSlice.reducer;
