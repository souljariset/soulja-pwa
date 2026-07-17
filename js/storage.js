/* ==========================================
   STORAGE
========================================== */

const STORAGE_KEY="soulja_preference";

function savePreference(data){

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(data)

    );

}

function loadPreference(){

    return JSON.parse(

        localStorage.getItem(STORAGE_KEY)

    );

}

function clearPreference(){

    localStorage.removeItem(

        STORAGE_KEY

    );

}