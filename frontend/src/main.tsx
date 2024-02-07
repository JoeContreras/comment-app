import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { commentApi } from './api/apiSlice.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={commentApi}>
    <App />
    </ApiProvider>
  </React.StrictMode>,
)
