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

  const memeImgDiv = document.createElement("div");
  const memeImg = document.createElement("img");

  const topMsgDiv = document.createElement("div");

  const bottomMsgDiv = document.createElement("div");

  const removeBtnDiv = document.createElement("div");
  const removeBtn = document.createElement("button");

  memeContainer.append(newDiv);
  memeImg.setAttribute("type", "src");
  memeImg.classList.add("img");
  memeImg.src = imageUrl.value;
  newDiv.append(memeImgDiv);
  memeImgDiv.append(memeImg);
  newDiv.append(topMsgDiv);
  newDiv.append(bottomMsgDiv);
  memeImgDiv.classList.add("meme-img-div");
  topMsgDiv.classList.add("top-msg-div");
  bottomMsgDiv.classList.add("bottom-msg-div");

  removeBtnDiv.classList.add("remove-btn-div");
  removeBtn.classList.add("remove-btn");
  topMsgDiv.innerText = topText.value;
  bottomMsgDiv.innerText = bottomText.value;
  removeBtn.innerText = "Delete your meme";
  newDiv.append(removeBtnDiv);
  removeBtnDiv.append(removeBtn);
  console.log("removebtn");
  form.reset();
});
// }
