// Countdown to Bodhu Baran: 7 January 2027, 4:00 PM India Standard Time.
const targetDate = new Date("2027-01-07T16:00:00+05:30").getTime();

function updateCountdown() {
  const remaining = targetDate - Date.now();
  const values = {
    days: Math.max(0, Math.floor(remaining / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((remaining / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((remaining / (1000 * 60)) % 60)),
    seconds: Math.max(0, Math.floor((remaining / 1000) % 60))
  };
  Object.entries(values).forEach(([id, value]) => {
    const node = document.getElementById(id);
    if (node) node.textContent = String(value).padStart(id === "days" ? 3 : 2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);
