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
        // let targetTH = [...ths].find(th => th.dataset.meal === meal);
        let table = matchingCard.querySelector(".meal-table")
        let tbody = document.createElement("tbody")
        let tr = document.createElement("tr")
        tbody.appendChild(tr);
        table.appendChild(tbody);
        tr.innerHTML = `<td></td><td></td><td></td>`
        let tdIndex = meal === "BREAKFAST" ? 0 : meal === "LUNCH" ? 1 : 2;
        let td = tr.children[tdIndex]
        td.textContent = food;







    }

}
)
