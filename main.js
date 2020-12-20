// // save the url and caption as properties in an object
const albumObj = {"url": "url", "caption": "caption"} 
// // save that object in an array
const albumArr = [albumObj]
// // save that array as JSON in localStorage
localStorage.setItem("albumObj", JSON.stringify(albumObj));
// // add a global array that you can .push to
JSON.parse(localStorage.getItem("albumObj"))
console.log(albumArr[0])
const savedAlbumArr = []



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
const deleteButton = document.querySelector(".delete-button");

const submitButtonClicked = () => {
  const imageInput = document.querySelector("#image-input").value;
  const captionInput = document.querySelector("#caption-input").value;
  imageItem(imageInput, captionInput);
};

submitButton.addEventListener("click", submitButtonClicked);
