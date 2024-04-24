import { RestaurantCard } from './RestaurantCard';
import { useState, useEffect } from 'react';
import { Shimmer } from './Shimmer';
import { SWIGGY_API_URL } from '../utils/constants';
import { RESTAURANTS_MOCK_DATA } from '../utils/mockData';
import ImagesPath from '../utils/imagesPath';

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [filter, setFilter] = useState(false);
  const [searchText, setSearchText] = useState('');

  const findRes = (e) => {
    const filteredList = listOfRestaurants.filter(({ info }) => {
      return info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurants(filteredList);
    setFilter(true);
  };

  const filterTopRestaurant = () => {
    const filteredList = listOfRestaurants.filter(
      ({ info }) => info.avgRating > 4.4
    );
    setFilteredRestaurants(filteredList);
    setFilter((prev) => !prev);
    filter && setFilteredRestaurants(listOfRestaurants);
  };

  const fetchData = async () => {
    // const data = await fetch(SWIGGY_API_URL);
    // const json = await data.json();
    // const {
    //   data: {
    //     cards: [
    //       ,
    //       {
    //         card: {
    //           card: {
    //             gridElements: {
    //               infoWithStyle: { restaurants },
    //             },
    //           },
    //         },
    //       },
    //     ],
    //   },
    // } = json;

    // Using mock data because of CORS

    const restaurantsData = RESTAURANTS_MOCK_DATA.map((r, i) => ({
      ...r,
      info: { ...r.info, cloudinaryImageId: ImagesPath[i] },
    }));

    setListOfRestaurants(restaurantsData);
    setFilteredRestaurants(restaurantsData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Conditional rendering
  return listOfRestaurants.length !== 0 ? (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="filter-btn" onClick={() => findRes()}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={() => filterTopRestaurant()}>
          {filter ? 'Show All' : '*Show Top Rated*'}
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map(({ info }) => (
          <RestaurantCard key={info.id} info={info} />
        ))}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};
