let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "http://localhost:8080/products";

const form = document.querySelector("form");

const inputsAll = document.querySelectorAll("input");

async function getData() {
  const res = await axios(`${BASE_URL}/${id}`);
  console.log(res.data);
  inputsAll[1].value = res.data.title;
  inputsAll[2].value = res.data.description;
}

if (id) {
  getData();
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  //   console.log("sharifa");
  let newObj = {
    image: `./assets/images/${inputsAll[0].value.split("\\")[2]}`,
    title: inputsAll[1].value,
    description: inputsAll[2].value,
  };
  if (!id) {
    if (inputsAll[1].value != "" && inputsAll[2].value != "") {
      await axios.post(`${BASE_URL}`, newObj);
    } else {
      window.alert("bos buraxmaq olmmaz!!");
    }
  } else {
    await axios.patch(`${BASE_URL}/${id}`, newObj);
  }

  window.location = "index.html";
});
