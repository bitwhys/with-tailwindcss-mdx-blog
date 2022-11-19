import React from "react";
import Image from "next/image";

export type FooterProps = {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/bitwhys.svg" alt="Bitwhys Logo" width={72} height={16} />
        </a>
      </footer>
  );
};

export default Footer;
