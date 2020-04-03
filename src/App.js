import React from 'react';
// Context api
import Provider from './context';
// react router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// transition group
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// components
import Contacts from './components/contacts/Contacts';
import Form from './components/contacts/Form';

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// css
import './App.scss';

function App() {
  // all components to be rendered on DOM goes here
  return (
    // Provider
    <Provider>
      <Router>
        <div className='App'>
          <Route
            render={({ location }) => {
              const { key } = location;
              // console.log(location);
              return (
                <TransitionGroup>
                  <CSSTransition timeout={450} classNames='slide' key={key}>
                    <Switch location={location}>
                      {/* contacts component */}
                      <Route exact path='/' component={Contacts} />
                      {/* Form component */}
                      <Route exact path='/form' component={Form} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
                // <Form></Form>
              );
            }}
          />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
