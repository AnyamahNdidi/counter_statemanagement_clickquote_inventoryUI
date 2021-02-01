import React from 'react'
import "./HeaderStyle.css"
import { Button } from "antd"
import pix from "../img/pe.jpg"
import { StarOutlined, StarFilled, StarTwoTone, MenuOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';

function HeaderLayout() {
  return (
    <div>
      <div className="allcone_nav">
        <div className="allcone1">
          <div><MenuOutlined style={{ fontSize: "20px" }} /></div>
          <div><PlusCircleOutlined style={{ fontSize: "20px", color: "green" }} /></div>
          <div className="Butin" >
            <input placeholder="Search" style={{ height: "35px", border: "0px", width: "240px", paddingLeft: "10px" }} />
            <Button
              style={{
                height: "35px",
                border: "0px"

              }}

            ><SearchOutlined /></Button>


          </div>
        </div>
        <div className="allcone2">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", }}>

            <div className="imgcon">

            </div>
            <div style={{ display: "flex", marginLeft: "10px" }}>
              <div>Anyamah Ndidi</div>


            </div>

          </div>


        </div>

      </div>
    </div >
  )
}

export default HeaderLayout
