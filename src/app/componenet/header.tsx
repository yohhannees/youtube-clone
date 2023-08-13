import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  BsYoutube,
  BsSearch,
  BsMicFill,
  BsCameraVideo,
  BsBell,
} from "react-icons/bs";
import Avatar from "react-avatar";
import ReactTooltip from "react-tooltip";

interface HeaderProps {
  notification: number;
  onInputChange: (value: string) => void;
  onSearchSubmit: () => void;
}

const Header: React.FC<HeaderProps> = ({
  notification,
  onInputChange,
  onSearchSubmit,
}) => {
  const router = useRouter();

  useEffect(() => {
    const randomNotification = Math.floor(Math.random() * 10);
    onInputChange("");
    onSearchSubmit();
  }, []);

  return (
    <div className="flex items-center justify-between border-b-2 fixed top-0 left-0 right-0 z-20 bg-white">
      {/* Hamburger menu */}
      {/* Header / Youtubelogo */}
      {/* Query field */}
      {/* Avatar */}
      <ReactTooltip backgroundColor="#403e3f" isCapture />
    </div>
  );
};

export default Header;
