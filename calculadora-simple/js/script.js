function calcular(num1, num2, operacion) {
    if(operacion == 'suma') {
        let sum = s
    }
}
   

window.addEventListener('load', function(){
    let num1 = Number(document.getElementById('operadorA').value)
    let num2 = Number(document.getElementById('operadorB').value)
    let operacion = document.getElementById('operacion').value  

    const button = document.getElementById('calcular')

    button.addEventListener('click', function() {
        const result = calcular(num1, num2, operacion)
        alert(result)
    })
  })