
import React, { useState, useEffect } from 'react';
import { products, categories, priceRange } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import FilterPanel from '@/components/FilterPanel';
import ShoppingCart from '@/components/ShoppingCart';
import { Button } from '@/components/ui/button';
import { ShoppingCart as CartIcon, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Index = () => {
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Filter states
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPriceRange, setCurrentPriceRange] = useState<[number, number]>([
    priceRange.min,
    priceRange.max,
  ]);
  const [minRating, setMinRating] = useState<number>(0);

  // Effect to apply filters when any filter changes
  useEffect(() => {
    let result = products;

    // Filter by categories if any selected
    if (selectedCategories.length > 0) {
      result = result.filter((product) => selectedCategories.includes(product.category));
    }

    // Filter by price range
    result = result.filter(
      (product) =>
        product.price >= currentPriceRange[0] && product.price <= currentPriceRange[1]
    );

    // Filter by minimum rating
    if (minRating > 0) {
      result = result.filter((product) => product.rating >= minRating);
    }

    setFilteredProducts(result);
  }, [selectedCategories, currentPriceRange, minRating]);

  // Filter handlers
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setCurrentPriceRange([priceRange.min, priceRange.max]);
    setMinRating(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">Breezy Shop</h1>
          <Button 
            variant="outline" 
            size="sm" 
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <CartIcon size={18} />
            <span className="ml-2">Cart</span>
            {state.itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {state.itemCount}
              </span>
            )}
          </Button>
        </div>
      </header>

      <div className="container mx-auto p-4 md:p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Product Catalog</h2>
          <p className="text-gray-600">Browse our collection of premium products</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Panel */}
          <aside className="lg:col-span-1">
            <FilterPanel
              categories={categories}
              selectedCategories={selectedCategories}
              priceRange={priceRange}
              currentPriceRange={currentPriceRange}
              minRating={minRating}
              onCategoryChange={handleCategoryChange}
              onPriceChange={setCurrentPriceRange}
              onRatingChange={setMinRating}
              onClearFilters={handleClearFilters}
            />
          </aside>

          {/* Product Grid */}
          <main className="lg:col-span-3">
            <ProductGrid products={filteredProducts} />
          </main>
        </div>
      </div>

      {/* Shopping Cart Sidebar */}
      <ShoppingCart isOpen={isCartOpen} />
      
      {/* Cart Overlay */}
      {isCartOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsCartOpen(false)}
          />
          <Button
            className="fixed top-4 right-4 z-50 md:right-[25rem] rounded-full w-8 h-8 p-0"
            onClick={() => setIsCartOpen(false)}
          >
            <X size={18} />
          </Button>
        </>
      )}
    </div>
  );
};

export default Index;
