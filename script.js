const dailog=document.getElementById("dialogBox");
const add=document.getElementById("addbtn");
const cross=document.getElementById("cross");
const main=document.getElementById("main");
const title = document.getElementById("title");
const todotext = document.getElementById("todotext");
const error=document.querySelector(".error");
//let editMode=-1;
let count=0;

let data = JSON.parse(localStorage.getItem("todos")) || [];
count=data.length;

for(let i=0;i<data.length;i++){
    let todotext =  `<div class="box" todo-id='${i}'>
    <div class="box-header">
        <div class="heading">${data[i].title}</div>
        <div class="btn-container"> 
        <i class="fa fa-edit" style="font-size:24px"></i>  
            <button>x</button>
        </div>
    </div>
    
     <textarea class="text1">${data[i].text}</textarea>

 </div>`;
    main.innerHTML = main.innerHTML + todotext;
}

deletelisteners();


add.addEventListener("click" ,function(){
    dailog.style.display="flex";
});
cross.addEventListener("click" ,function(){
    dailog.style.display="none";
    error.classList.add("hide");
    title.value="";
    todotext.value="";
});
function addtodo() {
    if(todotext.value!=="" && title.value!==""){
     let todo_text = `<div class="box" todo-id='${count}'>
     <div class="box-header">
        <div class="heading">${title.value}</div>
        <div class="btn-container">
        <i class="fa fa-edit"></i>
            <button>x</button>
        </div>
     </div>
      
      <textarea class="text1">${todotext.value}</textarea>
      
     </div>`;
     main.innerHTML = main.innerHTML + todo_text;
     deletelisteners();
     let todos = JSON.parse(localStorage.getItem("todos")) || [];
     todos.push ({
         id:count,
         title:title.value,
         text:todotext.value
     });
     count += 1;

     localStorage.setItem("todos", JSON.stringify(todos));

     todotext.value = "";
     title.value = "";
     dailog.style.display = "none";
   }
   else{
       error.classList.remove("hide");
   }
 
}
function deletelisteners() {
    const delarr=document.querySelectorAll(".btn-container button");
    const editarr=document.querySelectorAll(".btn-container i");

   // console.log(delarr);
   // return;
    for (let i = 0; i < delarr.length; i++) {
        delarr[i].addEventListener("click", function (e) {
            let todo = e.target.closest(".box");
            console.log(todo);
         // todo.classList.add("hide");
            
           let id = todo.getAttribute("todo-id");
           // console.log(id);
            let data = JSON.parse(localStorage.getItem("todos"));
            let newData = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].id != id) {
                   newData.push(data[i]);
                }
            }
          //  console.log(newData);
            localStorage.setItem("todos", JSON.stringify(newData));
            todo.classList.add("hide");
        });

        editarr[i].addEventListener("click", function(e){
            dailog.style.display="flex";
            let todo = e.target.closest(".box");
           title.value=todo.querySelector(".heading").innerText;
           todotext.value=todo.querySelector(".text1").innerText;
           console.log(todotext.value);


        });

    }

    
}
// deletelisteners();
// let data=[sx
//     {
//         tittle:"Task1",
//         text:"This is Task1"
//     },
//     {
//         tittle:"Task2",
//         text:"This is Task2"
//     },
//     {
//         tittle:"Task2",
//         text:"This is Task2"
//     }
// ];
// for(let i=0;i<data.length;i++){
//     let todotext1 =  `<div class="box">
//     <div class="box-header">
//         <div class="heading">${data[i].tittle}</div>
//         <div class="btn-container">
//             <div class="minus">-</div>
//             <div class="crosss">x</div>
//         </div>
//     </div>
//     <textarea>${data[i].text}</textarea>
// </div>`;
//     main.innerHTML = main.innerHTML + todotext1;
// }*/