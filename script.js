const inputBox=document.querySelector(".text");
console.log(inputBox.textContent);

const box=document.querySelectorAll(".box");
let op=[];
let input='';
box.forEach((boxes,index)=>{
    boxes.addEventListener("click",(e)=>{
        let val=e.target.textContent;
        const check=['='];
        const arr=['1','2','3','4','5','6','7','8','9','0'];
        const clear=['AC'];
        if(clear.includes(val)){
            input='';
            op=[];
            inputBox.textContent=0;
        }
        if(arr.includes(val)){
            input+=val;
            inputBox.textContent=input;   
        }
        else if(!arr.includes(val) && !check.includes(val) && !clear.includes(val)){
           if(input!==''){
            op.push(parseInt(input));
            op.push(val);
            input='';
           }
        }else if(check.includes(val)){
            if(input!==''){
                op.push(parseInt(input));
                console.log(calculate(op));
                inputBox.textContent=calculate(op);
                input=calculate(op);
                op.push(calculate(op));
            }
        }
    });
});

const calculate=(arr)=>{
    let result=arr[0];
    for(let i=1;i<arr.length;i+=2){
        let num=arr[i+1];
        if(arr[i]==='+'){
            result+=num;
        }else if(arr[i]=='-'){
            result-=num;
        }else if(arr[i]=='x'){
            result*=num;
        }else if(arr[i]=='/'){
            result/=num;
        }
    }
    return result;
}