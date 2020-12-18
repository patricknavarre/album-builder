// Query in Album Section
const imageItem = (url, caption) => {
const album = document.querySelector(".album");

  // Create a new element which is a div. Give that div a class of "image-box"

const imageBox = document.createElement("div");
imageBox.classList = "image-box";

  // Create a new element for img.  Assign that image the url of the image.

const newImage = document.createElement("img");
newImage.src = url;

  // Create a new element which is a <p> and then change the text of the p to the text of the user input.

const newPtag = document.createElement("p");
newPtag.innerText = caption;

// creating another button for delete

const newButton = document.createElement("button");
newButton.innerText = 'delete';

  // append the image to the <div> that was created.

imageBox.appendChild(newImage);

  // append the <p> tag to the <img> box div

imageBox.appendChild(newPtag);

// append the button

imageBox.appendChild(newButton);

newButton.addEventListener('click', () => {
    imageBox.remove()
});


  // append the <div> box to the album <section>

album.appendChild(imageBox);
};
// Query in the button. addEventListener to the button. Write function for the addEventListener.

const submitButton = document.querySelector(".submit-button");
const deleteButton = document.querySelector(".delete-button");

const submitButtonClicked = () => {
const imageInput = document.querySelector("#image-input").value;
const captionInput = document.querySelector("#caption-input").value;
imageItem(imageInput, captionInput);
};

// const deleteButtonClicked = (event) => {
//     let buttonClicked = event.target;
//     buttonClicked.classList.removeChild('image-box');
// }

// const removeImage = (item) => {
//     item.target.remove()
// }


submitButton.addEventListener("click", submitButtonClicked);


// Once button is clicked, it queries in the <input> with the URL. It will also query in the caption.

// call the function. Pass in the URL and Caption from the query.
