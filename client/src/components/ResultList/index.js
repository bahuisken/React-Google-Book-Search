import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map((result) => (
        <li className="list-group-item" data-key={result.id} key={result.id}>
          <img
            alt={result.volumeInfo.title}
            className="img-fluid"
            src={result.volumeInfo.imageLinks.thumbnail}
          />{" "}
          <br />
          <p>
            {result.volumeInfo.title}
            <br />
            {result.volumeInfo.authors} <br />
            {result.volumeInfo.description}
            <br />
          </p>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
