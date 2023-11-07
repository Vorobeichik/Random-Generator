const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", generateRandomNum);

function generateRandomNum() {
  const fromNum = document.querySelector(".fromNum").value;
  const toNum = document.querySelector(".toNum").value;

  randomNum = Math.floor(Math.random() * parseInt(toNum));

  if (randomNum >= parseInt(fromNum)) {
    const randomNumEl = document.querySelector(".randomNumEl");
    randomNumEl.innerHTML = randomNum;
  }
}

var count = 8;
started = false;

function start() {
  if (started) {return};
  var start_time = new Date(); 
  var stop_time = start_time.setMinutes(start_time.getMinutes() + count); 

  var countdown = setInterval(function() {
    var now = new Date().getTime();
    var remain = stop_time - now; 
    var min = Math.floor( (remain % (1000 * 60 * 60)) / (1000 * 60) );
    var sec = Math.floor( (remain % (1000 * 60)) / 1000 );
    sec = sec < 10 ? "0" + sec : sec;
    document.getElementById("timer").innerHTML = min + ":" + sec;
    if (remain < 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "ПОТРАЧЕНО";
     }
  }, 1000);
  started = true;
}