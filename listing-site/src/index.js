import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Sidebar extends React.Component {
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        if (!isLoggedIn) {
            return (
                <div className="sidebar">
                    <button onClick={() => { this.props.displayClick("default") }} className="sidebarLink">Home</button>
                    <button onClick={() => { this.props.displayClick("login") }} className="sidebarLink">Login</button>
                    <button onClick={() => { this.props.displayClick("signup") }} className="sidebarLink">Signup</button>
                    <button onClick={() => { this.props.displayClick("list") }} className="sidebarLink">List</button>
                    <button onClick={() => { this.props.displayClick("about") }} className="sidebarAbout">About</button>
                </div>
            );
        }
        else {
            return (
                <div className="sidebar">
                    <button onClick={() => { this.props.displayClick("default") }} className="sidebarLink">Home</button>
                    <button onClick={() => { this.props.displayClick("profile") }} className="sidebarLink">Profile</button>
                    <button onClick={() => { this.props.displayClick("logout") }} className="sidebarLink">Logout</button>
                    <button onClick={() => { this.props.displayClick("list") }} className="sidebarLink">List</button>
                    <button onClick={() => { this.props.displayClick("favorites") }} className="sidebarLink">Favorites</button>
                    <button onClick={() => { this.props.displayClick("about") }} className="sidebarAbout">About</button>
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

class Profile extends React.Component {
    render() {
        const userName = this.props.userName;
        return (
            <div>
                <div className="profileTitle">
                    Profile of {userName}:
                </div>

                <div className="profileText">
                    Username: {userName}
                </div>

                <div className="profileText">
                    Email: {this.props.getUserEmail()}
                </div>

                <div className="profileElement">
                    <button onClick={() => { this.props.displayClick("userNameChange") }} className="profileButton">Change UserName</button>
                </div>
                <div className="profileElement">
                    <button onClick={() => { this.props.displayClick("emailChange") }} className="profileButton">Change Email</button>
                </div>
                <div className="profileElement">
                    <button onClick={() => { this.props.displayClick("passwordChange") }} className="profileButton">Change Password</button>
                </div>
            </div>
        );
    }
}

class UserNameChangeForm extends React.Component {
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
        let newUserName = this.state.userName;
        let password = this.state.password;

        let success = this.props.updateUserName(email, newUserName, password);
        if (success) {
            this.props.displayClick("profile");
        }
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
                    New Username:
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

class EmailChangeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curEmail: null,
            newEmail: null,
            password: null
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let curEmail = this.state.curEmail;
        let newEmail = this.state.newEmail;
        let password = this.state.password;

        let success = this.props.updateEmail(curEmail, newEmail, password);
        if (success) {
            this.props.displayClick("profile");
        }
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
                    Old Email:
                    <input type="email" name="curEmail" onChange={this.handleChange} maxLength="50" required />
                    <br></br>
                </label>
                <label>
                    New Email:
                    <input type="email" name="newEmail" onChange={this.handleChange} maxLength="50" required />
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

class PasswordChangeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            curPassword: null,
            newPassword: null,
            confirmPassword: null
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let curPassword = this.state.curPassword;
        let newPassword = this.state.newPassword;
        let confirmPassword = this.state.confirmPassword;

        if (curPassword === newPassword) {
            alert("New password cannot be the same as the old password.");
        }
        else if (newPassword !== confirmPassword) {
            alert("New password must be the same as the confirmed new password.")
        }
        else {
            let success = this.props.updatePassword(email, curPassword, newPassword);
            if (success) {
                this.props.displayClick("profile");
            }
        }
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
                    Old Password:
                    <input type="password" name="curPassword" onChange={this.handleChange} maxLength="50" required />
                    <br></br>
                </label>
                <label>
                    New Password:
                    <input type="password" name="newPassword" onChange={this.handleChange} maxLength="50" required />
                    <br></br>
                </label>
                <label>
                    Confirm New Password:
                    <input type="password" name="confirmPassword" onChange={this.handleChange} maxLength="50" required />
                    <br></br>
                </label>
                <input type="submit" />
            </form>
        );
    }
}

class ListAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: null,
            title: null
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const src = this.state.src;
        const title = this.state.title;

        this.props.addListElement(src, title);
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
                    Image URL:
                    <input type="url" name="src" onChange={this.handleChange} maxLength="200" required />
                    <br></br>
                </label>
                <label>
                    Title:
                    <input type="text" name="title" onChange={this.handleChange} maxLength="50" required />
                    <br></br>
                </label>
                <input type="submit" />
            </form>
        );
    }
}

class List extends React.Component {
    render() {
        const userName = this.props.userName;
        const userItemsList = this.props.userItemsList;

        const mappedList = userItemsList.map((element, index) => <div key={index} className="listElement">
            <img className="listPicture" src={element.src} alt={element.title + "Image"}></img>
            <div>
                {element.title}
            </div>
        </div>);

        if (userName) {
            return (
                <div>
                    {mappedList}
                    <div className="listAddForm">
                        <h1>Add List Element?</h1>
                        <ListAddForm
                            addListElement={(src, title) => this.props.addListElement(src, title)}
                        />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    {mappedList}
                </div>
            );
        }
    }
}

