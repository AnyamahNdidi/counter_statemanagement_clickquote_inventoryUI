import React from 'react'
import { Layout, Button } from 'antd';
import { Link } from "react-router-dom"
import "./HeadStyle.css"

const { Header, Footer, Sider, Content } = Layout;

function Headerall() {
  return (
    <div>
      <Layout>
        <Header
          style={{
            background: "#2D4249",
            

          }}
        >
          <div className="nav_con">

            <div className="nav_logo">
              LOGO
            </div>
            <div className="nav_nav" >
              <Link to="/Counter" style={{ color: "white" }}>
                <div>Counter </div>

              </Link>
              <Link to="/Quote" style={{ color: "white" }}>
                <div>Quote </div>
              </Link>
              <Link to="/Stateman" style={{ color: "white" }}>
                <div>State Mangement </div>
              </Link>
              <Button>Donate</Button>


            </div>

          </div>
        </Header>

      </Layout>
    </div>
  )
}

export default Headerall
