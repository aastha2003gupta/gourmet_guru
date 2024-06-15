import React, { useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import Header from '../components/Header';
import { AiFillPlayCircle } from "react-icons/ai";

const RecipeTutorial = () => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = 'AIzaSyAQo3wHs74mJA10Dp5kvDzDEPkgvtZtYq4'; // Replace with your YouTube API key

  const searchVideos = async () => {
    setLoading(true);
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${apiKey}&maxResults=5`;
    try {
      const response = await axios.get(url);
      const fetchedVideos = response.data.items;
      setVideos(fetchedVideos);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching videos', error);
      setLoading(false);
    }
  };

  return (
    <div className='w-full'>
      <Header title="Recipe Tutorial" image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-122861-376464.jpg&fm=jpg" />

      <div className='w-full px-4 lg:px-20 pt-10'>
        <div className='flex justify-center gap-4'>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter recipe name..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            onClick={searchVideos}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            Search
          </button>
        </div>

        {loading && (
          <div className='w-full h-screen flex items-center justify-center'>
            <Loading />
          </div>
        )}

        {!loading && videos.length > 0 && (
          <div className='w-full flex flex-col md:flex-row gap-8 py-10 px-4 md:px-0'>
            {/* Main Video */}
            <div className='w-full md:w-2/4'>
              <iframe
                title="Main Video"
                src={`https://www.youtube.com/embed/${videos[0].id.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 sm:h-96"
              ></iframe>
              <div className='mt-4'>
                <h2 className='text-2xl text-white'>{videos[0].snippet.title}</h2>
                <p className='text-neutral-100 mt-2'>{videos[0].snippet.description}</p>
              </div>
            </div>

            {/* Related Videos */}
            <div className='w-full md:w-2/4'>
              <div className='flex flex-col gap-5'>
                <p className='text-orange-500 text-2xl underline'>Related Tutorials</p>
                {videos.slice(1).map((video) => (
                  <div key={video.id.videoId} className="flex items-center gap-2">
                    <AiFillPlayCircle className="text-orange-500" />
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline"
                    >
                      {video.snippet.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeTutorial;


