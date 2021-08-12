export function getDayOfWeek() {
  let date = prompt("Введите дату в формате ДД.MM.ГГГГ:");
  date = date.split(".").reverse();
  const dayNumber = new Date(date).getDay();
  let day;
  switch (dayNumber) {
    case 0:
      day = "воскресенье";
      break;
    case 1:
      day = "понедельник";
      break;
    case 2:
      day = "вторник";
      break;
    case 3:
      day = "среда";
      break;
    case 4:
      day = "четверг";
      break;
    case 5:
      day = "пятница";
      break;
    case 6:
      day = "суббота";
      break;
    default:
      day = "Введите корректные данные.";
  }
  console.log(day);
}

export function getMinutes() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  console.log(hours * 60 + minutes);
}

export function kenUserYounger(date1, date2) {
  const date1Millisec = +new Date(date1.split(".").reverse());
  const date2Millisec = +new Date(date2.split(".").reverse());
  if (date1Millisec === date2Millisec) {
    console.log("Пользователи одного возраста.");
  } else if (date1Millisec - date2Millisec > 0) {
    console.log("Пользователь 1 моложе.");
  } else {
    console.log("Пользователь 2 моложе.");
  }
}
