import React, {PropTypes} from 'react';

const BrowseCategories = () => {
  const buttonStyles = {
    height: "220px",
    width: "220px",
    margin: "20px"
  };

  return (
    <div>
      <div className="row">
        <button style= {buttonStyles}>
        </button>
        <button style= {buttonStyles}>
        </button>
        <button style= {buttonStyles}>
        </button>
      </div>
      <div className="row">
        <button style= {buttonStyles}>
        </button>
        <button style= {buttonStyles}>
        </button>
        <button style= {buttonStyles}>
        </button>
      </div>
    </div>
  );
};

BrowseCategories.propTypes = {
};

export default BrowseCategories;
