const SortProducts = ({ setSortOrder }) => {
    return (
      <div className="w-full md:w-1/4 lg:w-1/5">
        <select
          className="w-full p-2 border border-gray-300 rounded-lg"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
    );
  };
  
  export default SortProducts;
  