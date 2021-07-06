const flag = document.getElementById("flags");

document.addEventListener("DOMContentLoaded", function (event) {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch("api.json");
    const data = await res.json();
    flags(data);
    formClient(data);
    filter(data);
  } catch (err) {
    console.log(err.message);
  }
};

const flags = (data) => {
  let element = "";
  data.forEach((flag) => {
    element += `
    <article class="card">
        <img
          loading="lazy"
          src=${flag?.flag}
          alt=${flag?.name}
          class="img-fluid"
        />
        <div class="card-content">
          <h3>${flag?.name}</h3>
          <p>
            <b>Population: </b>
            ${flag?.population}
          </p>
          <p>
            <b>Region: </b>
            ${flag?.region}
          </p>
          <p>
            <b>Capital: </b>
            ${flag?.capital}
          </p>
        </div>
      </article>
    `;
  });

  flag.innerHTML = element;
};
