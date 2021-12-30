import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dropdownArrow from '../../assets/images/dropdownArrow.svg';
import fetchData from '../../store/Fetchdata';

const Main = () => {
const [data, setData] = useState([])

  useEffect(() => {
    const res = fetchData();
    setData(res)
    console.log(data)
  }, []);
  
  useEffect(() => {
    setData(data)
    console.log(data)
  }, [data]);
  return (
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
            {data.map(item => 
          <tr>
            <td>
              <input type='checkbox' />
            </td>
            <td>{item.email}</td>
            <td>1976</td>
            <td>9</td>
            <td>Ever fallen in love</td>
            <Select>
              <option>a</option>
              <option>b</option>
              <option>c</option>
            </Select>
          </tr>
          )}
        </Tbody>
      </Table>
    </MainC>
  );
};

const MainC = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  tr {
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

export default Main;
