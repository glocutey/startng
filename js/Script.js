document.querySelector('button').disabled = true;
let form = document.querySelector('form');

let name = form['name'];
let message = form['message'];

name.addEventListener('keydown', (event)=>{
    console.log(name);
    if (name.value.length < 4){
        document.getElementById('msg1').innerText = "* Name must be at least 4 characters";
        document.querySelector('button').disabled = true;
    }else{
        document.getElementById('msg1').innerText = "";
        document.querySelector('button').disabled = false;
    }
})

message.addEventListener('keydown', (event)=>{
    console.log(name);
    if (message.value.length < 20){
        document.getElementById('msg4').innerText = "* Message must contain at least 20 characters";
        document.querySelector('button').disabled = true;
    }else{
        document.getElementById('msg4').innerText = "";
        document.querySelector('button').disabled = false;
    }
})//
