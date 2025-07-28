"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import YouTube from 'react-youtube';
import { VideoTrailerProps } from '@/types';
import { extractYouTubeId } from '@/lib/api';
import { MdPlayCircle, MdClose, MdFullscreen } from 'react-icons/md';
import Card from '@/components/ui/Card';

const VideoTrailer: React.FC<VideoTrailerProps> = ({ media }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Find the first video in media array
  const videoMedia = media?.find(m => m.type === 'video' && m.youtube_id);
  const youtubeId = videoMedia?.youtube_id || (videoMedia?.url ? extractYouTubeId(videoMedia.url) : null);

  const handlePlayVideo = () => {
    if (youtubeId) {
      setSelectedVideo(youtubeId);
      setIsPlaying(true);
    }
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
    setSelectedVideo(null);
  };

  const onPlayerReady = (event: any) => {
    // Player is ready
    console.log('YouTube player ready');
  };

  const onPlayerStateChange = (event: any) => {
    // Handle player state changes
    if (event.data === 0) { // Video ended
      setIsPlaying(false);
    }
  };

  if (!youtubeId) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Watch Course Preview
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get a glimpse of our comprehensive IELTS course and see how our expert instructors guide you to success.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="relative overflow-hidden" variant="glass">
            {/* Video Thumbnail */}
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                alt="Course Preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to medium quality thumbnail
                  e.currentTarget.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
                }}
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-300">
                <motion.button
                  onClick={handlePlayVideo}
                  className="group relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors duration-300">
                    <MdPlayCircle className="w-12 h-12 text-primary-600" />
                  </div>
                  <div className="absolute inset-0 w-24 h-24 bg-white/20 rounded-full animate-ping" />
                </motion.button>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white">
                  <h3 className="font-semibold text-lg mb-2">
                    {videoMedia?.title || 'IELTS Course Preview'}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {videoMedia?.description || 'Learn about our comprehensive IELTS preparation course'}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Modal Video Player */}
        <AnimatePresence>
          {isPlaying && selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              onClick={handleCloseVideo}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-4xl mx-4 aspect-video"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseVideo}
                  className="absolute -top-12 right-0 z-10 text-white hover:text-gray-300 transition-colors duration-200"
                >
                  <MdClose className="w-8 h-8" />
                </button>

                {/* Fullscreen Button */}
                <button
                  onClick={() => {
                    const iframe = document.querySelector('iframe');
                    if (iframe && iframe.requestFullscreen) {
                      iframe.requestFullscreen();
                    }
                  }}
                  className="absolute -top-12 right-12 z-10 text-white hover:text-gray-300 transition-colors duration-200"
                >
                  <MdFullscreen className="w-8 h-8" />
                </button>

                {/* YouTube Player */}
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <YouTube
                    videoId={selectedVideo}
                    opts={{
                      width: '100%',
                      height: '100%',
                      playerVars: {
                        autoplay: 1,
                        modestbranding: 1,
                        rel: 0,
                        showinfo: 0,
                        controls: 1,
                        disablekb: 0,
                        enablejsapi: 1,
                        iv_load_policy: 3,
                        cc_load_policy: 0,
                        fs: 1,
                        origin: typeof window !== 'undefined' ? window.location.origin : '',
                      },
                    }}
                    onReady={onPlayerReady}
                    onStateChange={onPlayerStateChange}
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VideoTrailer; 