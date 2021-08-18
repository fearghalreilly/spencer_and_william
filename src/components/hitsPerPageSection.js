import React from 'react';
import { HitsPerPage   } from 'react-instantsearch-dom';

const hitsPerPage = () => {
  return (
    <HitsPerPage
    defaultRefinement={5}
    items={[
      { value: 5, label: 'Show 5 hits' },
      { value: 10, label: 'Show 10 hits' },
      { value: 15, label: 'Show 15 hits' },
    ]}
  />
  );
};

export default hitsPerPage;