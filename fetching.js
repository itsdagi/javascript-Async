fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))

// You are absolutely right, the data variable is not explicitly declared in this specific snippet of code. However, in JavaScript, it is not required to explicitly declare variables prior to use if they are being assigned a value. In this case, the data variable is implicitly declared when the value is assigned to it in the arrow function then(data => console.log(data)). This is a quirk of JavaScript that allows variables to be created and assigned values without an explicit declaration