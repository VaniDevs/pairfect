import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const SearchForm = ({onSearch, searchString, onChange, errors}) => {
  const searchTextboxStyles = {
    display: "inline-block",
    marginRight: "20px",
    width: "620px"
  };

  const searchSubmitButtonStyles = {
    display: "inline-block"
  };

  return (
    <div>
      <div style={searchTextboxStyles}>
        <TextInput
          name="Search"
          value={searchString}
          onChange={onChange}
          error=""
          placeholder="Find: food bank, sports program, summer camp..."  />
      </div>
      <button type="button"
        style={searchSubmitButtonStyles}
        className="btn"
        onClick={onSearch}>Search</button>
    </div>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchString: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchForm;
