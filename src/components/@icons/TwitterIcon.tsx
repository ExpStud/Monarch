import { FC, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
  url?: string;
}

const TwitterIcon: FC<Props> = (props: Props) => {
  const {
    color = "white",
    size = 35,
    url = "https://twitter.com/expstudio_",
  } = props;
  return (
    <Link
      href={url}
      rel="noreferrer"
      target="_blank"
      className="transition-all duration-300 opacity-80 hover:opacity-100"
    >
      <Image
        src="/images/icons/twitter.svg"
        width={size}
        height={size}
        alt="Twitter"
      />
    </Link>
  );
};

export default TwitterIcon;
