import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FcPrevious } from "react-icons/fc";

function TeacherActivity() {
  const url = "http://localhost:5000/items";
  const [videoItems, setVideoItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //  https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCg_GB9WS6YKHilQZIJEC4kg&order=date&key=AIzaSyA3zPwdG3oEguS56zMgTqQAU-HRmSbFknU&maxResults=2
  //playlist
  // https://www.googleapis.com/youtube/v3/playlistItems&playlistId=PL6EUerhQbkP3cq6F4fqdDU-mTzZsLoVzl

  const getVideos = async () => {
    setIsLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setIsLoading(false);
    setVideoItems(data);
  };

  useEffect(() => {
    getVideos();
  }, [url]);
  // console.log(videoItems);

  return (
    <div className={"bg-gray-100"}>
       <nav className="nav sticky">
      <div className="header--text">
      <Link to="/activity">
      <div  className=" absolute left-2 top-4"> <FcPrevious size={35} />  </div>
      </Link>
        <h2> Entertainment..!</h2>
      </div>
    </nav>
      <section
        className={
          "block justify-center sm:grid-cols-4 md:grid-cols-4 gap-6 px-4 p-18"
        }
      >
        {/* {contactList?.length > 0 && (
          ) */}
        {isLoading && <p>Loading...</p>}
        {videoItems.map((data) => (
          <div
            key={data.id}
            className="py-8 px-8 max-w-10xl mb-4 mx-4 border border-purple-500 bg-gray-300 rounded-xl shadow-purple-800 shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
          >
            <img
              className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
              src={data.snippet.picture.large}
              alt="Face"
            />

            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5 md:break-all sm:break-all">
                <p className="text-lg break-normal text-black break-all font-semibold">
                  {data.snippet.title}
                </p>
                <p className="text-gray-800">
                  <span className="text-base tracking-wide  font-bold border-b border-purple-500 font-sans">
                    {" "}
                    Published At:{data.snippet.publishedAt}
                  </span>
                </p>
              </div>
              <Link to={`/onairview/${data.snippet.playlistId}`}>
                <button
                  className="px-4 py-1 text-sm mt-2 text-purple-600 font-semibold rounded-full border border-purple-500 
                              hover:text-white hover:bg-purple-600 hover:border-transparent 
                              focus:outline-none focus:ring-2 focus:ring-purple-600 
                              focus:ring-offset-2"
                >
                  View
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default TeacherActivity;
