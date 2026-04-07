const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const Images [
{filename: "pic1.jpg", alt ("Closeup of a human eye")};
{filename: "pic2.jpg", alt ("Rock that looks like a wave")};
{filename: "pic3.jpg", alt ("Purple and white pansies")};
{filename: "pic4.jpg", alt ("Section of wall from a pharaoh's tomb")};
{filename: "pic5.jpg", alt ("Large moth on a Leaf")};
    
];


const baseURL = 
"https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

for(const image of images) {
    const newImage = document.createElement("img");
    newImage.src = '${baseURL}${image.filename}';
    newImage.alt = image.alt;
    newImage.tabIndex="0";
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", updateDisplayImage);
    newImage.addEventListener("keydown",(e) => {
        if (e.code == "enter") {
            updateDisplayImage(e);
        }
    });
}

function updateDisplayImage(e) {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
}

btn.addEventListener("click", () =>  {
    if (btn.classList.contains("dark")){
        btn.textContent="lighten";
        overlay.computedStyleMap.backgroundColor = "rgb(0 0 0 / 0)";
    }
    btn.classList.toggle("dark");
});