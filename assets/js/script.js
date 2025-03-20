
        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function deleteLast() {
            let currentDisplay = document.getElementById('display').value;
            document.getElementById('display').value = currentDisplay.slice(0, -1);
        }

        function displayvalue(value) {
            document.getElementById('display').value += value;
        }

        function calculate() {
            try {
                let expression = document.getElementById('display').value;
                let result = eval(expression);
                document.getElementById('display').value = result;
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }
    