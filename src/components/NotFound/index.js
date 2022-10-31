import Header from '../Header/index'
import RouteNavigator from '../RouteNavigators/index'
import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundDescription,
  NotFoundHeading,
  NotFoundMainContainer,
  NotFoundLargeView,
} from './styling'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const notFoundImage = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDark ? '#f1f1f1' : '#0f0f0f'
      return (
        <NotFoundLargeView>
          <Header />
          <NotFoundMainContainer>
            <RouteNavigator />
            <NotFoundContainer bgColor={bgColor}>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundHeading color={textColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription color={textColor}>
                We are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContainer>
          </NotFoundMainContainer>
        </NotFoundLargeView>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
