import React from 'react'
import "./ContentStyle.css"
import pix from "../img/undraw_reading_0re1.png"
import picst from "../img/stock.38cf74d8.gif"
import sdpic from "../img/bfa73ebebc80a68af8b41c412e7b5729.gif"
import data from "./Product.json"
import circpix from "../img/51we7NYpMxL._AC_UY395_.jpg"
import { Button } from "antd"
import { Link } from "react-router-dom"

function Contentcom() {




  return (

    <div className="allcontmiddle">
      <div className="all1">
        <div className="all1side">
          <div className="inner">
            <p>Hi Anyamah,</p>&nbsp;
              <p style={{ color: "lightblue" }}>Good Morning </p>

          </div>
          <div className="inner2">
            Here is what happening with you today

            </div>
          <div className="inner3">
            <div className="price_con">
              <div style={{
                color: "green",
                fontWeight: 700,
                fontStyle: "25px"
              }}>$23,733
                <div

                  style={{
                    color: "grey",
                    fontStyle: "25px"
                  }}


                >Today's sale</div>
              </div>
              <div
                style={{
                  color: "purple",
                  fontWeight: 700,
                  fontStyle: "25px"
                }}

              >$27
                <div

                  style={{
                    color: "grey",
                    fontStyle: "0px",
                    fontWeight: "100w"
                  }}

                >Today's sale</div>
              </div>
              <div style={{
                color: "red",
                fontWeight: 700,
                fontStyle: "25px"
              }}

              >$23,733
                <div

                  style={{
                    color: "grey",
                    fontStyle: "10px"
                  }}

                >Today's sale</div>
              </div>

            </div>

          </div>

        </div>
        <div className="all1side2">
          <img src={pix} />

        </div>

      </div>
      <div className="all2">
        <div className="alii_con">
          <img src={picst} />

        </div>
        <div className="alii_con2">
          <img src={sdpic} />

        </div>

      </div>
      <div className="pro-con">
        {
          data.map(({ img, title, price }) => (

            <div className="card_pro">
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                paddingTop: "10px"


              }}>
                <div className="circle-img">
                  <img src={img} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "50%" }} />

                </div>

              </div >

              <div className="title_con">
                {title}
              </div>
              <div className="przii">
                <div style={{ width: "50%", paddingLeft: "10px" }}>
                  <div>price</div>
                  <div style={{ color: "green", fontWeight: "500" }}>{price}</div>

                </div>
                <div style={{ width: "50%", }}>
                  <div>Total sales</div>
                  <div style={{ fontWeight: "800" }}>$676</div>

                </div>

              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "-30px" }}>
                <Link to="/paystack">
                  <Button>
                    Buy Now
                </Button>

                </Link>


              </div>

            </div>
          ))
        }

      </div>

    </div>

  )
}

export default Contentcom
