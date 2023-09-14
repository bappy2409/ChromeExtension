let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-Btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});
for (let a = 0; a < myLeads.length; a++) {
  ulEl.innerHTML += "<li>" + myLeads[a] + "</li>";
}
