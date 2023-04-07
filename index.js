// // function declaration
// // function testFunction
//     hello();

//     function testFunction(){
//         const x = 5;
//         const y = 10;
//         console.log(x + y);
//     }

//     function hello(){
//         console.log('hello');
//     }
//     hello();
//     hello();

//     function unixTime(){
//         let time = math
// }
//
// function count (){
//     let c = 9;
//     c++;
//     console.log(c);
// }
// count();
// count();
// count();
// count();

// function f1(a,b,c){

// }
// function sum () {
//     const x = 5;
//     const y = 6;
//     console.log(x + y);
// }

// sum()

// let x = 55;
// let y = 66;
// function sum2(){
//     console.log(x + y);
// }

// sum2();

// x = 100;
// y = 200;
// sum2();

// function sum3(x1, y1){
//     console.log(x1 + y1);
// }

// sum3(44, 11);
// sum3(100, 200);
// let z = 77;
// sum3(z, 10);
// sum3(z, z*2);
// sum3(2,3,4,5,6);
// sum3(6);

let shipName = prompt("titanik");
let fuelAmount = parseInt(prompt("100"));
let maxFuelAmount = parseInt(prompt("200"));
let shipSpeed = parseFloat(prompt("80"));
console.log("korabl gotov");
console.log("skorost" + fuelAmount);
console.log("max skorost" + maxFuelAmount);
console.log("topliova" + shipSpeed);

const distance = 1000;
const speed = 500;

let time = 0;
function flightTime(distance, speed) {
  time = distance / speed;
}
flightTime(distance, speed);
console.log(time, "time");

function checkFuel(fuel) {
  if (fuel <= 0) {
    console.log("korabl lomaetsya");
  } else {
    console.log("polet proshel uspeshno");
  }
}
// const fuel = 100;
// checkFuel(fuel);

let planetname = [
  {
    name: "venera",
    distance: 1000,
  },
  {
    name: "upiter",
    distance: 1000,
  },
  {
    name: "mars",
    distance: 1000,
  },
];
let topliva = planetname 
console.log(planetname.name);
planetname.forEach((el) => {
  console.log(el);
});

// let fuel = parseInt(prompt("Введите начальное количество топлива:"));
// const distancePerFlight = 500; // расстояние, которое проходит корабль за один полет

// // совершаем первый полет
// fuel -= distancePerFlight;
// alert(`Остаток топлива после первого полета: ${fuel}`);

// // проверяем остаток топлива после первого полета и совершаем второй полет
// if (fuel < distancePerFlight) {
//   alert("Корабль ломается, недостаточно топлива для следующего полета");
// } else {
//   fuel -= distancePerFlight;
//   alert(`Остаток топлива после второго полета: ${fuel}`);
// }

// // повторяем проверку и совершаем третий полет
// if (fuel < distancePerFlight) {
//   alert("Корабль ломается, недостаточно топлива для следующего полета");
// } else {
//   fuel -= distancePerFlight;
//   alert(`Остаток топлива после третьего полета: ${fuel}`);
// }




function takeOff() {
  fuel -= distancePerFlight;
  alert(`Полет прошел успешно. Остаток топлива: ${fuel}`);
}

function refuel() {
  fuel += fuelPerRefill;
  alert(`Заправка прошла успешно. Текущее количество топлива: ${fuel}`);
}



let fuel = 1500;
const distancePerFlight = 500;
const fuelPerRefill = 500;

let starSystems = [
  { name: "Alpha Centauri", distance: 4.3 },
  { name: "Sirius", distance: 8.6 },
  { name: "Proxima Centauri", distance: 4.24 }
];



for (let i = 0; i < starSystems.length; i++) {
  const system = starSystems[i];
  alert(`Прибытие в систему ${system.name}. Расстояние до системы: ${system.distance} св.лет.`);

  while (fuel >= distancePerFlight) {
    takeOff();
  }

  if (fuel < distancePerFlight) {
    alert('Корабль ломается, недостаточно топлива для следующего полета');
    break;
  }

  refuel();
}



alert('Путешествие окончено!');


