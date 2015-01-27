var button = document.getElementById("button");
var items = [];
var lists = ["placeholder"];
var listCounter = 0;

var submitCount = 1;

button.addEventListener('click', function(event) {
  var itemInput = document.getElementById("item");
  var item = itemInput.value;
  // console.log(item);
  var linkInput = document.getElementById("link");
  var url = linkInput.value;
  // console.log(url);
  var listInput = document.getElementById("list");
  var list = listInput.value;
  // console.log(list);
 console.log("submitCount is: " + submitCount);
 submitCount += 1;

  var currentItems = [];

//updating database
  lists.forEach(function(listObj) {
    if (listObj.list === list) {
      listCounter += 1;
      // console.log("listCounter is now: "+ listCounter)
      var currentList = list;
      var currentItems = listObj.items;

      currentItems.forEach(function(itemObj) {
        if (itemObj.item === item) {
          alert("that item is already on your list! Maybe be more specific if its not!");
        } else {
          var item = {item: item, link: url};
          items.push(item);
          // console.log(items);
          }
        })
    } else {
      var currentList = list;
      var currentItems = [];
      var item = {item: item, link: url};
      items.push(item);
      // console.log(items);
    }
  })
//adding new list to yourlists
  // console.log(listCounter);
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
//adding list item
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
    console.log("got here 1")
    console.log(list);
    var listHolder = document.getElementById("listHolder");
    listHolder.removeChild(currentList);

    var currentList = document.createElement("ul");
    currentList.setAttribute("id", "currentList")
    currentList.setAttribute("name", list);
    listHolder.appendChild(currentList);

    lists.forEach(function(list) {
      console.log(listCheck)
      if (listCheck === list) {
        console.log("got here 2")
        var items = list.items;
        items.forEach(function(item) {
          console.log("got here 3")
          var li = document.createElement('li');
          currentList.appendChild(li);

          var link = document.createElement("a");
          link.setAttribute("href", url);
          link.setAttribute("class", "listItem");
          link.setAttribute("id", item);
          link.innerText = item;
          li.appendChild(link);
        })
      }
    })

    var li = document.createElement('li');
    currentList.appendChild(li);

    var link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("class", "listItem");
    link.setAttribute("id", item);
    link.innerText = item;
    li.appendChild(link);
  }

console.log(listCheck);

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
  // console.log(list)
  })
