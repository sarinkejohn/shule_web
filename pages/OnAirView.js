import React, { useEffect, useState } from "react";
import {  useParams,Link } from "react-router-dom";

function OnAirView() {
  const { id } = useParams();
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&order=date&key=AIzaSyA3zPwdG3oEguS56zMgTqQAU-HRmSbFknU&maxResults=10&playlistId=${id}`;
  const [playlist, setPlayList] = useState();
  const [isLoading, setIsLoading] = useState(false);
 
  const getPlayList = async () => {
    setIsLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setIsLoading(false);
    setPlayList(data);
  };

  useEffect(() => {
    getPlayList();
  }, [url]);

 
  // const videoSrc = `https://www.youtube.com/embed/${data}`
  console.log(id)

  return (
    <>
      <div className="flex flex-row h-auto  border-2 mx-1 my-1 border-blue-800">
        {isLoading && <p>Loading...</p>}

        
        <div className="border-2  w-auto">
          {/* card */}
          {playlist?.items.map((data ) => (
            
          <div key={data.id} className="py-0 px-0 mt-2  border-2 border-purple-500 mb-1 max-w mx-auto bg-white shadow-lg space-y-0 ">
            <img
              className="block mx-auto h-24  sm:mx-0 sm:shrink-0"
              src={data.snippet.thumbnails.high.url}
              alt="clip"
            />
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-sm text-black breack-all font-semibold">
                 {data.snippet.title}
                </p>
                
              </div>
              <Link to={`/playview/${data.snippet.resourceId.videoId}`}>
              <button  className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                view
              </button>
              </Link>
              
            </div>
          </div>
          ))}
          
        </div>
      </div>

      {/* <div className=''> <iframe src={videoSrc} allowFullScreen title="Video player" /></div> */}
    </>
  );
}

export default OnAirView;
