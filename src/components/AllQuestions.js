import FAQ from './FaqQuestions'
import styles from '../css/AllQuestions.module.css'
import { useState } from 'react'

const FAQs1 = [
  {
    question: 'What is a hackathon?',
    answer:
      'A hackathon is an event where people collaborate intensively to build a project from scratch in a short amount of time.'
  },
  {
    question: 'Can I work on a previous project?',
    answer:
      'No, all projects must be built from scratch during StormHacks. However, you are welcome to brainstorm project ideas before the event.'
  },
  {
    question: 'What if I’ve never been to a hackathon?',
    answer:
      'StormHacks welcomes students of all skill levels. Whether you’re a newcomer or a hackathon veteran, we’ll have talks, workshops and mentors to help you with your project throughout the event. All you need to bring is your eagerness to learn.'
  },
  {
    question: 'What kind of activities will there be?',
    answer:
      'The hackathon will be packed with activities such as wellness workshops, games, trivia and more all throughout the event! You can even win some prizes through some of our mini contests.'
  },
  {
    question: 'What platform will you be using to host the event?',
    answer:
      'We will be hosting the event on Discord. Opening/closing ceremonies and workshops will take place on Youtube Premiere or Zoom.'
  },
  {
    question: 'How will we receive swag?',
    answer:
      'Swag will be shipped out to the address you provide during registration! Please note that some swag is limited to hackers in Canada.'
  }
]

const FAQs2 = [
  {
    question: 'Who can participate?',
    answer:
      'Students of any education level are able to apply to StormHacks, as long as they are still enrolled when the virtual event takes place in February.'
  },
  {
    question: 'How much does it cost to attend StormHacks?',
    answer:
      'Admission to StormHacks is completely free for those that are eligible. We will provide all resources and mentorships our hackers need to build incredible and impactful projects.'
  },
  {
    question: 'How many people can be on a team?',
    answer:
      'You can form teams from up to 2-4 people. Don’t worry if you can’t find a team beforehand, event execs will help you find opportunities to connect with others during the event.'
  },
  {
    question: 'How will communication work during the event?',
    answer:
      'All pre-event communications will occur via email, so sign up for the StormHacks mailing list! During the event, we’ll be using our Discord server to communicate important information and updates to all attendees.'
  },
  {
    question: 'When do hacker applications open?',
    answer:
      'Hacker applications will open on December 28th! Stay tuned for more information.'
  },
  {
    question: '404: Questions not found?',
    answer:
      "Contact us at info@stormhacks.com with your question and we'll get back to you as soon as we can!"
  }
]

const AllQuestions = props => {
  const [currentlyOpen, setOpen] = useState(-1)

  return (
    <div className={styles.container}>
      <div className={styles.columns}>
        {FAQs1.map((faq, i) => {
          return (
            <div className={styles.question} key={faq.question}>
              <FAQ
                question={faq.question}
                answer={faq.answer}
                isOpen={currentlyOpen === i}
                id={i}
                setOpen={setOpen}
              />
            </div>
          )
        })}
      </div>
      <div className={styles.columns}>
        {FAQs2.map((faq, i) => {
          return (
            <div className={styles.question} key={faq.question}>
              <FAQ
                question={faq.question}
                answer={faq.answer}
                isOpen={currentlyOpen === i + 6}
                id={i + 6}
                setOpen={setOpen}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllQuestions
