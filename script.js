    TrackJS.track('Testing TrackJS!');
    
    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      try {
        const firstNumber = Number(firstNum);
        const secondNumber = Number(secondNum);
        if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
            throw new Error('Both input must be a number');
        }
        output.textContent = eval(`${firstNumber} ${operator} ${secondNumber}`);
      }
      catch(e) {
        console.error(e);
      }
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    // Start your code here
    // You may move this JS to another file if you wish
    document.getElementById('console-log').addEventListener('click', () => {
        console.log('console logged!');
    });
    
    document.getElementById('console-error').addEventListener('click', () => {
        console.error('This is the console.error method');
    });

    document.getElementById('console-count').addEventListener('click', () => {
        console.count('Number'); 
    });

    document.getElementById('console-warn').addEventListener('click', () => {
        console.warn('warning');
    });    

    document.getElementById('console-assert').addEventListener('click', () => {
        const num1 = 11;
        const num2 = 21;
        const reason = 'These numbers are not equal.';
        console.assert(num1 == num2, {num1, num2, reason})
    });

    document.getElementById('console-clear').addEventListener('click', () => {
        console.clear();
    });

    document.getElementById('console-dir').addEventListener('click', () => {
        console.dir(document.head)
    });

    document.getElementById('console-dirxml').addEventListener('click', () => {
        console.dirxml(document);
    }); 

    document.getElementById('console-group-start').addEventListener('click', () => {
        console.group();
    });

    document.getElementById('console-group-start').addEventListener('click', () => {
        console.groupEnd();
    });

    document.getElementById('console-table').addEventListener('click', () => {
        const table = [
            {
                Name: "Jane",
                Last: "Doe"
            },
            {
                Name: "John",
                Last: "Doe"
            }
        ];
        console.table(table);
    });

    document.getElementById('console-time-start').addEventListener('click', () => {
        console.time();
    });

    document.getElementById('console-time-end').addEventListener('click', () => {
        console.timeEnd();
    });

    document.getElementById('console-trace').addEventListener('click', () => {
        const firstFunction = () => { secondFunction(); };
        const secondFunction = () => { console.trace(); };
        firstFunction();
    });

    document.getElementById('global-error').addEventListener('click', () => {
        bruh();
    });

    window.onerror = function (message) {
    console.log('Global error: An error happened.');
  };