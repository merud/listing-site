import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Sidebar extends React.Component {
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        if (!isLoggedIn) {
            return (
                <div className="sidebar">
                    <button onClick={() => { this.props.onClick("default") }} className="sidebarLink">Home</button>
                    <button onClick={() => { this.props.onClick("login") }} className="sidebarLink">Login</button>
                    <button onClick={() => { this.props.onClick("list") }} className="sidebarLink">List</button>
                    <button onClick={() => { this.props.onClick("about") }} className="sidebarAbout">About</button>
                </div>
            );
        }
        else {
            return (
                <div className="sidebar">
                    <button onClick={() => { this.props.onClick("default") }} className="sidebarLink">Home</button>
                    <button onClick={() => { this.props.onClick("profile") }} className="sidebarLink">Profile</button>
                    <button onClick={() => { this.props.onClick("default") }} className="sidebarLink">Logout</button>
                    <button onClick={() => { this.props.onClick("list") }} className="sidebarLink">List</button>
                    <button onClick={() => { this.props.onClick("favorites") }} className="sidebarLink">Favorites</button>
                    <button onClick={() => { this.props.onClick("about") }} className="sidebarAbout">About</button>
                </div>
            );
        }
    }
}

class Display extends React.Component {
    render() {
        const display = this.props.currentDisplay;
        const welcomeMessage = "Welcome, please use the sidebar to navigate the page.";
        const aboutMessage = "This will be a section that gives a basic overview of the website.  Thank you for visiting."
        switch (display) {
            case "default":
                return (
                    <div className="mainDisplay">
                        {welcomeMessage}
                    </div>
                );

            case "profile":
                return (
                    <div className="mainDisplay">
                        Profile
                    </div>
                );

            case "login":
                return (
                    <div className="mainDisplay">
                        Login
                    </div>
                );

            case "loggedDefault":
                return (
                    <div className="mainDisplay">
                        Welcome User,
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
                        {aboutMessage}
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
            currentState: "default",
            userName: this.props.userName,
            userFavorites: this.props.userFavorites
        };
    }

    sidebarClick(source) {
        this.setState({
            currentState: source
        });
    }

    render() {
        const currentDisplay = this.state.currentState;
        let isLoggedIn = false;
        if(this.state.userName) {
            isLoggedIn = true;
        }

        return (
            <div>
                <Sidebar
                    onClick={(source) => this.sidebarClick(source)}
                    currentDisplay={currentDisplay}
                    isLoggedIn={isLoggedIn}
                />
                <Display
                    currentDisplay={currentDisplay}
                />
            </div>
        );
    }
}

class Backside extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            user: null,
            userFavorites: []
        };
    }

    signupCheckUser(user) {
        let emailUsed = false;
        let userNameUsed = false;
        const userList = this.state.userList;
        let i;
        for (i = 0; i < userList.length; i++) {
            if (user.email === userList[i].email) {
                //email is already in use
                emailUsed = true;
                break;
            }
            else if (user.userName === userList[i].userName) {
                //username is already in use
                userNameUsed = true;
                break;
            }
        }
        if (!emailUsed && !userNameUsed) {
            //user does not already exist
            this.addUser(user);
        }
    }

    addUser(newUser) {
        let userList = this.state.userList;
        this.setState({
            userList: userList.push(newUser)
        });
    }

    loginVerifyUser(user) {
        const userList = this.state.userList;
        let i;
        for (i = 0; i < userList.length; i++) {
            if (user.email === userList[i].email) {
                if (user.password === userList[i].password) {
                    //is verified
                    user.userName = userList[i].userName;
                    this.setState({
                        user: user,
                        userFavorites: userList[i].favorites
                    });
                }
                else {
                    //email correct, password not
                }
                break;
            }
            else {
                //email incorrect
            }
        }
    }

    logout() {
        this.setState({
            user: null,
            userFavorites: []
        })
    }

    render() {
        const user = this.state.user;
        const userFavorites = this.state.userFavorites;
        if (user) {
            return (
                <Site
                    userName={user.userName}
                    userFavorites={userFavorites}
                />
            )
        }
        else {
            return (
                <Site
                    userName={null}
                    userFavorites={null}
                />
            )
        }

    }
}

ReactDOM.render(
    <Backside />,
    document.getElementById('root')
);
