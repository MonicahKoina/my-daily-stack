let dateElem = document.getElementById("date");
let newDate = new Date();
dateElem.textContent = newDate.toDateString();

let formElem = document.getElementById("mealForm");

formElem.addEventListener("submit", function (e) {
    e.preventDefault();
    let day = formElem.day.value;
    let type = formElem.type.value;
    let food = formElem.food.value;
    if (!food) {
        return;
    }

    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        let h1 = card.querySelector("h1");
        let dayAttr = h1.dataset.day;
        // console.log(dayAttr);
        let table = card.querySelector(".meal-table")
        let th = document.createElement("th")
        th.appendChild(table)
        th.innerHTML = day;
        th.innerHTML = type;
        th.innerHTML = food;
    })
}
)
