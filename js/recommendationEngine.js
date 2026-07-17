/* ==========================================
   SOULJA AI
   Recommendation Engine
========================================== */

function recommend(menuList,userPreference){

    const result = menuList

        .filter(menu=>menu.status.available)

        .map(menu=>{

            let score = 0;

            // ==========================
            // TYPE
            // ==========================

            if(
                userPreference.type==="both" ||
                menu.type===userPreference.type
            ){
                score += 40;
            }

            // ==========================
            // MOOD
            // ==========================

            if(
                userPreference.mood &&
                menu.mood.id===userPreference.mood
            ){
                score += 25;
            }

            // ==========================
            // TASTE
            // ==========================

            if(userPreference.taste){

                userPreference.taste.forEach(taste=>{

                    if(menu.taste[taste]){

                        score += menu.taste[taste];

                    }

                });

            }

            // ==========================
            // BEST SELLER
            // ==========================

            if(menu.status.bestSeller){

                score += 5;

            }

            // ==========================
            // FEATURED
            // ==========================

            if(menu.status.featured){

                score += 3;

            }

            // ==========================
            // RATING
            // ==========================

            score += menu.rating.score;

            return{

                ...menu,

                recommendationScore:Number(score.toFixed(2))

            };

        })

        .sort((a,b)=>b.recommendationScore-a.recommendationScore);


    // ==========================
    // DRINK
    // ==========================

    if(userPreference.type==="drink"){

        return result
            .filter(menu=>menu.type==="drink")
            .slice(0,2);

    }


    // ==========================
    // FOOD
    // ==========================

    if(userPreference.type==="food"){

        return result
            .filter(menu=>menu.type==="food")
            .slice(0,2);

    }


    // ==========================
    // BOTH
    // ==========================

    if(userPreference.type==="both"){

        const bestDrink =
            result.find(menu=>menu.type==="drink");

        const bestFood =
            result.find(menu=>menu.type==="food");

        return [bestDrink,bestFood].filter(Boolean);

    }


    // fallback

    return result.slice(0,2);

}