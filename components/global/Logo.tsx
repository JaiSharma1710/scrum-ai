import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="w-max">
      <Link href="/">
        <Image src="/logo.png" width={120} height={120} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
