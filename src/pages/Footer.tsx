import React from "react";
import SocialLinkIcon from "@/components/SocialIconLinks/Icon";
import { SocialLinkType } from "@/components/SocialIconLinks/Types";
import { PageLinkType, PageLinkTypeInfo } from "@/components/PageLinks/Types";
import Image from "next/image";
import Link from "next/link";
import FooterImage from "@/../public/images/footer-img.svg";

const Footer = () => {
  return (
    <footer className="mt-24">
      <hr className="absolute left-0 right-0" />
      <div className="flex justify-center items-center mt-10 mx-auto mb-5">
        <Image src={FooterImage} alt="" width={160} height={60} />
      </div>

      <nav className="flex justify-center space-x-6 mb-5 flex-wrap">
        {Object.values(PageLinkType).map((type) => {
          if (typeof type === "string") return null;
          return (
            <Link
              href={PageLinkTypeInfo[type].href}
              key={type}
              className="text-sm text-white italic font-vollkorn"
            >
              {PageLinkTypeInfo[type].name}
            </Link>
          );
        })}
      </nav>

      <div className="flex justify-center space-x-6 mb-10">
        {Object.values(SocialLinkType).map((type) => {
          if (typeof type === "string") return null;
          return <SocialLinkIcon key={type} type={type} />;
        })}
      </div>
    </footer>
  );
};

export default Footer;
