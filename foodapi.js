const food = (searchtext) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext}`)
        .then(res => res.json())
        .then(data => displymels(data.meals))

}

const displymels = meals => {
    // console.log(meals)
    const mealconatainer = document.getElementById('meal-Container')
    mealconatainer.innerHTML=''
    meals.forEach(meal => {
        console.log(meal)
        const mealdiv = document.createElement('div');
        mealdiv.classList.add('col');

        mealdiv.innerHTML = `
        <div class="card h-100">
        <img calss="imffff" src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
         <b> area:${meal.strArea}</b>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick="loadmealdetal(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#main-detailsmoodals">
              Details
        </button>
          </div>
      </div>

`;
        mealconatainer.appendChild(mealdiv);
    });




}




const searchme=()=>{
    const searchtext=document.getElementById('searchfil').value;
    console.log(searchtext)
    food(searchtext);


}


const loadmealdetal=idMeal=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
 fetch(url)
 .then(res=>res.json())
 .then(data=>displaymealdetials(data.meals[0]))

    
}

const displaymealdetials=meal=>{
document.getElementById('main-detailsmoodal').innerText=meal.strMeal
const mealsDetails=document.getElementById('main-detailsmoodalbody')
mealsDetails.innerHTML=`
<img class="img-fluid" src="${meal.strMealThumb}">
<b> area:${meal.strArea}</b>
<p>${meal.strInstructions}</p>
<b>youtubechanel Link:${meal.strYoutube}</b>`
}
food('chi')