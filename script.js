const inputBox=document.querySelector(".text");
console.log(inputBox.textContent);
inputBox.innerHTML=5;

const box=document.querySelectorAll(".box");
box.forEach((boxes,index)=>{
    boxes.id=`box-${index+1}`;
});

box.forEach((boxes,index)=>{
    boxes.addEventListener("click",(e)=>{
        const arr=['1','2','3','4','5','6','7','8','9','0'];
        if(arr.includes(e.target.textContent)){
            inputBox.textContent=e.target.textContent;
        }
        
    });
});