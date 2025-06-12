// AppContext.jsx
import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleSidebar = () => setCollapsed(prev => !prev)


  const values = {
    toggleSidebar,
    collapsed,
  }

  return (
    <AppContext.Provider value={ values }>
      {children}
    </AppContext.Provider>
  )
}

// Hook para usar más fácil
export const useApp = () => useContext(AppContext)
