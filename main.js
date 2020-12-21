const data = JSON.parse(localStorage.getItem("albumData")) || [];

const fakeImage = {"url": "", "caption": ""} 

const imageItem = (url, caption) => {
  const album = document.querySelector(".album");
  const imageBox = document.createElement("div");
  imageBox.classList = "image-box";
  const newImage = document.createElement("img");
  newImage.src = url;
  const newPtag = document.createElement("p");
  newPtag.innerText = caption;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  imageBox.appendChild(newImage);
  imageBox.appendChild(newPtag);
  imageBox.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    imageBox.remove();
  });

  album.appendChild(imageBox);
};

const submitButton = document.querySelector(".submit-button");

const submitButtonClicked = () => {
  const imageInput = document.querySelector("#image-input").value;
  const captionInput = document.querySelector("#caption-input").value;
  const image = {"url": imageInput, "caption": captionInput};
  data.push(image);
  localStorage.setItem("albumData", JSON.stringify(data));
  imageItem(imageInput, captionInput);
};

for (item of data) {
  imageItem(item.url, item.caption)
}

submitButton.addEventListener("click", submitButtonClicked);
