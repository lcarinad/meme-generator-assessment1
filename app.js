let imageUrl = document.querySelector("#image-url");
const topText = document.querySelector("#optional-top-text-input");
const bottomText = document.querySelector("#optional-bottom-text-input");
const submitBtn = document.querySelector("#submit-btn");
const memeContainer = document.querySelector("#meme-div");
// function handleClick() {
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const newDiv = document.createElement("div");
  const memeImg = document.createElement("img");
  memeContainer.append(newDiv);
  memeImg.setAttribute("type", "src");
  memeImg.classList.add("img");
  memeImg.src = imageUrl.value;
  newDiv.append(memeImg);
});
// }
