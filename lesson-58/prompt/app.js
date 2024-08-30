

// let ism = prompt('Ism kiriting:');

// let ismlar = ['Avazbek', 'Bahodir', 'Diyorbek']

// if(ismlar.includes(ism)) {
//     alert(`Ha shunday ${ism} bor`)
// }else {
//     alert(`Afsus bunday ${ism} yo'q`)
// }



// for(let i = 0; i < ismlar.length; i++){
    //     let ism = ismlar[i] + 'bek'
    //     console.log(ism);
    // }
// let ismlar = ['Avaz', 'Bahodir', 'Diyor']
// let i = 0;

// while(i < ismlar.length){
//     let ism = ismlar[i] + 'bek'
//     console.log(ism);
//     i++;
// }
// const pop = prompt('Biror narsa kiriting:')

// let data = 20;

// if(pop.length > data){
//     alert(`Siz ${data} so'z kiritishingiz mumkin, lekin hozirda siz ${pop.length} so'z kiritdingzi bu meyoridan ${pop.length - data} ko'p`)
// }else{
//     alert(`Siz ${data} so'z kiritishingiz mumkin, lekin hozirda siz ${pop.length} so'z kiritdingzi bu meyoridan ${pop.length - data} ko'p`)

// }



 const ismlar = ['Avazbek', 'Bahodir', 'Diyorbek', 'Sardor']

 const yangIsm = []

 ismlar.forEach(function(ism, i) {
   const yangi = ism.charAt().toLocaleUpperCase() + ism.slice(1).toLocaleLowerCase() + 'bek'
   yangIsm.push(yangi)
   console.log(yangi, i);
 })

 console.log(yangIsm);

