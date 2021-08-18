import React from 'react';
import { ToggleRefinement } from 'react-instantsearch-dom';

const numericMenu = ({}) => {
  return (
    <ToggleRefinement
  attribute="free_shipping"
  label="Free Shipping"
  value={true}
/>
  );
};

export default numericMenu;