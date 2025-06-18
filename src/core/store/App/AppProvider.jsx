// AppContext.jsx
import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleSidebar = () => setCollapsed(prev => !prev)

  const values = {
    collapsed,
    toggleSidebar,
  }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
