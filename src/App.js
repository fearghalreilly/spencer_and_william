import React, { Component, useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  ClearRefinements,
  RefinementList,
  Stats,
  
 
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

import './App.css';

//compoents
import NumbericMenu from '../src/components/numericMenu'
import HitsPerPage from '../src/components/hitsPerPageSection'

//IMG
import IMG from '../src/assets/logo.svg'


const searchClient = algoliasearch(
  'LLBWRPVKR3',
  'dab1fffbfd435fcf9b96d5fec3d45426'
);

const App = () => {

  const [click, setClick] = useState(true)

//HandleClick for filter options
const handleClick = () => setClick(!click)
 
    return (
  <div className="ais-InstantSearch">
  
    <InstantSearch indexName="spencer_williams" searchClient={searchClient}>

        {/* Header Section */}
      <div className='header_section'>
        <div className="header__container">
          <div className="header__logo-container">
            <img className="header__logo" src={IMG} />
          </div>

        <div className='header__searchbox-container'>
          <SearchBox className="header__searchbox"
            />
        </div>
        </div>
      </div>
        {/* Filter Dropdown Section */}
      <div className='top-panel'>
        <div>
          <Stats />
          <p style={{cursor: 'pointer'}} onClick={handleClick} >Filter Options</p>
        </div>
        <div style={{ display: click ? 'none' : 'block' }} className='filter-panel' >
          <NumbericMenu />
          <h2>Brands</h2>
          <RefinementList attribute='brand'
          showMoreLimit={10}
          translations={{
          showMore(expanded) {
          return expanded ? 'Show less' : 'Show more';
          },
          noResults: 'No results',
          submitTitle: 'Submit your search query.',
          resetTitle: 'Clear your search query.',
          placeholder: 'Search here...',
          }}
           />
          <ClearRefinements />
          </div>
           <Hits hitComponent={Hit} />
        </div>
      
       {/* Hit Section */}
      <div className="bottom-panel">
        <HitsPerPage />
          <div>
            <Pagination className="pagination"/>
          </div>       
      </div> 
          </InstantSearch>
    </div>
    );
  
}

function Hit(props) {
  return (
    <div className='card-container'>
       <div className='card'>
      <div className='image_container'>
      <img src={props.hit.image} alt={props.hit.name} />
      </div>
      <div>
        <p style={{fontWeight: 'bold'}}>{props.hit.name}
        </p>
        <p style={{fontStyle: 'italic'}}>{props.hit.description}
        </p>
        <p style={{color: "red"}}>${props.hit.price}
        </p>
      </div>
      </div>

    </div>
   
     
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;

