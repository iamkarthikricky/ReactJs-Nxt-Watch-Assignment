import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

import {BsMoon} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  NavMobileView,
  NavLargeView,
  NavBar,
  WebsiteLogo,
  ContentContainer,
  ContentListItem,
  ThemeButton,
  ProfileLogo,
  LogOutButton,
  PopupContainer,
  PopUpButton,
  Description,
  PopUpButtonContainer,
} from './styling'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {onToggleDarkTheme, isDark} = value
        const onChangeTheme = () => {
          onToggleDarkTheme()
        }
        const websiteLogo = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const bgColor = isDark ? '#181818' : '#ffffff'
        const textColor = isDark ? '#ffffff' : '#4f46e5'
        const iconsColor = isDark ? '#ffffff' : '#000000'
        return (
          <>
            <NavMobileView>
              <NavBar bgColor={bgColor}>
                <Link to="/">
                  <WebsiteLogo src={websiteLogo} alt="website logo" />
                </Link>
                <ContentContainer>
                  <ContentListItem>
                    <ThemeButton onClick={onChangeTheme} data-testid="theme">
                      {isDark ? (
                        <FiSun size="18" color={iconsColor} />
                      ) : (
                        <BsMoon size="18" />
                      )}
                    </ThemeButton>
                  </ContentListItem>
                  <ContentListItem>
                    <GiHamburgerMenu size="18" color={iconsColor} />
                  </ContentListItem>
                  <ContentListItem>
                    <div className="pop-container">
                      <Popup
                        modal
                        trigger={<FiLogOut size="18" color={iconsColor} />}
                      >
                        {close => (
                          <PopupContainer>
                            <Description>
                              Are you sure, you want to logout
                            </Description>
                            <PopUpButtonContainer>
                              <PopUpButton onClick={() => close()}>
                                Cancel
                              </PopUpButton>
                              <PopUpButton onClick={onLogout}>
                                Confirm
                              </PopUpButton>
                            </PopUpButtonContainer>
                          </PopupContainer>
                        )}
                      </Popup>
                    </div>
                  </ContentListItem>
                </ContentContainer>
              </NavBar>
            </NavMobileView>
            <NavLargeView>
              <NavBar bgColor={bgColor}>
                <Link to="/">
                  <WebsiteLogo src={websiteLogo} alt="website logo" />
                </Link>
                <ContentContainer>
                  <ContentListItem>
                    <ThemeButton onClick={onChangeTheme} data-testid="theme">
                      {isDark ? (
                        <FiSun size="28" color="ffffff" />
                      ) : (
                        <BsMoon size="28" />
                      )}
                    </ThemeButton>
                  </ContentListItem>
                  <ContentListItem>
                    <ProfileLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                      alt="profile"
                    />
                  </ContentListItem>
                  <ContentListItem>
                    <Popup
                      modal
                      trigger={
                        <LogOutButton color={textColor}>Logout</LogOutButton>
                      }
                    >
                      {close => (
                        <PopupContainer>
                          <Description>
                            Are you sure, you want to logout?
                          </Description>
                          <PopUpButtonContainer>
                            <PopUpButton
                              onClick={() => close()}
                              color="#475569"
                              bgColor="transparent"
                            >
                              Cancel
                            </PopUpButton>
                            <PopUpButton
                              onClick={onLogout}
                              color="#ffffff"
                              bgColor="#3b82f6"
                            >
                              Confirm
                            </PopUpButton>
                          </PopUpButtonContainer>
                        </PopupContainer>
                      )}
                    </Popup>
                  </ContentListItem>
                </ContentContainer>
              </NavBar>
            </NavLargeView>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
