var hour = new Date().getHours();
console.log(hour);

if(hour >= 6 && hour <= 12) {
    alert('Good morning!')
    document.body.style.backgroundColor='pink'
}
else if(hour>12 && hour<=18) {
    alert('Good afternoon!')
    document.body.style.backgroundColor='cyan'
}
else if(hour> 18 || hour<6) {
    alert('Good night!')
    document.body.style.backgroundColor='darkblue'
}
