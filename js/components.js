/* ==========================================
   SOULJA COMPONENTS
========================================== */

/* ==========================================
   CLEAR ACTIVE
========================================== */

function clearActive(group, selector){

    document
        .querySelectorAll(`${group} ${selector}`)
        .forEach(item => {

            item.classList.remove("active");

        });

}

/* ==========================================
   SINGLE SELECT
========================================== */

function singleSelect(group, selector){

    const cards = document.querySelectorAll(
        `${group} ${selector}`
    );

    cards.forEach(card => {

        card.addEventListener("click", () => {

            cards.forEach(item => {

                item.classList.remove("active");

            });

            card.classList.add("active");

        });

    });

}

/* ==========================================
   MULTI SELECT
========================================== */

function multiSelect(selector){

    document
        .querySelectorAll(selector)
        .forEach(item => {

            item.addEventListener("click", () => {

                item.classList.toggle("active");

            });

        });

}

/* ==========================================
   GET SINGLE VALUE
========================================== */

function getSelected(group){

    const active = document.querySelector(
        `${group} .active`
    );

    return active ? active.dataset.value : null;

}

/* ==========================================
   GET MULTIPLE VALUE
========================================== */

function getSelectedList(selector){

    return Array.from(

        document.querySelectorAll(
            `${selector}.active`
        )

    ).map(item => item.dataset.value);

}

/* ==========================================
   SELECT BY VALUE
========================================== */

function selectByValue(group, selector, value){

    clearActive(group, selector);

    const target = document.querySelector(

        `${group} ${selector}[data-value="${value}"]`

    );

    if(target){

        target.classList.add("active");

    }

}

/* ==========================================
   ENABLE BUTTON
========================================== */

function enableButton(id){

    const button = document.getElementById(id);

    if(!button) return;

    button.disabled = false;

    button.classList.remove("disabled");

}

/* ==========================================
   DISABLE BUTTON
========================================== */

function disableButton(id){

    const button = document.getElementById(id);

    if(!button) return;

    button.disabled = true;

    button.classList.add("disabled");

}

/* ==========================================
   SHOW ELEMENT
========================================== */

function show(selector){

    const element = document.querySelector(selector);

    if(element){

        element.classList.remove("hidden");

    }

}

/* ==========================================
   HIDE ELEMENT
========================================== */

function hide(selector){

    const element = document.querySelector(selector);

    if(element){

        element.classList.add("hidden");

    }

}

/* ==========================================
   TOGGLE ELEMENT
========================================== */

function toggle(selector){

    const element = document.querySelector(selector);

    if(element){

        element.classList.toggle("hidden");

    }

}

/* ==========================================
   RESET FORM
========================================== */

function resetSelection(){

    document
        .querySelectorAll(".active")
        .forEach(item => {

            item.classList.remove("active");

        });

}

/* ==========================================
   SCROLL TO TOP
========================================== */

function scrollTopPage(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}