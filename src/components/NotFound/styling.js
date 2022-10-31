import styled from 'styled-components'

export const NotFoundLargeView = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NotFoundSmallView = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NotFoundMainContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const NotFoundContainer = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundImage = styled.img`
  width: 30vw;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: bold;
  color: ${props => props.color};
`
export const NotFoundDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.color};
`
