export const HeroComponent = () => {
  return (
    <section className="py-12 bg-gray-50 section-padding">
      {/* <div className="px-4 sm:px-6 lg:px-8"> */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Connect, Engage, Make a{" "}
            <span className="text-blue-600">Difference</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            NGOFlow brings together passionate volunteers and impactful
            organizations. Find causes you care about and start making a
            difference today.
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md text-sm font-medium">
              Explore NGOs
            </button>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 relative">
          <div className="bg-blue-500 rounded-lg overflow-hidden">
            <div className="flex justify-center items-center h-full py-12">
              <div className="text-white text-7xl font-light">600 × 400</div>
            </div>

            {/* Stats Card */}
            <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
              <div className="bg-white rounded-lg shadow-lg mx-4 p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">500+</p>
                    <p className="text-sm text-gray-600">Active NGOs</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">10k+</p>
                    <p className="text-sm text-gray-600">Volunteers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">750+</p>
                    <p className="text-sm text-gray-600">Campaigns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};
