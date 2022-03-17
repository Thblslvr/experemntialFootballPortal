import React from 'react'
import '../style/Search.css';

let inSearchField = ''

function handleChange(event) {
    inSearchField = event.target.value;
}

const cors = require('cors');

async function onSubmit(event) {
    console.log(inSearchField);
    const url = `http://api.football-data.org/v2/competitions/`;
  
    let config = {
        method: "GET",
        mode: "cors"
    };

    fetch(url, config)
        .then(res => res.json())
        .then(data => console.log(data))
        
    //   .catch(() => renderError());
    event.preventDefault();
}

export default function LookingFor() {

    return (

        <section className="search">
            <form onSubmit={onSubmit} className="search__form">
                <input
                    onChange={handleChange}
                    type="text"
                    name="title"
                    className="search__textfield"
                    placeholder="Искать на портале"
                />
                <button type="submit" className="search__button">
                    Найти
                </button>
            </form>
            <div className="search__result">
                <h2 className="search__findings"></h2>
                <ul className="search__findings-list"></ul>
            </div>
            <div className="search__error"></div>
        </section>
    )
}
