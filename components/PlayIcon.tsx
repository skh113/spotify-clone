import { IconSize } from "@/styles/style";

import { BsPauseFill, BsPlayFill } from "react-icons/bs";

interface Props {
  isPlayed: boolean;
}

const PlayIcon = ({ isPlayed: playState }: Props) => {
  const Icon = playState ? BsPauseFill : BsPlayFill;

  return <Icon size={IconSize.Large} className="text-black" />;
};

export default PlayIcon;
