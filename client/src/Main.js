
import React, { Component } from "react";
import BooksList from "./components/BooksList";
class Main extends Component {


    render() {
        return (<div><h1>Books</h1>
            <BooksList />
        </div>);
    }
}

export default Main;
