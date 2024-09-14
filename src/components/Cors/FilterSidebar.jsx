import { useState } from "react";

const FilterSidebar = ({ setPriceRange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleFilter = () => {
    setPriceRange([minPrice, maxPrice]);
  };

  return (
    <div className="w-full md:w-4/5 lg:w-4/5 bg-teal-700  p-4 shadow-lg rounded-lg mr-6 mb-6 h-auto md:mb-0">
      <h2 className="font-bold text-lg mb-4">Filter by Price</h2>
      <div className="flex flex-col mb-4">
        <label className="mb-2">Min Price</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2">Max Price</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <button
        onClick={handleFilter}
        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-all"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
