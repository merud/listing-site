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

class ElementAddTag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: null
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let tag = this.state.tag;
        tag = tag.toLowerCase();
        tag = tag.charAt(0).toUpperCase() + tag.slice(1);
        this.props.addElementTag(this.props.index, tag);
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
                    Add New Tag?:
                    <input type="text" name="tag" onChange={this.handleChange} maxLength="50" required />
                </label>
                <input type="submit" />
            </form>
        );
    }
}

class ListFilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleFilter: null,
            tagFilter: null
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let titleFilter = this.state.titleFilter;
        if (titleFilter) {
            titleFilter = titleFilter.toLowerCase();
        }

        let tagFilter = this.state.tagFilter;
        if (tagFilter) {
            tagFilter = tagFilter.toLowerCase();
        }

        this.props.setFilter(titleFilter, tagFilter);
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
                    Title Filter Word/Phrase:
                    <input type="text" name="titleFilter" onChange={this.handleChange} maxLength="50" />
                    (will search for the entry anywhere in the title)
                </label>
                <br></br>
                <label>
                    Tag Filter Word/Phrase:
                    <input type="text" name="tagFilter" onChange={this.handleChange} maxLength="50" />
                    (will search for entry anywhere in any tag)
                </label>
                <div>
                    Note that the search results will search for the entire entry within the title or tag fields, and will only show matches that include both the title and tag entries (if any entry is made).
                </div>
                <input type="submit" />
            </form>
        );
    }
}

class ListSortTypeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortType: null
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const sortType = this.state.sortType;

        this.props.setSortType(sortType);
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
                <br></br>
                Sort By 
                <br></br>
                <input type="radio" name="sortType" value="alpha" onChange={this.handleChange} />
                <label htmlFor="alpha">Alphabetical</label>
                <br></br>
                <input type="radio" name="sortType" value="antiAlpha" onChange={this.handleChange} />
                <label htmlFor="antiAlpha">Reverse Alphabetical</label>
                <br></br>
                <input type="submit" />
            </form>
        );
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayItemsList: this.props.userItemsList,
            titleFilter: null,
            tagFilter: null,
            sortType: null
        };
    }

    listTags(tags, elementIndex) {
        const userName = this.props.userName;
        if (userName) {
            const tagList = tags.map((element, index) => <div key={index}>
                {element}
                <button onClick={() => { this.props.removeElementTag(index, elementIndex) }} className="removeElementTagButton">X</button>
            </div>);
            return tagList;
        }
        else {
            const tagList = tags.map((element, index) => <div key={index}>
                {element}
            </div>);
            return tagList;
        }
    }

    setFilter(titleFilter, tagFilter) {
        this.setState({
            titleFilter: titleFilter,
            tagFilter: tagFilter
        });
    }

    applyFilter(itemsList) {
        let displayItemsList = itemsList;
        let titleFilter = this.state.titleFilter;
        let tagFilter = this.state.tagFilter;
        let filteredList = [];
        let titleContained = false;
        let tagContained = false;
        let lowerTitle = null;
        let lowerTag = null;

        for (let i = 0; i < displayItemsList.length; i++) {
            lowerTitle = displayItemsList[i].title.toLowerCase();
            if (lowerTitle.includes(titleFilter) || titleFilter === "" || titleFilter === null) {
                titleContained = true;
            }

            if (titleContained) {
                if (tagFilter === "" || tagFilter === null) {
                    tagContained = true;
                }
                for (let j = 0; j < displayItemsList[i].tags.length; j++) {
                    lowerTag = displayItemsList[i].tags[j].toLowerCase();
                    if (lowerTag.includes(tagFilter)) {
                        tagContained = true;
                    }
                }
            }

            if (titleContained && tagContained) {
                filteredList.push(displayItemsList[i]);
            }

            titleContained = false;
            tagContained = false;
        }

        return filteredList;
    }

    setSortType(sortType) {
        this.setState({
            prevSort: this.state.sortType,
            sortType: sortType
        })
    }

    applySort(displayItemsList) {
        const sortType = this.state.sortType;
        let newList = [];

        let listLength = displayItemsList.length;

        if (sortType === "alpha") {
            for (let j = 0; j < listLength; j++) {
                let lowestIndex = null;
                for (let i = 0; i < displayItemsList.length; i++) {
                    if (lowestIndex != null) {
                        if (displayItemsList[i].title.toLowerCase() < displayItemsList[lowestIndex].title.toLowerCase()) {
                            lowestIndex = i;
                        }
                    }
                    else {
                        lowestIndex = i;
                    }
                }
                newList.push(displayItemsList[lowestIndex]);
                displayItemsList.splice(lowestIndex, 1);
            }
        }
        else if (sortType === "antiAlpha") {
            for (let j = 0; j < listLength; j++) {
                let highestIndex = null;
                for (let i = 0; i < displayItemsList.length; i++) {
                    if (highestIndex) {
                        if (displayItemsList[i].title.toLowerCase() > displayItemsList[highestIndex].title.toLowerCase()) {
                            highestIndex = i;
                        }
                    }
                    else {
                        highestIndex = i;
                    }
                }
                newList.push(displayItemsList[highestIndex]);
                displayItemsList.splice(highestIndex, 1)
            }
        }

        return newList;
    }

    render() {
        const userName = this.props.userName;
        let displayItemsList = this.props.userItemsList;
        const sortType = this.state.sortType;

        for (let i = 0; i < displayItemsList.length; i++) {
            displayItemsList[i].trueIndex = i;
        }

        displayItemsList = this.applyFilter(displayItemsList);

        if (sortType) {
            displayItemsList = this.applySort(displayItemsList);
        }

        if (userName) {
            const mappedList = displayItemsList.map((element, index) => <div key={index} className="listElement">
                <img className="listPicture" src={element.src} alt={element.title + "Image"} onClick={this.listIngredients}></img>
                <div>
                    <div className="listElementTitle">
                        {element.title}
                    </div>
                    <div>
                        <div className="listElementLabel">Tags</div>
                        {this.listTags(element.tags, element.trueIndex)}
                        <ElementAddTag
                            index={element.trueIndex}
                            addElementTag={(index, tag) => this.props.addElementTag(index, tag)}
                        />
                        <button onClick={() => { this.props.removeListElement(element.trueIndex) }} className="removeListElementButton">Remove Entry</button>
                    </div>
                </div>
            </div>);
            return (
                <div>
                    <ListFilterForm
                        setFilter={(titleFilter, tagFilter) => this.setFilter(titleFilter, tagFilter)}
                    />
                    <ListSortTypeForm
                        setSortType={(sortType) => this.setSortType(sortType)}
                    />
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
            const mappedList = displayItemsList.map((element, index) => <div key={index} className="listElement">
                <img className="listPicture" src={element.src} alt={element.title + "Image"}></img>
                <div className="listElementTitle">
                    {element.title}
                </div>
                <div className="listElementLabel">Tags</div>
                {this.listTags(element.tags)}
            </div>);
            return (
                <div>
                    <ListFilterForm
                        setFilter={(titleFilter, tagFilter) => this.setFilter(titleFilter, tagFilter)}
                    />
                    <ListSortTypeForm
                        setSortType={(sortType) => this.setSortType(sortType)}
                    />
                    {mappedList}
                </div>
            );
        }
    }
}

class About extends React.Component {
    render() {
        return (
            <div>
                <div>
                    Hello and Welcome to my one-page React website.  This website is aimed to generally work around managing a list of objects with a variety of functionalities relating to that idea.  Thank you for visiting.
                    Please note that currently data is not stored between visiting sessions and that the website is setup to function as one page, thus, browsing back will not pull up an earlier display.
                </div>

                <h1>
                    Current Functionality
                </h1>
                <ol>
                    <li>User Signup/Login/Logout</li>
                    <li>Maintaining a list of users and their related information</li>
                    <li>User updating of account information including name, email, and password</li>
                    <li>User-managed list of elements maintained after logout</li>
                    <li>Addition and removal of user elements to the list of elements (currently with pictures provided by reference link)</li>
                    <li>Adding and removing tags to list objects</li>
                    <li>Filtering of element list by matching entries to either title, tag, or both</li>
                    <li>Editing of element entries while in a filtered list</li>
                </ol>
            </div>
        )
    }
}

