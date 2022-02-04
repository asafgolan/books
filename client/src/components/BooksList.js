import React from 'react';
import axios from 'axios';

export default class BooksList extends React.Component {

    state = {
        books: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/books`)
            .then(res => {
                const books = res.data;
                console.log(books);
                this.setState({ books });
            })
    }

    render() {
        return (
                <div>
                    <ul>
                        {
                            this.state.books
                                .map(book =>
                                    <li key={book['_id']}>
                                        <p>{book.bookName}</p>
                                        <p>{book.ISBN}</p>
                                    </li>
                                )
                        }
                    </ul>
                </div>
        )
    }
}
