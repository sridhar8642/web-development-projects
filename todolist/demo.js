var input = document.getElementById("input");
var listcon = document.getElementById("list-container");
function add(){
    var listitem = document.createElement("li");
    listitem.innerHTML=input.value+"<button onclick='deleteitem(event)'>Delete</button>";
    listcon.append(listitem);
}
function deleteitem(event){
    event.target.parentElement.remove();
}
