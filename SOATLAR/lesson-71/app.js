// const internet = true;

// const getData = () => {
//   return new Promise((resolt, reject) => {
//     if (internet) {
//       resolt("Pirogimiz Pishdi🥞");
//     } else {
//       reject("Pirogimiz kuyib ketdi🍕");
//     }
//   });
// };

// getData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(arr);
//   });

// let x = [1, 2, 3]
// let y = [4, 5]

// const result = x.concat(y)
// console.log(result);

function salom(){
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute')
    let second = document.getElementById('second')

    let time = new Date()

    let h = time.getHours()
    let m = time.getMinutes()
    let s = time.getSeconds()

    const Calhour = (hour, minu ) => {
        const hh = hour % 12 || 12;

        const ayl = (360/12) * hh
        const aylMIN = (30/60) * minu

        return ayl + aylMIN 
     }

     const CalTime = (time) => {
        return (360/60) * time
     }
     h = Calhour(h, m)
     m = CalTime(m)
     s = CalTime(s)

     hour.style.rotate = `${h}deg`;
     minute.style.rotate = `${m}deg`;

};
salom()




























