import styled from 'styled-components'

export const VideoRouteMainContainer = styled.div`
  background-color: ${props => props.bgColor};
`
export const VideoItemMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const VideoItemContainer = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const VideoItemCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  flex-grow: 1;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 90%;
    padding: 30px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.color};
`
export const VideoDescriptionSmallView = styled(ViewCount)``
export const VideoDescriptionLargeView = styled(ViewCount)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const TitleItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const DescriptionItemsSmallView = styled(TitleItemsContainer)``
export const TitleItemsFlexContainer = styled(TitleItemsContainer)`
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const DescriptionContainerSmallView = styled.div`
  margin-top: 15px;
  border-top: 1px solid black;
`
export const DescriptionContainerLargeView = styled.div`
  margin-top: 15px;
  border-top: 1px solid black;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ChannelLogo = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
  padding-top: 10px;
`
export const LikeButton = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  width: 90px;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
