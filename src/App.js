import React from 'react';
import './App.css';
import BasicRoute from './components/Router'
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { Link, HashRouter } from 'react-router-dom';
import { Layout } from 'antd';

const { Header } = Layout;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
            <Spin size="large" spinning={this.props.loading} style={{ position: "absolute", left: "50%", top: "50%" }} />
            <HashRouter>
              <Link to="/" >
                <h1 className="my-todo-list" style={{ display: "inline", cursor: "pointer", fontSize: 24 }}>My Todo List </h1>
                <span style={{ color: "white", fontSize: 24 }}>|</span>
              </Link>
              <Link to="/done" >
                <h1 className="finish-text" style={{ display: "inline", fontSize: 24 }}>Finished</h1>
              </Link>
            </HashRouter>
            <BasicRoute />
          </Header>
        </Layout>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { loading: state.loadingReducer }
}
export default connect(mapStateToProps)(App)
