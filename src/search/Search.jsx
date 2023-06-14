import { Fragment } from "react";
import "./search.css"
import Geo from '../icons/Geo.jsx'
import SearchIcon from "../icons/SearchIcon";
export default function Search() {
    return (
        <Fragment>
            <div className="search-bar">
                <div className="location-area">
                    <div className="location-head">
                        <h2>LOCATION</h2>
                        <input type="text" value="Helsinki, Finland" placeholder="Add location" />
                    </div>
                    <div className="location-options">
                        <div className="option">
                            <div className="box-icon-search">
                                <Geo />
                            </div>
                            <h2>Helsinki, Finland</h2>
                        </div>
                        <div className="option">
                            <div className="box-icon-search">
                                <Geo />
                            </div>
                            <h2>Turku, Finland</h2>
                        </div>
                        <div className="option">
                            <div className="box-icon-search">
                                <Geo />
                            </div>
                            <h2>Oulu, Finland</h2>
                        </div>
                        <div className="option">
                            <div className="box-icon-search">
                                <Geo />
                            </div>
                            <h2>Vaasa, Finland</h2>
                        </div>
                    </div>
                </div>
                <div className="guests-area">
                    <div className="guests-head">
                        <h2>Guests</h2>
                        <input type="text" placeholder="Add guests" />
                    </div>
                    <div className="guests-options">
                        <div className="adults">
                            <h2>Adults</h2>
                            <h3>Ages 13 or above</h3>
                            <div className="counter">
                                <button className="minus">_</button>
                                <p>0</p>
                                <button>+</button>
                            </div>
                        </div>
                        <div className="children">
                            <h2>Children</h2>
                            <h3>Ages 2 to 12</h3>
                            <div className="counter">
                                <button className="minus">_</button>
                                <p>0</p>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-area">
                    <div className="search-button">
                        <button className="search-button-cont">
                            <div className="lupa-search">
                                <SearchIcon />
                            </div>
                            <p>Search</p>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
