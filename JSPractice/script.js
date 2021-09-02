let colors = {0: 'black', 1: 'red', 2: 'blue', 3: 'green', 4: 'yellow'};

let activeColor = 1;

function changeText() {
    switch(activeColor) {
        case 0:
            document.getElementById('header').innerHTML = 'Black';
            document.getElementById('header').style.color = 'black';
            document.body.style.backgroundColor = 'black';
            activeColor++;
            break;
        case 1:
            document.getElementById('header').innerHTML = 'Red';
            document.getElementById('header').style.color = 'red';
            document.body.style.backgroundColor = 'red';
            activeColor++;
            break;
        case 2:
            document.getElementById('header').innerHTML = 'Blue';
            document.getElementById('header').style.color = 'blue';
            document.body.style.backgroundColor = 'blue';
            activeColor++;
            break;
        case 3:
            document.getElementById('header').innerHTML = 'Green';
            document.getElementById('header').style.color = 'green';
            document.body.style.backgroundColor = 'green';
            activeColor++;
            break;
        case 4:
            document.getElementById('header').innerHTML = 'Yellow';
            document.getElementById('header').style.color = 'yellow';
            document.body.style.backgroundColor = 'yellow';
            activeColor = 0;
            break;
    }
}