export const AGENCIES_DATA = 'agenciesData';
export const AGENCIES_DATA_SUCCESS = 'agenciesDataSuccess';
export const AGENCIES_DATA_ERROR = 'agenciesDataError';

export const TRIPS_DATA = 'tripsData';
export const TRIPS_DATA_SUCCESS = 'tripsDataSuccess';
export const TRIPS_DATA_ERROR = 'trpisDataError';

const BASE_URL = 'http://www.transparencia.gov.br/api-de-dados/';

export const fetchAgencies = () => {
  console.log('aaa');
  return dispatch => {
    api('orgaos-siafi?descricao=santa%20catarina&pagina=1').then(res => {
      dispatch({
        type: AGENCIES_DATA_SUCCESS,
        payload: res.data,
      });
    });
  };
};

export const api = async url => {
  try {
    const res = await fetch(BASE_URL + url, {
      method: 'GET',
    });
    JSON.parse(res);
    console.log(' aqui', res.json(), res);
    return res.json();
  } catch (err) {
    console.log(err);
    console.log(' aqui2');
    return {};
  }
};

// export const fetchAgencies = () => {
//   return dispatch => {
//     try {
//       fetch(BASE_URL + 'orgaos-siafi?descricao=santa%20catarina&pagina=1', {
//         method: 'GET',
//       }).then(res => console.log(res));
//     } catch (err) {
//       console.log(err);
//     }
//     dispatch({
//       type: AGENCIES_DATA_SUCCESS,
//       payload: [
//         {
//           codigo: '26219',
//           descricao: 'Centro Federal de Educação Tecnológica de Santa Catarina',
//           codigoDescricaoFormatado:
//             '26219 - Centro Federal de Educação Tecnológica de Santa Catarina',
//         },
//       ], //res.data,
//     });
//   };
// };

// export const fetchAgencies = () => async dispatch => {
//   const res = await fetch(BASE_URL + 'orgaos-siafi?descricao=santa%20catarina&pagina=1', {
//       method: 'GET',
//   })
//   dispatch({
//     type: AGENCIES_DATA_SUCCESS,
//     payload: res.data,
//   });
// };