class Display extends React.Component {
    render() {
        const display = this.props.currentDisplay;
        const welcomeMessage = "Welcome, please use the sidebar to navigate the page.";
        const aboutMessage = "So far this onepage website implements a signup/login/logout system that does not store data between visits and a profile page that allows alteration of the user account.  Thank you for visiting."
        const userName = this.props.userName;
        const userItemsList = this.props.getUserItemsList();
        switch (display) {
            case "default":
                return (
                    <div className="mainDisplay">
                        {welcomeMessage}
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

            case "profile":
                return (
                    <div className="mainDisplay">
                        <Profile
                            userName={userName}
                            getUserEmail={() => this.props.getUserEmail()}
                            displayClick={(source) => this.props.displayClick(source)}
                        />
                    </div>
                );

            case "userNameChange":
                return (
                    <div className="mainDisplay">
                        <UserNameChangeForm
                            updateUserName={(email, newUserName, password) => this.props.updateUserName(email, newUserName, password)}
                            displayClick={(source) => this.props.displayClick(source)}
                        />
                    </div>
                )

            case "emailChange":
                return (
                    <div className="mainDisplay">
                        <EmailChangeForm
                            updateEmail={(curEmail, newEmail, password) => this.props.updateEmail(curEmail, newEmail, password)}
                            displayClick={(source) => this.props.displayClick(source)}
                        />
                    </div>
                )

            case "passwordChange":
                return (
                    <div className="mainDisplay">
                        <PasswordChangeForm
                            updatePassword={(email, curPassword, newPassword) => this.props.updatePassword(email, curPassword, newPassword)}
                            displayClick={(source) => this.props.displayClick(source)}
                        />
                    </div>
                )

            case "loggedDefault":
                return (
                    <div className="mainDisplay">
                        Welcome {userName},
                    </div>
                );

            case "list":
                return (
                    <div className="mainDisplay">
                        <List
                            userName={userName}
                            userItemsList={userItemsList}
                            addListElement={(src, title) => this.props.addListElement(src, title)}
                        />
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
            userName: this.props.getUserName(),
        };
    }

    displayClick(source) {
        if (source === "logout") {
            source = "default"
            this.props.logout();
        }

        this.setState({
            currentState: source
        });
    }

    render() {
        let currentDisplay = this.state.currentState;
        const userName = this.props.getUserName();
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
                    displayClick={(source) => this.displayClick(source)}
                    currentDisplay={currentDisplay}
                    isLoggedIn={isLoggedIn}
                />
                <Display
                    login={(user) => this.props.login(user)}
                    signup={(user) => this.props.signup(user)}
                    displayClick={(source) => this.displayClick(source)}
                    updateEmail={(curEmail, newEmail, password) => this.props.updateEmail(curEmail, newEmail, password)}
                    updateUserName={(email, newUserName, password) => this.props.updateUserName(email, newUserName, password)}
                    updatePassword={(email, curPassword, newPassword) => this.props.updatePassword(email, curPassword, newPassword)}
                    addListElement={(src, title) => this.props.addListElement(src, title)}
                    getUserEmail={() => this.props.getUserEmail()}
                    getUserItemsList={() => this.props.getUserItemsList()}
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
            userIndex: null,
            userItemsList: []
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
        let fullUser = {
            email: newUser.email,
            userName: newUser.userName,
            password: newUser.password,
            userItemsList: []
        };
        let userIndex = userList.length;

        fullUser.userItemsList = this.createDefaultList();
        userList.push(fullUser);
        this.setState({
            userList: userList,
            user: fullUser,
            userIndex: userIndex,
            userItemsList: fullUser.userItemsList
        });
    }

    createDefaultList() {
        let itemsList = [];
        let defaultElement = {
            src: '/images/BuffaloWings.jpg',
            title: 'Buffalo Wings'
        }
        itemsList.push(defaultElement);

        let defaultElementOne = {
            src: '/images/Oatmeal.jpg',
            title: 'Oatmeal'
        }
        itemsList.push(defaultElementOne);

        let defaultElementTwo = {
            src: '/images/Pizza.jpg',
            title: 'Pizza'
        }
        itemsList.push(defaultElementTwo);

        let defaultElementThree = {
            src: '/images/PotRoast.jpg',
            title: 'Pot Roast'
        }
        itemsList.push(defaultElementThree);

        let defaultElementFour = {
            src: '/images/Icecream.jpg',
            title: 'Icecream'
        }
        itemsList.push(defaultElementFour);

        let defaultElementFive = {
            src: '/images/GrilledCheese.jpg',
            title: 'Grilled Cheese'
        }
        itemsList.push(defaultElementFive);

        return itemsList;
    }

    addListElement(src, title) {
        let itemsList = this.state.userItemsList.slice();
        let userList = this.state.userList.slice();
        let user = Object.assign({}, this.state.user);

        let newElement = {
            src: src,
            title: title
        }
        itemsList.push(newElement);
        user.userItemsList = itemsList;
        userList[this.state.userIndex] = user;
        this.setState({
            userList: userList,
            userItemsList: itemsList
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
                        userIndex: i,
                        userItemsList: userList[i].userItemsList
                    });
                }
                break;
            }
        }

