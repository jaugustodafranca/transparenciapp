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
  } else {
    return null;
  }
};
