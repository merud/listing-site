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
                    <button onClick={() => { this.props.onClick("signup") }} className="sidebarLink">Signup</button>
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
                    <button onClick={() => { this.props.onClick("logout") }} className="sidebarLink">Logout</button>
                    <button onClick={() => { this.props.onClick("list") }} className="sidebarLink">List</button>
                    <button onClick={() => { this.props.onClick("favorites") }} className="sidebarLink">Favorites</button>
                    <button onClick={() => { this.props.onClick("about") }} className="sidebarAbout">About</button>
                </div>
            );
        }
    }
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            userName: null,
            password: null
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let userName = this.state.userName;
        let password = this.state.password;
        let user = {
            email: email,
            userName: userName,
            password: password
        }

        this.props.login(user);
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form className="initializeForm" onSubmit={this.handleSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" onChange={this.handleChange} maxLength="50" required />
                    <br></br>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={this.handleChange} maxLength="50" required />
                    <br></br>
                </label>
                <input type="submit" />
            </form>
        );
    }
}

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            userName: null,
            password: null
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let userName = this.state.userName;
        let password = this.state.password;
        let user = {
            email: email,
            userName: userName,
            password: password
        }

        this.props.signup(user);
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form className="initializeForm" onSubmit={this.handleSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" onChange={this.handleChange} maxLength="50" required />
                    <br></br>
                </label>
                <label>
                    Username:
                    <input type="text" name="userName" onChange={this.handleChange} maxLength="50" required />
                    <br></br>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={this.handleChange} maxLength="50" required />
                    <br></br>
                </label>
                <input type="submit" />
            </form>
        );
    }
}

class Display extends React.Component {
    render() {
        const display = this.props.currentDisplay;
        const welcomeMessage = "Welcome, please use the sidebar to navigate the page.";
        const aboutMessage = "This will be a section that gives a basic overview of the website.  Thank you for visiting."
        const userName = this.props.userName;
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
                        <LoginForm
                            login={(user) => this.props.login(user)}
                        />
                    </div>
                );

            case "signup":
                return (
                    <div className="mainDisplay">
                        <SignupForm
                            signup={(user) => this.props.signup(user)}
                        />
                    </div>
                );

            case "loggedDefault":
                return (
                    <div className="mainDisplay">
                        Welcome {userName},
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
        if(source === "logout") {
            source = "default"
            this.props.logout();
        }

        this.setState({
            currentState: source
        });
    }

    render() {
        let currentDisplay = this.state.currentState;
        const userName = this.props.userName;
        let isLoggedIn = false;
        if (userName) {
            isLoggedIn = true;
            if (currentDisplay === "default" || currentDisplay === "signup" || currentDisplay === "login") {
                currentDisplay = "loggedDefault";
            }
        }

        return (
            <div>
                <Sidebar
                    onClick={(source) => this.sidebarClick(source)}
                    currentDisplay={currentDisplay}
                    isLoggedIn={isLoggedIn}
                />
                <Display
                    login={(user) => this.props.login(user)}
                    signup={(user) => this.props.signup(user)}
                    userName={userName}
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
        else if (emailUsed) {
            alert("Email is already in use.");
        }
        else {
            alert("Username is already in use.");
        }
    }

    addUser(newUser) {
        let userList = this.state.userList;
        userList.push(newUser);
        this.setState({
            userList: userList,
            user: newUser
        });
    }

    loginVerifyUser(user) {
        const userList = this.state.userList;
        let emailCorrect = false;
        let passwordCorrect = false;
        let i;
        for (i = 0; i < userList.length; i++) {
            if (user.email === userList[i].email) {
                emailCorrect = true;
                if (user.password === userList[i].password) {
                    passwordCorrect = true;
                    //is verified
                    user.userName = userList[i].userName;
                    this.setState({
                        user: user,
                        userFavorites: userList[i].favorites
                    });
                }
                break;
            }
        }

        if(!emailCorrect) {
            alert("Could not find an account with this Email.");
        }
        else if(!passwordCorrect) {
            alert("This is not the correct password for this Email.");
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
                    logout={() => this.logout()}
                    userName={user.userName}
                    userFavorites={userFavorites}
                />
            )
        }
        else {
            return (
                <Site
                    signup={(user) => this.signupCheckUser(user)}
                    login={(user) => this.loginVerifyUser(user)}
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
