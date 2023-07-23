import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import ListingsItem from "../components/ListingsItem";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../../public/fetch";

const Home = () => {
  const [listings, setListings] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = searchParams.getAll("filter");

  useEffect(() => {
    async function getData() {
      const listings = await fetchData();
      setListings(listings);
    }

    getData();
  }, []);

  function addFilter(filterName) {
    setSearchParams((prevValue) => {
      const newQuery = prevValue;
      if (!newQuery.toString().includes(filterName)) {
        newQuery.append("filter", filterName);
      }
      return newQuery;
    });
  }

  function removeFilter(filterName) {
    const newQuery = new URLSearchParams("");
    searchParams.forEach((value, key) => {
      if (value != filterName) {
        newQuery.append(key, value);
      }
    });

    setSearchParams(newQuery);
  }

  const allListings = listings.map((listing) => (
    <ListingsItem key={listing.id} addFilter={addFilter} {...listing} />
  ));

  const filteredListings = listings.map((listing) => {
    let isValid = 0;
    const skills = [
      ...listing.languages,
      ...listing.tools,
      listing.role,
      listing.level,
    ];

    for (let i = 0; i < filters.length; ++i) {
      for (let j = 0; j < skills.length; ++j) {
        if (filters[i] === skills[j]) {
          ++isValid;
        }
      }
    }

    if (isValid == filters.length) {
      return (
        <ListingsItem
          key={listing.id}
          addFilter={addFilter}
          searchParams={searchParams.toString()}
          {...listing}
        />
      );
    }
  });

  return (
    <div>
      <Filters filters={filters} removeFilter={removeFilter} />
      <main className="py-8">
        <div className="container">
          <div
            className="flex flex-col gap-8
          xl:w-[1000px] xl:mx-auto"
          >
            {filters.length > 0 ? filteredListings : allListings}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
