function insert(num){
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num, number - num, number * num, number / num;
}

function calculate(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = eval(result);
}

function clean(){
    document.getElementById('result').innerHTML = "";
}