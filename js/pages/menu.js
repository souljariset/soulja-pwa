/* ==========================================
   SOULJA MENU
========================================== */

document.addEventListener("DOMContentLoaded",init);

let currentCategory="all";

/* ==========================================
   INIT
========================================== */

function init(){

    bindCategory();

    renderMenu();

    initCrossSell();

document
.getElementById("crossSellCancel")
.onclick=closeCrossSell;

const menuContent = document.querySelector(".menu-content");

menuContent.addEventListener("scroll", closeCrossSell);

}

/* ==========================================
   CATEGORY
========================================== */

function bindCategory(){

    const items=document.querySelectorAll(".category-item");

    items.forEach(item=>{

        item.addEventListener("click",()=>{

            items.forEach(i=>{

                i.classList.remove("active");

            });

            item.classList.add("active");
            closeCrossSell();

            currentCategory=item.dataset.category;

            renderMenu();

        });

    });

}

/* ==========================================
   RENDER
========================================== */

function renderMenu(){

    const grid=document.getElementById("menuGrid");

    grid.innerHTML="";

    let menus=DATABASE.menu;

    if(currentCategory!=="all"){

        menus=menus.filter(menu=>{

            return menu.category.id===currentCategory;

        });

    }

    menus.forEach(menu=>{

        grid.appendChild(createCard(menu));

    });

}

/* ==========================================
   CARD
========================================== */

function createCard(menu){

    const card=document.createElement("div");

    card.className="menu-card";

    let badge="";

    if(menu.status.bestSeller){

        badge=`
            <div class="menu-badge bestseller">

                Best Seller

            </div>
        `;

    }

    else if(menu.status.featured){

        badge=`
            <div class="menu-badge featured">

                Featured

            </div>
        `;

    }

    card.innerHTML=`

        ${badge}

        <div class="menu-image">

            <img

                src="${DATABASE.config.imagePath}${menu.image.folder}/${menu.image.file}"

                alt="${menu.image.alt}">

        </div>

        <div class="menu-info">

            <h3>

                ${menu.name}

            </h3>

            <p class="menu-description">

                ${shortDescription(menu.description)}

            </p>

            <div class="menu-price">

                Rp ${formatPrice(menu.price)}

            </div>

        </div>

    `;

    card.addEventListener("click",()=>{

        showCrossSell(menu);

    });

    return card;

}

/* ==========================================
   FORMAT PRICE
========================================== */

function formatPrice(price){

    return price.toLocaleString("id-ID");

}
/* ==========================================
   SHORT DESCRIPTION
========================================== */

function shortDescription(text){

    if(text.length<=55){

        return text;

    }

    return text.substring(0,55)+"...";

}

/* ==========================================
   CROSS SELL
========================================== */

let currentPopupId = null;

/* ------------------------------------------
   SHOW
------------------------------------------ */

function showCrossSell(menu){
    closeCrossSell();
console.log("Klik menu:", menu.name);
console.log(menu.recommendation);
console.log(menu.recommendation.crossSell);
    // Tidak ada data cross sell
    if(
        !menu.recommendation ||
        menu.recommendation.crossSell == null
    ){
        closeCrossSell();
        return;
    }

    // Jika popup menu yang sama sedang tampil,
    // cukup tutup popup
    if(currentPopupId === menu.id){

        closeCrossSell();

        return;

    }

        const crossSellIds = menu.recommendation.crossSell || [];

        const crossSell = DATABASE.menu.find(
            item => item.id === crossSellIds[0]
        );
    console.log(crossSell);

    if(!crossSell){

        closeCrossSell();

        return;

    }

    // Update isi popup
    document.getElementById("crossSellImage").src =
        DATABASE.config.imagePath +
        crossSell.image.folder + "/" +
        crossSell.image.file;

    document.getElementById("crossSellTitle").textContent =
        crossSell.name;

    document.getElementById("crossSellPrice").textContent =
        "Rp " + formatPrice(crossSell.price);

    document.getElementById("crossSellText").innerHTML =
        `Pelanggan yang membeli menu <b>${menu.name}</b> biasanya juga membeli <b>${crossSell.name}</b>.`;

    currentPopupId = menu.id;

    document
        .getElementById("crossSellOverlay")
        .classList.add("show");

}

/* ------------------------------------------
   CLOSE
------------------------------------------ */

function closeCrossSell(){

    currentPopupId = null;

    document
        .getElementById("crossSellOverlay")
        .classList.remove("show");

}

/* ------------------------------------------
   EVENT
------------------------------------------ */

function initCrossSell(){

    // Tombol tutup
    document
        .getElementById("crossSellCancel")
        .addEventListener("click",closeCrossSell);

    // Scroll menu -> popup hilang
    const menuContent = document.querySelector(".menu-content");

    if(menuContent){

        menuContent.addEventListener(
            "scroll",
            closeCrossSell
        );

    }

    // Klik tab kategori -> popup hilang
    document
        .querySelectorAll(".category-item")
        .forEach(item=>{

            item.addEventListener(
                "click",
                closeCrossSell
            );

        });

}