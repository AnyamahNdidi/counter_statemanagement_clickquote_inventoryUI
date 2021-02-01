import { formatCountdown } from 'antd/lib/statistic/utils'
import React from 'react'
import { Link } from "react-router-dom"
import "./Mainstyle.css"
import { Header } from "antd/lib/layout/layout"


function MainMaster() {
  return (
    <div>
      <Header className="masterHeader">
        
        <Link className="masterlink">One</Link>
        <Link className="masterlink">One</Link>
        <Link className="masterlink">One</Link>
      </Header>

    </div>
  )
}

export default MainMaster
