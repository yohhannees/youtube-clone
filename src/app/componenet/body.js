import Navbar from "./navbar"
import VideoPlayer from "./videoplayer"

function Body({data}) {
  return (
    <div className="col-span-6 relative min-h-screen z-0">
      <div className=" ml-4 lg:ml-20">
        <Navbar />
        <VideoPlayer data={data} />
      </div>      
    </div>
  )
}

export default Body