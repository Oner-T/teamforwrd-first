import axios from 'axios';

const Fetchdata = async () => {
  let config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
    },
  };
  const res = await axios.post(
    'https://staging-api.recruitd.co.uk/v2/talent_network/15097/list',
    {
      filters: {
        slice: [0, 10],
        team_member_id: 471,
      },
    },
    config
  );
  return res.data.results;
};

export default Fetchdata;
