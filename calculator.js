let display = document.querySelector('#inputbox');
let buttons = document.querySelectorAll('button');         // returns node list

// Array.from() converts any iterable object into an array. (convert node list to array)
let buttonsArr = Array.from(buttons);

let str='';

buttonsArr.forEach(btn => {
    btn.addEventListener('click',(e) =>{
        if(e.target.innerHTML == 'DEL'){
            // substring() extracts characters from a string and returns the substring.
            str = str.substring(0,str.length-1);
            display.value = str;
        }else if(e.target.innerHTML == 'AC'){
            str = '';
            display.value = str;
        }else if(e.target.innerHTML == '='){
            // eval() used to evaluates JavaScript code represented as a string.
            str = eval(str);
            display.value = str;
        }else{
            str +=e.target.innerHTML;
            display.value = str;
        }
    })
})

/* substring() 
This method extracts characters, between two indices (positions), from a string, 
and returns the substring. 
It extracts characters from start to end (exclusive) and does not change the original string. 

e.type: 'click'
-----------------------------
e.target: '<button>7</button>'
e.target.innerHTML: '7'       */