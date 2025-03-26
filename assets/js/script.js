
      
        function clearDisplay() {
            $('#display').val('');
        }
        
        function deleteLast() {
            let currentDisplay = $('#display').val();
            $('#display').val(currentDisplay.slice(0, -1));
        }
        
        function displayvalue(value) {
            $('#display').val(function(i, val) {
                return val + value;
            });
        }
        
        function calculate() {
            try {
                let expression = $('#display').val();
                let result = eval(expression);
                $('#display').val(result);
            } catch (error) {
                $('#display').val('Error');
            }
        }
        
        function calculatePercentage() {
            let currentInput = $('#display').val();
            if (currentInput !== '') {
                let value = parseFloat(currentInput); 
                if (!isNaN(value)) { 
                    let percentageValue = value / 100; 
                    $('#display').val(percentageValue); 
                } else {
                    $('#display').val('Error');
                }
            }
        }
        