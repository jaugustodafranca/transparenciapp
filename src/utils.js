import moment from 'moment';

export const validateDates = (
  departureDateBegin,
  departureDateEnd,
  arrivalDateBegin,
  arrivalDateEnd,
) => {
  if (
    !departureDateBegin ||
    !departureDateEnd ||
    !arrivalDateEnd ||
    !arrivalDateBegin
  ) {
    return 'Preencha todos os campos';
  } else if (departureDateEnd < departureDateBegin) {
    return 'Data Ida Fim menor que Data Ida Inicio';
  } else if (arrivalDateEnd < arrivalDateBegin) {
    return 'Data Retorno Fim menor que Data Retorno Inicio';
  } else if (arrivalDateBegin < departureDateBegin) {
    return 'Data Retorno menor que Data Ida';
  } else if (
    moment(departureDateEnd).diff(moment(departureDateBegin), 'months', true) >
      1 ||
    moment(arrivalDateEnd).diff(moment(arrivalDateBegin), 'months', true) > 1
  ) {
    return 'A diferença entre as datas deve ser de até um mês.';
  } else {
    return null;
  }
};
