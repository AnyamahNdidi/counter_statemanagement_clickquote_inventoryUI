
import React from 'react'
import Headerall from './Headerall'
import { Layout, Button } from 'antd';
import "./HeadStyle.css"
import CountEntry from './CountEntry';

const { Header, Footer, Sider, Content } = Layout;






function Countr() {
  return (
    <div>
      <Headerall />
      <center>
        <CountEntry />
      </center>
    </div>
  )
}

export default Countr
