function getValueOfInput(id) {
  return parseFloat(document.getElementById(id).value);
}
function getValueOfSpan(id) {
  return parseFloat(document.getElementById(id).innerText);
}
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
document.getElementById("noakhail-btn").addEventListener("click", function () {
  const donation = getValueOfInput("noakhail-input");
  const donationCounter = getValueOfSpan("noakhail-donation");
  const coin = getValueOfSpan("coin");

  const button = document.getElementById("noakhail-btn");
  if (isNaN(donation) || donation <= 0) {
    alert("invalid input please provide a number");
    button.removeAttribute("onclick", "my_modal_5.showModal()");
    return;
  }
  const newCoin = coin - donation;
  const newDonation = donationCounter + donation;
  setInnerText("noakhail-donation", newDonation);
  setInnerText("coin", newCoin);
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
