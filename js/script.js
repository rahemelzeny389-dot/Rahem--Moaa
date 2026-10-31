
let text = "حبيت اعمل حاجه تجمع كل ذكريتنا حلوه سوا بحبك ي ميمي"
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
window.addEventListener("DOMContentLoaded", typing); 
function checkPassword() {
  let password = document.getElementById("password").value;
  if (password === "182024") {
    window.location.href = "home.html";
    
  } else {
    alert("Incorrect password. Please try again.");
  }
}
 window.addEventListener('load', function() {
         if (performance.getEntriesByType("navigation")[0].type === "reload") {
             window.location.href = "index.html";
         }
      });
////////////////////
function updateCounter() {

    const start = new Date(2024, 7, 1, 0, 0);
    const now = new Date();

    let cursor = new Date(start);

    let years = now.getFullYear() - cursor.getFullYear();

    cursor.setFullYear(cursor.getFullYear() + years);

    if (cursor > now) {
        years--;
        cursor.setFullYear(cursor.getFullYear() - 1);
    }

    let months = 0;

    while (true) {
        let next = new Date(cursor);
        next.setMonth(next.getMonth() + 1);

        if (next > now) break;

        cursor = next;
        months++;
    }

    let days = 0;

    while (true) {
        let next = new Date(cursor);
        next.setDate(next.getDate() + 1);

        if (next > now) break;

        cursor = next;
        days++;
    }

    let minutes = Math.floor((now - cursor) / 60000);

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("minutes").textContent = minutes;
}

updateCounter();
setInterval(updateCounter, 1000);
 