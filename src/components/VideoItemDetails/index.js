/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiPlayListAddLine} from 'react-icons/ri'
import {BsDot} from 'react-icons/bs'

import {formatDistanceToNowStrict} from 'date-fns'
import Header from '../Header/index'
import RouteNavigator from '../RouteNavigators/index'
import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  VideoItemMainContainer,
  VideoItemContainer,
  VideoItemCardContainer,
  LikeButton,
  ViewCount,
  VideoTitle,
  TitleItemsContainer,
  TitleItemsFlexContainer,
  ChannelLogo,
  VideoRouteMainContainer,
  TitleContainer,
  DescriptionContainerSmallView,
  DescriptionContainerLargeView,
} from './styling'

import {
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

class VideoItem extends Component {
  state = {
    videoItemData: [],
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  formattedVideoData = data => ({
    id: data.id,
    title: data.title,
    videoUrl: data.video_url,
    thumbnailUrl: data.thumbnail_url,
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
      subscriberCount: data.channel.subscriber_count,
    },
    viewCount: data.view_count,
    publishedAt: data.published_at,
    description: data.description,
    videoSaved: false,
  })

  getVideoDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = await this.formattedVideoData(
        fetchedData.video_details,
      )
      this.setState({
        videoItemData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {videoItemData, isLiked, isDisliked, isSaved} = this.state
        const {
          id,
          title,
          videoUrl,
          channel,
          viewCount,
          publishedAt,
          description,
        } = videoItemData
        const {name, profileImageUrl, subscriberCount} = channel
        const formattedDate = formatDistanceToNowStrict(new Date(publishedAt))
        const activeLike = isLiked ? '#2563eb ' : ' #64748b'
        const activeDislike = isDisliked ? '#2563eb' : ' #64748b'
        const activeSave = isSaved ? '#2563eb' : '#64748b'
        const savedText = isSaved ? 'Saved' : 'Save'

        const {isDark, addToSavedVideos, removeFromSavedVideo} = value
        const bgColor = isDark ? '#000000' : '#f9f9f9'
        const textColor = isDark ? '#f1f1f1' : '#383838'

        const onLike = () => {
          this.setState(preValue => ({
            isLiked: !preValue.isLiked,
            isDisliked: !preValue,
          }))
        }

        const onDislike = () => {
          this.setState(preValue => ({
            isDisliked: !preValue.isDisliked,
            isLiked: !preValue,
          }))
        }

        const addOrRemoveFromList = () => {
          if (isSaved === true) {
            removeFromSavedVideo(id)
          } else {
            addToSavedVideos({...videoItemData})
          }
        }

        const onSave = () => {
          this.setState(
            preValue => ({isSaved: !preValue.isSaved}),
            addOrRemoveFromList,
          )
        }

        return (
          <VideoItemCardContainer bgColor={bgColor}>
            <ReactPlayer url={videoUrl} width="100%" />
            <TitleContainer>
              <VideoTitle color={textColor}>{title}</VideoTitle>
              <TitleItemsFlexContainer>
                <TitleItemsContainer>
                  <ViewCount color={textColor}>{viewCount} views</ViewCount>
                  <BsDot size="18px" />
                  <ViewCount color={textColor}> {formattedDate} ago</ViewCount>
                </TitleItemsContainer>
                <TitleItemsContainer>
                  <LikeButton onClick={onLike} color={activeLike}>
                    <AiOutlineLike size="24" />
                    Like
                  </LikeButton>
                  <LikeButton onClick={onDislike} color={activeDislike}>
                    <AiOutlineDislike size="24" />
                    Dislike
                  </LikeButton>
                  <LikeButton onClick={onSave} color={activeSave}>
                    <RiPlayListAddLine size="24" />
                    {savedText}
                  </LikeButton>
                </TitleItemsContainer>
              </TitleItemsFlexContainer>
              <DescriptionContainerSmallView>
                <TitleItemsContainer>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  <VideoItemContainer bgColor={bgColor}>
                    <ViewCount color={textColor}>{name}</ViewCount>
                    <ViewCount color={textColor}>
                      {subscriberCount} subscribers
                    </ViewCount>
                  </VideoItemContainer>
                </TitleItemsContainer>
                <ViewCount color={textColor}>{description}</ViewCount>
              </DescriptionContainerSmallView>
            </TitleContainer>
          </VideoItemCardContainer>
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
              We are having some trouble to complete your request. Please try
              again.
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
        return this.renderVideosView()
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
            <VideoRouteMainContainer
              bgColor={bgColor}
              data-testid="videoItemDetails"
            >
              <Header />
              <VideoItemMainContainer color={bgColor}>
                <RouteNavigator />
                <VideoItemContainer>{this.renderVideos()}</VideoItemContainer>
              </VideoItemMainContainer>
            </VideoRouteMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItem
