import React from "react";
import Image from "next/image";
import Executives from "../manifest";

const Execs = () => {
	const itemsInLastRow = execTeam.length % 6;
	const emptyColumns = itemsInLastRow === 0 ? 0 : 6 - itemsInLastRow;

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

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
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
