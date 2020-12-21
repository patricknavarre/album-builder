const data = JSON.parse(localStorage.getItem("albumData")) || [];

// // save the url and caption as properties in an object
const fakeImage = {"url": "https://images.unsplash.com/photo-1608496283202-86a45c6e3cef?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60", "caption": "TESTING TESTING"} 

data.push(fakeImage)
// // save that array as JSON in localStorage




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
