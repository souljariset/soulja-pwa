/* ==========================================
   AI RECOMMENDATION
========================================== */

async function recommend(){

    const menu=await loadMenu();

    const user=loadPreference();

    console.log(menu);

    console.log(user);

}