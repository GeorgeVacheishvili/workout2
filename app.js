// დავალება 1
// const modal = document.createElement('div')
// const btn = document.querySelector('.btn')
// const btnRmv = document.querySelector('.btn-2')

// document.body.appendChild(modal)
// modal.classList.add('modal')



// btn.addEventListener("click", (e) => {
// e.preventDefault()

//     modal.style.background = '#00000049'
    
//     btnRmv.addEventListener("click", () => {
//         modal.style.display = 'none'
//     })

// })



// დავალება 2
// const btn = document.querySelector('.clr_btn')
// const inp = document.querySelector('#inp')
// const colors = ['red', 'blue', 'green', 'black', 'white']


// btn.addEventListener("click", (e) => {
//     e.preventDefault()   

//     const colorIndex = parseInt(Math.floor()*colors.length)

//     colorIndex === inp.value

//     if (inp.value === 'red'){
//         document.body.style.background = 'red'
//     } else if (inp.value === 'blue'){
//         document.body.style.background = 'blue'
//     } else if (inp.value === 'green'){
//         document.body.style.background = 'green'
//     } else if (inp.value === 'black'){
//         document.body.style.background = 'black'
//     } else if (inp.value === 'white'){
//         document.body.style.background = 'white'
//     } else {
//         alert('wrong color')
//     }

// })


// დავალება 3 


const inpNum = document.querySelector('#inpNum');
const calcAvg = document.querySelector('#calcAvg');
const avgRes = document.querySelector('#avgRes');
function calculateAverage() {
  const numbersString = inpNum.value;
  const numbersArray = numbersString.split(':');
  const numbers = numbersArray.map(Number);
  if (numbers.length > 0 && numbersArray.length > 0) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    avgRes.textContent =` The Average is: ${average.toFixed(2)}`;
  } else {
    avgRes.textContent = 'Not Valid';
  }
  inpNum.value = '';
}

calcAvg.addEventListener('click', calculateAverage);


