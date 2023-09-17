import { useState } from "react";
import styles from "./AgeCalculator.module.css";
const PRESENT = new Date();
function AgeCalculator() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [daysPassed, setDaysPassed] = useState(0);
  const [monthsPassed, setMonthsPassed] = useState(0);
  const [yearsPassed, setYearsPassed] = useState(0);
  const handleDay = (day) => {
    if (isNaN(day)) return;
    setDayError("");
    setDay(day);
    if (day > 31 || day < 1) {
      setDayError("Must be a valid day");
    }
  };

  const handleMonth = (month) => {
    if (isNaN(month)) return;
    setMonthError("");
    setMonth(month);
    if (month > 12 || month < 1) {
      setMonthError("Must be a valid month");
    }
  };

  const handleYear = (year) => {
    if (isNaN(year)) return;
    setYearError("");
    setYear(year);
    if (year >= PRESENT.getFullYear() || year <= 0) {
      setYearError("Must be in the past");
    }
  };

  const calculateAge = (e) => {
    e.preventDefault();

    const date = new Date(year, month - 1, day);
    if (day > date.getDate() || PRESENT.getTime() < date.getTime()) {
      setMonthError("");
      setYearError("");
      setDayError("Must be a valid date");
      setDaysPassed(0);
      setMonthsPassed(0);
      setYearsPassed(0);
      return;
    }

    const calc = new Date(PRESENT.getTime() - date.getTime());
    const calcFormatTmp =
      calc.getDate() + "-" + (calc.getMonth() + 1) + "-" + calc.getFullYear();
    const calcFormat = calcFormatTmp.split("-");
    setDaysPassed(Number(Math.abs(calcFormat[0]) - 1));
    setMonthsPassed(Number(Math.abs(calcFormat[1]) - 1));
    setYearsPassed(Number(Math.abs(calcFormat[2]) - 1970));
    console.log(calc);
  };

  return (
    <main className={styles.calculator}>
      <form className={styles.form} onSubmit={calculateAge}>
        <div>
          <label>Day</label>
          <input
            type="text"
            value={day}
            onChange={(e) => handleDay(+e.target.value)}
            placeholder="DD"
          />
          <span>{dayError}</span>
          <div>Hello</div>
        </div>
        <div>
          <label>Month</label>
          <input
            type="text"
            value={month}
            onChange={(e) => handleMonth(+e.target.value)}
            placeholder="MM"
          />
          <span>{monthError}</span>
        </div>
        <div>
          <label>Year</label>
          <input
            type="text"
            value={year}
            onChange={(e) => handleYear(+e.target.value)}
            placeholder="YYYY"
          />
          <span>{yearError}</span>
        </div>
        <button className={styles.button}>
          <img src="icon-arrow.svg" alt="Calculate" />
        </button>
      </form>
      <section>
        <div>
          <span>{yearsPassed === 0 ? "--" : yearsPassed}</span>
          <span>years</span>
        </div>
        <div>
          <span>{monthsPassed === 0 ? "--" : monthsPassed}</span>
          <span>months</span>
        </div>
        <div>
          <span>{daysPassed === 0 ? "--" : daysPassed}</span>

          <span>days</span>
        </div>
      </section>
    </main>
  );
}

export default AgeCalculator;
