import React from 'react'
import styled from 'styled-components'
import leoLogo from '../../assets/images/Leo_Logo.svg'
import pp from '../../assets/images/pp.svg'

const Header = () => {
    return (
        <HeaderC>
            <img src={leoLogo} alt='Leo logo'/>
            <img src={pp} alt='Profile'/>
        </HeaderC>
    )
}

const HeaderC = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 0px 5px #DFE1E6;
  padding: 10px 0;
  img:nth-child(1) {
      width: 45px;
      margin: 0 55px;
  };
  img:nth-child(2) {
    margin: 0 35px;
};
`



export default Header
