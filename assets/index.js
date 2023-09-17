// Initialization for ES Users

  const table = document.getElementById("table")
  
  const inputField = document.getElementById('name');
const baseUrl = 'http://localhost:9080'
// inputField.addEventListener('keydown', function(event) {
//     const inputValue = inputField.value;
//     console.log(inputValue);

// });

  document.addEventListener("DOMContentLoaded", async function () {

  
    const getData = await fetch(baseUrl+'/dataController.php')
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

 
   const  saveData = async () => {
    let name = document.getElementById("name").value
    let postion = document.getElementById("postion").value
    let salary = document.getElementById("salary").value
  
    dataBody = {
      name:name,
      postion:postion,
      salary:salary
    }

    const res = await fetch(baseUrl+'/dataController.php',{
      method:'POST',
      body:JSON.stringify(dataBody),
      headers:{}
    })

const response = await res.json()
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


if(response.status == 200){
  Toast.fire({
    icon: 'success',
    title: 'Signed in successfully'
  })
  
    modal.style.display = "none";
  
}
    console.log(response);
    document.getElementById("name").value = ''
    document.getElementById("postion").value=''
    document.getElementById("salary").value=''
    
  }
  

 