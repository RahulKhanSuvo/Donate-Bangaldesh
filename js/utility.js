function getValueOfInput(id) {
  return parseFloat(document.getElementById(id).value);
}
function getValueOfSpan(id) {
  return parseFloat(document.getElementById(id).innerText);
}
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
function evenDonationHandler(btnId, inputId, counterId, totalBallanceId) {
  const donation = getValueOfInput(inputId);
  const donationCounter = getValueOfSpan(counterId);
  const coin = getValueOfSpan(totalBallanceId);

  if (isNaN(donation) || donation <= 0) {
    alert("invalid input please provide a number");

    return;
  } else {
  }

  const newCoin = coin - donation;
  const newDonation = donationCounter + donation;
  setInnerText(counterId, newDonation);
  setInnerText(totalBallanceId, newCoin);
}
