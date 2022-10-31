import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`
export const HomeSubContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const HomeColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const BannerImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${props => props.display};
  flex-direction: row;
  width: 100%;
  height: 40vh;
  padding: 50px;
`
export const BannerImage = styled.img`
  width: 30%;
`
export const GetItNowButton = styled.button`
  background-color: transparent;
  border: 1px solid #181818;
  padding: 5px;
  color: #181818;
  width: 30vw;
  @media screen and (min-width: 768px) {
    width: 100px;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
export const BannerLogo = styled.img`
  width: 10vw;
`
export const BannerDescription = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  max-width: 60%;
  font-weight: 500;
`
export const BannerButton = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 24px;
  border: 1px solid black;
`
export const BannerCloseBtn = styled(BannerButton)`
  align-self: flex-start;
  border: none;
`
export const HomeContainer = styled.div`
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  width: 15vw;
`
export const InputContainer = styled.input`
  height: 30px;
`
export const SearchButton = styled.button`
  width: 70px;
`
export const VideoCardContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 1;
  width: 100%;
  padding: 0;
`
export const VideoContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
  margin: 10px;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    width: 20vw;
  }
`

export const ListContent = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-right: 20px;
  color: ${props => props.color};
`
export const Thumbnail = styled.img`
  width: 100%;
`
export const ProfileLogo = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 15px;
`
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`
export const TitleContainerSmallView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TitleContainerLargeView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const VideoTitle = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 300;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 10px;
  margin: 0;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`
export const FailureContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`
export const FailureImage = styled.img`
  width: 20vw;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.textColor};
`
export const FailurePara = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.textColor};
`
export const RetryButton = styled.button`
  width: 90px;
  height: 30px;
  border: none;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 5px;
`

export const RouteNavigators = styled.ul`
  list-style: none;
  background-color: #ffffff;
  min-width: 20vw;
  padding: 0;
`
