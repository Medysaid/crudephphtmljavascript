// Initialization for ES Users

  const table = document.getElementById("table")
  const basicData = {
      columns: ['Name', 'Position', 'Office', 'Age', 'Start date', 'Salary'],
      rows: [
          {
            name: "Tiger Nixon",
            position: "System Architect",
            office: "Edinburgh",
            age: "61",
            start_date: "2011/04/25",
            salary: "$320,800"
          },
          {
            name: "Garrett Winters",
            position: "Accountant",
            office: "Tokyo",
            age: "63",
            start_date: "2011/07/25",
            salary: "$170,750"
          },
          {
            name: "Ashton Cox",
            position: "Junior Technical Author",
            office: "San Francisco",
            age: "66",
            start_date: "2009/01/12",
            salary: "$86,000"
          },
          {
            name: "Cedric Kelly",
            position: "Senior Javascript Developer",
            office: "Edinburgh",
            age: "22",
            start_date: "2012/03/29",
            salary: "$433,060"
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            start_date: "2008/11/28",
            salary: "$162,700"
          },
          {
            name: "Brielle Williamson",
            position: "Integration Specialist",
            office: "New York",
            age: "61",
            start_date: "2012/12/02",
            salary: "$372,000"
          },
          {
            name: "Herrod Chandler",
            position: "Sales Assistant",
            office: "San Francisco",
            age: "59",
            start_date: "2012/08/06",
            salary: "$137,500"
          },
          {
            name: "Rhona Davidson",
            position: "Integration Specialist",
            office: "Tokyo",
            age: "55",
            start_date: "2010/10/14",
            salary: "$327,900"
          },
          {
            name: "Colleen Hurst",
            position: "Javascript Developer",
            office: "San Francisco",
            age: "39",
            start_date: "2009/09/15",
            salary: "$205,500"
          },
          {
            name: "Sonya Frost",
            position: "Software Engineer",
            office: "Edinburgh",
            age: "23",
            start_date: "2008/12/13",
            salary: "$103,600"
          },
          {
            name: "Jena Gaines",
            position: "Office Manager",
            office: "London",
            age: "30",
            start_date: "2008/12/19",
            salary: "$90,560"
          },
          {
            name: "Quinn Flynn",
            position: "Support Lead",
            office: "Edinburgh",
            age: "22",
            start_date: "2013/03/03",
            salary: "$342,000"
          },
          {
            name: "Charde Marshall",
            position: "Regional Director",
            office: "San Francisco",
            age: "36",
            start_date: "2008/10/16",
            salary: "$470,600"
          },
          {
            name: "Haley Kennedy",
            position: "Senior Marketing Designer",
            office: "London",
            age: "43",
            start_date: "2012/12/18",
            salary: "$313,500"
          }
       
     
      ],
    };
  
  

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
  