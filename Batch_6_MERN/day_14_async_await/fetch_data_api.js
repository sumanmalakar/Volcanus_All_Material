const fetchDataFromAPI = async () => {
  const api = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await api.json();

  const container = document.querySelector(".container");

  container.innerHTML = data
    .map(
      (d) => `
  <div>
  <h1>${d.id}</h1>
  <p>${d.title}</p>
  </div>`
    )
    .join("");
};

fetchDataFromAPI();
