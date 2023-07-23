import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchData } from "../../public/fetch";

const Show = () => {
  const [listing, setListing] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  let skills;

  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      const listing = data.find((l) => l.id == id);
      setListing(listing);
    }
    getData();
  }, [id]);

  if (listing) {
    skills = [
      listing.role,
      listing.level,
      ...listing.languages,
      ...listing.tools,
    ];
  }

  if (!listing) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="container">
      <div className="xl:w-[1000px] xl:mx-auto">
        <article
          className="bg-white rounded-md p-4 flex flex-col relative shadow-lg justify-between mt-4
      md:flex-row md:items-center"
        >
          <div className="flex items-center">
            <div
              className="absolute top-0 -translate-y-1/2 w-12 overflow-hidden rounded-full
        md:static md:translate-y-0 group md:w-20"
            >
              <img
                src={listing.logo}
                alt="company logo"
                className="group-hover:scale-110 duration-300 w-full"
              />
            </div>
            <div className="md:ms-8">
              <div className="flex items-center mt-4 mb-2">
                <span className="text-desaturated-dark-cyan mr-6 font-bold">
                  {listing.company}
                </span>
              </div>
              <p className="mb-2 hover:text-desaturated-dark-cyan cursor-pointer w-fit text-lg font-bold">
                {listing.position}
              </p>
              <p className="flex gap-3 text-dark-grayish-cyan mb-3 text-sm">
                <span>{listing.postedAt}</span>
                &bull;
                <span>{listing.contract}</span>
                &bull;
                <span>{listing.location}</span>
              </p>
            </div>
          </div>
          <hr className="border-dark-grayish-cyan" />
          <div
            className="mt-4 flex gap-2 lg:gap-4 flex-wrap
      md:mt-0 md:justify-end"
          >
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-light-grayish-cyan text-desaturated-dark-cyan font-semibold rounded-md p-3 py-1 hover:bg-desaturated-dark-cyan hover:text-lighter-grayish-cyan transition-all"
              >
                {skill}
              </div>
            ))}
          </div>
        </article>
        <div className="mt-4">
          <Link
            to={`../${
              location.state.searchParams
                ? "?" + location.state.searchParams
                : ""
            }`}
            className="bg-white p-2 rounded-md border-2 border-dark-grayish-cyan
            hover:text-lighter-grayish-cyan hover:bg-desaturated-dark-cyan duration-300"
          >
            Back to all listings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Show;
