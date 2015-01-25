var button = document.getElementById("button");
var items = [];
var lists = ["placeholder"];
var listCounter = 0;

button.addEventListener('click', function(event) {
  var itemInput = document.getElementById("item");
  var item = itemInput.value;
  console.log(item);
  var linkInput = document.getElementById("link");
  var url = linkInput.value;
  console.log(url);
  var listInput = document.getElementById("list");
  var list = listInput.value;
  console.log(list);


  var currentItems = [];


  lists.forEach(function(listObj) {
    if (listObj.list === list) {
      listCounter += 1;
      console.log("listCounter is now: "+ listCounter)
      var currentList = list;
      var currentItems = listObj.items;
      currentItems.forEach(function(itemObj) {
        if (itemObj.item === item || itemObj.link === url) {
          alert("that item is already on your list! Maybe be more specific if its not!");
        } else {
          var item = {item: item, link: url};
          items.push(item);
          console.log(items);
          }
        })
    } else {
      var currentList = list;
      var currentItems = [];
      var item = {item: item, link: url};
      items.push(item);
      console.log(items);
    }
  })
  console.log(listCounter);
  if (listCounter < 1) {
    var yourLists = document.getElementById("yourLists");
    var newList = document.createElement("li");
    yourLists.appendChild(newList);

    var listLink = document.createElement("a");
    listLink.setAttribute("href", "#");
    listLink.innerText = list;
    newList.appendChild(listLink);
  }


  var currentList = document.getElementById("currentList")
  var listCheck = currentList.getAttribute("name");
  console.log(listCheck);

  if (listCheck === "none") {
    var listHolder = document.getElementById("listHolder");
    listHolder.removeChild(currentList);

    var currentList = document.createElement("ul");
    currentList.setAttribute("id", "currentList")
    currentList.setAttribute("name", list);
    listHolder.appendChild(currentList);

    var li = document.createElement('li');
    currentList.appendChild(li);

    var link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("class", "listItem");
    link.setAttribute("id", item);
    link.innerText = item;
    li.appendChild(link);
  } else if (listCheck === list) {
    var li = document.createElement('li');
    currentList.appendChild(li);

    var link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("class", "listItem");
    link.setAttribute("id", item);
    link.innerText = item;
    li.appendChild(link);
  } else {
    var listHolder = document.getElementById("listHolder");
    listHolder.removeChild(currentList);

    var currentList = document.createElement("ul");
    currentList.setAttribute("id", "currentList")
    currentList.setAttribute("name", list);
    listHolder.appendChild(currentList);

    var li = document.createElement('li');
    currentList.appendChild(li);

    var link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("class", "listItem");
    link.setAttribute("id", item);
    link.innerText = item;
    li.appendChild(link);
  }



  var list = {list: list, items: items}
  lists.push(list);

  // var url = "http://localhost/";
  // var xhr = new XMLHttpRequest();
  //
  // console.log(url);

  // xhr.open("POST", "server.js");
  // xhr.send(lists);


  itemInput.value = "";
  linkInput.value = "";
  listInput.value = "";
  listCounter = 0;
  console.log(list)
  })
