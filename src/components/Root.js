import React from 'react'
import PropTypes from 'prop-types'
import SplitPane from 'react-split-pane'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App'
import { Link } from 'react-router-dom'

/*
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>
)
*/

const routes = [
  { path: '/',
    exact: true,
    //sidebar: () => <div>home sidebar!</div>,
    main: () => <h2>Home main</h2>
  },
  { path: '/bubblegum',
    //sidebar: () => <div>bubblegum sidebar!</div>,
    main: () => <h2>Bubblegum mainnn</h2>
  },
  { path: '/shoelaces',
    //sidebar: () => <div>shoelaces sidebar!</div>,
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
    <Router>
    <div style={{ display: 'flex' }}>
        <div style={{
          padding: '10px',
          width: '40%',
          background: '#f0f0f0'
        }}>
          <SplitPane
                split="vertical"
                minSize={100}
                defaultSize={100}
                resizerStyle={styles1}
          > 
          <div>
              <Route exact path="/" component = {() => (
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/bubblegum">Bubblegum</Link></li>
                    <li><Link to="/shoelaces">Shoelaces</Link></li>
                  </ul>)}
                  />
              <Route path="/bubblegum" component = {() => (
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Link to="/">Home</Link></li>
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