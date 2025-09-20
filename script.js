let clock_timer_ele = document.getElementById("clock_timer");
let count = 0;

let a = setInterval(() => {
  clock_timer_ele.textContent = count;
  clock_timer_ele.classList.add("running");
  count += 1;
  if (count == 10) {
    clearInterval(a);
    clock_timer_ele.classList.remove("running");
  }
}, 1000);

