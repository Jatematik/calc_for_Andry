const calc = () => {
    const calculator = document.getElementById('calculator'),
        inputFront = document.getElementById('front'),
        inputBack = document.getElementById('back'),
        inputSmall = document.getElementById('small'),
        inputMiddle = document.getElementById('middle'),
        inputLast = document.getElementById('last'),
        inputResult = document.getElementById('input-result');

    const sum = () => {
        let total = 0;
        // Выбор класса авто
        if (inputSmall.checked) {
            total = 2000;
            document.querySelector('label[for="small"]').classList.add('active');
            document.querySelector('label[for="middle"]').classList.remove('active');
            document.querySelector('label[for="last"]').classList.remove('active');
        } else if (inputMiddle.checked) {
            total = 4000;
            document.querySelector('label[for="small"]').classList.remove('active');
            document.querySelector('label[for="middle"]').classList.add('active');
            document.querySelector('label[for="last"]').classList.remove('active');
        } else if (inputLast.checked) {
            total = 6000;
            document.querySelector('label[for="small"]').classList.remove('active');
            document.querySelector('label[for="middle"]').classList.remove('active');
            document.querySelector('label[for="last"]').classList.add('active');
        }
        // Выбор стекла
        if (inputFront.checked) {
            total = total + 10000;
        }
        if (inputBack.checked) {
            total = total + 5000;
        }
        inputResult.value = total;
    };

    calculator.addEventListener('change', (event) => {
        let target = event.target;
        if (target.matches('input')) {
            sum();
        }
    });
};

calc();