import React, { Component } from '../../../../.cache/typescript/2.9/node_modules/@types/react';
import {
  Header,
  Button
} from 'semantic-ui-react';
import sha256 from '../../../../.cache/typescript/2.9/node_modules/@types/crypto-js/sha256';
class App extends Component {
  render() {
    return (
      <Header>
        <Button>Donate Us</Button>
        {console.log(sha256("Message"))}
      </Header>
    );
  }
}

export default App;
