import { Link } from "react-router-dom";

const ListingsItem = ({
  id,
  company,
  logo,
  featured,
  isNew,
  position,
  postedAt,
  contract,
  location,
  languages,
  role,
  tools,
  level,
  addFilter,
  searchParams,
}) => {
  const skills = [role, level, ...languages, ...tools];

  return (
    <article
      className={`bg-white rounded-md p-4 flex flex-col relative shadow-lg justify-between
      md:flex-row md:items-center
    ${
      featured
        ? "before:absolute before:w-1 before:h-full before:left-0 before:top-0 before:rounded-s-md before:bg-desaturated-dark-cyan"
        : ""
    }`}
    >
      <div className="flex items-center">
        <Link
          to={`${id}`}
          state={{ searchParams: searchParams }}
          className="absolute top-0 -translate-y-1/2 w-12 overflow-hidden rounded-full
        md:static md:translate-y-0 group md:w-20"
        >
          <img
            src={logo}
            alt="company logo"
            className="group-hover:scale-110 duration-300 w-full"
          />
        </Link>
        <div className="md:ms-8">
          <div className="flex items-center mt-4 mb-2">
            <span className="text-desaturated-dark-cyan mr-6 font-bold">
              {company}
            </span>
            {isNew ? (
              <p className="bg-desaturated-dark-cyan text-white px-2 mr-2 rounded-full h-5 uppercase">
                new!
              </p>
            ) : (
              ""
            )}
            {featured ? (
              <span className="bg-very-dark-grayish-cyan text-white px-2 rounded-full h-5 uppercase">
                featured
              </span>
            ) : (
              ""
            )}
          </div>
          <p className="mb-2 hover:text-desaturated-dark-cyan cursor-pointer w-fit text-lg font-bold">
            {position}
          </p>
          <p className="flex gap-3 text-dark-grayish-cyan mb-3 text-sm">
            <span>{postedAt}</span>
            &bull;
            <span>{contract}</span>
            &bull;
            <span>{location}</span>
          </p>
        </div>
      </div>
      <hr className="border-dark-grayish-cyan" />
      <div
        className="mt-4 flex gap-2 lg:gap-4 flex-wrap
      md:mt-0 md:justify-end"
      >
        {skills.map((skill) => (
          <button
            key={skill}
            onClick={(e) => addFilter(e.target.name)}
            name={skill}
            className="bg-light-grayish-cyan text-desaturated-dark-cyan font-semibold rounded-md p-3 py-1 hover:bg-desaturated-dark-cyan hover:text-lighter-grayish-cyan transition-all"
          >
            {skill}
          </button>
        ))}
      </div>
    </article>
  );
};

export default ListingsItem;
