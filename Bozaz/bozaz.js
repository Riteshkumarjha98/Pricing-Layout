document.querySelector("form").addEventListener("submit",Bozazlist)

function Bozazlist(){
    event.preventDefault();
     var Category=document.querySelector("#category").value 
     var Title = document.querySelector("#name").value 
     var Price = document.querySelector("#price").value 

     console.log(Category, Title, Price);

     var tr =document.createElement("tr");

     var td1 = document.createElement("td");
     td1.innerText = Category;
     var td2 = document.createElement("td");
     td2.innerText = Title;
     var td3 = document.createElement("td");
     td3.innerText = Price;

     tr.append(td1,td2,td3);

     document.querySelector("tbody").append(tr);



}