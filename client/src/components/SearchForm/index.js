import React from "react";

function SearchForm(props) {
  return (
    <div className="card mb-3">
      <div className="card-header">Book Search</div>
      <div className="card-body">
        <form autoComplete="off">
          <div className="form-group">
            <input
              onChange={props.handleInputChange}
              value={props.search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search by Title or Author"
              id="search"
            />
            <button
              onClick={props.handleFormSubmit}
              className="btn btn-danger my-2 float-right"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
