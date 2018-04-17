import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {ponged: 'Not Ponged'}

    this.ping = this.ping.bind(this);
  }

  ping() {
    axios.get("http://localhost:8080/pong")
      .then(res => {
        alert("Received Successful response from server!");
        this.setState({ponged: 'Ponged! '});
      }, err => {
        alert("Server rejected response with: " + err);
    });
  }

  render() {
    return (
      <div className="Main">

        <div className="header" style={{ display: 'flex', flexDirection: 'column', height: '160px' }}>
          <header style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#222', color: 'white', height: '40%' }}>
            <h1 className="App-title">Ping</h1>
          </header>
          <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto', height: '60%', padding: '10px' }}>
            <button className="pingpong" onClick={this.ping}>Ping!</button>
            <div className="pingpong" style={{ paddingLeft: '25px' }}>Ponged: {this.state.ponged}</div>
          </div>
        </div>

        <div className="blocks" style={{ display: 'flex', flexDirection: 'column', height: '600px' }}>
          <div className="section-two" style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
            <div style={{ backgroundColor: 'red', width: '33%' }}>
              <p style={{ textAlign: 'left', padding: '10px', fontSize: '5vw' }}>Red</p>
            </div>
            <div style={{ backgroundColor: 'blue', width: '67%' }}>
              <p style={{ textAlign: 'left', padding: '10px', fontSize: '5vw' }}>Blue</p>
            </div>
          </div>
        </div>

        <footer className="footer">
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </footer>

      </div>
    );
  }
}

export default Main;
