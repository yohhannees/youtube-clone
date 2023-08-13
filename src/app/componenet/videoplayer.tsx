import ReactPlayer from "react-player/lazy";
import Skeleton from "react-loading-skeleton";

interface VideoPlayerProps {
  data: VideoData[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-wrap gap-5 items-center justify-center my-10">
      {data.map((item, index) => (
        <div className="flex flex-col items-center ml-10 md:ml-0" key={index}>
          <div className="relative">
            {loading ? (
              <>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                  light
                  height={220}
                  width={380}
                />
                <span className="absolute bottom-2 right-3 bg-black text-white p-0.5">
                  {item.video.lengthText}
                </span>
              </>
            ) : (
              <Skeleton height={220} width={380} />
            )}
          </div>

          {/* Rest of your code */}
        </div>
      ))}
    </div>
  );
};

export default VideoPlayer;
