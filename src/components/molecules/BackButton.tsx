import { ButtonHTMLAttributes, FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const BackButton: FC<Props> = (props: Props) => {
  const { className, ...componentProps } = props;
  const router = useRouter();

  const handleClick = () => {
    router.push({ pathname: "/", query: { to: "news" } }, "/");
  };

  return (
    <button
      className={`text-sm flex items-center font-light ${className} `}
      onClick={() => handleClick()}
    >
      <Image
        src="/images/icons/arrow-narrow-left.svg"
        width={16}
        height={16}
        alt="Arrow"
        className="mr-2"
      />
      BACK
    </button>
  );
};

export default BackButton;
