export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "33.607884",
    bl_lng: "26.641975",
    tr_lat: "46.771029",
    tr_lng: "60.861566",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "3f58f5b61fmsha0a515a463db151p1a91dbjsn478903c297ea",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const options2 = {
  headers: {
    "X-RapidAPI-Key": "3f58f5b61fmsha0a515a463db151p1a91dbjsn478903c297ea",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
