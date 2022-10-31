import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header/index'
import RouteNavigator from '../RouteNavigators/index'
import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
} from '../HomeRoute/styling'

import {
  Title,
  Description,
  GamingMainCard,
  GameMainContainer,
  GameListCard,
  GameThumbnail,
  GamingHeading,
  GamingSubContainer,
  GamingSuccessContainer,
} from './styling'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
const GameCard = props => {
  const {data} = props
  const {id, title, thumbnailUrl, viewCount} = data
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const textColor = isDark ? '#f1f9f9' : '#000000'

        return (
          <Link to={`/videos/${id}`} className="nav-link">
            <GameListCard>
              <GameThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <Title color={textColor}>{title}</Title>
              <Description color={textColor}>
                {viewCount} Watching Worldwide
              </Description>
            </GameListCard>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
class Gaming extends Component {
  state = {gamingData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedGamingData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingData: updatedGamingData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderGamingVideos = () => {
    const {gamingData} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const color = isDark ? '#ffffff' : '#000000'
          const bgColor1 = isDark ? '#0f0f0f' : '#f9f9f9'
          const bgColor2 = isDark ? '#0f0f0f' : ' #f1f1f1'
          return (
            <>
              <GamingSuccessContainer>
                <GamingSubContainer bgColor={bgColor2}>
                  <SiYoutubegaming size="36" color="#ff0000" />
                  <GamingHeading color={color}>Gaming</GamingHeading>
                </GamingSubContainer>
                <GamingMainCard bgColor={bgColor1}>
                  {gamingData.map(eachVideo => (
                    <GameCard key={eachVideo.title} data={eachVideo} />
                  ))}
                </GamingMainCard>
              </GamingSuccessContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  onRetry = () => {
    this.getGamingVideos()
  }

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

  renderVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideos()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColor = isDark ? '#0f0f0f' : '#ffffff'

          return (
            <>
              <Header />
              <GameMainContainer color={bgColor} data-testid="gaming">
                <RouteNavigator />
                {this.renderVideos()}
              </GameMainContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
