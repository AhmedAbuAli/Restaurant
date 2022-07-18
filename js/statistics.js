function  getData() {
    let retrivedData  = localStorage.getItem("Drinks")

    let parsedData = JSON.parse(retrivedData)
    
}


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