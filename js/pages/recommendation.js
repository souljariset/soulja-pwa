/* ==========================================
   SOULJA COFFEE
   Recommendation Page
========================================== */

document.addEventListener("DOMContentLoaded", init);

/* ==========================================
   INIT
========================================== */

function init(){

    try{

        const preference = loadPreference();

        if(!preference){

            alert("Data preferensi tidak ditemukan.");

            window.location.href="input.html";

            return;

        }

        const recommendations = recommend(
            DATABASE.menu,
            preference
        );

        renderPage(preference,recommendations);

    }

    catch(error){

        console.error(error);

        alert("Terjadi kesalahan.");

    }

}

/* ==========================================
   RENDER PAGE
========================================== */

function renderPage(preference,recommendations){

    // Greeting

    document.getElementById("welcomeText").textContent =
        "Halo, " + preference.name + "! Berikut rekomendasi untukmu.";

    // Preference Summary

    document.getElementById("summaryMood").textContent =
        preference.mood;

    document.getElementById("summaryType").textContent =
        preference.type;

    document.getElementById("summaryTaste").textContent =
        preference.taste.length>0
            ? preference.taste.join(", ")
            : "-";

    if(recommendations.length>0){

        renderCard(1,recommendations[0]);

    }

    if(recommendations.length>1){

        renderCard(2,recommendations[1]);

    }

    renderExplanation(preference,recommendations);

}

/* ==========================================
   CARD
========================================== */

function renderCard(index,menu){

    document.getElementById("menuImage"+index).src =
        DATABASE.config.imagePath +
        menu.image.folder +
        "/" +
        menu.image.file;

    document.getElementById("menuImage"+index).alt =
        menu.image.alt;

    document.getElementById("menuName"+index).textContent =
        menu.name;

    document.getElementById("menuCategory"+index).textContent =
        menu.category.name;

    document.getElementById("menuPrice"+index).textContent =
        "Rp " +
        menu.price.toLocaleString("id-ID");

    document.getElementById("menuDescription"+index).textContent =
        menu.description;

}

/* ==========================================
   AI EXPLANATION
========================================== */

function renderExplanation(preference,recommendations){

    const box = document.getElementById("recommendationReason");

    let text =
        `Menu dipilih berdasarkan preferensi ${preference.type.toLowerCase()}, ` +
        `mood ${preference.mood.toLowerCase()}`;

    if(preference.taste.length){

        text +=
            `, serta rasa ${preference.taste.join(", ").toLowerCase()}`;

    }

    text += ".";

    if(recommendations.length){

        text +=
            ` ${recommendations[0].name} memiliki tingkat kecocokan paling tinggi dengan preferensimu.`;

    }

    box.textContent = text;

}