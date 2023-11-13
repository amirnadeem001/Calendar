// Months Array
let months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const date = new Date();
let currMonth = date.getMonth();
let currYear = date.getFullYear();

// Get total days in month
const totalDaysInMonth = (year, month) =>
  new Date(year, month + 1, 0).getDate();

// Selecting DOM Elements
const renderDates = () => {};

const renderCalendar = (month, year) => {
  // clear the previous calender when some event happend
  document.querySelector('.dates').innerHTML = '';
  document.querySelector('.head-dates').innerHTML = '';
  // Display curent month on heading

  const html = `<h1 class="text-white head-date text-xl font-bold">${months[month]} ${year}</h1>`;
  document.querySelector('.head-dates').insertAdjacentHTML('beforeend', html);

  const lastDateOfMonth = totalDaysInMonth(year, month); // 30
  const firstDayOfMonth = new Date(year, month, 1).getDay() + 1; // 4
  const dayOfLastMonth = totalDaysInMonth(year, month - 1); // 31
  const startDay = (firstDayOfMonth - 1 + 7) % 7;

  const lastDayOfCurrentMonth = new Date(year, month + 1, 0).getDay();
  const remainingDaysInWeek = 6 - lastDayOfCurrentMonth;

  for (
    let i = dayOfLastMonth - startDay + 1; // 31 - 4 + 1 = 28
    i <= dayOfLastMonth;
    i++
  ) {
    const html2 = `<li class="cursor-pointer text-slate-400	 prev-month">${i}</li>`;
    document.querySelector('.dates').insertAdjacentHTML('beforeend', html2);
  }
  const today = new Date().getDate();
  // Display current month's dates
  for (let i = 1; i <= lastDateOfMonth; i++) {
    if (i === today) {
      const html3 = `<li class="cursor-pointer text-white  p-1 border-2 border-y-green-800	border-s-orange-700	 border-e-blue-800  	rounded">${i}</li>`;
      document.querySelector('.dates').insertAdjacentHTML('beforeend', html3);
    }
    if (i !== today) {
      const html3 = `<li class="cursor-pointer text-gray-300">${i}</li>`;
      document.querySelector('.dates').insertAdjacentHTML('beforeend', html3);
    }
  }

  // Display the next month dates
  for (let i = 1; i <= remainingDaysInWeek; i++) {
    const html4 = `<li class="cursor-pointer text-slate-400	">${i}</li>`;
    document.querySelector('.dates').insertAdjacentHTML('beforeend', html4);
  }
};
const previousYear = document
  .querySelector('.prev_year')
  .addEventListener('click', () => {
    currYear--;
    renderCalendar(currMonth, currYear);
  });
const nextYear = document
  .querySelector('.next_year')
  .addEventListener('click', () => {
    currYear++;
    renderCalendar(currMonth, currYear);
  });
const previousMonth = document
  .querySelector('.prev_month')
  .addEventListener('click', () => {
    currMonth--;
    if (currMonth === 0) {
      currMonth = 11;
      currYear--;
    }
    renderCalendar(currMonth, currYear);
  });
const nextMonth = document
  .querySelector('.next_month')
  .addEventListener('click', () => {
    currMonth++;
    if (currMonth > 11) {
      currMonth = 0;
      currYear++;
    }
    renderCalendar(currMonth, currYear);
  });
renderCalendar(currMonth, currYear);
