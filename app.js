const bg = document.getElementById("bg");
const text = document.getElementById("text");
const choices = document.getElementById("choices");

function go(id){

const node = STORY[id];

bg.src = node.image;
text.textContent = node.text;

choices.innerHTML="";

node.choices.forEach(choice=>{
const btn=document.createElement("button");
btn.textContent=choice.label;
btn.onclick=()=>go(choice.next);
choices.appendChild(btn);
});

localStorage.setItem("save",id);
}

window.onload=()=>{
go(localStorage.getItem("save") || "start");
};
