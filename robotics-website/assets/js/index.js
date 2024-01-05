const header = document.querySelector("header");
const nav = document.querySelector("nav");
const menuIcn = document.querySelector("#menuIcon");
const products = document.querySelector(".products");
const search = document.querySelector("#search");
const loadMoreBtn = document.querySelector(".load-more-btn");
const sortBtn = document.querySelector(".sort-btn");
const toTop = document.querySelector(".to-top");
const counter = document.querySelector(".counter");

const BASE_URL = "http://localhost:8080/products";
const FAV_URL = "http://localhost:8080/favorite";

let arr = [];
let producstCopy = [];
let limit = 3;
async function getAllData() {
  const res = await axios(`${BASE_URL}`);
  arr = res.data;
  producstCopy = structuredClone(arr);
  //   console.log(res.data);
  drawCards(arr.slice(0, limit));
}

getAllData();

menuIcn.addEventListener("click", function () {
  nav.classList.toggle("show");

  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("header-scroll");
    toTop.classList.add("active");
  } else {
    header.classList.remove("header-scroll");
    toTop.classList.remove("active");
  }
});

function drawCards(data) {
  products.innerHTML = "";
  data.forEach((element) => {
    products.innerHTML += `
    <div class="products-card">
    <img src="${element.image}" alt="" />
    <i class="fa-regular fa-heart favIcon " onclick=addToFav(${element.id})></i>
    <div class="products-card-texts">
      <h4>${element.title}</h4>
      <p>${element.description}</p>
      <a href="details.html?id=${element.id}" class="details">View Details</a>
    <div class="icons">
    <a href="form.html?id=${element.id}"> <i class="fa-solid fa-pen-to-square"></i></a>
    <i class="fa-solid fa-trash" onclick=deleteBtn(${element.id},this)></i>
    </div>
    </div>
  </div>

    `;
  });
}

// function drawCards(data) {
//   products.innerHTML = "";
//   data.forEach((element) => {
//     const productsElement = document.createElement("div");
//     productsElement.className = "products-card";
//     const imageElement = document.createElement("img");
//     imageElement.src = element.image;
//     const favIcon = document.createElement("i");
//     const divElement = document.createElement("div");
//     divElement.className = "products-card-texts";
//     const titleElement = document.createElement("h4");
//     titleElement.innerText = element.title;
//     const descEelement = document.createElement("p");
//     descEelement.innerText = element.description;

//     const aElement = document.createElement("a");
//     aElement.innerText = "View Details";
//     aElement.className = "details";
//     aElement.href = "details.html?id=${element.id}";
//     const divIcon = document.createElement("div");
//     divIcon.className = "icons";
//     const aElem = document.createElement("a");
//     aElem.href = "form.html?id=${element.id}";
//     const editEelem = document.createElement("i");

//     editEelem.className = "fa-solid fa-pen-to-square";
//     const deleteEelem = document.createElement("i");
//     deleteEelem.className = "fa-solid fa-trash";
//     deleteEelem.onclick = `deleteBtn(${element.id},this)`;

//     aElem.append(editEelem);
//     divIcon.append(aElem, deleteEelem);
//     divElement.append(titleElement, descEelement, divIcon);
//     productsElement.append(imageElement, favIcon, divElement);

//     products.append(productsElement);
//   });
// }

search.addEventListener("input", function (e) {
  let filtered = arr.filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  drawCards(filtered);
});

sortBtn.addEventListener("click", function () {
  let sorted;
  if (sortBtn.innerText === "Ascending") {
    sortBtn.innerText = "Descending";
    sorted = arr.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBtn.innerText === "Descending") {
    sortBtn.innerText = "Default";
    sorted = arr.sort((a, b) => b.title.localeCompare(a.title));
  } else {
    sortBtn.innerText = "Ascending";
    sorted = producstCopy;
    // console.log("shalala");
  }
  drawCards(sorted);
});

loadMoreBtn.addEventListener("click", function () {
  limit += 3;
  drawCards(arr.slice(0, limit));
  if (limit >= producstCopy.length) {
    this.remove();
  }
});

async function deleteBtn(id, btn) {
  if (confirm("silmek istediginden eminmisin?")) {
    await axios.delete(`${BASE_URL}/${id}`);
    btn.closest("products-card").remove();
  }
}

async function addToFav(id) {
  let fav = await axios(`${FAV_URL}`);
  let favData = fav.data;
  // console.log(favData);

  let res = await axios(`${BASE_URL}/${id}`);
  let data = res.data;
  // console.log(data);

  let product = favData.find((item) => {
    return item.id == id;
  });
  if (!product) {
    await axios.post(FAV_URL, data);
  } else {
    window.alert("fav eklenibdi!!");
  }
  // console.log(product);
}

async function favCounter() {
  let res = await axios(FAV_URL);

  // console.log(res.data);
  let newData = res.data.length;

  counter.innerHTML = newData.toString();
}

favCounter();
