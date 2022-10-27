const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryListEl = document.querySelector(".gallery");
// for (const image of images) {
//   let galleryItems = document.createElement("li");
//   let galleryLinks = document.createElement("img");
//   galleryLinks.classList.add("link__img");
//   galleryLinks.src = image.url;
//   galleryLinks.alt = image.alt;
//   galleryLinks.width = 400;
//   galleryItems.appendChild(galleryLinks);
//   galleryListEl.appendChild(galleryItems);
// }

const elements = images.map((image) => {
  let galleryItems = document.createElement("li");
  let galleryLinks = document.createElement("img");
  galleryLinks.classList.add("link__img");
  galleryLinks.src = image.url;
  galleryLinks.alt = image.alt;
  galleryLinks.width = 400;
  galleryItems.appendChild(galleryLinks);

  return elements;
});

galleryListEl.appendChild(galleryItems);
