import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetFilters } from '../actions';

import HomeDropdown from './HomeDropdown';
import FilterCard from './FilterCard';

class Home extends React.Component {
    onCardClick() {
        this.props.resetFilters();
        window.scrollTo(0, 0);
    }

    render() {
        return (
        <div>
            <div className="hero">
                <div className="ui container">
                    <div className="text title">Find the best<br/>mods for you</div>
                    <HomeDropdown />
                </div>
            </div>
            <div className="hero-placeholder"></div>
            <div className="filter-pages">
                <div className="ui grid">

                    <FilterCard link="/list" labelText="All Cars" imgSrc="./img/home/allCars.jpg" onClick={() => this.onCardClick()} />
                    <FilterCard link="/filters/brands" labelText="Brands" imgSrc="./img/home/brands.jpg" onClick={() => this.onCardClick()} />
                    <FilterCard link="/filters/class" labelText="Classes" imgSrc="./img/home/classes.jpg" onClick={() => this.onCardClick()} />
                    <FilterCard link="/filters/decades" labelText="Decades" imgSrc="./img/home/decades.jpg" onClick={() => this.onCardClick()} />
                    <FilterCard link="/filters/shifters" labelText="Shifters" imgSrc="./img/home/shifter.jpg" onClick={() => this.onCardClick()} />

                </div>
            </div>
        </div>
        );
    }
}



export default connect(null, { resetFilters })(Home);