"use client";

import { Song } from "@/types";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";

import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import PlayIcon from "./PlayIcon";
import { IconSize } from "@/styles/style";
import VolumeIcon from "./VolumeIcon";
import Slider from "./Slider";

interface Props {
  song: Song;
  songUrl: string;
}

const PlayerContent: React.FC<Props> = ({ song, songUrl }) => {
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
          <PlayIcon isPlayed={true} />
        </div>
      </div>

      <div className="hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6">
        <AiFillStepBackward
          size={IconSize.Default}
          className="cursor-pointer text-neutral-400 hover:text-white transition"
          onClick={() => {}}
        />
        <div
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer"
          onClick={() => {}}
        >
          <PlayIcon isPlayed={true} />
        </div>
        <AiFillStepForward
          size={IconSize.Default}
          className="cursor-pointer text-neutral-400 hover:text-white transition"
          onClick={() => {}}
        />
      </div>
      <div className="hidden md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon onClick={() => {}} isMute={false} />
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
