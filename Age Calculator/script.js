const years = document.querySelector(".year");
const months = document.querySelector(".month");
const days = document.querySelector(".days");
const age = document.querySelector(".age");

const button = document.querySelector("#btn");
const selectDate = document.querySelector("#date");

selectDate.max = new Date().toISOString().split("T")[0];

button.addEventListener("click", () => {
    
   age.style.display = "block"; 
    
  let birthdate = new Date(selectDate.value);

  let todaydate = new Date();

  let birthyear = birthdate.getFullYear();
  let birthmonth = birthdate.getMonth(); // 0-based index (0-11)
  let birthday = birthdate.getDate();

  let todayyear = todaydate.getFullYear();
  let todaymonth = todaydate.getMonth(); // 0-based index (0-11)
  let todayday = todaydate.getDate();

  // Calculate the years difference
  let y3 = todayyear - birthyear;

  // Calculate the months difference
  let m3 = todaymonth - birthmonth;

  // If the birthday has not occurred yet this year, subtract one from the year
  if (m3 < 0) {
    y3--;
    m3 += 12; // Adjust the month difference to be positive
  }

  // Calculate the days difference
  let d3 = todayday - birthday;
  if (d3 < 0) {
    m3--; // If days are negative, reduce the month by 1
    let lastMonth = new Date(todayyear, todaymonth, 0); // Get the last day of the previous month
    d3 += lastMonth.getDate(); // Add the days of the previous month
  }

  // Update the UI with the calculated age
  years.textContent = y3;
  months.textContent = m3;
  days.textContent = d3;
});
