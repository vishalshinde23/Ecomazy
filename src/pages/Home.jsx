import { useState, useEffect, useCallback } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import SearchBar from "../components/Cors/SearchBar";
import SortProducts from "../components/Cors/SortProducts";
import FilterSidebar from "../components/Cors/FilterSidebar";
import Logos from "../components/Logos";
import ReviewCards from "../components/ReviewCards";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8); // Initially show 8 products
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [priceRange, setPriceRange] = useState([0, 1000]); // Initial price range
  const [showFilterSidebar, setShowFilterSidebar] = useState(false); // Toggle filter on mobile

  // Fetch product data
  useEffect(() => {
    async function fetchProductData() {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setPosts(data);
        setFilteredPosts(data); // Initially, show all posts
      } catch (error) {
        console.log("Error fetching data");
        setPosts([]);
      }
      setLoading(false);
    }
    fetchProductData();
  }, []);

  // Combined logic for search, filter, and sorting
  const updateFilteredPosts = useCallback(() => {
    let result = [...posts];

    // Apply search filter
    if (searchTerm) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply price range filter
    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Apply sorting
    if (sortOrder === "lowToHigh") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      result = result.sort((a, b) => b.price - a.price);
    }

    setFilteredPosts(result);
  }, [posts, searchTerm, sortOrder, priceRange]);

  // Run the combined update function whenever dependencies change
  useEffect(() => {
    updateFilteredPosts();
  }, [updateFilteredPosts]);

  // Load more products functionality
  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 8); // Load 8 more products on click
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-teal-800">
      {/* Gradient Background Section */}
      <div className="w-full bg-gradient-to-r from-black via-teal-800 to-yellow-500 py-20 flex flex-col items-center text-center">
        <h1 className="text-white text-4xl font-bold mb-4">
          Welcome to Ecomazy Store
        </h1>
        <div className=" flex items-center justify-center mx-auto w-3/4 md:w-1/2">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            className="w-full bg-white p-2 rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full max-w-screen-lg p-4 flex flex-col md:flex-row">
        {/* Mobile-only Filter Button */}
        <div className="md:hidden flex justify-center mb-4">
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md"
            onClick={() => setShowFilterSidebar(!showFilterSidebar)}
          >
            {showFilterSidebar ? "Hide Filter" : "Show Filter"}
          </button>
        </div>

        {/* Filter Sidebar - Only shown on mobile when filter button is clicked */}
        {showFilterSidebar && (
          <div className="block md:hidden">
            <FilterSidebar priceRange={priceRange} setPriceRange={setPriceRange} />
          </div>
        )}

        {/* Filter Sidebar - Always shown on larger screens */}
        <div className="hidden md:block">
          <FilterSidebar priceRange={priceRange} setPriceRange={setPriceRange} />
        </div>

        <div className="flex-1">
          {loading ? (
            <Spinner />
          ) : (
            <div>
              <SortProducts sortOrder={sortOrder} setSortOrder={setSortOrder} />
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-4 mt-4">
                {filteredPosts.slice(0, visibleProducts).map((post) => (
                  <Product key={post.id} post={post} />
                ))}
              </div>

              {/* Load More Button */}
              {visibleProducts < filteredPosts.length && (
                <div className="flex justify-center mt-6">
                  <button
                    className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg"
                    onClick={loadMoreProducts}
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Logos and Reviews Section */}
      <div className="mt-12 w-full">
        <Logos />
        <ReviewCards />
      </div>
    </div>
  );
};

export default Home;
