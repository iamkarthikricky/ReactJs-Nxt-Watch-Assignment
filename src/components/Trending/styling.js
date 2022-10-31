/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const TrendingSubContainer = styled.div`
  height: 20vh;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const TrendingContainer = styled.div`
  background-color: ${props => props.bgColor};
  width: 100%;
`
export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
  margin-left: 10px;
  color: ${props => props.color};
`
export const TrendingVideoCard = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
`
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const TrendingListCard = styled.li`
  display: flex;
  flex-direction: row;
  padding: 5px;
  width: 100%;
  margin: 10px;
  flex-grow: 1;
`

export const ThumbnailImage = styled.img`
  width: 30vw;
  margin-right: 20px;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.color};
`
