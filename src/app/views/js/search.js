const searchButton = document.querySelector("#search-defaulters");
searchButton.addEventListener("click", function() {
  const searchField = document.querySelector("#table-search");
  const defaulters = document.querySelectorAll(".defaulters");
  if (searchField.value.length > 0) {
    defaulters.forEach(defaulter => {
      const tdName = defaulter.querySelector(".info-name");
      const name = tdName.textContent;
      const regExp = new RegExp(searchField.value, "i");
      if (!regExp.test(name)) {
        defaulter.classList.add("hide");
      } else {
        defaulter.classList.remove("hide");
      }
    });
  } else {
    defaulters.forEach(defaulter => {
      defaulter.classList.remove("hide");
    });
  }
});
