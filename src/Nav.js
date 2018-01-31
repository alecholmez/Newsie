import React, { Component } from 'react';
import './Nav.css';
import PropTypes from 'prop-types';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="uk-navbar-container uk-margin" data-uk-navbar>
                <div className="uk-navbar-left">
                    <a className="uk-navbar-item uk-logo">Newsie</a>

                    <ul className="uk-navbar-nav">
                        <li>
                            <a>
                                <span className="uk-icon uk-margin-small-right" data-uk-icon="icon: home"></span>
                                {'Home'}
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="uk-navbar-right">
                    <div>
                        <a className="uk-navbar-toggle" data-uk-icon="search" href="#"></a>
                        <div className="uk-drop" data-uk-drop="mode: click; pos: left-center; offset: 0">
                            <form className="uk-search uk-search-navbar uk-width-1-1" onSubmit={this.props.handleSubmit}>
                                <input className="uk-search-input" type="search" onChange={this.props.handleInput} placeholder="Search..." autoFocus />
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;