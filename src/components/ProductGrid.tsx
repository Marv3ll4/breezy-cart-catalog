
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/data/products';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-1 md:col-span-2 lg:col-span-3 py-16 text-center">
          <h3 className="text-lg font-medium text-gray-500">No products match your filters</h3>
          <p className="mt-2 text-sm text-gray-400">Try adjusting your search or filter options</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
