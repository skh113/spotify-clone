import { IconSize } from "@/styles/style";

import { HiSpeakerXMark, HiSpeakerWave } from "react-icons/hi2";

interface Props {
  isMute: boolean;
  onClick: () => void;
}

const PlayIcon = ({ isMute: volumeState, onClick }: Props) => {
  const Icon = volumeState ? HiSpeakerXMark : HiSpeakerWave;

  return (
    <Icon
      onClick={onClick}
      size={IconSize.Default}
      className="cursor-pointer"
    />
  );
};

export default PlayIcon;
