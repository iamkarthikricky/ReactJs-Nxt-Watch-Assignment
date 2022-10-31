import {Link} from 'react-router-dom'

import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  RouteNavigators,
  ListItem,
  RouteName,
  ContactsContainer,
  ContactDescription,
  ImageContainer,
  SocialLogo,
  NavLink,
} from './styling'
import './index.css'

const RouteNavigator = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {onToggleActiveTab, activeTab, isDark} = value

      const onHomeTabClick = () => {
        onToggleActiveTab('Home')
      }

      const onTrendingTabClick = () => {
        onToggleActiveTab('Trending')
      }

      const onGamingTabClick = () => {
        onToggleActiveTab('Gaming')
      }

      const onSavedVideosTabClick = () => {
        onToggleActiveTab('SavedVideos')
      }

      const bgColor = isDark ? '#181818' : '#ffffff'
      const textColor = isDark ? '#f4f4f4' : '#000000'

      return (
        <RouteNavigators bgColor={bgColor}>
          <div>
            <Link to="/" onClick={onHomeTabClick} className="nav-link">
              <NavLink
                bgColor={isDark && activeTab === 'Home' ? '#383838' : ''}
              >
                <ListItem
                  bgColor={!isDark && activeTab === 'Home' ? '#f9f9f9' : ''}
                >
                  <AiFillHome
                    size="24"
                    color={activeTab === 'Home' ? ' #ff0000' : '#383838'}
                  />
                  <RouteName
                    font={activeTab === 'Home' ? 'bold' : ''}
                    textColor={textColor}
                  >
                    Home
                  </RouteName>
                </ListItem>
              </NavLink>
            </Link>

            <Link
              to="/trending"
              className="nav-link"
              onClick={onTrendingTabClick}
            >
              <NavLink
                bgColor={isDark && activeTab === 'Trending' ? '#383838' : ''}
              >
                <ListItem
                  bgColor={!isDark && activeTab === 'Trending' ? '#f9f9f9' : ''}
                >
                  <AiFillFire
                    size="24"
                    color={activeTab === 'Trending' ? ' #ff0000' : '#383838'}
                  />
                  <RouteName
                    font={activeTab === 'Trending' ? 'bold' : ''}
                    textColor={textColor}
                  >
                    Trending
                  </RouteName>
                </ListItem>
              </NavLink>
            </Link>
            <Link to="/gaming" className="nav-link" onClick={onGamingTabClick}>
              <NavLink
                bgColor={isDark && activeTab === 'Gaming' ? '#383838' : ''}
              >
                <ListItem
                  bgColor={!isDark && activeTab === 'Gaming' ? '#f9f9f9' : ''}
                >
                  <SiYoutubegaming
                    size="24"
                    color={activeTab === 'Gaming' ? ' #ff0000' : '#383838'}
                  />
                  <RouteName
                    font={activeTab === 'Gaming' ? 'bold' : ''}
                    textColor={textColor}
                  >
                    Gaming
                  </RouteName>
                </ListItem>
              </NavLink>
            </Link>
            <Link
              to="/saved-videos"
              className="nav-link"
              onClick={onSavedVideosTabClick}
            >
              <NavLink
                bgColor={isDark && activeTab === 'SavedVideos' ? '#383838' : ''}
              >
                <ListItem
                  bgColor={
                    !isDark && activeTab === 'SavedVideos' ? '#f9f9f9' : ''
                  }
                >
                  <RiMenuAddFill
                    size="24"
                    color={activeTab === 'SavedVideos' ? ' #ff0000' : '#383838'}
                  />
                  <RouteName
                    font={activeTab === 'SavedVideos' ? 'bold' : ''}
                    textColor={textColor}
                  >
                    Saved videos
                  </RouteName>
                </ListItem>
              </NavLink>
            </Link>
          </div>
          <ContactsContainer>
            <ContactDescription color={textColor}>
              CONTACT US
            </ContactDescription>
            <ImageContainer>
              <SocialLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                alt="facebook logo"
              />
              <SocialLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                alt="twitter logo"
              />
              <SocialLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ImageContainer>
            <ContactDescription color={textColor}>
              Enjoy! Now to see your channels and recommendations!
            </ContactDescription>
          </ContactsContainer>
        </RouteNavigators>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default RouteNavigator
