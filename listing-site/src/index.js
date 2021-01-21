import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <button onClick={() => { this.props.onClick("default") }} className="sidebarLink">Home</button>
                <button onClick={() => { this.props.onClick("login") }} className="sidebarLink">Login</button>
                <button onClick={() => { this.props.onClick("list") }} className="sidebarLink">List</button>
                <button onClick={() => { this.props.onClick("favorites") }} className="sidebarLink">Favorites</button>
                <button onClick={() => { this.props.onClick("about") }} className="sidebarAbout">About</button>
            </div>
        );
    }
}

class Display extends React.Component {
    render() {
        const display = this.props.currentDisplay;
        switch (display) {
            case "default":
                return (
                    <div className="mainDisplay">
                        Default
                    </div>
                );

            case "login":
                return (
                    <div className="mainDisplay">
                        Login
                    </div>
                );

            case "list":
                return (
                    <div className="mainDisplay">
                        List
                    </div>
                );

            case "favorites":
                return (
                    <div className="mainDisplay">
                        Favorites
                    </div>
                );

            case "about":
                return (
                    <div className="mainDisplay">
                        About
                    </div>
                );
            default:
                return (
                    <div className="mainDisplay">
                        Default B
                    </div>
                );
        }
    }
}

class Site extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentState: "default"
        };
    }

    sidebarClick(source) {
        this.setState({
            currentState: source
        })
    }

    render() {
        const currentDisplay = this.state.currentState;

        return (
            <div>
                <Sidebar
                    onClick={(source) => this.sidebarClick(source)}
                />
                <Display
                    currentDisplay={currentDisplay}
                />
            </div>
        );
    }
}
ReactDOM.render(
    <Site />,
    document.getElementById('root')
);
