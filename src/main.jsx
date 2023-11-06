import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TaskListProvider } from './ContextProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <TaskListProvider> <App /></TaskListProvider>
   
  </>,
)
