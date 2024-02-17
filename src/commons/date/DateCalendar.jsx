import React, { useEffect, useState } from "react";
import { dateFormater } from "../../utils";
import "./dateCalendar.scss";
export const DateCalendar = ({ language }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Cambiado a 1 minuto (60,000 milisegundos)

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []); // El segundo parámetro de
  return (
    <div className="dateCalendar__main">
      <p className="dateCalendar__title">
        {dateFormater(currentDate, language)}
      </p>{" "}
    </div>
  );
};
