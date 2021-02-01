import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import HomeIcon from '@material-ui/icons/Home';
import "./SideStyle.css"
import {
  StarOutlined, StarFilled, StarTwoTone,
  ShoppingCartOutlined,
  PieChartOutlined,
  CodeSandboxOutlined,
  TeamOutlined,
  BankOutlined,
  SelectOutlined

} from '@ant-design/icons';

function SideBar() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div >
      <div className="side_con">
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", height: "50px", marginBottom: "30px" }}>
          <FormGroup row style={{ color: "white" }}>
            <FormControlLabel

              control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
              label="Secondary"
            />


          </FormGroup>

        </div>
        <div className="sidebarlink">
          <div>
            <HomeIcon style={{ color: "green" }} />

          </div>

          <div style={{ color: "white", marginLeft: "5px" }}>Home</div>

        </div>
        <div className="sidebarlink">
          <div>
            <ShoppingCartOutlined style={{ color: "green", }} />
          </div>

          <div style={{ color: "white", marginLeft: "10px" }}>Sales Order</div>

        </div>
        <div className="sidebarlink">
          <div>
            <PieChartOutlined style={{ color: "green", }} />
          </div>

          <div style={{ color: "white", marginLeft: "10px" }}>Purchase Order</div>

        </div>
        <div className="sidebarlink">
          <div>
            <CodeSandboxOutlined style={{ color: "green" }} />
          </div>

          <div style={{ color: "white", marginLeft: "10px" }}>Products</div>

        </div>
        <div className="sidebarlink">
          <div>
            <TeamOutlined style={{ color: "green" }} />
          </div>

          <div style={{ color: "white", marginLeft: "10px" }}>Customers</div>

        </div>

        <div className="sidebarlink">
          <div>
            <BankOutlined style={{ color: "green" }} />
          </div>

          <div style={{ color: "white", marginLeft: "10px" }}>Invoice</div>

        </div>
        <div className="sidebarlink">
          <div>
            <SelectOutlined style={{ color: "green" }} />
          </div>

          <div style={{ color: "white", marginLeft: "10px" }}>Reports</div>

        </div>

      </div>
    </div>
  )
}

export default SideBar
