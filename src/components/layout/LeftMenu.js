import React from 'react'
import styled from 'styled-components'
import analyticsIcon from '../../assets/images/analyticsIcon.svg'
import greenIcon from '../../assets/images/greenIcon.svg'
import burgerMenuRight from '../../assets/images/burgerMenuRight.svg'
import clientIcon from '../../assets/images/clientIcon.svg'
import companyIcon from '../../assets/images/companyIcon.svg'
import dashboardIcon from '../../assets/images/dashboardIcon.svg'
import jobIcon from '../../assets/images/jobIcon.svg'
import userIcon from '../../assets/images/userIcon.svg'

const LeftMenu = () => {
  return (
    <LeftMenuC>
      <TopPart>
        <img src={burgerMenuRight} alt='' />
        <img src={greenIcon} alt='' />
      </TopPart>

      <LowerPart>
        <img src={dashboardIcon} alt='' />
        <img src={userIcon} alt='' />
        <img src={clientIcon} alt='' />
        <img src={analyticsIcon} alt='' />
        <img src={clientIcon} alt='' />
        <img src={companyIcon} alt='' />
        
        <img src={jobIcon} alt='' />
      </LowerPart>
    </LeftMenuC>
  )
}

const LeftMenuC = styled.div`
  height: 100vh
  width: 95px
  background-color: #2a3744
  display: flex
  align-items: center
  flex-direction: column
`

const TopPart = styled.div`
 height: 20%;
 width: 95px;
 background-color: #2a3744;
 display: flex;
 justify-content: space-around;
 align-items: center;
 flex-direction: column;
 img {
   width: 35px;
   margin: 25px 0;
 }
`

const LowerPart = styled.div`
 height: 80%;
 width: 95px;
 background-color: #2a3744;
 display: flex;
 align-items: center;
 flex-direction: column;
 img {
   width: 30px;
   margin: 25px 0;
 }
 
`

export default LeftMenu
