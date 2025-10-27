import React, { useState, useRef, useEffect } from 'react';

const GIFS = [
  '/resources/cat-heart.gif',
  '/resources/rusure.gif',
  '/resources/3shocked-1.gif',
  '/resources/4.crying.gif',
  '/resources/5.crying.gif',
  '/resources/idc.gif'
];

function App() {
  const [gifIndex, setGifIndex] = useState(0);
  const [text, setText] = useState('Yêu em hem?❤️😘');
  const [count, setCount] = useState(2);
  const [showVideo, setShowVideo] = useState(false);
  const [isYesClicked, setIsYesClicked] = useState(false);
  const [yesButtonStyle, setYesButtonStyle] = useState({});
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [noButtonVisible, setNoButtonVisible] = useState(true);
  const videoRef = useRef(null);

  // Tải trước tất cả gif
  useEffect(() => {
    GIFS.forEach(gifSrc => {
      const img = new Image();
      img.src = gifSrc;
    });
  }, []);

  // Tự động ẩn video sau 9 giây khi bấm Có
  useEffect(() => {
    if (showVideo) {
      const timer = setTimeout(() => {
        setShowVideo(false);
      }, 9000);
      return () => clearTimeout(timer);
    }
  }, [showVideo]);

  const handleNoClick = () => {
    if (count === 2) {
      setGifIndex(1);
      setText('Anh là bấm CÓ đúng không?🤨');
      setYesButtonStyle({ height: '65%', width: '60%' });
      setNoButtonStyle({ width: '30%' });
      setCount(3);
    } else if (count === 3) {
      setGifIndex(2);
      setText('Tay anh chắc bị trượt đúng không?🥹');
      setYesButtonStyle({ height: '70%', width: '70%' });
      setNoButtonStyle({ width: '20%' });
      setCount(4);
    } else if (count === 4) {
      setGifIndex(3);
      setText('Em sẽ khóc đó😭');
      setYesButtonStyle({ height: '80%', width: '80%' });
      setNoButtonStyle({ fontSize: '4vh', width: '10%' });
      setCount(5);
    } else if (count === 5) {
      setGifIndex(4);
      setText('Xin anh mà🥺😘');
      setYesButtonStyle({ height: '90%', width: '96%' });
      setNoButtonVisible(false);
    }
  };

  const handleYesClick = () => {
    setShowVideo(true);
    setGifIndex(5);
    setText('Biết rồi hihi😘');
    setIsYesClicked(true);
    setYesButtonStyle({ height: '90%', width: '96%' });
    setNoButtonVisible(false);
  };

  return (
    <section>
      <div className="video-background">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ display: showVideo ? 'block' : 'none' }}
        >
          <source src="/resources/heart.webm" type="video/webm" />
          Trình duyệt của bạn không hỗ trợ video tag.
        </video>
      </div>
      <div className="container">
        <div className="image-box">
          <div className="actual-image">
            <img 
              src={GIFS[gifIndex]} 
              alt="gif" 
              className="gif" 
            />
          </div>
          <div className="text-one">
            <p style={{ fontSize: '1.4rem', textAlign: 'center' }}>{text}</p>
          </div>
        </div>
        <div className="yes-no">
          {isYesClicked ? (
            <button 
              className="yes" 
              style={yesButtonStyle}
            >
              <a href="https://www.instagram.com/tom251102/">Nhắn tin cho tôi</a>
            </button>
          ) : (
            <button 
              className="yes" 
              onClick={handleYesClick}
              style={yesButtonStyle}
            >
              Có
            </button>
          )}
          {noButtonVisible && (
            <button 
              className="no" 
              onClick={handleNoClick}
              style={noButtonStyle}
            >
              Không
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;

