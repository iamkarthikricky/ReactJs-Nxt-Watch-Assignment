/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const NavMobileView = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavLargeView = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavBar = styled.nav`
  background-color: ${props => props.bgColor};
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const WebsiteLogo = styled.img`
  width: 20vw;
  @media screen and (min-width: 768px) {
    width: 10vw;
  }
`
export const ContentContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`
export const ContentListItem = styled.li`
  margin-right: 10px;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`
export const ProfileLogo = styled.img`
  width: 30px;
`
export const LogOutButton = styled(ThemeButton)`
  border: 1px solid;
  border-color:${props => props.color};
  font-family:'Roboto'
  font-size:18px;
  font-weight:500;
  color:${props => props.color};
  width: 60px;
  height: 30px;
  border-radius:3px;
  background-color:${props => props.bgColor};
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: #f9f9f9;
  padding: 10px;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #3b82f6;
  font-weight: 500;
`
export const PopUpButton = styled.button`
  width: 70px;
  border-radius: 3px;
  height: 30px;
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color}
  background-color:${props => props.bgColor}
  font-weight: 500;
  margin-right: 20px;
  cursor:pointer;
  outline:none;
`
export const PopUpButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