class Display extends React.Component {
    render() {
        const display = this.props.currentDisplay;
        const welcomeMessage = "Welcome, please use the sidebar to navigate the page.";
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
                            addElementTag={(index, tag) => this.props.addElementTag(index, tag)}
                            removeElementTag={(tagIndex, elementIndex) => this.props.removeElementTag(tagIndex, elementIndex)}
                            removeListElement={(index) => this.props.removeListElement(index)}
                        />
                    </div>
                );

            case "about":
                return (
                    <div className="mainDisplay">
                        <About />
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
                    addElementTag={(index, tag) => this.props.addElementTag(index, tag)}
                    removeElementTag={(tagIndex, elementIndex) => this.props.removeElementTag(tagIndex, elementIndex)}
                    removeListElement={(index) => this.props.removeListElement(index)}
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
            title: 'Buffalo Wings',
            tags: ['Appetizer']
        }
        itemsList.push(defaultElement);

        let defaultElementOne = {
            src: '/images/Oatmeal.jpg',
            title: 'Oatmeal',
            tags: ['Breakfast']
        }
        itemsList.push(defaultElementOne);

        let defaultElementTwo = {
            src: '/images/Pizza.jpg',
            title: 'Pizza',
            tags: ['Lunch', 'Dinner']
        }
        itemsList.push(defaultElementTwo);

        let defaultElementThree = {
            src: '/images/PotRoast.jpg',
            title: 'Pot Roast',
            tags: ['Lunch', 'Dinner']
        }
        itemsList.push(defaultElementThree);

        let defaultElementFour = {
            src: '/images/Icecream.jpg',
            title: 'Icecream',
            tags: ['Dessert']
        }
        itemsList.push(defaultElementFour);

        let defaultElementFive = {
            src: '/images/GrilledCheese.jpg',
            title: 'Grilled Cheese',
            tags: ['Lunch', 'Dinner']
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
            title: title,
            tags: []
        }
        itemsList.push(newElement);
        user.userItemsList = itemsList;
        userList[this.state.userIndex] = user;
        this.setState({
            userList: userList,
            userItemsList: itemsList
        });
    }

    addElementTag(index, tag) {
        let itemsList = this.state.userItemsList.slice();
        let userList = this.state.userList.slice();
        let user = Object.assign({}, this.state.user);
        console.log(itemsList[index]);

        if (itemsList[index].tags.includes(tag)) { }
        else {
            itemsList[index].tags.push(tag);
            user.userItemsList = itemsList;
            userList[this.state.userIndex] = user;
            this.setState({
                userList: userList,
                userItemsList: itemsList
            });
        }
    }

    removeElementTag(tagIndex, elementIndex) {
        let itemsList = this.state.userItemsList.slice();
        let userList = this.state.userList.slice();
        let user = Object.assign({}, this.state.user);

        itemsList[elementIndex].tags.splice(tagIndex, 1);
        user.userItemsList = itemsList;
        userList[this.state.userIndex] = user;
        this.setState({
            userList: userList,
            userItemsList: itemsList
        });
    }

    removeListElement(index) {
        let itemsList = this.state.userItemsList.slice();
        let userList = this.state.userList.slice();
        let user = Object.assign({}, this.state.user);

        itemsList.splice(index, 1);
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
                    addElementTag={(index, tag) => this.addElementTag(index, tag)}
                    removeElementTag={(tagIndex, elementIndex) => this.removeElementTag(tagIndex, elementIndex)}
                    removeListElement={(index) => this.removeListElement(index)}
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
