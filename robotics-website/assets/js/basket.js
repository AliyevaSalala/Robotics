// const BASKET_URL = "http://localhost:8080/basket";

// const listCard = document.querySelector(".listCard");

// function drawTable(data) {
//   listCard.innerHTML = "";
//   data.forEach((element) => {
//     listCard.innerHTML = `
//     <div class="listCard">
//         <div class="item">
//           <div class="image">
//             <img src="${element.image}" alt="" />
//           </div>
//           <div class="name">
//             <h4>Title: ${element.title}</h4>
//           </div>
//           <div class="desc">
//             <p>desc:${element.description}</p>
//           </div>
//           <div class="quantify">
//             <span class="minus"><</span>
//             <span>1</span>
//             <span class="plus">></span>
//           </div>
//         </div>
//       </div>
//     `;
//   });
// }

// async function getAllData() {
//   let basket = await axios(BASKET_URL);
//   let data = basket.data;
//   drawTable(data);
// }

// getAllData();
