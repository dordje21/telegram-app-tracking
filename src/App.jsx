import { useEffect, useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { default as WebApp } from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState('')

  useEffect(() => {
    setUser(WebApp.initDataUnsafe.user)
  })
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
        {/* Here we add our button with alert callback */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
            Show Alert
        </button>
      <p>{user.id}</p>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      <p>{user.username}</p>
      <p>{user.is_premium}</p>
      <img src={user.photo_url} width={100} height={100}/>
      </div>
    </>
  )
}

export default App