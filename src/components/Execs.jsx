import React from "react";
import Image from "next/image";

import Matt from "../../public/execs/matthewwong2.jpg";
import MariaZ from "../../public/execs/mariazia.jpg";
import BrianR from "../../public/execs/brianrahadi.jpg";
import Keyaan from "../../public/execs/keyaanvegdani.jpg";
import Kaia from "../../public/execs/kaiado.jpg";
import Chris from "../../public/execs/christopherfong.jpg";
import Christina from "../../public/execs/christinaraganit.jpg";
import Vicky from "../../public/execs/vickyxu.jpg";
import Alex from "../../public/execs/alexandrasvoboda.jpg";
import Johnson from "../../public/execs/johnsonluong.jpg";
import BrianW from "../../public/execs/brianwang.jpg";
import Rasya from "../../public/execs/rasyahadaayaa.jpg";
import Christine from "../../public/execs/christinevu.jpg";
import AngelaL from "../../public/execs/angelalim.jpg";
import Fady from "../../public/execs/fadynasr.jpg";
import AlexM from "../../public/execs/alexmei.jpg";
import Darrick from "../../public/execs/darrickgunawan.jpg";
import Paul from "../../public/execs/paullee.jpg";
import MichaelT from "../../public/execs/michaelt.jpg";
import Arriyan from "../../public/execs/arriyanali.jpg";
import Natalie from "../../public/execs/nataliekayda.jpg";
import AngelaS from "../../public/execs/angelashen.jpg";
import Tinay from "../../public/execs/tinayyernazarova.jpg";
import Linda from "../../public/execs/lindajolly.jpg";
import Yifei from "../../public/execs/yifeiwang.jpg";
import Josie from "../../public/execs/josietrinh.jpg";
import Mackenzie from "../../public/execs/mackenziescholz.jpg";
import Nafisha from "../../public/execs/nafishadjamalus.jpg";
import Kylie from "../../public/execs/kylieseto.jpg";
import Kevin from "../../public/execs/kevinshi.jpg";
import Brendan from "../../public/execs/brendanshen.jpg";
import Jenna from "../../public/execs/jennalee.jpg";
import Ayana from "../../public/execs/ayanahussain.jpg";
import Celine from "../../public/execs/celineaugustsantoso.jpg";
import Kasey from "../../public/execs/kaseyle.jpg";
import MichaelD from "../../public/execs/michaeldresler.jpg";
import Kelvin from "../../public/execs/kelvinkwan.jpg";
import Samiha from "../../public/execs/samiharaida.jpg";
import Lily from "../../public/execs/lilyli.jpg";
import Rosa from "../../public/execs/rosachen.jpg";
import Darian from "../../public/execs/darianwong.jpg";
import AngelaK from "../../public/execs/angelakurian.jpg";


const execTeam = [
	{
		//Directors
		name: "Matthew Wong",
		position: "President",
		linkedin: "https://www.linkedin.com/in/matthewwong1129/",
		image: Matt,
	},
	{
		name: "Maria Zia",
		position: "Co-Director of Logistics",
		linkedin: "https://www.linkedin.com/in/maria-zia-9a6200259/",
		image: MariaZ,
	},
	{
		name: "Brian Rahadi",
		position: "Co-Director of Logistics",
		linkedin: "https://www.linkedin.com/in/brianrahadi/",
		image: BrianR,
	},
	{
		name: "Keyaan Vegdani",
		position: "Director of Visual Design",
		linkedin: "https://www.linkedin.com/in/keyaan-vegdani/",
		image: Keyaan,
	},
	{
		name: "Kaia Do",
		position: "Director of Marketing",
		linkedin: "https://www.linkedin.com/in/kaiado",
		image: Kaia,
	},
	{
		name: "Christopher Fong",
		position: "Co-Director of Technology",
		linkedin: "https://www.linkedin.com/in/chrisfong604/",
		image: Chris,
	},
	{
		name: "Christina Raganit",
		position: "Co-Director of Technology",
		linkedin: "https://www.linkedin.com/in/christinaraganit/",
		image: Christina,
	},
	{
		name: "Vicky Xu",
		position: "Director of Finance",
		linkedin: "https://www.linkedin.com/in/vickykxu/",
		image: Vicky,
	},
	{
		name: "Alexandra Svoboda",
		position: "Director of Human Resources",
		linkedin: "https://www.linkedin.com/in/a-svoboda/",
		image: Alex,
	},
	{
		name: "Johnson Luong",
		position: "Director of External Relations",
		linkedin: "https://www.linkedin.com/in/johnson-luong/",
		image: Johnson,
	},
	//Logistics Coordinators
	{
		name: "Brian Wang",
		position: "Logistics Coordinator",
		linkedin: "https://www.linkedin.com/in/brian-c-wang",
		image: BrianW,
	},
	{
		name: "Rasya Hadaayaa",
		position: "Logistics Coordinator",
		linkedin: "https://www.linkedin.com/in/rah99/",
		image: Rasya,
	},
	{
		name: "Christine Vu",
		position: "Logistics Coordinator",
		linkedin: "https://www.linkedin.com/in/christine-vu-8b2121264/",
		image: Christine,
	},
	{
		name: "Angela Lim",
		position: "Logistics Coordinator",
		linkedin: "https://www.linkedin.com/in/angelalim-/",
		image: AngelaL,
	},
	{
		name: "Fady Nasr",
		position: "Logistics Coordinator",
		linkedin: "https://www.linkedin.com/in/fady-nasr-9431aa2a1/",
		image: Fady,
	},
	{
		name: "Alex Mei",
		position: "Logistics Coordinator",
		linkedin: "https://www.linkedin.com/in/alex-mei-720279313/",
		image: AlexM,
	},
	{
		name: "Darrick Gunawan",
		position: "Logistics Coordinator",
		linkedin: "https://www.linkedin.com/in/darrick-gunawan/",
		image: Darrick,
	},
	//ER Coordinators
	{
		name: "Paul Lee",
		position: "External Relations Coordinator",
		linkedin: "https://www.linkedin.com/in/pauldklee/",
		image: Paul,
	},
	{
		name: "Michael Tran",
		position: "External Relations Coordinator",
		linkedin: "https://www.linkedin.com/in/michael-tran-sfu/",
		image: MichaelT,
	},
	//Visual Design Coordinators
	{
		name: "Arriyan Ali",
		position: "Visual Design Coordinator",
		linkedin: "https://www.linkedin.com/in/arriyanali/",
		image: Arriyan,
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
		image: Tinay,
	},
	{
		name: "Linda Jolly",
		position: "Visual Design Coordinator",
		linkedin: "https://www.linkedin.com/in/linda-jolly-5849a5224/",
		image: Linda,
	},
	{
		name: "Yifei Wang",
		position: "Visual Design Coordinator",
		linkedin: "https://www.linkedin.com/in/yifeiwangdesigner/",
		image: Yifei,
	},
	//Marketing Coordinators
	{
		name: "Josie Trinh",
		position: "Social Media Coordinator",
		linkedin: "https://www.linkedin.com/in/nghi-trinh-josie/",
		image: Josie,
	},
	{
		name: "Mackenzie Scholz",
		position: "Photographer/Videographer",
		linkedin: "https://www.linkedin.com/in/mackenzie-scholz-1607b816a",
		image: Mackenzie,
	},
	{
		name: "Nafisha Djamalus",
		position: "Video Editor",
		linkedin: "https://www.linkedin.com/in/nafisha-d-b67516218/",
		image: Nafisha,
	},
	//Technology Coordinators
	{
		name: "Kylie Seto",
		position: "Project Manager",
		linkedin: "https://www.linkedin.com/in/kylie-seto/",
		image: Kylie,
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
	{
		name: "Celine August Santoso",
		position: "Product Design Team",
		linkedin: "https://www.linkedin.com/in/celine-august/",
		image: Celine,
	},
	{
		name: "Kasey Le",
		position: "Product Design Team",
		linkedin: "https://www.linkedin.com/in/kasey-le",
		image: Kasey,
	},
	{
		name: "Michael Dresler",
		position: "Product Design Team",
		linkedin: "https://www.linkedin.com/in/michael-dresler/",
		image: MichaelD,
	},
	{
		name: "Kelvin Kwan",
		position: "Product Design Team",
		linkedin: "https://www.linkedin.com/in/kelvin-kwan-8906b1230",
		image: Kelvin,
	},
	//Finance Coordinators
	{
		name: "Samiha Raida",
		position: "Finance Coordinator",
		linkedin: "https://www.linkedin.com/in/samiharaida/",
		image: Samiha,
	},
	{
		name: "Lily Li",
		position: "Finance Coordinator",
		linkedin: "https://www.linkedin.com/in/lilyli0302/",
		image: Lily,
	},
	{
		name: "Rosa Chen",
		position: "Finance Coordinator",
		linkedin: "https://www.linkedin.com/in/rosaychen/",
		image: Rosa,
	},
	//HR Coordinators
	{
		name: "Darian Wong",
		position: "Human Resources Coordinator",
		linkedin: "https://www.linkedin.com/in/thedarianwong/",
		image: Darian,
	},
	{
		name: "Angela Kurian",
		position: "Human Resources Coordinator",
		linkedin: "https://www.linkedin.com/in/angela-mary-kurian-a84a09251/",
		image: AngelaK,
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

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
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
