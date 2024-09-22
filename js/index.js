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
document.getElementById("fani-btn").addEventListener("click", function () {
  evenDonationHandler(
    "fani-btn",
    "fani-input",
    "fani-donation",
    "coin",
    "fani-title",
    "history-list"
  );
});
document.getElementById("quta-btn").addEventListener("click", function () {
  evenDonationHandler(
    "quta-btn",
    "quta-input",
    "quta-donation",
    "coin",
    "quta-title",
    "history-list"
  );
});
document
  .getElementById("noakhail-input")
  .addEventListener("input", function (event) {
    forValidation(event, "noakhail-btn");
  });
document
  .getElementById("fani-input")
  .addEventListener("input", function (event) {
    forValidation(event, "fani-btn");
  });
document
  .getElementById("quta-input")
  .addEventListener("input", function (event) {
    forValidation(event, "quta-btn");
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
