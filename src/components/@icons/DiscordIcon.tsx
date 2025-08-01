import { FC, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
  url?: string;
}
const DiscordIcon: FC<Props> = (props: Props) => {
  const { color = "white", size = 30, url = "" } = props;
  return (
    <Link
      href={url}
      rel="noreferrer"
      target="_blank"
      className="transition-all duration-300 opacity-80 hover:opacity-100"
    >
      <Image
        src="/images/icons/discord.svg"
        width={37}
        height={41}
        alt="discord"
      />
    </Link>
  );
};

export default DiscordIcon;
