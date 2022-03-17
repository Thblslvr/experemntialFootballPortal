import React from 'react'
import '../style/MainLeague.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

const url = `http://api.football-data.org/v2/competitions/`;

let config = {

    method: "GET",
    mode: "cors"
    
};

let resultsOfSearch;

export default function MainLeague() {
    const [loading, setLoading] = React.useState(false);
    let [competitions, setDefibs] = React.useState([]);

    React.useEffect(() => {
        setLoading(true); // here 

        fetch(url, config)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDefibs(data.competitions);
                setLoading(true);
                resultsOfSearch = data.competitions.length
            })
    }, []);

    return (
        <div>
            <div className="grid-container">
                {competitions.map((el, i) =>
                    <div key={i} className="grid-item">{el.name}</div>
                )}
            </div>
            <div className="btnResult-container">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route path="expenses" element={<Expenses />} />
                            <Route path="invoices" element={<Invoices />} />
                        </Route>
                    </Routes>
                </BrowserRouter>,
            </div>
        </div>
    )
}
