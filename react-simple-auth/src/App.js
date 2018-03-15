import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props)
  }
  
  onSignUp(e) {
    e.preventDefault();
    let uname = document.getElementById('s-username').value;
    let password = document.getElementById('s-password').value;
    fetch('/signup', {
      method: 'post',
      body: { username: uname, password: password }
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log(res);
        alert(res);
      })
    return false;
  }

  onSignIn(e) {
    e.preventDefault();
    let uname = document.getElementById('si-username').value;
    let password = document.getElementById('si-password').value;
    fetch('/signin', {
      method: 'post',
      body: { username: uname, password: password }
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log(res);
        alert(res);
      })
    return false;
  }

  onTokenAuth() {
    let token = document.getElementById('token').value;
    fetch('/information?query=' + token)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log(res);
        alert(res);
      })
    return false;
  }

  render() {
    return (
      <div>
        <div>
          <h1>Signup</h1>
          <form>
            username: 
            <input type="text" id="s-username"/>
            password
            <input type="password" id="s-password"/>
            <button onClick={this.onSignUp.bind(this)} type="submit">Signup</button>
          </form>
        </div>
        <div> 
          <h1>Signin</h1>
          <form>
            username: 
            <input type="text" id="si-username"/>
            password
            <input type="password" id="si-password"/>
            <button type="submit" onClick={this.onSignIn.bind(this)}>Signin</button>
          </form>
        </div>
        <div> 
          <h1>CheckAuth</h1>
          <form>
            token: 
            <input type="text" id="token"/>
            <button type="submit" onClick={this.onTokenAuth.bind(this)}>auth</button>
          </form>
        </div>
        
      </div>
    )
  }
}

export default App;
