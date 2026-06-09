const cars = {

bugatti:{
name:"Bugatti Chiron",
image:"imgs/OIP.webp",
speed:"304 MPH",
hp:"1500 HP",
accel:"2.3s",
price:"$3,000,000",
description:"Legendary hypercar."
},

lambo:{
name:"Lamborghini Aventador",
image:"imgs/OIP (4).webp",
speed:"217 MPH",
hp:"769 HP",
accel:"2.8s",
price:"$507,000",
description:"Italian V12 supercar."
},

ferrari:{
name:"Ferrari Concept",
image:"imgs/OIP (1).webp",
speed:"220 MPH",
hp:"830 HP",
accel:"2.9s",
price:"$600,000",
description:"Futuristic Ferrari concept."
},

pagani:{
name:"Pagani Huayra",
image:"imgs/download.webp",
speed:"238 MPH",
hp:"791 HP",
accel:"2.8s",
price:"$2,600,000",
description:"Hand-built Italian hypercar."
},

smart:{
name:"Smart Brabus",
image:"imgs/OIP (2).webp",
speed:"96 MPH",
hp:"109 HP",
accel:"9.5s",
price:"$25,000",
description:"Tiny but fun city car."
}

};

function showCar(car){

document.getElementById("carName").innerText = cars[car].name;
document.getElementById("carImage").src = cars[car].image;
document.getElementById("speed").innerText = cars[car].speed;
document.getElementById("hp").innerText = cars[car].hp;
document.getElementById("accel").innerText = cars[car].accel;
document.getElementById("price").innerText = cars[car].price;
document.getElementById("description").innerText =
cars[car].description;

}