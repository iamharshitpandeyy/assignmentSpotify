export const BASE =
  "https://9h99jyg9yi.execute-api.ap-south-1.amazonaws.com/dev";
//export const BASE = "http://localhost:2053/dev";

//-------------------USER API ------------------------------------------------------------
export const CREATE_NEW_USER_API = BASE + "/user/userregister";
export const LOGIN_USER_API = BASE + "/user/userlogin";

//-------------------ARTIST API ------------------------------------------------------------
export const CREATE_NEW_ARTIST_API = BASE + "/artist/createartist";
export const FETCH_ARTIST_API = BASE + "/artist/fetchartist";
export const FETCH_ALL_ARTIST_API = BASE + "/artist/fetchallartist";

//-------------------SONG API ------------------------------------------------------------
export const CREATE_NEW_SONG_API = BASE + "/song/createsong";
export const FETCH_SONG_API = BASE + "/song/fetchsong";

export function RATING_SONG(songid) {
  return BASE + "/ratingSong/" + songid;
}
