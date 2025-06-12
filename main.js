function showModal() {
    const modalHTML = `
      <input class="modal-state" id="modal-1" type="checkbox">
      <div class="modal">
        <label class="modal-bg" for="modal-1"></label>
        <div class="modal-body">  
          <h4 class="modal-title">What would you like to create?</h4>
          <div class="flex flex-col gap-2 my-4">
            <button class="btn-secondary-outline "><a href="#">Daily Routine</a></button>
            <button class="btn-secondary-outline"><a href="#">Meal Plan</a></button>
            <button class="btn-secondary-outline"><a href="#">Budget Plan</a></button>
            <button class="btn-secondary-outline"><a href="#">Study Plan</a></button>
          </div>
          <label for="modal-1" class="btn-secondary mt-4">Cancel</label>
        </div>
      </div>
    `;
    document.getElementById("modal-container").innerHTML = modalHTML;
    setTimeout(() => {
        document.getElementById("modal-1").checked = true;
    }, 10);
}
