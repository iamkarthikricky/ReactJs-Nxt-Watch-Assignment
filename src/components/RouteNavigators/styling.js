import styled from 'styled-components'

export const RouteNavigators = styled.ul`
  list-style: none;
  background-color: ${props => props.bgColor};
  min-width: 20vw;
  padding: 0;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const NavLink = styled.div`
  background-color: ${props => props.bgColor};
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  flex-grow: 1;
  background-color: ${props => props.bgColor};
`
export const RouteName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  flex-grow: 1;
  line-height: 1.5;
  padding-top: 10px;
  margin-left: 20px;
  font-weight: ${props => props.font};
  color: ${props => props.textColor};
`
export const ContactsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: flex-end;
  padding: 10px;
`
export const ContactDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.color};
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const SocialLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
