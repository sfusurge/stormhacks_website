import React from "react";
import Accordion from "./Accordion";

const FAQ: React.FC = () => {
  return (
    <section className="pt-20 self-stretch flex flex-col items-center py-0 px-5 box-border max-w-full text-center text-base text-white font-vollkorn">
      <div className="w-full max-w-[880px] flex flex-col items-center justify-start gap-40px">
        <div className="self-stretch flex flex-col items-start justify-start gap-25px">
          <h1
            className="m-0 self-stretch relative text-[40px] leading-[100%] font-normal font-vollkorn
                  mobile:text-left"
            style={{ marginBottom: "20px" }}
          >
            Frequently Asked <br className="hidden mobile:flex" />
            Questions <br className="hidden mobile:flex" />
          </h1>
        </div>

        <div className="w-full flex justify-center">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 w-full max-w-[880px]">

            <div className="p-4 border border-white">
              <Accordion
                title="What is this event about?"
                answer={`A hackathon is an event where teams collaborate on a project, or "hack", given a certain time limit. At StormHacks, teams of 1-4 collaborate over 24 hours to brainstorm and innovate solutions to real-world problems. Or they are free to work on whatever fun/silly ideas they have in mind, the door is open. We will be inviting various mentors, judges, and guests working in the tech industry to share their expertise and knowledge to our participants. Winning teams will be selected based on various criteria that will be revealed closer to our event.`}
              />
            </div>

            <div className="p-4 border border-white">
              <Accordion
                title="What experience do I need?"
                answer="Don't even worry about it. Our event is open to any student coming from any background/major."
              />
            </div>

            <div className="p-4 border border-white">
              <Accordion
                title="Who can participate?"
                answer="Our event is open to any student coming from any background/major. As long as you (or your team, if you have one already) can attend in person, you're welcome to join!"
              />
            </div>

            <div className="p-4 border border-white">
              <Accordion
                title="Can I find teammates at the event?"
                answer="It's completely up to you. If you plan to join StormHacks with a team ahead of time, please make sure that all group members sign-up together and mention each other in your application. We will also be facilitating team-formation at our event, so if you are short on members and/or want work with bright-minded peers, look forward to that :)"
              />
            </div>

            <div className="p-4 border border-white">
              <Accordion
                title="When can I start working on my project?"
                answer="You may begin to work on your project/idea once the hacking period commences on the first day of the event."
              />
            </div>

            <div className="p-4 border border-white">
              <Accordion
                title="What are we allowed to work on?"
                answer="We will be providing hackers with themes/topics at the opening ceremony of the event. Hardware projects are allowed, but unfortunately are unable to provide any materials/supplies, so you will have to bring your own."
              />
            </div>

            <div className="p-4 border border-white">
              <Accordion
                title="What should I bring?"
                answer="Your laptop and any cables/chargers for your devices are highly recommended. If your project requires any additional equipment or hardware you will be responsible for bringing it in. We also recommend you to bring personal toiletries such as such a tooth brush and toothpaste if you plan on staying overnight."
              />
            </div>

            <div className="p-4 border border-white">
              <Accordion
                title="What should I bring?"
                answer="Your laptop and any cables/chargers for your devices are highly recommended. If your project requires any additional equipment or hardware you will be responsible for bringing it in. We also recommend you to bring personal toiletries such as such a tooth brush and toothpaste if you plan on staying overnight."
              />
            </div>

            <div className="p-4 border border-white">
              <Accordion
                title="When and where is the event happening?"
                answer="The event is taking place on May 18-19th, 2024. The venue is the Student Union Building on SFU's Burnaby campus"
              />
            </div>

            <div className="p-4 border border-white">
              <Accordion
                title="What does it cost to get in?"
                answer="Nothing! StormHacks 2024 is completely free to join. We will be providing meals throughout the event, but if you would like to purchase your own food during our event, you are free to do so."
              />
            </div>

            <div className="p-4 border border-white">
              <Accordion
                title="What kind of activities will there be?"
                answer="The hackathon will be packed with activities such as wellness workshops, games, trivia and more all throughout the event! You can even win some prizes through some of our mini contests."
              />
            </div>

            <div className="p-4 border border-white">
              <Accordion
                title= "Virtual or In-Person this year?"
                answer="StormHacks 2024 will be completely in-person, taking place on the SFU Burnaby campus. There will be no virtual participation this year."
              />
            </div>

            <div className="p-4 border border-white">
              <Accordion
                title="Do you offer travel reimbursements?"
                answer="We unfortunately do not provide travel reimbursements for this event."
              />
            </div>

            <div className="p-4 border border-white">
              <Accordion
                title="What are the requirements to join?"
                answer="The only requirement we have is that you are a university undergraduate that can attend the event in-person. We're absolutely open to all individuals of any major or experience-level!"
              />
            </div>

            <div className="p-4 border border-white">
              <Accordion
                title="Do I have to stay overnight?"
                answer=""
              />
            </div>

            <div className="p-4 border border-white">
              <Accordion
                title="Have more questions?"
                answer="Contact us through any of our social media links or at info@stormhacks.com!"
              />
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
