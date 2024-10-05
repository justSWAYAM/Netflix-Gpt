import { hover } from "@testing-library/user-event/dist/hover";


 const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-[1%]  px-12 absolute text-white bg-gradient-to-r from-black w-auto  aspect-video ">
   <div  className="mt-[8%] mb-10 pb-5">
    <h1 className="text-5xl font-extrabold pb-5">{title}</h1>
    <p className="w-1/2">{overview}</p>
    <div className="pt-5 pb-5">
        <button className =  " bg-white hover:bg-gray-300 text-black px-6 py-4 mt-5  rounded-lg  mr-4 w-auto pb-3"> ▶   Play</button>
        <button className="bg-gray-500 bg-opacity-50 text-white px-6 py-4 mt-5 rounded-lg ml-4 w-auto pb-3"> More Info</button>
    </div>
    </div>
    

    </div>
  )
}

export default VideoTitle;
