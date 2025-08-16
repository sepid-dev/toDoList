const planbtn=document.getElementById("planbtn");
const list=document.getElementById('tasks');
const childs=list.children;
let input;
input=document.getElementById('mydate');

planbtn.addEventListener('click',addlist);

input.addEventListener('keypress',addlistkey);



for(let x in childs){
    console.log(childs[x]);
    // x.addEventListener('click',function (){
    //     x.classList.add('green');
    // })
}



function addlistkey(event){
    if(input.value.length>0 && event.which===13){
        createList();
    }
}

function addlist(){
    if(input.value.length>0){
        createList();
    }
}
function createList(){
    const element=document.createElement('li');
    element.textContent=input.value;
    list.appendChild(element);
    input.value='';
    function crosslist(){
        element.classList.add('green');
    }
    element.addEventListener('click',crosslist);

    let btnD=document.createElement('button');
    btnD.textContent="x";
    btnD.classList.add('positionB');
    element.appendChild(btnD);

    function deletlist(){
        element.classList.add('deletL');
    }

    btnD.addEventListener('click',deletlist);
}

// function colorme(){
// a.style.backgroundColor='green';
// }