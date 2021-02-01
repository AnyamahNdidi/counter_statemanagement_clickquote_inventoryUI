import React from 'react'
import { Layout } from 'antd';
import HeaderLayout from './HeaderLayout';
import Contentcom from './Contentcom';
import SideBar from './SideBar';

const { Header, Footer, Sider, Content } = Layout;

function Layoutall() {
  return (
    <div>
      <Layout>
        <Sider>
          <SideBar />
        </Sider>
        <Layout>
          <Header
            style={{
              background: "#ECECEC",
              paddingLeft: "0px",
              paddingRight: "0px",
              zIndex: "20px",
              top: "0px",
              position: "sticky"


            }}

          >

            <HeaderLayout />
          </Header>
          <Content>

            <Contentcom />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>

    </div >
  )
}

export default Layoutall
