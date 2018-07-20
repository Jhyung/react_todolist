import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Header from './components/common/Header';
import Initial from './components/initial/Initial';
import Board from './components/board/Board';
import ManageBoard from './components/board/ManageBoard';
import BackTesting from './components/backTesting/BackTesting';
import Profile from './components/profile/Profile';

export default (
    <Route path="/" component={Header}>
        <IndexRoute component={Initial} />
        <Route path="main" component={Initial} />
        <Route path="board" component={Board} />
        <Route path="board/:id" component={ManageBoard} />
        <Route path="write" component={ManageBoard} />
        <Route path="backtesting" component={BackTesting} />
        <Route path="profile" component={Profile} />
    </Route>
);