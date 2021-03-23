import React from 'react';
import './list.css';

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
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <label >
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
            const tagList = tags.map((element, index) => <div class="tagElement" key={index}>
                {element}
                <button onClick={() => { this.props.removeElementTag(index, elementIndex) }} className="removeElementTagButton">X</button>
            </div>);
            return tagList;
        }
        else {
            const tagList = tags.map((element, index) => <div class="tagElement" key={index}>
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

export default List;