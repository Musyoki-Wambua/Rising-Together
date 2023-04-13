function LandingPage() {
  return (
    <section style={{ backgroundColor: '#0E503F' }} className="min-h-screen bg-green-900">
  <div className="flex flex-wrap items-center">
    <div className="w-full md:w-1/2 px-4">
      <div className="text-white font-serif ml-64 mt-40  text-6xl">
      <div className="font-extrabold"> No.1 Trusted <br /> source for <br /></div>  <div className="text-yellow-400 ">Giving <br /> and Volunteering</div>
      </div>
    </div>
    <div className="w-full md:w-1/2 px-4">
      <img

        className="mx-auto mt-32 h-96 mr-96   "
        src="https://images.pexels.com/photos/11834966/pexels-photo-11834966.jpeg?cs=srgb&dl=pexels-safari-consoler-11834966.jpg&fm=jpg"
        alt="description"
      />
    </div>
  </div>
  <div className="flex flex-wrap  ">
    <div style={{ width: '53%' }} className="w-full mt-11 px-4">
      <div className="text-white font-serif ml-64    text-3xl">
      <div className=""> 
      We connect nonprofits, donors and companies in nearly every country in the world. 
      We help fellow nonrofits access the funding,
      tools,training and support they need to serve their communities. 
      </div>
        <div className="flex mt-32">
            <button className="text-gray-700 px-4 py-2  hover:bg-yellow-500 bg-yellow-600">Give now</button>
            <div className="bg-green-700 ml-14  text-white px-4 py-2  hover:bg-green-600"> <button className="">Become a Volunteer</button>
        </div>
           </div>
      </div>
    </div>
    <div style={{ width: '47%' }} className="w-full  px-4">
      <img
        style={{ width: '700px' }}
        className="mx-auto mt-7 h-96"
        src="https://images.pexels.com/photos/11025027/pexels-photo-11025027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="description"
      />
    </div>
  </div>
</section>

  );
}
export default LandingPage;
