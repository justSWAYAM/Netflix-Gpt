import Recommendations from "./Recommendations.js";
import RecommendSearch from "./RecommendSearch.js";

const Recommend = () => {
  return (
    <div className="w-screen">
      <div className="w-screen">
      <div className="fixed -z-10  h-full">
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/10f8d166-7c8c-499a-b16f-57c3740cdeae/IN-en-20240624-popsignuptwoweeks-perspective_alpha_website_large.jpg'
     alt="logo"
     className="w-screen h-screen" />
      </div>
      <RecommendSearch/>
      <Recommendations/>
    </div>
    </div>
  )
}

export default Recommend