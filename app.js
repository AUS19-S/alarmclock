function userInsertion(){
    let user = "";
        while(true){
    user = prompt("Insert your name.");
        if(!user){
            alert("Please, insert your name,")
        else if(!isNaN(user)){
            alert("Please, insert your name correctly")
        } else {
            break;
        }
    }
    return user;
}
user = userInsertion();

document.addEventListener("DOMContentLoaded", ()=>{

    let watch = setInterval(()=>{

        
        let hours = document.getElementById("hours");
        let minutes =  document.getElementById("minutes");
        let seconds = document.getElementById("seconds");
        const p = document.getElementById("p");
        const img =  document.querySelector("img");
        const total = document.getElementById("total");

        let time = new Date();
        let h = time.getHours();
        let m = time.getMinutes();
        let s = time.getSeconds();

        if(h < 10) h = "0" + h;
        if(m < 10) m = "0" + m;
        if(s < 10) s = "0" + s;

        if(h >= 0 && h < 12){
            p.innerText = "Good Morning, " + user + "!" + " It's time of breakfast.";
            p.style.color = "black";
            total.style.backgroundColor = "rgba(247, 204, 88, 1)";
            img.setAttribute("src", "pexels-shotbyrain-3030459.jpg");
        } else if(h >= 12 && h < 18){
            p.textContent = "Good Afternoon!" + user + "!" + " It's time to lunch." ;
            p.style.color = "green";
            total.style.backgroundColor = "";
            img.setAttribute("src", "pexels-koolshooters-8530483.jpg");
        } else if(h >=18 && h > 18){
            p.textContent = "Good Evening!" + user + "!" + " It's time of dinner and after sleep.";
            img.setAttribute("src", "pexels-stefanstefancik-91216.jpg");
            total.style.backgroundColor = "back"
        }

        hours.innerHTML = h;
        minutes.textContent = m;
        seconds.textContent = s;
    })
})
