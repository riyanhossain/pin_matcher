
function g_pin() {
    let rndm=Math.random()*100000
    rndm=Math.round(rndm);
    document.getElementById('random').value=rndm;
    
}
const bton=document.getElementById('keypad').addEventListener('click',function(event){
    const num1=event.target.innerText
    const calcInput = document.getElementById('display1');
    if (isNaN(num1)) {
        if (num1 == 'C') {
            calcInput.value = '';
        }
        else if(num1=='<')
        {
            let pn=calcInput.value;
            pn=Math.floor(pn/10);
            calcInput.value=pn;
            
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + num1;
        calcInput.value = newNumber;
    }
})
function verify() {
    console.log(254)
    let dbtn=document.getElementById("display1").value;
    let gbtn=document.getElementById('random').value;
    const ns=document.getElementById('ns');
    const nf=document.getElementById('nf');
    if(dbtn==gbtn){
        
        ns.style.display='block';
        nf.style.display='none';

    }
    else{
        nf.style.display='block';
        ns.style.display='none';
    }
    
}