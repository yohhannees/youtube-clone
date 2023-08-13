import Navbar from "../componenet/navbar";
import VideoPlayer from "./VideoPlayer";

const Body: React.FC = () => {
  return (
    <div className="col-span-6 relative min-h-screen z-0">
      <Navbar />
      <VideoPlayer />
    </div>
  );
};

export default Body;
