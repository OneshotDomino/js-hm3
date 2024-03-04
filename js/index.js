let finalMessage = "";
const yearOfBirth = prompt("Введите год рождения:");
if (yearOfBirth === null || yearOfBirth === "") {
  alert("Жаль, что вы не ввели свою дату рождения");
} else {
  const currentYear = 2024;
  const age = `Вам ${currentYear - yearOfBirth} лет. `;
  finalMessage += age;
}

const city = prompt("Введите город:");
if (city === null || city === "") {
  alert("Жаль, что вы не ввели свой город");
} else if (city === "Киев" || city === "Лондон" || city === "Вашингтон") {
  const countries = {
    Киев: "Украина",
    Вашингтон: "США",
    Лондон: "Англия",
  };

  const text = `Вы живете в столице страны - ${countries[city]}. `;

  finalMessage += text;
} else {
  const text = `Вы живете в городе ${city}. `;
  finalMessage += text;
}

const sport = prompt("Введите любимый вид спорта:");
if (sport === null || sport === "") {
  alert("Жаль, что вы не ввели свой любимы спорт");
} else if (sport === "футбол" || sport === "баскетбол" || sport === "теннис") {
  const champions = {
    футбол: "Андрей Шевченко",
    баскетбол: "Леброн Джеймс",
    теннис: "Новак Джокович",
  };
  const text = `Круто! Хочешь стать как ${champions[sport]}?`;
  finalMessage += text;
} else {
  const text = "Круто! Хочешь стать профи?";
  finalMessage += text;
}

if (finalMessage !== "") {
  alert(finalMessage);
}
