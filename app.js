const timeElement = document.querySelector(".time");
let remainingTime = 86400;

const updateTimer = () => {
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  timeElement.textContent = formattedTime;

  remainingTime--;

  if (remainingTime < 0) {
    remainingTime = 86400;
  }
};

setInterval(updateTimer, 1000);
updateTimer();
