function Calculate(){
    const radius = document.getElementById('radius').value;
    let para = document.getElementById('para');
    const circumference = 2 * 3.14 * radius;
    const area = 2 * 3.14 * (radius)^2;
    para.innerHTML = `The circumference is: ${circumference}<br/>
    The area is: ${area}`

}