let id = new URLSearchParams(window.location.search).get("id");

const allInputs = document.querySelectorAll("input");
const form = document.querySelector("form");

const BASE_URL = "http://localhost:8080/products";
