window.addEventListener('load', function(){
  const button = document.getElementById('calcular')
  button.addEventListener('click', function() {
    //Leemos los valores que contengan los inputs en el DOM
    let num1 = document.getElementById('operadorA').value
    let num2 = document.getElementById('operadorB').value
    let operacion = document.getElementById('operacion').value    
    function operacionesAritmeticas() {
      switch (operacion) {
          case 'suma':
            let suma = Number(num1) + Number(num2)
            let new_node_suma = document.createElement('h1')
            new_node_suma.innerHTML = `${num1} + ${num2} = ${suma}`
            document.getElementById('resultado').appendChild(new_node_suma)
          break;
          case 'resta':
            let resta = Number(num1) - Number(num2);
            let new_node_resta = document.createElement('h1')
            new_node_resta.innerHTML = `${num1} + ${num2} = ${resta}`
            document.getElementById('resultado').appendChild(new_node_resta)
          break;
          case 'multiplicacion':
            let multiplicacion = Number(num1) * Number(num2);
            let new_node_multiplicacion = document.createElement('h1')
            new_node_multiplicacion.innerHTML =  `${num1} + ${num2} = ${multiplicacion}`
            document.getElementById('resultado').appendChild(new_node_multiplicacion)
          break;
          case 'divicion':
            let divicion = Number(num1) / Number(num2);
            let new_node_divicion = document.createElement('h1')
            new_node_divicion.innerHTML = `${num1} + ${num2} = ${divicion}`
            document.getElementById('resultado').appendChild(new_node_divicion)
          break;
      
          default:
          console.log('default')
          break;
      }
    }

    if(num1.length === 0 | num2.length === 0 | operacion.length === 0) {
      alert('No debe haber ningun campo vacio')
    } else {
      operacionesAritmeticas()
    }

  })
})