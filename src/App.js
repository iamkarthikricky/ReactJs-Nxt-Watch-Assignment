import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import NxtWatchContext from './Context/NxtWatchContext'

import Login from './components/LoginRoute/index'
import Home from './components/HomeRoute/index'
import Trending from './components/Trending/index'
import Gaming from './components/Gaming/index'
import SavedVideosRoute from './components/SavedVideos/index'
import VideoItem from './components/VideoItemDetails/index'
import NotFound from './components/NotFound/index'
import ProtectedRoute from './components/ProtectedRoute/index'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, activeTab: '', savedVideos: []}

  onToggleDarkTheme = () => {
    this.setState(preValue => ({
      isDark: !preValue.isDark,
    }))
  }

  onToggleActiveTab = newActiveTab => {
    this.setState({activeTab: newActiveTab})
  }

  addToSavedVideos = videoDetails => {
    const {savedVideos} = this.state
    const isVideoExists = savedVideos.find(
      eachItem => eachItem.id === videoDetails.id,
    )
    if (isVideoExists) {
      this.setState(preValue => ({
        savedVideos: [...preValue.savedVideos],
      }))
    } else {
      this.setState({
        savedVideos: [...savedVideos, videoDetails],
      })
    }
  }

  removeFromSavedVideo = id => {
    const {savedVideos} = this.state
    const updatedVideos = savedVideos.filter(each => each.id !== id)
    this.setState({savedVideos: updatedVideos})
  }

  render() {
    const {isDark, activeTab, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          onToggleDarkTheme: this.onToggleDarkTheme,
          activeTab,
          onToggleActiveTab: this.onToggleActiveTab,
          addToSavedVideos: this.addToSavedVideos,
          removeFromSavedVideo: this.removeFromSavedVideo,
          savedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute exact path="/videos/:id" component={VideoItem} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}
export default App
