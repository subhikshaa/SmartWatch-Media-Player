setInterval(showTime, 1000);
var weekdays = ['Sunday','Monday','Tuesday','Wesnesday','Thrusday','Friday','Saturday','Sunday'];

 function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    let date = time.getDay();
    let weekname = weekdays[date];
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" + min;
  
    document.getElementById("text1").innerHTML = currentTime;
    document.getElementById("text2").innerHTML = currentTime;
    document.getElementById("day").innerHTML = weekname;
 }
function displayList(){
    var list = document.querySelector(".container1");
    var para = document.querySelector(".container2");
    if(list.style.display == 'none'){
        list.style.display = 'flex'
    }else{
        list.style.display = 'none'
    }
    para.style.display = 'none'
}
function displayJava(){
    var para = document.querySelector(".container2");
    if(para.style.display == 'none'){
        para.style.display = 'flex';
        para.innerHTML = `<p>Java is a high level programming language developed my Sun Microsystem</p>`
    }else{
        para.style.display = 'none'
    }
}

function displayHtml(){
    var para = document.querySelector(".container2");
    if(para.style.display == 'none'){
        para.style.display = 'flex';
        para.innerHTML = `<p>HTML is the standard markup language for creating Web pages.</p>`
    }else{
        para.style.display = 'none'
    }
}

function displayCss(){
    var para = document.querySelector(".container2");
    if(para.style.display == 'none'){
        para.style.display = 'flex';
        para.innerHTML = `<p>CSS is the language we use to style a Web page.</p>`
    }else{
        para.style.display = 'none'
    }
}s

function displayMedia(){
    var media = document.querySelector(".container3")
    if(media.style.display == 'none'){
        media.style.display = 'flex';
    }else{
        media.style.display = 'none';
    }
}
//var b = 'Lamberghini (Full Video) _ The Doorbeen Feat Ragini _ Latest Punjabi Song 2018 _ Speed Records ( 1080 X 1920 ).mp4'

function musicOne(){
    var one = 'Get Low Furious 7 Dillon Francis DJ Snake (englishsongs.wapkiz.com).mp3'
    var play = document.getElementById("my-play");
    play.innerHTML = `<audio controls class="my-play">
                    <source src="${one}">
                 </audio>`
}
function musictwo(){
    var two = 'Alan Walker, Sabrina Carpenter & Farruko - On My Way.mp3'
    var play = document.getElementById("my-play");
    play.innerHTML = `<audio controls class="my-play">
                    <source src="${two}">
                 </audio>`
}
function musicthree(){
    var three = 'Alan Walker - Faded.mp3'
    var play = document.getElementById("my-play");
    play.innerHTML = `<audio controls class="my-play">
                    <source src="${three}">
                 </audio>`
}
function musicfour(){
    var four = 'Alan Walker, K-391 & Emelie Hollow - Lily.mp3'
    var play = document.getElementById("my-play");
    play.innerHTML = `<audio controls class="my-play">
                    <source src="${four}">
                 </audio>`
}
function musicfive(){
    var five = 'Major Lazer & DJ Snake - Lean On (feat. MØ) (Official).mp3'
    var play = document.getElementById("my-play");
    play.innerHTML = `<audio controls class="my-play">
                    <source src="${five}">
                 </audio>`
}