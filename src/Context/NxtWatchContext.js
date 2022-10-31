import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  onToggleDarkTheme: () => {},
  activeTab: '',
  savedVideos: [],
  onToggleActiveTab: () => {},
  addToSavedVideos: () => {},
  removeFromSavedVideo: () => {},
})
export default NxtWatchContext
