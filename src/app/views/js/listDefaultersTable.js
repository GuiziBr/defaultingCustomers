function mountTd(data, elementClass) {
  const td = document.createElement("td");
  td.className = elementClass;
  if (elementClass === "info-date") {
    const date = new Date(data);
    const ptBrDate = `${date.getDate()}/${date.getMonth() +
      1}/${date.getFullYear()}`;
    td.textContent = ptBrDate;
  } else {
    td.textContent = data;
  }
  return td;
}

function mountTr(defaulter) {
  const itemTr = document.createElement("tr");
  itemTr.className = "defaulters";
  itemTr.appendChild(mountTd(defaulter.name, "info-name"));
  itemTr.appendChild(mountTd(defaulter.amount, "info-amount"));
  itemTr.appendChild(mountTd(defaulter.date, "info-date"));

  return itemTr;
}

function mountTable(defaultersList) {
  defaultersList.forEach(defaulter => {
    const itemTr = mountTr(defaulter);
    const defaultersTable = document.querySelector("#table-defaulters");
    defaultersTable.appendChild(itemTr);
  });
}
