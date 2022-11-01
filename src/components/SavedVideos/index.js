import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'

import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import Header from '../Header/index'
import RouteNavigator from '../RouteNavigators/index'
import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  SavedVideosMainContainer,
  SavedVideosContainer,
  NoVideosContainer,
  NoVideoImage,
  NoVideoHeading,
  NoVideoPara,
  SavedVideosListContainer,
} from './styling'

import {
  TrendingSubContainer,
  TrendingHeading,
  TrendingListCard,
  ThumbnailImage,
  Title,
  ChannelName,
} from '../Trending/styling'

const VideoCard = props => {
  const {data} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = data
  const {name} = channel
  const formattedDate = formatDistanceToNow(new Date(publishedAt))
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
              <div>
                <Title color={titleColor}>{title}</Title>
                <ChannelName color={descriptionColor}>{name}</ChannelName>
                <ChannelName color={descriptionColor}>
                  {viewCount} views {formattedDate}
                </ChannelName>
              </div>
            </TrendingListCard>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

class SavedVideosRoute extends Component {
  noSavedVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const textColor = isDark ? '#f1f1f1' : '#000000'
        return (
          <NoVideosContainer>
            <NoVideoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoVideoHeading color={textColor}>
              No saved videos found
            </NoVideoHeading>
            <NoVideoPara color={textColor}>
              You can save your videos while watching them
            </NoVideoPara>
          </NoVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSavedVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, savedVideos} = value
        const color = isDark ? '#ffffff' : '#000000'
        const bgColor = isDark ? '#0f0f0f' : ' #f1f1f1'
        return (
          <>
            <TrendingSubContainer bgColor={bgColor}>
              <AiFillFire size="36" color="#ff0000" />
              <TrendingHeading color={color}>Saved Videos</TrendingHeading>
            </TrendingSubContainer>
            <SavedVideosListContainer bgColor={bgColor}>
              {savedVideos.map(each => (
                <VideoCard key={each.title} data={each} />
              ))}
            </SavedVideosListContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, savedVideos} = value
          const bgColor = isDark ? '#0f0f0f' : '#f1f1f1'
          return (
            <>
              <Header />
              <SavedVideosMainContainer
                bgColor={bgColor}
                data-testid="savedVideos"
              >
                <RouteNavigator />
                <SavedVideosContainer>
                  {savedVideos.length === 0
                    ? this.noSavedVideosView()
                    : this.renderSavedVideos()}
                </SavedVideosContainer>
              </SavedVideosMainContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideosRoute
