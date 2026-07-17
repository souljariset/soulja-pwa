/* ==========================================
   API
========================================== */

const MENU_URL="data/menu.json";

async function loadMenu(){

    const response=await fetch(MENU_URL);

    const menu=await response.json();

    return menu;

}

async function getDrink(){

    const menu=await loadMenu();

    return menu.filter(

        item=>item.type==="drink"

    );

}

async function getFood(){

    const menu=await loadMenu();

    return menu.filter(

        item=>item.type==="food"

    );

}

async function getByCategory(category){

    const menu=await loadMenu();

    return menu.filter(

        item=>item.category.name===category

    );

}

async function getBySlug(slug){

    const menu=await loadMenu();

    return menu.find(

        item=>item.slug===slug

    );

}