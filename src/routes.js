import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import StoreProvider from './components/Store/Provider';
import RoutesPrivate from './components/Routes/Private/Private';
import Home from './Pages/Dashboard';
import Login from './Pages/Login';
import Turmas from './Pages/Turmas';

export default function App() {
    return (
        <Router>
            <StoreProvider>
                <Switch>
                    <Route path="/login" component={Login} />
                    <RoutesPrivate path="/turmas" component={Turmas} />
                    <RoutesPrivate path="/" component={Home} />
                </Switch>
            </StoreProvider>
        </Router>
    );
}
