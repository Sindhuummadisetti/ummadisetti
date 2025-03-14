function calculate(operation) {
    
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    
    let result
    switch(operation) {
      case 'add':
        result = x + y;
        break;
      case 'subtract':
        result = x - y;
        break;
      case 'multiply':
        result = x * y;
        break;
      case 'divide':
        if (y === 0) {
          result = "Error: Division by 0";
        } else {
          result = x / y;
        }
        break;
      default:
        result = "Invalid operation";
    }
  
    document.getElementById("result").value = result;
  }
  
