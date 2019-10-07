import moment from 'moment';

export const AGENCIES_DATA = 'agenciesData';
export const AGENCIES_DATA_SUCCESS = 'agenciesDataSuccess';
export const AGENCIES_DATA_ERROR = 'agenciesDataError';
export const AGENCIES_DATA__NEXT_PAGE_SUCCESS = 'agenciesDataNextPageSuccess';
export const AGENCIES_MAX_PAGE = 'agenciesMaxPage';

export const TRIPS_DATA = 'tripsData';
export const TRIPS_DATA_SUCCESS = 'tripsDataSuccess';
export const TRIPS_DATA_ERROR = 'trpisDataError';
export const TRIPS_MAX_PAGE = 'tripsMaxPage';
export const TRIPS_DATA__NEXT_PAGE_SUCCESS = 'tripsDataNextPageSuccess';

const BASE_URL = 'http://www.transparencia.gov.br/api-de-dados/';

export const fetchAgencies = (text, page = 1) => {
  const encodedText = encodeURIComponent(text);

  return dispatch => {
    dispatch({
      type: AGENCIES_DATA,
    });

    api(`orgaos-siafi?descricao=${encodedText}&pagina=${page}`).then(res => {
      if (page == 1) {
        dispatch({
          type: AGENCIES_DATA_SUCCESS,
          payload: res,
        });
      } else {
        dispatch({
          type: AGENCIES_DATA__NEXT_PAGE_SUCCESS,
          payload: res,
        });
      }
      if (res.length < 15) {
        dispatch({
          type: AGENCIES_MAX_PAGE,
          payload: page,
        });
      }
    });
  };
};

export const parseDate = date =>
  encodeURIComponent(moment(date).format('DD/MM/YYYY'));

export const fetchTrips = (
  agencyCode,
  page = 1,
  departureDateBegin,
  departureDateEnd,
  arrivalDateBegin,
  arrivalDateEnd,
) => {
  return dispatch => {
    console.log(page);

    dispatch({
      type: TRIPS_DATA,
    });

    const url = `viagens?dataIdaDe=${parseDate(
      departureDateBegin,
    )}&dataIdaAte=${parseDate(departureDateEnd)}&dataRetornoDe=${parseDate(
      arrivalDateBegin,
    )}&dataRetornoAte=${parseDate(
      arrivalDateEnd,
    )}&codigoOrgao=${agencyCode}&pagina=${page}`;
    api(url).then(res => {
      if (page === 1) {
        dispatch({
          type: TRIPS_DATA_SUCCESS,
          payload: res,
        });
      } else {
        dispatch({
          type: TRIPS_DATA__NEXT_PAGE_SUCCESS,
          payload: res,
        });
      }
      if (res.length < 15) {
        dispatch({
          type: TRIPS_MAX_PAGE,
          payload: page,
        });
      }
    });
  };
};

export const api = url => {
  return fetch(BASE_URL + url, {
    method: 'GET',
  })
    .then(res => {
      console.log('aaaaaaa', res);
      if (res.status == 200) {
        return res.json().then(r => r);
      } else {
        return res.text().then(r => r);
      }
    })
    .catch(err => {
      console.log(err);
      return [];
    });
};
