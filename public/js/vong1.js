// vòng 1 *******************************************
var circle = document.querySelector('#circle-one');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset;
}
const step = 20;
const step3 = 30;
const step2 = 10;
let percent = 0;
document.querySelector('#eat-one')
  .addEventListener('click', e => {
    percent = percent + step;
    setProgress(percent);

    // nếu bằng hoặc lớn hơn 100 thì sẽ set lại percent là 0
    // và đọi 500ms rồi cập nhập lại Progress(percent = 0);
    if (percent >= 100) {
      percent = 100;
      setTimeout(() => { setProgress(percent); }, 0);
    }
  })
  document.querySelector('#drink-mill')
  .addEventListener('click', e => {
    percent = percent + step2;
    setProgress(percent);

    // nếu bằng hoặc lớn hơn 100 thì sẽ set lại percent là 0
    // và đọi 500ms rồi cập nhập lại Progress(percent = 0);
    if (percent >= 100) {
      percent = 100;
      setTimeout(() => { setProgress(percent); }, 0);
    }
  })
document.querySelector('#eat-xuong')
  .addEventListener('click', e => {
    percent = percent + step3;
    setProgress(percent);
    if (percent >= 100) {
      percent = 100;
      setTimeout(() => { setProgress(percent); }, 0);
    }
  })

  // vong 2 ************************************************************
  var circleTwo = document.querySelector('#circle-two');
  var radiusTwo = circleTwo.r.baseVal.value;
  var circumferenceTwo = radiusTwo * 2 * Math.PI;
  
  circleTwo.style.strokeDasharray = `${circumferenceTwo} ${circumferenceTwo}`;
  circleTwo.style.strokeDashoffset = `${circumferenceTwo}`;
  
  function setProgres(percents) {
    const offsets = circumferenceTwo - percents / 100 * circumferenceTwo;
    circleTwo.style.strokeDashoffset = offsets;
  }
  const steps = 20;
  const steps2 = 10;
  let percents = 0;
  document.querySelector('#ball')
    .addEventListener('click', e => {
      percents = percents + steps;
      setProgres(percents);
  
      if (percents >= 100) {
        percents = 100;
        setTimeout(() => { setProgres(percents); }, 0);
      }
    })
    document.querySelector('#bear')
    .addEventListener('click', e => {
      percents = percents + steps2;
      setProgres(percents);
  
      if (percents >= 100) {
        percents = 100;
        setTimeout(() => { setProgres(percents); }, 0);
      }
    })


  // vong 3 ************************************************************
  var circle3 = document.querySelector('#circle-three');
  var radius3 = circle3.r.baseVal.value;
  var circumference3 = radius3 * 2 * Math.PI;
  
  circle3.style.strokeDasharray = `${circumference3} ${circumference3}`;
  circle3.style.strokeDashoffset = `${circumference3}`;
  
  function setProgres3(percent3) {
    const offset3 = circumference3 - percent3 / 100 * circumference3;
    circle3.style.strokeDashoffset = offset3;
  }
  const stepss3 = 30;
  let percent3 = 0;
  document.querySelector('#clear-body')
    .addEventListener('click', e => {
      percent3 = percent3 + stepss3;
      setProgres3(percent3);
  
      if (percent3 >= 100) {
        percent3 = 100;
        setTimeout(() => { setProgres3(percent3); }, 0);
      }
    })