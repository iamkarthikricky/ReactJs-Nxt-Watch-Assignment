import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  MainContainer,
  LoginContainer,
  AppImage,
  LoginForm,
  CustomLabel,
  CustomInput,
  CheckBoxContainer,
  LoginButton,
  CheckBoxInput,
  ErrorMessage,
} from './Styling'

import NxtWatchContext from '../../Context/NxtWatchContext'

class Login extends Component {
  state = {
    onToggleCheckBox: false,
    username: '',
    password: '',
    showError: false,
    errorMessage: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showError: true, errorMessage: errorMsg})
  }

  onShowPassword = () => {
    this.setState(preValue => ({onToggleCheckBox: !preValue.onToggleCheckBox}))
  }

  onUserNameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      onToggleCheckBox,
      username,
      password,
      showError,
      errorMessage,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const color = isDark ? '#ffffff' : '#000000'
          const mainBgColor = isDark ? '#0f0f0f' : '#f9f9f9'
          const bgColor = isDark ? ' #1e293b' : '#ffffff'
          const websiteLogo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <MainContainer bgColor={mainBgColor}>
              <LoginContainer bgColor={bgColor}>
                <AppImage src={websiteLogo} alt="website logo" />
                <LoginForm onSubmit={this.onFormSubmit}>
                  <CustomLabel htmlFor="userName" color={color}>
                    USERNAME
                  </CustomLabel>
                  <CustomInput
                    type="text"
                    id="userName"
                    placeholder="Username"
                    value={username}
                    onChange={this.onUserNameChange}
                  />
                  <CustomLabel htmlFor="password" color={color}>
                    PASSWORD
                  </CustomLabel>
                  {onToggleCheckBox ? (
                    <CustomInput
                      type="text"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.onPasswordChange}
                      color={color}
                    />
                  ) : (
                    <CustomInput
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.onPasswordChange}
                      color={color}
                    />
                  )}
                  <CheckBoxContainer>
                    <CheckBoxInput
                      checked={onToggleCheckBox}
                      type="checkbox"
                      id="checkbox"
                      onChange={this.onShowPassword}
                      color={color}
                    />
                    <CustomLabel htmlFor="checkbox" color={color}>
                      Show Password
                    </CustomLabel>
                  </CheckBoxContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showError ? <ErrorMessage>{errorMessage}</ErrorMessage> : ''}
                </LoginForm>
              </LoginContainer>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
