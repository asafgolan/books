import React from "react";

export default function Item(props) {
    const { bookName } = props;
    return (
        <h2>{bookName}</h2>
    );
}
