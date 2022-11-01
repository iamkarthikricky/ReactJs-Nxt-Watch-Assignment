/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable spaced-comment */
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import {formatDistanceToNowStrict} from 'date-fns'

import {AiFillFire} from 'react-icons/ai'
import {BsDot} from 'react-icons/bs'

import Header from '../Header/index'
import RouteNavigator from '../RouteNavigators/index'
import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  TrendingMainContainer,
  TrendingContainer,
  TrendingSubContainer,
  TrendingHeading,
  TrendingVideoCard,
  ThumbnailImage,
  TrendingListCard,
  VideoContainer,
} from './styling'

import {
  ChannelName,
  DescriptionContainer,
  VideoTitle,
  TitleContainerSmallView,
  TitleContainerLargeView,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
} from '../HomeRoute/styling'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const VideoCard = props => {
  const {data} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = data
  const {name} = channel
  const formattedDate = formatDistanceToNowStrict(new Date(publishedAt))
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const titleColor = isDark ? '#ffffff' : '#000000'
        const descriptionColor = isDark ? '#e2e8f0' : '#475569'

        return (
          <Link to={`/videos/${id}`} className="nav-link">
            <TrendingListCard>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
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
                {/*
                <TitleContainerLargeView>
                  <ChannelName color={descriptionColor}>{name}</ChannelName>
                  <VideoContainer>
                    <ChannelName color={descriptionColor}>
                      {viewCount} views
                    </ChannelName>
                    <BsDot size="18px" color={descriptionColor} />
                    <ChannelName color={descriptionColor}>
                      {formattedDate} ago
                    </ChannelName>
                  </VideoContainer>
                </TitleContainerLargeView>
                */}
              </DescriptionContainer>
            </TrendingListCard>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

class Trending extends Component {
  state = {
    trendingVideosData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
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

  getTrendingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = 'https://apis.ccbp.in/videos/trending'
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
        trendingVideosData: updatedVideoData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderTrendingVideos = () => {
    const {trendingVideosData} = this.state
    return (
      <TrendingVideoCard>
        {trendingVideosData.map(eachVideo => (
          <VideoCard key={eachVideo.title} data={eachVideo} />
        ))}
      </TrendingVideoCard>
    )
  }

  onRetry = () => {
    this.getTrendingVideos()
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
        return this.renderTrendingVideos()
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
          const color = isDark ? '#ffffff' : '#000000'
          const bgColor2 = isDark ? '#0f0f0f' : ' #f1f1f1'
          const bgColor1 = isDark ? '#0f0f0f' : ' #f9f9f9'
          return (
            <>
              <Header />
              <TrendingMainContainer>
                <RouteNavigator />
                <TrendingContainer bgColor={bgColor1} data-testid="trending">
                  <TrendingSubContainer bgColor={bgColor2}>
                    <AiFillFire size="36" color="#ff0000" />
                    <TrendingHeading color={color}>Trending</TrendingHeading>
                  </TrendingSubContainer>
                  {this.renderVideos()}
                </TrendingContainer>
              </TrendingMainContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
