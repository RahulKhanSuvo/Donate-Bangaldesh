document.getElementById("noakhail-btn").addEventListener("click", function () {
  evenDonationHandler(
    "noakhail-btn",
    "noakhail-input",
    "noakhail-donation",
    "coin",
    "noakhail-title",
    "history-list"
  );
});
document
  .getElementById("noakhail-input")
  .addEventListener("input", function (event) {
    const value = event.target.value;
    const button = document.getElementById("noakhail-btn");
    if (isNaN(value) || value < 0) {
      button.removeAttribute("onclick", "my_modal_5.showModal()");
    } else {
      button.setAttribute("onclick", "my_modal_5.showModal()");
    }
  });
// toggle
const historyBtn = document.getElementById("history-btn");
const donationCard = document.getElementById("donation-card");
const donationBtn = document.getElementById("donation-btn");
const historyList = document.getElementById("history-list");

historyBtn.addEventListener("click", function () {
  historyBtn.classList.add("bg-lime");
  donationCard.classList.add("hidden");
  donationBtn.classList.remove("bg-lime");
  historyList.classList.remove("hidden");
});
donationBtn.addEventListener("click", function () {
  historyBtn.classList.remove("bg-lime");
  donationBtn.classList.add("bg-lime");
  donationCard.classList.remove("hidden");
  historyList.classList.add("hidden");
});
