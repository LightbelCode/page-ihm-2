// window.addEventListener('scroll', () => {
//     const header = document.querySelector('header')
//     header.classList.toggle('sticky', window.scrollY > 0)
// })

const buttons = [...document.querySelectorAll(".btn:not(#equal)")],
formCalc = document.getElementById('formCalc') 

let resultado = ""

const equal = document.getElementById('equal')

buttons.forEach((button) => {
    button.addEventListener('click' , e => {
        let value = e.target.textContent;
        console.log(value);
        if (value === "x" || value === "X") {
            value = "*";
        }
        if (value === "DEL") {
            formCalc.value = formCalc.value.slice(0, -1);
        } else if (value == "RESET" || value === "REINICIAR") {
            formCalc.value = "";
        } else {
            formCalc.value += value
        }
    })
})

equal.addEventListener('click', e => {
    e.preventDefault()
    resultado = eval(formCalc.value)
    console.log(resultado);
    formCalc.value = resultado
})