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
import settingsIcon from '../../assets/images/settingsIcon.svg'
import workforceIcon from '../../assets/images/workforceIcon.svg'
import marketingSvg from '../../assets/images/marketingSvg.svg'
import scheduleIcon from '../../assets/images/scheduleIcon.svg'
import tickIcon from '../../assets/images/tickIcon.svg'

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
        <img src={jobIcon} alt='' />
        <img src={workforceIcon} alt='' />
        <img src={clientIcon} alt='' />
        <img src={marketingSvg} alt='' />
        <img src={scheduleIcon} alt='' />
        <img src={analyticsIcon} alt='' />
        <img src={tickIcon} alt='' />
        <img src={settingsIcon} alt='' />
        <img src={companyIcon} alt='' />
      </LowerPart>
    </LeftMenuC>
  )
}

const LeftMenuC = styled.div`
  height: 100%
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
companyIcon
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
