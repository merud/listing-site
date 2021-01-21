import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <a className="sidebarLink" href="#">Login</a>
                <a className="sidebarLink" href="#">List</a>
                <a className="sidebarLink" href="#">Favorites</a>
                <a className="sidebarAbout" href="#">About</a>
            </div>
        );
    }
}

class Display extends React.Component {
    render() {
        return (
            <div className="mainDisplay">
                MainDisplay
            </div>
        );
    }
}

class Site extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />
                <Display />
            </div>
        );
    }
}
ReactDOM.render(
    <Site />,
    document.getElementById('root')
);
