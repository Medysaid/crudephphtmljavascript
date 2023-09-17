// Initialization for ES Users

  const table = document.getElementById("table")
 
  
  

  document.addEventListener("DOMContentLoaded", async function () {
    const getData = await fetch('http://localhost:9080/dataController.php')
    const response =await getData.json()
    
    const data =response;
    let tableData = ''
    data.sort((a, b) => {
            const nameA = a.name.toLowerCase(); // Convert to lowercase for case-insensitive sorting
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          });
          
          data.map(data=>{
            tableData +='<tr>'+
           ' <td class="px-4 py-2 border">'+data.name +'</td>'+
           ' <td class="px-4 py-2 border">'+data.position +'</td>'+
           ' <td class="px-4 py-2 border">'+data.salary +'</td>'+
          '</tr>'
          })
          
          table.innerHTML=tableData  
  });
  