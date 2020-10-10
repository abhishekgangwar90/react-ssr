import React from 'react';
import Home from '../../pages/Home';
import About from '../../pages/About';
import UserList,{loadUserData} from '../../organisms/userList';

export default [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/userList',
        component: UserList,
        exact: true,
        loadData: loadUserData
    },
    {
        path: '/about',
        component: About,
        exact: true
    }
]