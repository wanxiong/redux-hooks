import React, {
  memo, useState, useEffect, createRef, useCallback,
} from 'react'
import { Slider, notification } from 'antd';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { formatDate } from '@/utils'
import { getSongDetailAction } from '../store/actionCreators'
import { PlayBarWrapper } from './style'

function getPlaySong(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

function Playbar() {
  const [value, setValue] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isChanging, setIsChanging] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const dispatch = useDispatch()
  const audioRef = createRef()
  const { currentSong } = useSelector((state) => ({
    currentSong: state.getIn(['player', 'currentSong']),
  }), shallowEqual)

  const duration = currentSong.get('dt') || 0;
  const showCurrentTime = formatDate(currentTime, "mm:ss");
  const showDuration = formatDate(duration, "mm:ss");

  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  useEffect(() => {
    if (currentSong.get('id')) {
      audioRef.current.src = getPlaySong(currentSong.get('id'))
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        console.log('err')
        setIsPlaying(false);
      });
    }
  }, [currentSong]);

  const onChange = (v) => {
    setIsChanging(true);
    const nowTime = (v / 100) * duration;
    setCurrentTime(nowTime);
    setValue(v)
  }

  const timeUpdate = (e) => {
    const time = e.target.currentTime;
    if (!isChanging) {
      setCurrentTime(time * 1000);
      setValue(((time * 1000) / duration) * 100);
    }
  }

  const handleMusicEnded = () => {
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
    setValue(0)
  }

  const sliderAfterChange = useCallback((v) => {
    const nowTime = ((v / 100) * duration) / 1000;
    audioRef.current.currentTime = nowTime;
    setCurrentTime(nowTime * 1000);
    setIsChanging(false);
  }, [duration, isPlaying, audioRef]);

  const playMusic = () => {
    if (!currentSong.get('id')) {
      notification.open({
        message: '请先选择歌曲哦',
      });
    }
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying);
    }
  }

  if (!currentSong.get('id')) {
    return (
      <PlayBarWrapper isPlaying={isPlaying}>
        <div className="player-bar" />
        <div className="player-bar-empty">请选择歌曲哦</div>
      </PlayBarWrapper>
    )
  }

  return (
    <PlayBarWrapper isPlaying={isPlaying}>
      <div className="player-bar" />
      <div className="player-bar-container">
        <div className="player-bar-btn">
          <span className="player-bar-btn-pre" />
          <span
            className="player-bar-btn-play"
            onClick={playMusic}
          />
          <span className="player-bar-btn-next" />
        </div>
        <div className="player-bar-btn-img">
          <img
            src={`${currentSong.getIn(['al', 'picUrl'])}?param=34y34`}
            alt={currentSong.getIn(['al', 'name'])}
          />
        </div>
        <div className="player-bar-btn-progress">
          <div className="player-bar-progress-top">
            <span>{currentSong.getIn(['ar']).map((item) => item.name).join('/')}</span>
            <span>{currentSong.get('name')}</span>
          </div>
          <div className="player-bar-progress-bar">
            <Slider
              value={value}
              onChange={onChange}
              style={{ margin: 0, marginTop: '-5px' }}
              onAfterChange={sliderAfterChange}
              tooltipVisible={false}
            />
          </div>
        </div>
        <div className="player-bar-progress-time">
          <span>{showCurrentTime}</span>
          /
          <span>{showDuration}</span>
        </div>
      </div>
      <audio
        ref={audioRef}
        isPlaying={isPlaying}
        onTimeUpdate={timeUpdate}
        onEnded={handleMusicEnded}
      />

    </PlayBarWrapper>
  )
}

export default memo(Playbar)
