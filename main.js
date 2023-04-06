const remaining = document.getElementById("time-left");

const timeLeftTillStart = new Date("2023-05-01 00:00:00").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = timeLeftTillStart - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  remaining.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(x);
    remaining.innerHTML = "EXPIRED";
  }
}, 1000);
