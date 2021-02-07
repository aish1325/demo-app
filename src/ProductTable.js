import React from 'react';  
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
    
    render() {
      
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
      const gender = this.props.gender;
      const rows = [];
      
      let lastCategory = null;
        
     
    this.props.products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        }
        
        if(product.gender !== gender.toLowerCase() && gender.toLowerCase()!== 'notany'){
            console.log(gender);
            console.log(product.gender);
            console.log(product.gender !== gender);
            return;
        } else{ }
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <ProductRow 
            product={product}
            key={product.name}
          />
        );
        lastCategory = product.category;
      });
  
      return (
      
         <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
          
        </table>
        
      );
    }
  }
export default ProductTable;