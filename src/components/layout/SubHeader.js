import React from 'react';
import styled from 'styled-components';
import glass from '../../assets/images/glass.svg'

const SubHeader = () => {
  return (
    <SubHeaderC>
      <LeftColumn>
        <Title>
          Recruited Agency<InfoTab><br/> 250 Candidates</InfoTab>
        </Title>
      </LeftColumn>
      <RightColumn>
        <GlassImg src={glass} alt='' />
        <SearchBar placeholder='Search candidates by name or email'/>
        <Button>Add Candidates</Button>
      </RightColumn>
    </SubHeaderC>
  );
};

const SubHeaderC = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right:35px;
  padding-left:55px;
  margin-top:20px;
`;
const LeftColumn = styled.div`
  width: 50%;
  height: 90px;
`;
const RightColumn = styled.div`
  width: 50%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const Button = styled.button`
  width: 148px;
  height: 37px;
  border: none;
  border-radius: 5px;
  background-color: #2a3744;
  color: #ffffff;
`;
const Title = styled.p`
font-size: 12px;`;
const InfoTab = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
const GlassImg = styled.img`
  position: absolute;
  top: 37px;
  left: 15px;
`;
const SearchBar = styled.input`
  width: 334px;
  height: 37px;
  border: solid 1px;
  border-color: #D4DFEA;
  border-radius: 10px;
  padding-left: 39px;
  background: url(assets/images/glass2.png) no-repeat scroll 7px 7px;
  ::placeholder {
    font-family: Inter;
    color:#798999;
    opacity:%60;
  };
`;

export default SubHeader;
