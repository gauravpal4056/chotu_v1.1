import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Html, useProgress } from '@react-three/drei'
// import Loader from './components/Loader1.jsx'
// import Loader from './components/Loader.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    
        <App/>
)

// function Loader(){
//   const { progress, active} = useProgress()

//   return <Html center > {progress.toFixed(1) }% loaded</Html>
// }
