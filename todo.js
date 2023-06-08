let input = document.getElementById("todoInput");
var ol = document.getElementById("new1");

add.addEventListener("click", (e) => {
  if (ol.children[0].className == "emp1") {
    ol.children[0].remove();
  }

  if (input.value === "") {
    alert("Not a Valid Input, Please provide valid Input here.");
  } else {
    e.preventDefault();
    let li = document.createElement("li");
    li.innerHTML = `<h3 style="display: inline-block;">${input.value}</h3>
    <button id="edit" onclick="editBtn(this)">Edit</button>
    <button id="inDel" onclick="rem(this)">x</button>
    <br><br>`;
    document.getElementById("new1").appendChild(li);
    input.value = "";
  }
});

let btnDel = document.getElementById("del");

btnDel.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("new1").innerHTML = "";
  input.value = "";

  if (ol.children.length <= 0) {
    let emp = document.createElement("h3");
    emp.classList.add("emp1");
    emp.innerText = `Insert Todo Here`;
    ol.appendChild(emp);
  }
});

// EDIT FUNTION
function editBtn(e) {
  if( e.textContent == "Done") {
    e.textContent = "Edit";
    editField = e.previousElementSibling.value;
    let curHeading = document.createElement('h3');
    curHeading.style.display = "inline-block";
    curHeading.textContent = editField;
    e.parentElement.replaceChild(curHeading, e.previousElementSibling);
  }
  else {
    e.textContent = "Done";
    let editField = e.previousElementSibling.textContent;
    let editInput = document.createElement('input');
    editInput.type = "text";
  
    editInput.placeholder = "Todo here...";
  
    editInput.value = editField;
  
    e.parentElement.replaceChild(editInput, e.previousElementSibling)
  }



}

function rem(e) {
  e.parentElement.remove();

  if (ol.children.length <= 0) {
    let emp = document.createElement("h3");
    emp.classList.add("emp1");
    emp.innerText = `Insert Todo Here`;
    ol.appendChild(emp);
  }
}


