
import React from 'react';  

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
      this.handleGenderChange = this.handleGenderChange.bind(this);
    }
    
    handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
    
    handleInStockChange(e) {
      this.props.onInStockChange(e.target.checked);
    }

    handleGenderChange(e) {
        this.props.onGenderChange(e.target.value);
    }
    
    render() {
      return (
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
          <p>Gender</p>
          <div>
              <select value={this.props.gender} onChange={this.handleGenderChange}> 
                    <option selected value="notany">Not Any</option>
                  <option name="male"> Male</option>
                  <option name="female">Female</option>
              </select>
            </div>
        </form>
      );
    }
  }
  
export default SearchBar;