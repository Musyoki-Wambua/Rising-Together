<div className="mt-6 w-full  md:w-1/2 p-">
<div className="h-52">
  <a
    href="#"
    style={{ width: "", height: "67.6vh" }}
    className="mt- group relative block bg-black"
  >
    {ngos.length > 0 && (
      <img
        alt="Developer"
        src={`${ngos[0].image_url}`}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />
    )}

    <div className=" relative p-4 sm:p-6 lg:p-8">
      <div className="text-white translate-y-11  mt-96  transition-all group-hover:translate-y-0 group-hover:opacity-100  ">
        <p className="text-gray-600  text-sm">.</p>
        {ngos.length > 0 && (
          <p className="text-gray-400  text- mt-14">
            {ngos[0].location}
          </p>
        )}
        {ngos.length > 0 && (
          <p className="text-4xl font-serif mt-">
            {ngos[0].name}
          </p>
        )}
        <div className="mt-4 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
        {ngos.length > 0 && (
<Link to={`/organizationDetails/${ngos[0].id}`}>
<button className="bg-green-700 w-full h-8 text-xl text-white">
  Donate
</button>
</Link>
)}
        </div>
      </div>
    </div>
  </a>{" "}
</div>
</div>
