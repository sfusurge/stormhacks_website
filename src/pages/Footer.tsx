import React from 'react';
import SocialLinkIcon from "@/components/SocialIconLinks/Icon"
import { SocialLinkType } from "@/components/SocialIconLinks/Types"
import { PageLinkType, PageLinkTypeInfo } from "@/components/PageLinks/Types";
import Image from "next/image"
import FooterImage from "@/../public/images/footer-img.svg"

const Footer = () => {
  return (
    <footer>
      <hr className="pb-20 mt-20"/>
      <div className="flex justify-center items-center mx-auto mb-4">
        <Image
          src={FooterImage}
          alt=""
          width={160}
          height={60}
        />
      </div>

      <nav className="flex justify-center space-x-6 mb-4 mx-10 flex-wrap">
        {Object.values(PageLinkType).map((type) => {
          if (typeof type === 'string') return null;
          return (
            <a href={PageLinkTypeInfo[type].href} className="text-sm italic">
              {PageLinkTypeInfo[type].name}
            </a>
          );
        })}
      </nav>

      <div className="flex justify-center space-x-6">
        {Object.values(SocialLinkType).map((type) => {
          if (typeof type === 'string') return null; 
          return <SocialLinkIcon key={type} type={type} />;
        })}
      </div>

    </footer>

  );
};

export default Footer;