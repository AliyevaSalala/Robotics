const BASE_URL = "http://localhost:8080/products";

let id = new URLSearchParams(window.location.search).get("id");

const details = document.querySelector(".details");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const menuIcn = document.querySelector("#menuIcon");

menuIcn.addEventListener("click", function () {
  nav.classList.toggle("show");

  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
});

async function detailsData() {
  try {
    const res = await axios(`${BASE_URL}/${id}`);
    // console.log(res.data);
    details.innerHTML = `
   <div  class="details-left">
            <h3>Title:${res.data.title}</h3>
            <p>Description:${res.data.description}</p>
            <p class="lorem">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              laboriosam, est repellat iure debitis amet laborum corrupti
              delectus facere unde. Ipsam, fugiat consequuntur omnis ducimus
              blanditiis aspernatur molestias adipisci quisquam.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              laboriosam, est repellat iure debitis amet laborum corrupti
              delectus facere unde. Ipsam, fugiat consequuntur omnis ducimus
              blanditiis aspernatur molestias adipisci quisquam.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              laboriosam, est repellat iure debitis amet laborum corrupti
              delectus facere unde. Ipsam, fugiat consequuntur omnis ducimus
              blanditiis aspernatur molestias adipisci quisquam.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              laboriosam, est repellat iure debitis amet laborum corrupti
              delectus facere unde. Ipsam, fugiat consequuntur omnis ducimus
              blanditiis aspernatur molestias adipisci quisquam.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              laboriosam, est repellat iure debitis amet laborum corrupti
              delectus facere unde. Ipsam, fugiat consequuntur omnis ducimus
              blanditiis aspernatur molestias adipisci quisquam.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              laboriosam, est repellat iure debitis amet laborum corrupti
              delectus facere unde. Ipsam, fugiat consequuntur omnis ducimus
              blanditiis aspernatur molestias adipisci quisquam.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              laboriosam, est repellat iure debitis amet laborum corrupti
              delectus facere unde. Ipsam, fugiat consequuntur omnis ducimus
              blanditiis aspernatur molestias adipisci quisquam.
            </p>
          </div>
          <div class="details-right">
            <img src="${res.data.image}" alt="" />
          </div>
          
          
        `;
  } catch (error) {}
}

detailsData();

function goBack() {
  window.history.back();
}
