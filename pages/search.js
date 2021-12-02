import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

import Skeleton from "react-loading-skeleton";
import Map from "../components/Map";

const Search = ({ searchResults }) => {
  const { startDate, endDate, numberOfGuests, searchInput } = useSelector(
    (state) => state?.search?.search
  );

  const formattedStartDate = format(new Date(startDate), "MMMM dd yy");
  const formattedEndDate = format(new Date(endDate), "MMMM dd yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  //   getServerSideProps();
  return (
    <div>
      <Header
        placeholder={`${searchInput} | ${range} | ${numberOfGuests} | guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays for {range} - {numberOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {searchInput}
          </h1>
          <div className="hidden lg:inline-flex md-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults ? (
              searchResults.map(
                ({
                  img,
                  lat,
                  location,
                  long,
                  price,
                  star,
                  title,
                  total,
                  description,
                }) => (
                  <InfoCard
                    key={img}
                    img={img}
                    location={location}
                    title={title}
                    lat={lat}
                    long={long}
                    price={price}
                    star={star}
                    description={description}
                    total={total}
                  />
                )
              )
            ) : (
              <Skeleton count={5} width={1200} height={100} />
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: { searchResults },
  };
}
