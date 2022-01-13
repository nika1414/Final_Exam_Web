// https://corona.lmao.ninja/v2/countries?yesterday&sort

fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort').then((resp) => {
    return resp.json()
}).then((completeData) => {
    console.log(completeData);
    let data1 ='';
    let data2 = '';
    completeData.map((values)=> {
        data2 = `
<tr>
      <th>Country - Flag </th>
      <th>Cases</th>
      <th>Todays Cases</th>
      <th>Deaths</th>
      <th>Population</th>
      <th>Continent</th>
</tr>`;


data1+=`
<tr>
      <td> ${values.country } <img class="imgClass" src=${values.countryInfo.flag}> </img></td>
      <td> ${values.cases}</td>
      <td> ${values.todayCases}</td>
      <td> ${values.deaths}</td>
      <td> ${values.population}</td>
      <td> ${values.continent}</td>
</tr>`;

    });
    document.getElementById('table').innerHTML = data2 + data1;
}).catch((err)=> {
    console.log("error: " + err)
})

function myFunction(num) {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById(num);
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[num - 1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }