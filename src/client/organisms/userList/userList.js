import React, { Component } from 'react';


class UserList extends Component{
    componentDidMount(){
        this.props.fetchUser()
    }


    renderUserList(){
        return <ul>
            {this.props.users.map((elm) =>{
              return  <li key={elm.id}>
                    {elm.name}
                </li>
            })}
        </ul>
    }

    render(){
        return (
            <div>
             'big fat list of user'
             {this.renderUserList()}
            </div>
        )
    }

}

export default UserList;