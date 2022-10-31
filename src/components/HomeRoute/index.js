/* eslint-disable spaced-comment */
/* eslint-disable object-shorthand */
/* eslint-disable react/button-has-type */
import {Link} from 'react-router-dom'

import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNowStrict} from 'date-fns'

import NxtWatchContext from '../../Context/NxtWatchContext'
import Header from '../Header/index'
import RouteNavigator from '../RouteNavigators/index'
import {
  BannerImageContainer,
  ModalContainer,
  BannerImage,
  GetItNowButton,
  CloseButton,
  HomeColumnContainer,
  HomeContainer,
  InputContainer,
  SearchContainer,
  VideoCardContainer,
  VideoContainer,
  ProfileLogo,
  Thumbnail,
  ProfileContainer,
  VideoTitle,
  DescriptionContainer,
  FailureHeading,
  FailureImage,
  FailurePara,
  RetryButton,
  FailureContainer,
  HomeMainContainer,
  HomeSubContainer,
  ChannelName,
  TitleContainerSmallView,
} from './styling'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
const VideoCard = props => {
  const {data} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = data
  const {name, profileImageUrl} = channel
  const formattedDate = formatDistanceToNowStrict(new Date(publishedAt))
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const titleColor = isDark ? '#ffffff' : '#000000'
        const descriptionColor = isDark ? '#64748b' : '#000000'
        return (
          <Link to={`/videos/${id}`} className="nav-link">
            <VideoContainer>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <ProfileContainer>
                <ProfileLogo src={profileImageUrl} alt="channel logo" />
                <DescriptionContainer>
                  <VideoTitle color={titleColor}>{title}</VideoTitle>
                  <TitleContainerSmallView color={descriptionColor}>
                    <ChannelName color={descriptionColor}>{name}</ChannelName>
                    <BsDot size="18px" color={descriptionColor} />
                    <ChannelName color={descriptionColor}>
                      {viewCount} views
                    </ChannelName>
                    <BsDot size="18px" color={descriptionColor} />
                    <ChannelName color={descriptionColor}>
                      {formattedDate} ago
                    </ChannelName>
                  </TitleContainerSmallView>
                  {/*<TitleContainerLargeView>
                    <ChannelName color={descriptionColor}>{name}</ChannelName>
                    <ProfileContainer>
                      <ChannelName color={descriptionColor}>
                        {viewCount} views
                      </ChannelName>
                      <BsDot size="18px" color={descriptionColor} />
                      <ChannelName color={descriptionColor}>
                        {formattedDate} ago
                      </ChannelName>
                    </ProfileContainer>
                  </TitleContainerLargeView>*/}
                </DescriptionContainer>
              </ProfileContainer>
            </VideoContainer>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
class Home extends Component {
  state = {
    displayBanner: true,
    searchInput: '',
    videoData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getFormattedVideoData = data => ({
    id: data.id,
    title: data.title,
    thumbnailUrl: data.thumbnail_url,
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
    },
    viewCount: data.view_count,
    publishedAt: data.published_at,
  })

  getHomeVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedVideoData = fetchedData.videos.map(eachVideo =>
        this.getFormattedVideoData(eachVideo),
      )
      this.setState({
        videoData: updatedVideoData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getHomeVideos()
  }

  onSearchRetry = () => {
    this.setState({searchInput: ''}, this.getHomeVideos)
  }

  renderHomeVideos = () => {
    const {videoData} = this.state

    return videoData.length === 0 ? (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const textColor = isDark ? '#ffffff' : '#000000'

          return (
            <FailureContainer>
              <FailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <FailureHeading textColor={textColor}>
                No Search results found
              </FailureHeading>
              <FailurePara textColor={textColor}>
                Try different key words or remove search filter
              </FailurePara>
              <RetryButton onClick={this.onSearchRetry}>Retry</RetryButton>
            </FailureContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    ) : (
      <VideoCardContainer>
        {videoData.map(each => (
          <VideoCard key={each.id} data={each} />
        ))}
      </VideoCardContainer>
    )
  }

  renderLoadingView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const textColor = isDark ? '#ffffff' : '#000000'
        return (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color={textColor} height="50" width="50" />
          </div>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const failureImg = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const textColor = isDark ? '#ffffff' : '#000000'

        return (
          <FailureContainer>
            <FailureImage src={failureImg} alt="failure view" />
            <FailureHeading textColor={textColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailurePara textColor={textColor}>
              We are having some trouble to complete your request .Please try
              again
            </FailurePara>
            <RetryButton onClick={this.onRetry}>Retry</RetryButton>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeVideos()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  onCloseBanner = () => {
    this.setState(
      preValue => ({displayBanner: !preValue.displayBanner}),
      this.renderBanner,
    )
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchKeyDown = event => {
    if (event.key === 'Enter') {
      const {searchInput} = this.state
      this.setState({searchInput: searchInput}, this.getHomeVideos)
    }
  }

  onClickSearchButton = () => {
    const {searchInput} = this.state
    this.setState({searchInput: searchInput}, this.getHomeVideos)
  }

  renderBanner = () => {
    const {displayBanner} = this.state

    return (
      <>
        {displayBanner ? (
          <BannerImageContainer data-testid="banner">
            <ModalContainer>
              <BannerImage
                src=" https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <p>Buy Nxt Watch Premium</p>
              <GetItNowButton>GET IT NOW</GetItNowButton>
            </ModalContainer>
            <CloseButton
              type="button"
              data-testid="close"
              onClick={this.onCloseBanner}
            >
              <IoMdClose size={20} color="#231f20" />
            </CloseButton>
          </BannerImageContainer>
        ) : (
          ''
        )}
      </>
    )
  }

  render() {
    const {searchInput} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const color = isDark ? '#181818' : ' #f9f9f9 '
          return (
            <HomeMainContainer color={color}>
              <Header />
              <HomeSubContainer>
                <RouteNavigator />
                <HomeColumnContainer>
                  {this.renderBanner()}
                  <HomeContainer color={color} data-testid="home">
                    <SearchContainer>
                      <InputContainer
                        type="search"
                        value={searchInput}
                        placeholder="Search"
                        onChange={this.onSearchInput}
                        onKeyDown={this.onSearchKeyDown}
                      />
                      <button
                        type="button"
                        data-testid="searchButton"
                        onClick={this.onClickSearchButton}
                      >
                        <AiOutlineSearch />
                      </button>
                    </SearchContainer>
                    {this.renderVideos()}
                  </HomeContainer>
                </HomeColumnContainer>
              </HomeSubContainer>
            </HomeMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
