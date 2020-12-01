import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          
          Users!
          {this.props.users.map(user => <li>{user.username}, {user.hometown}</li>)}         
        </ul>
        <h4>{this.props.users.length} Users</h4>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(Users);
