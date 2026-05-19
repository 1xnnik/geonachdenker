const continentsEl = document.getElementById("continents");
const countriesEl = document.getElementById("countries");
const sectionTitle = document.getElementById("sectionTitle");

const MAX_GROUP_SIZE = 4;

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

function renderContinents() {
  Object.keys(data).forEach(continent => {
    const button = document.createElement("button");

    button.className = "continent-btn";
    button.textContent = continent;

    button.onclick = () => {
      showCountryGroups(continent, button);
    };

    continentsEl.appendChild(button);
  });
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
      <h3>Gruppe ${groupIndex + 1}</h3>
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
        <h5>Quick facts</h5>
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
        >
      `).join("")}
    </div>
  `;
}

renderContinents();
