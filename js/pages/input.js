/* ==========================================
   INPUT PAGE
========================================== */

document.addEventListener("DOMContentLoaded", init);

function init(){

    singleSelect("#genderGroup", ".option-card");

    singleSelect("#menuType", ".option-card");

    singleSelect("#moodGroup", ".option-card");

    multiSelect(".chip");

    bindEvent();

}

function bindEvent(){

    document

        .getElementById("recommendBtn")

        .addEventListener("click", submitPreference);

}

function submitPreference(){

    const customerName =

        document

        .getElementById("customerName")

        .value

        .trim();

    if(customerName===""){

        alert("Silakan masukkan nama.");

        return;

    }

    const preference={

        name:customerName,

        gender:getSelected("#genderGroup"),

        type:getSelected("#menuType"),

        mood:getSelected("#moodGroup"),

        taste:getSelectedList(".chip"),

        createdAt:new Date().toISOString()

    };

    savePreference(preference);

    // tampilkan loading

    document

        .getElementById("loadingOverlay")

        .classList.remove("hidden");

    // pindah halaman

    setTimeout(()=>{

        window.location.href="recommendation.html";

    },1200);

}