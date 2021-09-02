let black_text = true;

function changeText() {
    if(black_text) {
        document.getElementById('header').innerHTML = 'Red'
        document.getElementById('header').style.color = 'red'
        black_text = false;
    }
    else {
        document.getElementById('header').innerHTML = 'Black'
        document.getElementById('header').style.color = 'black'
        black_text = true;
    }
}