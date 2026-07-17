/* ==========================================
   SOULJA APP
   Global Interaction
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    document.body.classList.add("page-in");

    rippleEffect();

    pageTransition();

});

function rippleEffect(){

    document.querySelectorAll(".btn").forEach(button=>{

        button.addEventListener("click",function(e){

            const ripple=document.createElement("span");

            ripple.className="ripple";

            const diameter=Math.max(
                this.clientWidth,
                this.clientHeight
            );

            ripple.style.width=
            ripple.style.height=
            diameter+"px";

            const rect=this.getBoundingClientRect();

            ripple.style.left=
            (e.clientX-rect.left-diameter/2)+"px";

            ripple.style.top=
            (e.clientY-rect.top-diameter/2)+"px";

            this.appendChild(ripple);

            ripple.addEventListener("animationend",()=>{

                ripple.remove();

            });

        });

    });

}

function pageTransition(){

    document.querySelectorAll("a").forEach(link=>{

        if(!link.href)return;

        link.addEventListener("click",function(e){

            const href=this.getAttribute("href");

            if(
                href==="#" ||
                href===""
            )return;

            e.preventDefault();

            document.body.classList.add("page-out");

            setTimeout(()=>{

                window.location=this.href;

            },300);

        });

    });

}