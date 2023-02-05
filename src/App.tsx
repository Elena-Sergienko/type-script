import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
// import UsersPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import HomePage from "./components/HomePage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";
import UsersPage from "./components/UsersPage";

// https://www.youtube.com/watch?v=92qcfeWxtnY&t=13s
// 30:19


const App = () => {

    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink to='/'>Home | </NavLink>
                    <NavLink to='/todos'>Todos | </NavLink>
                    <NavLink to='/users'>Users</NavLink>
                </div>


                <Route path={'/'} exact>
                    <HomePage/>
                </Route>

                <Route path={'/todos'} exact>
                    <TodosPage/>
                </Route>

                <Route path={'/todo/:id'}>
                    <TodoItemPage/>
                </Route>

                <Route path={'/users'} exact>
                    <UsersPage/>
                </Route>

                <Route path={'/user/:id'}>
                    <UserItemPage/>
                </Route>

            </div>
        </BrowserRouter>
    );
};

export default App;