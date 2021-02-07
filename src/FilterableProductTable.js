import React from 'react';  
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

class FilterableProductTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        inStockOnly: false,
        gender: 'notany'
      };
      
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
      this.handleGenderChange = this.handleGenderChange.bind(this);
    }
  
    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
    
    handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly
      })
    }

    handleGenderChange(gender) {
        
            this.setState({
                gender: gender
              })
        
      }
  
    render() {
      return (
        <div>
          <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
            onGenderChange={this.handleGenderChange}
          />
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            gender={this.state.gender}
          />
        </div>
      );
    }
  }
  
  
  export default FilterableProductTable;
  
  