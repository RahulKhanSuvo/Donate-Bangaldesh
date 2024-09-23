function getValueOfInput(id) {
  return document.getElementById(id).value;
}
function getValueOfSpan(id) {
  return parseFloat(document.getElementById(id).innerText);
}
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
function evenDonationHandler(
  btnId,
  inputId,
  counterId,
  totalBallanceId,
  donationTitleId,
  historyId
) {
  const donationEl = getValueOfInput(inputId);
  const donation = parseFloat(getValueOfInput(inputId));
  const donationCounter = getValueOfSpan(counterId);
  const coin = getValueOfSpan(totalBallanceId);
  const button = document.getElementById(btnId);
  button.setAttribute("onclick", "my_modal_5.showModal()");
  if (isNaN(donationEl) || donation <= 0) {
    alert("invalid input please provide a number");
    button.removeAttribute("onclick", "my_modal_5.showModal()");
    return;
  }
  const newCoin = coin - donation;
  const newDonation = donationCounter + donation;
  if (newCoin <= 0) {
    alert("failed you don't have enough coin to donate");
    button.removeAttribute("onclick", "my_modal_5.showModal()");
    return;
  }
  setInnerText(counterId, newDonation);
  setInnerText(totalBallanceId, newCoin);
  const title = document.getElementById(donationTitleId).innerText;
  const historyList = document.getElementById(historyId);
  const div = document.createElement("div");
  const currentDate = new Date().toString();
  div.classList.add("p-8", "border", "rounded-xl");
  div.innerHTML = `
    <h3 class="text-xl font-bold pb-4 ">${donation} Taka is ${title} </h3>
    <p class="font-light text-base "> Date : ${currentDate}</p>
  `;
  historyList.insertBefore(div, historyList.firstChild);
}
function forValidation(event, btnId) {
  const value = event.target.value;
  const button = document.getElementById(btnId);
  if (isNaN(value) || value < 0) {
    button.removeAttribute("onclick", "my_modal_5.showModal()");
  } else {
    button.setAttribute("onclick", "my_modal_5.showModal()");
  }
}
