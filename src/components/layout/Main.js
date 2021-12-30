import React, { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import dropdownArrow from '../../assets/images/dropdownArrow.svg';
import { useSelector, useDispatch } from 'react-redux';
import { dataAction } from '../../redux/actions/dataAction';
import dots from '../../assets/images/dots.svg';
import stars from '../../assets/images/stars.svg';

const Main = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [ekstraFunc, setEkstraFunc] = useState(false);
  const [leftSpace, setLeftSpace] = useState(0);
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataAction());
  }, []);

  useEffect(() => {
    setData(state.data.results);
  }, [state.data]);

  const fetchMoreData = () => {
    if (page <= 36) {
      dispatch(dataAction(page, 10));
      setPage(page + 1);
      //pagination bar movement logic:
      setLeftSpace(page * (360 / (362 / 10)));
    } else {
      dispatch(dataAction());
      setPage(1);
      setLeftSpace(0);
    }
  };

  const extraFunc = () => {
    console.log('burada');
    setEkstraFunc(!ekstraFunc);
  };

  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <MainC>
        <Table>
          <Thead>
            <tr>
              <Th style={{ width: 30 }}>
                <input type='checkbox' />
              </Th>
              <Th>CANDIDATE</Th>
              <Th>RATING</Th>
              <Th>LOCATION</Th>
              <Th>CONTACT</Th>
              <Th>AVAILABILITY</Th>
              <Th></Th>
            </tr>
          </Thead>
          <Tbody>
            {data?.map((item) => (
              <div key={item.ptn_id}>
                <Td
                  style={{
                    width: 30,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <input type='checkbox' />
                </Td>
                <Td>{item.unbiased_identifier}</Td>
                <Td>
                  <img src={stars} alt='' />
                </Td>
                <Td>
                  London
                  <br />
                  United Kingdom
                </Td>
                <Td>{item.email}</Td>
                <Select>
                  <option value='active'>Active</option>
                  <option value='avaliable'>Avaliable</option>
                  <option value='not active'>Not Active</option>
                  <option value='passive'>Passive</option>
                </Select>
                <Td onClick={extraFunc}>
                  <img src={dots} alt='' />
                </Td>
              </div>
            ))}
            {ekstraFunc ? <Modal>asdasd</Modal> : null}
          </Tbody>
        </Table>
        <Pagination>
          <Number>
            SHOWING between {page * 10 - 10} and{' '}
            {page * 10 > state.data.total ? state.data.total : page * 10} of{' '}
            {state.data.total} Candidates
          </Number>
          <Bar>
            <ActiveBar leftSpace={leftSpace} />
          </Bar>
          <Button onClick={fetchMoreData}>
            {page <= 36 ? 'Load more candidates' : 'Back to start'}
          </Button>
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
  height: 100%;
`;

const Thead = styled.thead`
  background-color: #f1f6f8;
  width: 1255px;
  height: 35px;
  border-radius: 8px;
  font-size: 10px;
  color: #818d99;
  display: flex;
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
  position: relative;
  width: 1255px;
  color: #818d99;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-bottom: solid 1px rgba(223, 231, 239, 0.5);
    border-opacity: 50%;
    height: 61px;
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
  padding-left: 20px;
`;

const Th = styled.th`
  width: 120px;
  margin: 10px 0;
`;

const Td = styled.td`
  width: 120px;
  margin: 10px 0;
  font-size: 14px;
`;

const Pagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  margin-top: 75px;
  width: 320px;
  height: 87px;
`;
const Number = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Bar = styled.div`
  width: 362px;
  height: 10px;
  background-color: #dfe9f4;
  border-radius: 10px;
  position: relative;
`;
const ActiveBar = styled.div`
  position: absolute;
  top: 0px;
  ${({ leftSpace }) => `left : ${leftSpace}px`};
  width: 10px;
  height: 10px;
  background-color: #2a3744;
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
  margin-top: 10px;
`;
const Modal = styled.span`
  position: absolute;
  top: 10px;
  width: 165px;
  height: 157px;
  box-shadow: 10px grey;
  background-color: white;
  z-index: 10;
`;

export default Main;
