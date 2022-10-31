/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const GameMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.color};
`

export const GamingSuccessContainer = styled.div`
  width: 100vw;
`
export const GamingMainCard = styled.ul`
  margin: 0;
  padding: 10px;
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${props => props.bgColor};
`
export const GameListCard = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px;
  flex-grow: 1;
`
export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: ${props => props.color};
`
export const GameThumbnail = styled.img`
  width: 200px;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 20vw;
    height: 20vw;
  }
`
export const GamingSubContainer = styled.div`
  height: 20vh;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`
export const GamingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
  margin-left: 10px;
  color: ${props => props.color};
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.color};
`
export const Description = styled(Title)`
  font-size: 16px;
`
