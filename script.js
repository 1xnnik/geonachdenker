const continentsEl = document.getElementById("continents");
const countriesEl = document.getElementById("countries");
const sectionTitle = document.getElementById("sectionTitle");

function createFlag(country) {

  return `
    <img
      src="https://flagcdn.com/w160/${country.code}.png"
      srcset="https://flagcdn.com/w320/${country.code}.png 2x"
      width="160"
      alt="${country.name}"
    >
  `;
}

function renderContinents() {

  Object.keys(data).forEach(continent => {

    const button = document.createElement("button");

    button.className = "continent-btn";
    button.textContent = continent;

    button.onclick = () => {
      showCountries(continent, button);
    };

    continentsEl.appendChild(button);
  });
}

function showCountries(continent, activeButton) {

  document
    .querySelectorAll(".continent-btn")
    .forEach(btn => btn.classList.remove("active"));

  activeButton.classList.add("active");

  sectionTitle.style.display = "block";
  sectionTitle.textContent = `Länder in ${continent}`;

  countriesEl.innerHTML = "";

  data[continent].forEach(country => {

    const card = document.createElement("button");

    card.className = "country-card";

    card.innerHTML = `
      ${createFlag(country)}
      <span>${country.name}</span>
    `;

    card.onclick = () => {
      openModal(country);
    };

    countriesEl.appendChild(card);
  });
}

function openModal(country) {

  document.getElementById("modalTitle").textContent =
    country.name;

  document.getElementById("modalFlag").innerHTML =
    createFlag(country);

  document.getElementById("modalText").textContent =
    country.infoText;

  document.getElementById("modalBg").style.display =
    "flex";
}

function closeModal() {

  document.getElementById("modalBg").style.display =
    "none";
}

document
  .getElementById("modalBg")
  .addEventListener("click", function(event) {

    if (event.target === this) {
      closeModal();
    }
  });

renderContinents();