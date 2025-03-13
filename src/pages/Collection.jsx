import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item";
import ShowSearch from "../components/ShowSearch";

function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const toggleFilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilters = () => {
    let filtered = [...products];

    if (search && showSearch) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length) {
      filtered = filtered.filter((product) =>
        category.includes(product.category)
      );
    }
    if (subCategory.length) {
      filtered = filtered.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }

    return filtered;
  };

  const applySorting = (productsList) => {
    switch (sortType) {
      case "low":
        return productsList.sort((a, b) => a.price - b.price);
      case "high":
        return productsList.sort((a, b) => b.price - a.price);
      default:
        return productsList;
    }
  };

  // ไว้รี filter
  useEffect(() => {
    let filtered = applyFilters();
    let sorted = applySorting(filtered);
    setFilteredProducts(sorted);
  }, [category, subCategory, sortType, products, search, showSearch]);

  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12;">
      <div className="flex flex-col sm:flex-row gap-8 mt-8 xl:mt-6">
        {/* Filter */}
        <div className="min-w-60 bg-white p-4 rounded-2xl">
          {/* Seacrh box */}
          <ShowSearch />
          {/* Category Filter */}
          <div className="bg-gray-200/30 p-4 ring-1 ring-slate-900/5 mt-6 rounded-xl">
            <h5 className="h5 mb-4">Categories</h5>
            <div className="flex flex-col gap-2 font-light">
              {["Men", "Women", "Kids"].map((category) => (
                <label
                  key={category}
                  className="flex font-medium gap-2 text-gray-500"
                >
                  <input
                    onChange={(e) => toggleFilter(e.target.value, setCategory)}
                    type="checkbox"
                    value={category}
                    className="w-3"
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>

          {/* Types Filter */}
          <div className="bg-gray-200/30 p-4 ring-1 ring-slate-900/5 mt-6 rounded-xl">
            <h5 className="h5 mb-4">Types</h5>
            <div className="flex flex-col gap-2 font-light">
              {["Topwear", "Bottomwear", "Winterwear"].map((subCategory) => (
                <label
                  key={subCategory}
                  className="flex font-medium gap-2 text-gray-500"
                >
                  <input
                    onChange={(e) =>
                      toggleFilter(e.target.value, setSubCategory)
                    }
                    type="checkbox"
                    value={subCategory}
                    className="w-3"
                  />
                  {subCategory}
                </label>
              ))}
            </div>
          </div>

          {/* Sort by */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="text-[14px] font-medium h-8 w-full border border-slate-500/15 text-gray-500 rounded-lg px-2 outline-none mt-6"
          >
            <option value="relevant" className="font-medium text-sm">
              Sort By: Relevant
            </option>
            <option value="low" className="font-medium text-sm">
              Sort By: Low-Price
            </option>
            <option value="high" className="font-medium text-sm">
              Sort By: High-Price
            </option>
          </select>
        </div>

        {/* right side */}
        <div className="bg-white p-4 rounded-2xl">
          <Title title="Our Collection" titleStyles="text-center" />
          {/* Product Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6 ">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Item product={product} key={product._id} />
              ))
            ) : (
              <p className="capitalize text-center text-[18px]">
                No products found for selected filter.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;
