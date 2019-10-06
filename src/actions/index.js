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
