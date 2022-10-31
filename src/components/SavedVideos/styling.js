/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const SavedVideosMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
`
export const SavedVideosContainer = styled.div`
  background-color: transparent;
  width: 100%;
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoVideoImage = styled.img`
  width: 30vw;
`
export const NoVideoHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.color};
`
export const NoVideoPara = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
`
export const SavedVideosListContainer = styled.ul`
  list-style: none;
  padding: 0;
  background-color: ${props => props.bgColor};
`
