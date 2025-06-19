let dateElem = document.getElementById("date");
let newDate = new Date();
dateElem.textContent = newDate.toDateString();

let formElem = document.getElementById("mealForm");

formElem.addEventListener("submit", function (e) {
    e.preventDefault();
    let day = formElem.day.value;
    let meal = formElem.meal.value;
    let food = formElem.food.value.trim();
    if (!food) {
        return;
    }
    // let cards = document.querySelectorAll(".card")
    let matchingCard = [...document.querySelectorAll(".card")].find(card => {
        let h1 = card.querySelector("h1");
        return h1.dataset.day === day;
    });
    if (matchingCard) {

        let ths = matchingCard.querySelectorAll("th")
        let targetTH = [...ths].find(th => th.dataset.meal === meal);
        let table = matchingCard.querySelector(".meal-table")
        let tbody = document.createElement("tbody")
        let tr = document.createElement("tr")
        tbody.appendChild(tr);
        table.appendChild(tbody);

        if (targetTH) {
            let td1 = document.createElement("td")
            td1.innerHTML = food
            tr.appendChild(td1);
            let td2 = document.createElement("td")
            td2.innerHTML = food
            tr.appendChild(td2);
            let td3 = document.createElement("td")
            td3.innerHTML = food
            tr.appendChild(td3);
        }




    }

}
)
