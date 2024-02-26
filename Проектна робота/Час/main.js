setInterval(() =>{ 
    var date = new Date();
    var hour = date.getHours(); 
    var minute = date.getMinutes(); 
    var second = date.getSeconds(); 
    
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    document.querySelector(".time").innerHTML = hour + " : " + minute + " : " + second;
}), 1000