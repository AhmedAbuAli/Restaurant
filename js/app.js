"use-strict";

function Food( foodId , foodName , type , price){
    this.foodId = foodId ; 
    this.foodName = foodName ; 
    this.type = type ; 
    this.price = price ; 
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }

const form = document.getElementById("formID")
form.addEventListener("submit" , handleSubmit)



function handleSubmit (event){
    event.preventDefault()
    let meal = new Food(getRndInteger(1111,9999),event.target.foodName.value , event.target.type.value , event.target.price.value)
    meal.render()
    console.log(meal);
    return meal 
  
};

Food.prototype.render = function (){
    var table = document.getElementById("table");
    var row= document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    td1.innerHTML = this.foodId
    td2.innerHTML = this.foodName
    td3.innerHTML = this.type 
    td4.innerHTML = this.price

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    table.children[0].appendChild(row);
}




  
