//Ordenacao nao finalizada

function sortColumn(column) {
  let trows = document.getElementsByClassName("defaulters");
  switch (column) {
    case "titleName":
      let arr = [];
      for (let i = 0; i < trows.length; i++) {
        arr.push(trows[i]);
      }

      arr.sort((a, b) => {
        if (
          a.children[0].innerText.toLowerCase() >
          b.children[0].innerText.toLowerCase()
        )
          return 1;
        if (
          a.children[0].innerText.toLowerCase() <
          b.children[0].innerText.toLowerCase()
        )
          return -1;
        return 0;
      });

      break;

    default:
      break;
  }
}

const headTable = document.querySelectorAll(".titleColumn");
headTable.forEach(item => {
  item.addEventListener("click", function(event) {
    const column = event.target.id;
    sortColumn(column);
  });
});
