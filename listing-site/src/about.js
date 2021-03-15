import React from 'react';

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

export default About;