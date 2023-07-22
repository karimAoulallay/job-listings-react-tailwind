import { Link } from "react-router-dom";

const Filters = (props) => {
  return (
    <div className="container -translate-y-1/2">
      {props.filters.length > 0 ? (
        <>
          {/* Filters container */}
          <header
            className="flex justify-between bg-white rounded-md p-3 shadow-md
          xl:w-[1000px] xl:mx-auto"
          >
            <div className="flex gap-3 flex-wrap">
              {props.filters.map((filter) => (
                <div
                  key={filter}
                  className="bg-light-grayish-cyan flex items-center rounded-md overflow-hidden"
                >
                  <span className="p-1 px-2 text-desaturated-dark-cyan">
                    {filter}
                  </span>
                  <button
                    name={filter}
                    onClick={(e) => props.removeFilter(e.target.name)}
                    className="bg-desaturated-dark-cyan p-2 hover:bg-very-dark-grayish-cyan transition-all"
                  >
                    <img
                      src="./images/icon-remove.svg"
                      alt="remove icon"
                      className=" pointer-events-none"
                    />
                  </button>
                </div>
              ))}
            </div>

            <Link
              to="."
              className="hover:text-desaturated-dark-cyan hover:underline"
            >
              Clear
            </Link>
          </header>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Filters;
