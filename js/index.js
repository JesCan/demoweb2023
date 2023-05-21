var a = new date();

dia = a.getDay();

switch (dia) {
  case 5:
    alert("Viernes Social");
    break;

  case 6:
    alert("Sabado deportivo");
    break;

  case 0:
    alert("Domingo familiar");
    break;

  default:
    alert("Dia de semana");
}
