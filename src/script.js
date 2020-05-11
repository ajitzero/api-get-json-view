const result = document.getElementById("result");

const btn = document.getElementById("go");

btn.addEventListener("click", () => {
  const apiUrl = document.getElementById("apiUrl").value.trim();

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      const op = JSON.stringify(data, null, 2);
      result.innerHTML = op;
    });
});