        if (!emailCorrect) {
            alert("Could not find an account with this Email.");
        }
        else if (!passwordCorrect) {
            alert("This is not the correct password for this Email.");
        }
    }

    updateEmail(curEmail, newEmail, password) {
        let userList = this.state.userList.slice();
        let newEmailUsed = false;
        let curEmailCorrect = false;
        let passwordCorrect = false;
        let i;
        let hit = null;
        for (i = 0; i < userList.length; i++) {
            if (newEmail === userList[i].email) {
                newEmailUsed = true;
            }
            if (curEmail === userList[i].email) {
                curEmailCorrect = true;
                hit = i;
                if (password === userList[i].password) {
                    passwordCorrect = true;
                }
            }
        }

        if (!newEmailUsed && curEmailCorrect && passwordCorrect) {
            userList[hit].email = newEmail;
            this.setState({
                userList: userList,
                user: userList[hit],
            });
            return (true);
        }

        if (!curEmailCorrect) {
            alert("Current Email does not have an account.");
            return (false);
        }

        if (!passwordCorrect) {
            alert("This is not the correct password for this account.");
            return (false);
        }

        if (newEmailUsed) {
            alert("The new Email entered is already in use.");
            return (false);
        }
    }

    updateUserName(email, newUserName, password) {
        let userList = this.state.userList.slice();
        let newUserNameUsed = false;
        let emailCorrect = false;
        let passwordCorrect = false;
        let i;
        let hit = null;
        for (i = 0; i < userList.length; i++) {
            if (newUserName === userList[i].userName) {
                newUserNameUsed = true;
            }
            if (email === userList[i].email) {
                emailCorrect = true;
                hit = i;
                if (password === userList[i].password) {
                    passwordCorrect = true;
                }
            }
        }

        if (!newUserNameUsed && emailCorrect && passwordCorrect) {
            userList[hit].userName = newUserName;
            this.setState({
                userList: userList,
                user: userList[hit],
            });
            return (true);
        }

        if (!emailCorrect) {
            alert("Current Email does not have an account.");
            return (false);
        }

        if (!passwordCorrect) {
            alert("This is not the correct password for this account.");
            return (false);
        }

        if (newUserNameUsed) {
            alert("The new Username entered is already in use.");
            return (false);
        }
    }

    updatePassword(email, curPassword, newPassword) {
        let userList = this.state.userList.slice();
        let emailCorrect = false;
        let curPasswordCorrect = false;
        let i;
        for (i = 0; i < userList.length; i++) {
            if (email === userList[i].email) {
                emailCorrect = true;
                if (curPassword === userList[i].password) {
                    curPasswordCorrect = true;
                    userList[i].password = newPassword;
                    this.setState({
                        userList: userList,
                        user: userList[i],
                    });
                    return (true);
                }
            }
        }

        if (!emailCorrect) {
            alert("Entered Email does not have an account.");
            return (false);
        }

        if (!curPasswordCorrect) {
            alert("The old password entered is not the correct password for this Email.");
            return (false);
        }
    }

    getUserEmail() {
        let userEmail = null;
        if (this.state.user) {
            userEmail = this.state.user.email;
        }
        return (userEmail);
    }

    getUserName() {
        let userName = null;
        if (this.state.user) {
            userName = this.state.user.userName;
        }
        return (userName);
    }

    getUserItemsList() {
        let userItemsList = [];
        if (!this.state.user) {
            userItemsList = this.createDefaultList();
        }
        else {
            userItemsList = this.state.userItemsList;
        }
        return (userItemsList);
    }

    logout() {
        this.setState({
            user: null,
            userIndex: null,
            userItemsList: []
        })
    }

    render() {
        const user = this.state.user;

        if (user) {
            return (
                <Site
                    updateEmail={(curEmail, newEmail, password) => this.updateEmail(curEmail, newEmail, password)}
                    updateUserName={(email, newUserName, password) => this.updateUserName(email, newUserName, password)}
                    updatePassword={(email, curPassword, newPassword) => this.updatePassword(email, curPassword, newPassword)}
                    addListElement={(src, title) => this.addListElement(src, title)}
                    logout={() => this.logout()}
                    getUserName={() => this.getUserName()}
                    getUserEmail={() => this.getUserEmail()}
                    getUserItemsList={() => this.getUserItemsList()}
                />
            )
        }
        else {
            return (
                <Site
                    signup={(user) => this.signupCheckUser(user)}
                    login={(user) => this.loginVerifyUser(user)}
                    getUserName={() => this.getUserName()}
                    getUserItemsList={() => this.getUserItemsList()}
                />
            )
        }

    }
}

ReactDOM.render(
    <Backside />,
    document.getElementById('root')
);
