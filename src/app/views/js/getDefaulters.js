function getDefaulters() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3333/defaulters");
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const defaultersList = JSON.parse(xhr.responseText);
      mountTable(defaultersList);
    }
  };
}
