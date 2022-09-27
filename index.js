const ratingNumber = document.querySelectorAll(".rating-number");
const buttonSubmit = document.querySelector(".button-submit");
const selectedRating = document.querySelector(".selected-rating");
const thankYouState = document.querySelector(".thank-you");
const ratingState = document.querySelector(".rating");

ratingNumber.forEach((rating) => {
  rating.addEventListener("click", () => {
    selectedRating.innerHTML = rating.innerHTML;
  });
});

buttonSubmit.addEventListener("click", () => {
  ratingState.style.display = "none";
  thankYouState.style.display = "block";
});
