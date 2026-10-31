import './VideoPreview.css';

interface VideoPreviewProps {
  image: string;
}

function VideoPreview({ image }: VideoPreviewProps) {
  return (
    <div className="video-preview">
      <img src={image} alt="Grande Final video preview" />

      <button className="play-button" aria-label="Play video">
        ▶
      </button>
    </div>
  );
}

export default VideoPreview;