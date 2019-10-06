import moment from 'moment';

export const AGENCIES_DATA = 'agenciesData';
export const AGENCIES_DATA_SUCCESS = 'agenciesDataSuccess';
export const AGENCIES_DATA_ERROR = 'agenciesDataError';

export const TRIPS_DATA = 'tripsData';
export const TRIPS_DATA_SUCCESS = 'tripsDataSuccess';
export const TRIPS_DATA_ERROR = 'trpisDataError';

const BASE_URL = 'http://www.transparencia.gov.br/api-de-dados/';

export const fetchAgencies = a => {
  console.log('aaa');
  return dispatch => {
    api('orgaos-siafi?descricao=santa%20catarina&pagina=1').then(res => {
      console.log(res);
      dispatch({
        type: AGENCIES_DATA_SUCCESS,
        payload: res,
      });
    });
  };
};

export const parseDate = date => moment(date).format('DD/MM/YYYY');

export const fetchTrips = (
  agencyCode,
  page,
  departureDateBegin,
  departureDateEnd,
  arrivalDateBegin,
  arrivalDateEnd,
) => {
  return dispatch => {
    console.log(page);

    const url = `viagens?dataIdaDe=${parseDate(
      departureDateBegin,
    )}&dataIdaAte=${parseDate(departureDateEnd)}&dataRetornoDe=${parseDate(
      arrivalDateBegin,
    )}&dataRetornoAte=${parseDate(
      arrivalDateEnd,
    )}&codigoOrgao=${agencyCode}&pagina=${parseInt(page, 10) + 1}`;
    const encodedURL = encodeURIComponent(url);

    console.log(encodedURL);

    api(encodedURL).then(res => {
      console.log(res);
      dispatch({
        type: TRIPS_DATA_SUCCESS,
        payload: res,
      });
    });
  };
};

export const api = url => {
  return fetch(BASE_URL + url, {
    method: 'GET',
  })
    .then(res => {
      return res.json().then(r => r);
    })
    .catch(err => {
      console.log(err);
      return [];
    });
};
