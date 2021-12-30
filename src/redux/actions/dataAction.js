import axios from 'axios';

export const dataAction =
  (start = 0, slice = 10) =>
  async (dispatch) => {
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
      },
    };
    try {
      const res = await axios.post(
        'https://staging-api.recruitd.co.uk/v2/talent_network/15097/list',
        {
          filters: {
            slice: [start * 10, slice],
            team_member_id: 471,
          },
        },
        config
      );
      dispatch({
        type: 'GET_DATA',
        payload: res.data,
      });
      return res.data.results;
    } catch (error) {
      console.log(error);
    }
  };
