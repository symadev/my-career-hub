import Bannerimg from '../../assets/images/user.png'

const Banner = () => {
    return (
      <div className="hero min-h-screen bg-base-200 px-6">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start gap-8">
          {/* Image Section */}
          <img
              src={Bannerimg}
              alt="Career Hub"
              className="w-full max-w-sm rounded-lg shadow-2xl"
          />
          
          {/* Text Section */}
          <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Career Hub News!</h1>
              <p className="py-6 text-lg text-white">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button class="btn btn-outline btn-primary">Get Started</button>
          </div>
      </div>
  </div>
  
    );
};

export default Banner;