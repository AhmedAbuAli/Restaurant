function getData() {
    retrivedData = localStorage.getItem("All Meals : ");
    paresedData = JSON.parse(retrivedData)
    console.log(paresedData);
    for (let i = 0; i < paresedData.length; i++) {
        

        var table = document.getElementById("table");
        var row= document.createElement("tr");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        td1.innerHTML = paresedData[i].foodId
        console.log(td1.innerHTML);
        td2.innerHTML = paresedData[i].foodName
        td3.innerHTML = paresedData[i].type
        td4.innerHTML = paresedData[i].price
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);

        table.children[0].appendChild(row);
    }
}
getData();

