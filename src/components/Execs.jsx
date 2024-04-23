import React from "react";
import Image from "next/image";
import David from "../../public/execs/davidlowe.png";
import Johnson from "../../public/execs/johnsonluong.jpg";
import Alex from "../../public/execs/Alexandra_Svoboda.jpg";
import Kate from "../../public/execs/kateleen_paran.jpg";
import Darian from "../../public/execs/Darian_Wong.jpeg";
import AngelaK from "../../public/execs/Angela_Kurian.jpg";
import Matt from "../../public/execs/matthewwong.jpg"
import Mukhiil from "../../public/execs/Mukhiil_Basaran.png"
import Monishka from "../../public/execs/Monishka_Gautam.jpg"
import MariaZ from "../../public/execs/Maria_Zia.jpg"
import MariaY from "../../public/execs/Maria_yufe.jpg"
import Christina from "../../public/execs/davidlowe.png";
import Arriyan from "../../public/execs/Arryian_ali.png"
import Linda from "../../public/execs/lindajolly.jpeg"
import Natalie from "../../public/execs/Natalie_Kayda.jpg"
import AngelaS from "../../public/execs/angela_shen.jpg"
import Tinay from "../../public/execs/tinay_yernazarova.jpg"
import Kylie from "../../public/execs/kylieseto.jpg"
import Revika from "../../public/execs/revika_jain.jpg"
import Rosa from "../../public/execs/rosa_chen.jpg"
import Varghese from "../../public/execs/varghese.jpg"
import Noor from "../../public/execs/Noor.jpeg"
import Sakshi from "../../public/execs/Sakshi_Wadhwa.PNG"
import Raghav from "../../public/execs/Raghav.jpg"
import Triane from "../../public/execs/triane.png"
import Elsa from "../../public/execs/Elsa_Sinuhaji.jpg"
import Vicky from "../../public/execs/Vicky.JPG"
import Samiha from "../../public/execs/samiha_rahida.jpg"
import Chris from "../../public/execs/christopher_fong.jpg"
import Kevin from "../../public/execs/kevin_shi.png"
import Jenna from "../../public/execs/Jenna_Lee.jpeg"
import Ayana from "../../public/execs/ayana_h.jpeg"
import Jas from "../../public/execs/Jas_Mangat.JPG"
import Brendan from "../../public/execs/Brendan_Shen.jpg"
import Josie from "../../public/execs/josie.JPG"
import Kaia from "../../public/execs/kaia.jpg"
import Sabina from "../../public/execs/sabi.jpeg"


