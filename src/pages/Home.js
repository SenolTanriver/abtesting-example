import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Anne Sayfa</h1>
      <nav>
        <ul>
          <li><Link to="/testinga">Testinga</Link></li>
          <li><Link to="/testingb">Testingb</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Home