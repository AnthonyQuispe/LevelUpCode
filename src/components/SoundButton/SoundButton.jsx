import React, { useRef, useState, useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import Sound from "../../assets/sounds/Soundtrack.mp3";
import muteIcon from "../../assets/icons/MuteIcon.png";
import soundIcon from "../../assets/icons/SoundIcon.png";
import "./SoundButton.scss";

export default function SoundButton() {
  const { userData } = useContext(UserContext);
  const [sound, setSound] = useState(true);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (userData) {
      setSound(userData.soundEnabled ?? true);
    }
  }, [userData]);

  const handlePlaySound = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = 0.5; // Set volume to 50%
        audioRef.current.play().catch((error) => {
          console.log("Playback prevented: ", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!sound) {
    return null; // Hide the component if sound is not enabled
  }

  return (
    <div className="sound">
      <audio ref={audioRef} src={Sound} type="audio/mpeg" loop />
      <button className="sound__button" onClick={handlePlaySound}>
        <img
          className="sound__img"
          src={isPlaying ? soundIcon : muteIcon}
          alt="Sound Icon"
        />
      </button>
    </div>
  );
}
