import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <Link to="/detail">회원가입</Link>
      </div>
    )
  }
}

export default Login;