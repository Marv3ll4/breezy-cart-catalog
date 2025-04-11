
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

interface FilterPanelProps {
  categories: string[];
  selectedCategories: string[];
  priceRange: { min: number; max: number };
  currentPriceRange: [number, number];
  minRating: number;
  onCategoryChange: (category: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onRatingChange: (rating: number) => void;
  onClearFilters: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  categories,
  selectedCategories,
  priceRange,
  currentPriceRange,
  minRating,
  onCategoryChange,
  onPriceChange,
  onRatingChange,
  onClearFilters,
}) => {
  const handlePriceChange = (values: number[]) => {
    onPriceChange([values[0], values[1]]);
  };

  const formatPrice = (price: number) => `$${Math.round(price)}`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => onCategoryChange(category)}
              />
              <Label
                htmlFor={`category-${category}`}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Price Range</h3>
        <Slider
          defaultValue={[priceRange.min, priceRange.max]}
          min={priceRange.min}
          max={priceRange.max}
          step={10}
          value={[currentPriceRange[0], currentPriceRange[1]]}
          onValueChange={handlePriceChange}
          className="my-6"
        />
        <div className="flex items-center justify-between">
          <span className="text-sm">{formatPrice(currentPriceRange[0])}</span>
          <span className="text-sm">{formatPrice(currentPriceRange[1])}</span>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Minimum Rating</h3>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <Button
              key={rating}
              variant={minRating === rating ? "default" : "outline"}
              size="sm"
              onClick={() => onRatingChange(rating)}
              className="flex items-center gap-1 px-3 py-1"
            >
              <Star
                size={16}
                className={minRating === rating ? "fill-white text-white" : "fill-yellow-400 text-yellow-400"}
              />
              {rating}+
            </Button>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        onClick={onClearFilters}
        className="w-full"
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default FilterPanel;
