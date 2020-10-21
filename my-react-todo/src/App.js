import React from 'react';
import Header from './components/Header';
import Routes from './config/routes';

import Firebase from 'firebase';
import config from './config';


class App extends React.Component {

  constructor(props){
    super(props);
    Firebase.initializeApp(config.firebase);

    this.state = {
      developers: []
    }
  }

  return (
    <div className="container">
      <Header/>
      <Routes />
    </div>
  );
};

export default App;
