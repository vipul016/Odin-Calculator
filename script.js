const inputBox=document.querySelector(".text");
console.log(inputBox.textContent);

const box=document.querySelectorAll(".box");
let op=[];
let input='';
const check=['='];
const arr=['1','2','3','4','5','6','7','8','9','0'];
const clear=['AC'];
const dot='.';
const operations="*+/-";
document.addEventListener("keydown",(e)=>{
    let val=e.key;
    console.log(val);
    if(arr.includes(val) || dot.includes(val)){
        if(dot.includes(val) && !input.includes(val)){
        input+=val;
        }else if(!dot.includes(val)) input+=val;
        inputBox.textContent=input;  
    }
    else if(val==='Backspace' && input!=''){
        input=input.substring(0,input.length-1);
        inputBox.textContent=input;
        if(input===''){
            inputBox.textContent=0;
        }
    }else if(operations.includes(val)){
        if(input!==''){
         op.push(parseFloat(input));
         op.push(val);
         input='';
        }
    }else if(val==='Enter'){
        if(input!==''){
            op.push(parseFloat(input));
            inputBox.textContent=calculate(op);
            input=calculate(op);
            op.push(calculate(op));
        }
    }
    
});
box.forEach((boxes,index)=>{
    boxes.addEventListener("click",(e)=>{
        let val=e.target.textContent;
        if(clear.includes(val)){
            input='';
            op=[];
            inputBox.textContent=0;
        }
        if(arr.includes(val) || dot.includes(val)){
            if(dot.includes(val) && !input.includes(val)){
                input+=val;
            }else if(!dot.includes(val)) input+=val;
            inputBox.textContent=input;   
        }
        else if(!arr.includes(val) && !check.includes(val) && !clear.includes(val) && !dot.includes(val)){
           if(input!==''){
            op.push(parseFloat(input));
            op.push(val);
            input='';
           }
        }else if(check.includes(val)){
            if(input!==''){
                op.push(parseFloat(input));
                inputBox.textContent=calculate(op);
                console.log(op);
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
        }else if(arr[i]==='-'){
            result-=num;
        }else if(arr[i]==='*'){
            result*=num;
        }else if(arr[i]==='/'){
            result/=num;
        }
    }
    return result;
}