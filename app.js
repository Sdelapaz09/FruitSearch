const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const searchInput = document.querySelector(".searchInput");
const input = searchInput.querySelector("input");
const suggBox = searchInput.querySelector(".suggestions");
const icon = searchInput.querySelector(".icon");
let linkTag = searchInput.querySelector("a");
let webLink;

input.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArr = [];
  if(userData){
    emptyArr = fruit.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArr = emptyArr.map((data) => {
      return data = '<li>' + data + '</li>';
    });
    searchInput.classList.add("active");
    showSuggestions(emptyArr);
    let list = suggBox.querySelectorAll("li");
    for(let i = 0; i < list.length; i++){
      list[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchInput.classList.remove("active");
  }
}

function select(element){
  let selectData = element.textContent;
  input.value = selectData;
  icon.onclick = () => {
    webLink = "https://www.google.com/search?q=" + selectData;
    linkTag.setAttribute("href", webLink);
    linkTag.click();
  }
  searchInput.classList.remove("active");
}

function showSuggestions(list){
  let listData;
  if(!list.length){
    userValue = input.value;
    listData = '<li>' + userValue + '</li>';
  } else {
    listData = list.join('');
  }
  suggBox.innerHTML = listData;
}
