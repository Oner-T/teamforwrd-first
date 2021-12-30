import React, { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import dropdownArrow from '../../assets/images/dropdownArrow.svg';
import { useSelector, useDispatch } from 'react-redux';
import { dataAction } from '../../redux/actions/dataAction';

const Main = () => {
  const [data, setData] = useState([]);
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataAction());
  }, []);

  useEffect(() => {
    setData([])
    setData(state.data.results);
    console.log(state.data);
  }, [state.data]);

  const fetchMoreData = () => {
    dispatch(dataAction(10, 20));
  };

  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <MainC>
        <Table>
          <Thead>
            <tr>
              <th>
                <input type='checkbox' />
              </th>
              <th>CANDIDATE</th>
              <th>RATING</th>
              <th>LOCATION</th>
              <th>CONTACT</th>
              <th>AVAILABILITY</th>
            </tr>
          </Thead>
          <Tbody>
            {data?.map((item) => (
              <div key={item.professional_id}>
                <Td>
                  <input type='checkbox' />
                </Td>
                <Td>{item.email}</Td>
                <Td>1976</Td>
                <Td>
                  London
                  <br />
                  United Kingdom
                </Td>
                <Td>{item.email}</Td>
                <Select>
                  <option value='selected'>Active</option>
                  <option>Avaliable</option>
                  <option>Not Active</option>
                  <option>Passive</option>
                </Select>
              </div>
            ))}
          </Tbody>
        </Table>
        <Pagination>
          <Number>SHOWING 10 of {state.data.total} Candidates</Number>
          <Bar />
          <Button onClick={fetchMoreData}>Load more candidates</Button>
        </Pagination>
      </MainC>
    </Suspense>
  );
};

const MainC = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Table = styled.table`
  margin-right: 35px;
  margin-left: 55px;
`;

const Thead = styled.thead`
  background-color: #f1f6f8;
  width: 1255px;
  height: 35px;
  border-radius: 8px;
  font-size: 10px;
  color: #818d99;
  display: flex;
  flex-direction: co;
  justify-content: space-around;
  tr {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

const Tbody = styled.tbody`
  width: 1255px;
  color: #818d99;
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

const Select = styled.select`
  width: 105px;
  height: 30px;
  border-radius: 15px;
  border: none;
  background-color: #c5e9f6;
  -webkit-appearance: none;
  background-image: url(${dropdownArrow});
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: 13px;
`;

const Td = styled.td`
  width: 120px;
  margin: 10px;
  font-size: 14px;
`;

const Pagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  width: 320px;
  height: 87px;
  div {
    margin-top: 10px;
  }
`;
const Number = styled.div`
  font-size: 12px;
  font-weight: 600;
`;
const Bar = styled.div`
  width: 320px;
  height: 10px;
  background-color: #dfe9f4;
  border-radius: 10px;
`;
const Button = styled.button`
  width: 189px;
  height: 37px;
  background-color: #2a3744;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
`;

export default Main;
