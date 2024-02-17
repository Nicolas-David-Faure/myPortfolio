export default function formatarFecha(date, language = 'es') {
  if(!date) return new Error('date not found')
  const meses = {
    'en': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'es': ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
  };

  const dia = date.getDate();
  const mes = meses[language][date.getMonth()];
  const horas = ('0' + date.getHours()).slice(-2);
  const minutos = ('0' + date.getMinutes()).slice(-2);

  return `${dia} de ${mes} ${horas}:${minutos}`;
}