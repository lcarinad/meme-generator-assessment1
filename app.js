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
  const topMsgDiv = document.createElement("div");
  const topMsg = document.createElement("div");
  const bottomMsgDiv = document.createElement("div");
  const bottomMsg = document.createElement("div");
  const removeBtnDiv = document.createElement("div");
  const removeBtn = document.createElement("button");
  memeContainer.append(newDiv);
  memeImg.setAttribute("type", "src");
  memeImg.classList.add("img");
  memeImg.src = imageUrl.value;
  newDiv.append(memeImg);
  newDiv.append(topMsgDiv);
  newDiv.append(bottomMsgDiv);
  topMsgDiv.classList.add("msg-div");
  bottomMsgDiv.classList.add("msg-div");
  topMsg.classList.add("top-text");
  bottomMsg.classList.add("bottom-text");
  removeBtnDiv.classList.add("meme-container");
  removeBtn.classList.add("remove-btn");
  topMsg.innerText = topText.value;
  bottomMsg.innerText = bottomText.value;
  removeBtn.innerText = "Delete your meme";
  topMsgDiv.append(topMsg);
  bottomMsgDiv.append(bottomMsg);
  removeBtnDiv.append(removeBtn);
  form.reset();
});
// }
