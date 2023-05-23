const result = document.querySelector('.res');
const table = document.querySelector('.table')
const get = (n) => { 
    result.value += n;
}
function key(event) {
    if (event.key == "0" || event.key == "1" ||
        event.key == "2" || event.key == "3" ||
        event.key == "4" || event.key == "5" ||
        event.key == "6" || event.key == "7" ||
        event.key == "8" || event.key == "9" ||
        event.key == "*" || event.key == "/" ||
        event.key == "-" || event.key == "+" 
    )
    result.value += event.key;
    if (event.key == "=") {
        solve();
    }
}

table.addEventListener('onkeyup', (event) => {
    if (event.keyCode === 13) {
        console.log('Enter');
        console.log(result.value);
        evaluate();
    }
})

function solve() {
    
    let symbols = ['*', '/'];
    for (let i = 0; i < result.value.length; i++) {
        for (let j = i + 1; j < result.value.length + 1; j++) {
            for (let k = 0; k < symbols.length; k++) {
                if (result.value[i] === symbols[k] && result.value[j] === symbols[k]) {
                    result.value = "Syntax Error"
                }
            }
        }
    }
    if (result.value.slice(0,1) === '*' || result.value.slice(0,1) === '+' ||
        result.value.slice(0,1) === '/' || result.value.slice(0,1) === '-'
    ) {
        result.value = "Syntax Error";
    } else {
        let newRes = eval(result.value);
        console.log(newRes)
        result.value = newRes;
    }

}
// clear the result box
const clr = () => {
    result.value = "";
}