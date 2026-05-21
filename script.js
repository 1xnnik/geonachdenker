const continentsEl = document.getElementById("continents");
const countriesEl = document.getElementById("countries");
const sectionTitle = document.getElementById("sectionTitle");

const MAX_GROUP_SIZE = 6;

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

function splitIntoGroups(countries, groupSize = MAX_GROUP_SIZE) {
  const groups = [];

  for (let index = 0; index < countries.length; index += groupSize) {
    groups.push(countries.slice(index, index + groupSize));
  }

  return groups;
}



function showCountryGroups(continent, activeButton) {
  document
    .querySelectorAll(".continent-btn")
    .forEach(btn => btn.classList.remove("active"));

  activeButton.classList.add("active");

  const groups = splitIntoGroups(data[continent]);

  sectionTitle.style.display = "block";
  sectionTitle.textContent = `Ländergruppen in ${continent}`;

  countriesEl.innerHTML = "";

  groups.forEach((group, groupIndex) => {
    const groupCard = document.createElement("article");
    groupCard.className = "country-group";

    groupCard.innerHTML = `
      <div class="country-grid-2x2">
        ${group.map(country => renderCountryInfo(country)).join("")}
      </div>
    `;

    countriesEl.appendChild(groupCard);
  });
}

function renderCountryInfo(country) {
  const fakten = country.fakten || [];
  const bilder = country.bilder || [];

  return `
    <section class="country-info-card">
      <div class="country-info-header">
        ${createFlag(country)}
        <h4>${country.name}</h4>
      </div>

<div class="country-info-section">

  <div class="quick-facts-header">
    <h5>Quick facts</h5>

    ${
      country.drive
        ? `
          <img
            class="drive-icon"
            src="${country.drive === "l"
              ? "left_drive.png"
              : "right_drive.png"}"
            alt="${country.drive === "l"
              ? "Left Drive"
              : "Right Drive"}"
          >
        `
        : ""
    }

  </div>

  ${renderFacts(fakten)}

</div>
      <div class="country-info-section">
        <h5>Bilder</h5>
        ${renderImages(country, bilder)}
      </div>
    </section>
  `;
}

function renderFacts(fakten) {
  if (fakten.length === 0) {
    return `<p class="empty-text">Noch keine Fakten eingetragen.</p>`;
  }

  return `
    <ul>
      ${fakten.map(fakt => `<li>${fakt}</li>`).join("")}
    </ul>
  `;
}

function renderImages(country, bilder) {
  if (bilder.length === 0) {
    return `<p class="empty-text">Noch keine Bilder eingetragen.</p>`;
  }

  return `
    <div class="country-images">
      ${bilder.map((bildUrl, index) => `
        <img
          src="${bildUrl}"
          alt="${country.name} Bild ${index + 1}"
          loading="lazy"
          onclick="openImageModal('${bildUrl}')"
        >
      `).join("")}
    </div>
  `;
}

function renderContinents() {

  const superGroups = {
    "EU WEST": [
      "dach raum",
      "flach region",
      "urlaub region",
      "norden",
      "cup of tea",
      "kleine länder"
    ],
	
	"EU OST": [
	  "törken",
      "s-osten",
      "osten",
      "krieg",
      "baltic"
	],

    "ASIA": [
      "arab",
      "asien russland",
      "china schrift",
      "India type beat",
      "thai",
      "asien insel"
    ],

    "AFRICA": [
      "south",
      "ostafrika",
      "westafrica"
    ],

    "AMERICA": [
      "nord amerika",
      "mitte amerika",
      "south amerika oben",
      "south amerika unten"
    ],

    "OCEANIA": [
      "oceania"
    ]
  };

  Object.entries(superGroups).forEach(([groupName, regions]) => {

    const wrapper = document.createElement("div");
    wrapper.className = "super-group";

    const title = document.createElement("h2");
    title.className = "super-group-title";
    title.textContent = groupName;

    const grid = document.createElement("div");
    grid.className = "super-group-grid";

    regions.forEach(continent => {

      const button = document.createElement("button");

      button.className = "continent-btn";
      button.textContent = continent;

      button.onclick = () => {
        showCountryGroups(continent, button);
      };

      grid.appendChild(button);
    });

    wrapper.appendChild(title);
    wrapper.appendChild(grid);

    continentsEl.appendChild(wrapper);
  });
}
renderContinents();
function openImageModal(imageUrl) {

  const modal = document.createElement("div");
  modal.className = "image-modal";

  modal.innerHTML = `
    <div class="image-modal-content">
      <button class="image-modal-close">×</button>
      <img src="${imageUrl}" alt="">
    </div>
  `;

  modal.onclick = () => {
    modal.remove();
  };

  modal.querySelector(".image-modal-content").onclick = (e) => {
    e.stopPropagation();
  };

  modal.querySelector(".image-modal-close").onclick = () => {
    modal.remove();
  };

  document.body.appendChild(modal);
}