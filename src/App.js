import logo from './logo.svg';
import './App.css';
import Header from './Component/Headerall';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Countr from './Component/Countr';
import Headerall from './Component/Headerall';
import Quote from './Component/Quote';
import StateMan from './Component/StateMan';
import Layout from 'antd/lib/layout/layout';
import Layoutall from './Component/Layoutall';
import MainMaster from './Component/Master/MainMaster';
import Paystack from './Component/Paystack';

function App() {
  return (
    <div>
      <Router>
        <switch>
          <Route path="/" exact component={Headerall} />
          <Route path="/Counter" exact component={Countr} />
          <Route path="/Quote" exact component={Quote} />
          <Route path="/Stateman" exact component={StateMan} />
          <Route path="/Layout" exact component={Layoutall} />
          <Route path="/master" exact component={MainMaster} />
          <Route path="/paystack" exact component={Paystack} />
        </switch>
      </Router>
    </div>
  );
}

export default App;
