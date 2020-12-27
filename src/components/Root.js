import React from 'react'
import PropTypes from 'prop-types'
import SplitPane from 'react-split-pane'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import history from '../history';

import App from '../App'
import { Link } from 'react-router-dom'
import StorageCloudContainer from '../containers/StorageCloudMain';
import StorageCloudAddRow from '../containers/StorageCloudAddRow';


const routes = [
  { path: '/',
    exact: true,    
    sidebar: () => <div>home sidebar!</div>,
    main: () => <div>Home page</div>
  },
  { path: '/storecloud',
    exact:true,
    sidebar: () => <div>bubblegum sidebar!</div>,
    main: () => <StorageCloudContainer/>
  },
  {
    path:'/storecloud/editrow',
    main:()=><h2>Edit table row</h2> 
  },
  {
    path:'/storecloud/addrow',
    main:()=><StorageCloudAddRow/> 
  },
  { path: '/shoelaces',
    sidebar: () => <div>shoelaces sidebar!</div>,
    main: () => <h2>Shoelaces main</h2>
  }
]

const styles = {
  background: ""
};

const styles1 = {
  background: '#000',
  width: '2px',
  cursor: 'col-resize',
  margin: '0 5px',
  height: '100%',
};

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
    <div style={{ display: 'flex' }}>
        <div style={{
          padding: '10px',
          width: '40%',
          background: '#fFFFFF'
        }}>
          <SplitPane
                split="vertical"
                minSize={10}
                defaultSize={80}
                resizerStyle={styles1}
          > 
          <div>
              <Route exact path="/" component = {() => (
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/storecloud">StoreCloud</Link></li>
                    <li><Link to="/shoelaces">Shoelaces</Link></li>
                  </ul>)}
                  />
              <Route path="/storecloud" component = {() => (
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Link to="/">Home1</Link></li>
                <li><Link to="/shoelaces">Shoelaces</Link></li>
              </ul>)}
              />
              <Route path="/shoelaces" component = {() => (
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Link to="/">Home1</Link></li>
                <li><Link to="/shoelaces">Shoelaces</Link></li>
              </ul>)}
              />
          </div>
          <div>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
          </div>
        </SplitPane>
        </div>
      </div>           
    </Router>
  </Provider>
);


Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root