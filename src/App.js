import React from 'react';
import {BrowserRouter, Switch, Route, useParams} from "react-router-dom"
import TopBar from './components/TopBar/TopBar';
import 'antd/dist/antd.css'; // Antd Css
import 'bootstrap/dist/css/bootstrap.min.css';// bootstrap
import Banner from "./components/Banner/Banner"
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';

const App = () => {
  return ( 
  <BrowserRouter>
  <div>
    <TopBar/>
    {/* <Banner
      title="Welcome to Routing"
      description="We will be using BrowserRouter, Switch, Route, Link"
    /> */}
    <Switch>
      <Route exact path="/"  component={Home}/>
      <Route  path="/about"  component={About}/>
      <Route  path="/contact"  component={Contact}/>
      <Route  exact path="/users"  component={Users}/>
      <Route  path="/user/:userId"  component={UserDetails}/>
      <Route path="/signin" render={(props) => <SignIn {...props} name={"Details for Sign IN"}/>}/>
      <Route path="/signup" component={SignUp}/>
      <Route component={() => <h1>Page Not Found</h1>}/>

    </Switch>
  </div>
  </BrowserRouter> );
}
 
export default App;


const About = () => {
  return ( <h1>About Page</h1> );
}

const Contact = () => {
  return ( <h1>Contact Page</h1> );
}
const Users = () => {
  return ( <h1>Users Page</h1> );
}
 
const UserDetails = (props) => {
  const {userId} = useParams()
  debugger
  return ( <h1>User Details {userId}</h1> );
}
 




// import React, { Component } from 'react';

// class ClassApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//   }
// // Mounting
// //Constructor -> render -> componentDidMount

// //Updating
// // shouldComponentUpdate ->  getSnapshotBeforeUpdate -> JSX -> compoentDidUpdate

// //UnMounting
// //componentWillUnMount

//   // componentDidMount(){

//   // }

  


//   shouldComponentUpdate(nextProps, nextState){
//     if(nextState.count < 0){
//       return false
//     }else return true
//   }

//   render() {
//     let { count } = this.state
//     return (<div>
//       <h1>Class Component</h1>
//       <button
//       onClick={() => this.setState({count: count-1})}
//       >-</button>

//       <button
//         onClick={() => this.setState({count: count+1})}
//       >
//         +
//       </button>
//       <hr />
//       <Func 
//         count={count} 
//         incrementCount={() => this.setState({count: count+1})}
//       />

//     </div>);
//   }
// }

// export default ClassApp;


// const Func = ({ count, incrementCount }) => { // Child
//   return (<div>
//     <h2>Functional Component {count}</h2>
//     <button
//       onClick={() => incrementCount()}
//     >Click Me to Increment</button>
//   </div>);
// }

















// // import axios from 'axios';
// // import 'antd/dist/antd.css'; // Antd Css
// // import 'bootstrap/dist/css/bootstrap.min.css';// bootstrap
// // import { Layout, Menu, Breadcrumb } from 'antd';
// // import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
// // import FormSizeDemo from './components/Form';


// // const { SubMenu } = Menu;
// // const { Header, Content, Footer, Sider } = Layout;

// // const App = () => {
// //   return ( 
// //     <Layout>
// //     <Header className="header">
// //       <div className="logo" />
// //       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
// //         <Menu.Item key="1">nav 1</Menu.Item>
// //         <Menu.Item key="2">nav 2</Menu.Item>
// //         <Menu.Item key="3">nav 3</Menu.Item>
// //       </Menu>
// //     </Header>
// //     <Content style={{ padding: '0 50px' }}>
// //       <Breadcrumb style={{ margin: '16px 0' }}>
// //         <Breadcrumb.Item>Home</Breadcrumb.Item>
// //         <Breadcrumb.Item>List</Breadcrumb.Item>
// //         <Breadcrumb.Item>App</Breadcrumb.Item>
// //       </Breadcrumb>
// //       <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
// //         <Sider className="site-layout-background" width={200}>
// //           <Menu
// //             mode="inline"
// //             defaultSelectedKeys={['1']}
// //             defaultOpenKeys={['sub1']}
// //             style={{ height: '100%' }}
// //           >
// //             <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
// //               <Menu.Item key="1">option1</Menu.Item>
// //               <Menu.Item key="2">option2</Menu.Item>
// //               <Menu.Item key="3">option3</Menu.Item>
// //               <Menu.Item key="4">option4</Menu.Item>
// //             </SubMenu>
// //             <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
// //               <Menu.Item key="5">option5</Menu.Item>
// //               <Menu.Item key="6">option6</Menu.Item>
// //               <Menu.Item key="7">option7</Menu.Item>
// //               <Menu.Item key="8">option8</Menu.Item>
// //             </SubMenu>
// //             <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
// //               <Menu.Item key="9">option9</Menu.Item>
// //               <Menu.Item key="10">option10</Menu.Item>
// //               <Menu.Item key="11">option11</Menu.Item>
// //               <Menu.Item key="12">option12</Menu.Item>
// //             </SubMenu>
// //           </Menu>
// //         </Sider>
// //         <Content style={{ padding: '0 24px', minHeight: 280 }}>

// //         <FormSizeDemo/>
// //         </Content>
// //       </Layout>
// //     </Content>
// //     <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
// //   </Layout>
// //    );
// // }

// // export default App;