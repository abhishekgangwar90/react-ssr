import React from 'react';
import {connect} from 'react-redux';

import {fetchUser} from '../../actions';
import UserList from './userList';

const mapStateToProps = (state) =>{
    return {
        users: state.users || []
    }
}

const dispatchAction = {
    fetchUser
}

export default connect(mapStateToProps, dispatchAction)(UserList)