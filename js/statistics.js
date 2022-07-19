let fruitCount = 0 ;
let starchyCount = 0 ;
let dairyCount  = 0 ; 
let proteinCount = 0 ; 
let fatCount = 0 ;

var nameValues = [];
var priceValues = [];

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
        td2.innerHTML = paresedData[i].foodName
        nameValues.push(paresedData[i].foodName)
        td3.innerHTML = paresedData[i].type

        if ( paresedData[i].type == "Fruit and vegetables"){
            fruitCount += 1 ;
        }
        if ( paresedData[i].type == "Starchy food"){
            starchyCount += 1 ;
        }
        if ( paresedData[i].type == "Dairy"){
            dairyCount += 1 ;
        }
        if ( paresedData[i].type == "Protein"){
            proteinCount += 1 ;
        }
        if ( paresedData[i].type == "Fat"){
            fatCount += 1 ;
        }

        td4.innerHTML = paresedData[i].price
        priceValues.push(paresedData[i].price)
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);

        table.children[0].appendChild(row);
    }
    var xValues = ["Fruit and vegetables", "Starchy food", "Dairy", "Protein", "Fat"];
    var yValues = [fruitCount , starchyCount , dairyCount , proteinCount , fatCount];
    var barColors = [
        "green",
        "red",
        "yellow",
        "blue",
        "skyblue"
      ];

    new Chart("myChart", {
        type: "pie",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
            title: {
              display: true,
              text: "Meals QTY"
            }
          }

      });

      var barColors = ["red", "green","blue","orange","brown"];


      new Chart("myChart2", {
        type: "bar",
        data: {
          labels: nameValues,
          datasets: [{
            backgroundColor: barColors,
            data: priceValues,
          }]
        },
        options: {
          legend: {display: false},
          title: {
            display: true,
            text: "Meals Prices"
          }
        }
      });




}
getData();

