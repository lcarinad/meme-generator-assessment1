const form = document.querySelector("#form");
let imageUrl = document.querySelector("#image-url");
const topText = document.querySelector("#optional-top-text-input");
const bottomText = document.querySelector("#optional-bottom-text-input");
const submitBtn = document.querySelector("#submit-btn");
const memeContainer = document.querySelector("#meme-div");
// function handleClick() {
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //create the div
  const newDiv = document.createElement("div");
  const memeImg = document.createElement("img");
  const topMsg = document.createElement("p");
  const bottomMsg = document.createElement("p");
  memeContainer.append(newDiv);
  memeImg.setAttribute("type", "src");
  memeImg.classList.add("img");
  memeImg.src = imageUrl.value;
  newDiv.append(memeImg);
  topMsg.classList.add("top-text");
  bottomMsg.classList.add("bottom-text");
  topMsg.innerText = topText.value;
  bottomMsg.innerText = bottomText.value;
  newDiv.append(topMsg);
  newDiv.append(bottomMsg);
  console.log(topMsg);
  console.log(bottomMsg);
  form.reset();
});
// }