const execTeam = [
  {
    name: "David Lowe",
    position: "Co-President",
    linkedin: "https://www.linkedin.com/in/davidrobertlowe/",
    image: David,
  },
  {
    name: "Johnson Luong",
    position: "Co-President",
    linkedin: "https://www.linkedin.com/in/johnson-luong/",
    image: Johnson,
  },
  {
    name: "Alexandra Svoboda",
    position: "Director of HR",
    linkedin: "https://www.linkedin.com/in/a-svoboda/",
    image: Alex,
  },
  {
    name: "Kateleen Paran",
    position: "HR Coordinator",
    linkedin: "https://www.linkedin.com/in/kateleenparan/",
    image: Kate,
  },
  {
    name: "Darian Wong",
    position: "HR Coordinator",
    linkedin: "https://www.linkedin.com/in/thedarianwong/",
    image: Darian,
  },
  {
    name: "Angela Kurian",
    position: "HR Coordinator",
    linkedin: "https://www.linkedin.com/in/angela-mary-kurian-a84a09251/",
    image: AngelaK,
  },
  {
    name: "Matthew Wong",
    position: "Co-Director of Logistics",
    linkedin: "https://www.linkedin.com/in/matthewwong1129/",
    image: Matt,
  },
  {
    name: "Mukhiil Baskaran",
    position: "Co-Director of Logistics",
    linkedin: "https://www.linkedin.com/in/mukhiil-baskaran/",
    image: Mukhiil,
  },
  {
    name: "Monishka Gautam",
    position: "Logistics Coordinator",
    linkedin: "https://www.linkedin.com/in/monishka-gautam/",
    image: Monishka,
  },
  {
    name: "Maria Zia",
    position: "Logistics Coordinator",
    linkedin: "https://www.linkedin.com/in/maria-zia-9a6200259/",
    image: MariaZ
  },
  {
    name: "Maria Yufe",
    position: "Logistics Coordinator",
    linkedin: "https://www.linkedin.com/in/maria-yufe/",
    image: MariaY,
  },
  {
    name: "Kylie Seto",
    position: "Logistics Coordinator",
    linkedin: "https://www.linkedin.com/in/kylie-seto/",
    image: Kylie,
  },
  {
    name: "Christina Raganit",
    position: "Director of Visual Design",
    linkedin: "https://www.linkedin.com/in/christinaraganit/",
    image: Christina,
  },
  {
    name: "Arriyan Ali",
    position: "Visual Design Coordinator",
    linkedin: "https://www.linkedin.com/in/arriyanali/",
    image: Arriyan,
  },
  {
    name: "Linda Jolly",
    position: "Visual Design Coordinator",
    linkedin: "https://www.linkedin.com/in/linda-jolly-5849a5224/",
    image: Linda,
  },
  {
    name: "Natalie Kayda",
    position: "Visual Design Coordinator",
    linkedin: "www.linkedin.com/in/nataliekayda",
    image: Natalie,
  },
  {
    name: "Angela Shen",
    position: "Visual Design Coordinator",
    linkedin: "https://www.linkedin.com/in/angelashenca/",
    image: AngelaS,
  },
  {
    name: "Tinay Yernazarova",
    position: "Visual Design Coordinator",
    linkedin: "https://www.linkedin.com/in/tinai-yernazarova/",
    image:Tinay,
  },
  {
    name: "Jas Mangat",
    position: "Director of Social Media",
    linkedin: "www.linkedin.com/in/jas-mangat ",
    image: Jas,
  },
  {
    name: "Kaia Do",
    position: "Social Media Coordinator",
    linkedin: "https://www.linkedin.com/in/khuedo04/",
    image: Kaia,
  },
  {
    name: "Sabina Yelyubayeva",
    position: "Social Media Coordinator",
    linkedin: "www.linkedin.com/in/sabina-yel",
    image: Sabina,
  },
  {
    name: "Josie Trinh",
    position: "Social Media Coordinator",
    linkedin: "https://www.linkedin.com/in/nghi-trinh-josie/ ",
    image: Josie,
  },
  {
    name: "Revika Jain",
    position: "Co-Director of ER",
    linkedin: "https://www.linkedin.com/in/revika-jain/",
    image: Revika,
  },
  {
    name: "Rosa Chen",
    position: "Co-Director of ER",
    linkedin: "https://www.linkedin.com/in/rosaychen/",
    image: Rosa,
  },
  {
    name: "Varghese Bobus",
    position: "ER Coordinator",
    linkedin: "https://www.linkedin.com/in/vbobus/",
    image: Varghese,
  },
  {
    name: "Noor Eeman",
    position: "ER Coordinator",
    linkedin: "https://www.linkedin.com/in/nooreeman/",
    image: Noor,
  },
  {
    name: "Sakshi Wadhwa",
    position: "Director of Merchandise",
    linkedin: "https://www.linkedin.com/in/sakshiwadhwa123/",
    image: Sakshi,
  },
  {
    name: "Raghav Ahuja",
    position: "Merchandise Coordinator",
    linkedin: "https://www.linkedin.com/in/ahuja-raghav/",
    image: Raghav,
  },
  {
    name: "Triane Tambay",
    position: "Director of Projects",
    linkedin: "https://www.linkedin.com/in/triane-tambay/",
    image: Triane,
  },
  {
    name: "Elsa Sinuhaji",
    position: "Projects Coordinator",
    linkedin: "https://www.linkedin.com/in/elsa-sinuhaji-5124151a4/",
    image: Elsa,
  },
  {
    name: "Vicky Xu",
    position: "Director of Finance",
    linkedin: "https://www.linkedin.com/in/vickykxu/",
    image: Vicky,
  },
  {
    name: "Samiha Raida",
    position: "Finance Coordinator",
    linkedin: "https://www.linkedin.com/in/samiharaida/",
    image: Samiha,
  },
  {
    name: "Christopher Fong",
    position: "Director of Technology",
    linkedin: "https://www.linkedin.com/in/chrisfong604/",
    image: Chris,
  },
  {
    name: "Kevin Shi",
    position: "Developer",
    linkedin: "https://www.linkedin.com/in/kevinshi10/",
    image: Kevin,
  },
  {
    name: "Brendan Shen",
    position: "Developer",
    linkedin: "https://www.linkedin.com/in/brendan-shen/",
    image: Brendan,
  },
  {
    name: "Jenna Lee",
    position: "Developer",
    linkedin: "https://www.linkedin.com/in/jennaolee/",
    image: Jenna,
  },
  {
    name: "Ayana Hussain",
    position: "Developer",
    linkedin: "https://www.linkedin.com/in/ayana-hussain/",
    image: Ayana,
  },
  
];



const Execs = () => {
  return (
    <section className="pt-10 self-stretch flex flex-col items-center py-0 px-5 box-border max-w-full text-center text-base text-white font-vollkorn">
      <h1
        className={`m-0 self-stretch relative text-[40px] leading-[100%] font-normal font-vollkorn mobile:text-center`}
        style={{ marginBottom: "20px" }}
      >
        Made with love by your <br className="hidden desktop:flex" />
        friends at SFU Surge.
        <br className="hidden desktop:flex" />
      </h1>

      <div className="mb:20px font-vollkorn text-center text-white pb-10 text-[16px]">
        SFU Surge is an all-inclusive, student-led organization founded in 2019.{" "}
        <br className="hidden desktop:flex" />
        Our mission is to promote curiosity and excitement for a future in{" "}
        <br className="hidden desktop:flex" />
        technology, while guiding students on their paths to career success.{" "}
        <br className="hidden desktop:flex" />
      </div>

      <div className="font-vollkorn text-center text-white pb-10 text-[16px]">
        We are an innovative community empowering students with projects,{" "}
        <br className="hidden desktop:flex" />
        events, and networking opportunities. StormHacks combines these three
        aspects <br className="hidden desktop:flex" />
        over the course of a memorable weekend filled with mini-
        <br className="hidden desktop:flex" />
        contests, workshops, sponsor booths, and more.
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {execTeam.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <div className="relative w-[150px] h-[200px] mb-2">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </a>
            <p className="text-white text-lg font-semibold">{member.name}</p>
            <p className="text-gray-300">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Execs;

