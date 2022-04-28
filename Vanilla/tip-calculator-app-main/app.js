// make eventListener 'keypressed on the pll number
// inputs
const bill = document.querySelector('#pay');
const customTip = document.querySelector('#tip');
const numberPeople = document.getElementById('ppl');
// outputs
const individualTip = document.querySelector('.tip-total');
let total = document.querySelector('#pay');
// 
let tip = 1;

// only update data once there's a data in 'numberPeople'
numberPeople.addEventListener('keydown', () => {
  // if there's custom tip use that, otherwise use the last btn pressed
  tip = customTip.value ? customTip.value : tip;
  // if there's no bill or not tip specified, do nothing
  if (!total && tip != 1) return;

  // needs to be a timeout to be able to get the first valid value
  setTimeout(() => {
    console.log(+total.value);

    const check = numberPeople.value;//LOOK IT'S CHECK NOW

    if (check != undefined && check > 0) {
      // calculate ( tip & total )/person
      tip = bill.value * (tip / 100) / check;
      const theTotal = +total.value + 69;
      // console.log(theTotal);

      // update value in tip/person && total/person
      individualTip.value = `$${tip}`;
      total.value = `$${toString(theTotal)}`;
      console.log('fuck my ass');
    }
  }, 500);
});


// change tip when clicking any btn
const btnsArray = [];

for (let index = 1; index < 6; index++) {
  btnsArray.push(document.querySelector(`.btn-${index}`));
}

btnsArray.forEach(item =>
  item.addEventListener('click', () => tip = item.value));


// test
document.querySelector('.reset').addEventListener('click', () => console.log(tip));
