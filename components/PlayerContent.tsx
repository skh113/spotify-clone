"use client";

import { Song } from "@/types";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";
import PlayIcon from "./PlayIcon";
import { IconSize } from "@/styles/style";
import VolumeIcon from "./VolumeIcon";
import Slider from "./Slider";
import usePlayer from "@/hooks/usePlayer";

import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { useState } from "react";

interface Props {
  song: Song;
  songUrl: string;
}

const PlayerContent: React.FC<Props> = ({ song, songUrl }) => {
  const player = usePlayer();
  const [volume, setVolume] = useState(1);
  const [isPlaying, setPlaying] = useState(true);

  const onPlayNext = () => {
    if (player.IDs.length === 0) return;

    const currentIndex = player.IDs.findIndex((id) => id === player.activeID);
    const nextSong = player.IDs[currentIndex + 1];

    if (!nextSong) return player.setID(player.IDs[0]);
    player.setID(nextSong);
  };

  const onPlayPrevious = () => {
    if (player.IDs.length === 0) return;

    const currentIndex = player.IDs.findIndex((id) => id === player.activeID);
    const previousSong = player.IDs[currentIndex - 1];

    if (!previousSong) return player.setID(player.IDs[player.IDs.length - 1]);
    player.setID(previousSong);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} />
          <LikeButton songID={song.id} />
        </div>
      </div>
      <div className="flex md:hidden col-auto w-full justify-end items-center">
        <div
          className="h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer"
          onClick={() => {}}
        >
          <PlayIcon isPlayed={isPlaying} />
        </div>
      </div>

      <div className="hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6">
        <AiFillStepBackward
          size={IconSize.Default}
          className="cursor-pointer text-neutral-400 hover:text-white transition"
          onClick={onPlayPrevious}
        />
        <div
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer"
          onClick={() => {}}
        >
          <PlayIcon isPlayed={isPlaying} />
        </div>
        <AiFillStepForward
          size={IconSize.Default}
          className="cursor-pointer text-neutral-400 hover:text-white transition"
          onClick={onPlayNext}
        />
      </div>
      <div className="hidden md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon onClick={() => {}} isMute={volume === 0} />
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
