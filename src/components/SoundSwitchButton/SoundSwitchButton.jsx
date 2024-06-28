import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSpeech } from 'react-text-to-speech';

import SoundSwitchButtonSVG from '../../assets/icons/svgs/sound-switch.svg';
import { assistantPhrases } from '../../data.js';

import classes from './SoundSwitchButton.module.css';

export default function SoundSwitchButton() {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const location = useLocation();
  const text =
    assistantPhrases[
      location.pathname === '/'
        ? location.pathname
        : '/' + location.pathname.split('/').filter(Boolean).join('/')
    ];

  const { Text, speechStatus, start, pause, stop } = useSpeech({
    text,
    pitch: 0,
    rate: 1,
    volume: 1,
    lang: 'ru-RU',
    voiceURI: 'Microsoft Pavel - Russian (Russia)',
  });

  const handleSoundToggle = () => {
    setIsSoundOn((prev) => !prev);
  };

  useEffect(() => {
    if (isSoundOn) {
      start();
    } else {
      stop();
    }
  }, [isSoundOn]);

  return (
    <button
      onClick={handleSoundToggle}
      className={`${classes.soundSwitchButton} ${isSoundOn ? classes.active : ''}`}
    >
      <SoundSwitchButtonSVG />
    </button>
  );
}
