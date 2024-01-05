const FAV_URL = "http://localhost:8080/favorite";
const boxes = document.querySelector(".boxes");

function drawCards(data) {
  boxes.innerHTML = "";
  data.forEach((element) => {
    boxes.innerHTML += `
      <div class="products-card">
      <img src="${element.image}" alt="" />
      <i class="fa-solid fa-heart favIcon " onclick=deleteIcon(${element.id})></i>
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

async function getAllData() {
  let resp = await axios(FAV_URL);
  let data = resp.data;
  // console.log(data);
  drawCards(data);
}

getAllData();

async function deleteIcon(id) {
  await axios.delete(`${FAV_URL}/${id}`);
}
