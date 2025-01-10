"use client";
import React, { useState, useEffect } from "react";
import { Play, Pause, X } from "lucide-react";

export interface Video {
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  color: string;
}

interface VideoCardProps {
  video: Video;
  isActive: boolean;
  onClick: (video: Video) => void;
  onMouseEnter: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  video,
  isActive,
  onClick,
  onMouseEnter,
}) => (
  <div
    className="group relative rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
    onMouseEnter={onMouseEnter}
    onClick={() => onClick(video)}
  >
    <div
      className={`relative aspect-video bg-gradient-to-br ${video.color} p-0.5 rounded-xl`}
    >
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />

      <div className="relative h-full bg-gray-900 rounded-xl overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
            {isActive ? (
              <Pause className="w-8 h-8 text-gray-900" />
            ) : (
              <Play className="w-8 h-8 text-gray-900 translate-x-0.5" />
            )}
          </div>
        </div>
      </div>
    </div>

    <div className="mt-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {video.title}
      </h3>
      <p className="text-gray-600">{video.description}</p>
    </div>
  </div>
);

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: Video | null;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, video }) => {
  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/70 transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg w-full max-w-4xl">
          <button
            onClick={onClose}
            className="absolute -right-2 -top-2 z-10 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-4 border-b">
            <h3 className="text-xl font-semibold text-gray-900">
              {video.title}
            </h3>
          </div>

          <div className="aspect-video w-full bg-black">
            <video
              className="w-full h-full"
              controls
              autoPlay
              src={video.videoUrl}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoFeatureSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const videos: Video[] = [
    {
      title: "Trường Đội trong tim em",
      description:
        "Một slideshow nhỏ về các hoạt động của một kì sinh hoạt của CLB",
      thumbnail: "/thumbnail/thumbnail-1.jpg",
      videoUrl:
        "https://clb-cbd-hn.s3.ap-southeast-2.amazonaws.com/video/truong+doi+trong+tim+em.mp4",
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Mèo và trường Đội",
      description:
        "Một video nhỏ về hoạt động trong năm của CLB mà các bạn hội viên đóng vai là mèo",
      thumbnail: "/thumbnail/thumbnail-2.png",
      videoUrl:
        "https://clb-cbd-hn.s3.ap-southeast-2.amazonaws.com/video/Truong+doi+va+meo.mp4",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Em yêu trường Đội",
      description: "Một video ngắn bày tỏ tình cảm của hội viên với CLB",
      thumbnail: "/thumbnail/thumbnail-3.jpg",
      videoUrl:
        "https://clb-cbd-hn.s3.ap-southeast-2.amazonaws.com/video/M%C3%A1i+tr%C6%B0%E1%BB%9Dng+L%C3%AA+Du%E1%BA%A9n+em+y%C3%AAu.mp4",
      color: "from-orange-500 to-yellow-500",
    },
  ];

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="w-full max-w-6xl mx-auto p-6 bg-white my-10">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-pink-500 uppercase mb-2">
            Những video nổi bật
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cùng xem những video mà các bạn hội viên CLB làm nhé
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              video={video}
              isActive={activeVideo === index}
              onClick={handleVideoClick}
              onMouseEnter={() => setActiveVideo(index)}
            />
          ))}
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        video={selectedVideo}
      />
    </>
  );
};

export default VideoFeatureSection;
