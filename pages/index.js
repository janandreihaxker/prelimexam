import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

const things = [
  {
    title: 'Being on Time',
    text: "Arriving on time shows respect for other people's time and demonstrates reliability.",
  },
  {
    title: 'Making an Effort',
    text: "You don't need special talent to give your best effort. Consistent effort can make a big difference.",
  },
  {
    title: 'Being High Energy',
    text: 'Bringing positive energy and enthusiasm can influence the people around you.',
  },
  {
    title: 'Having a Positive Attitude',
    text: 'A positive attitude helps you approach challenges with a constructive mindset.',
  },
  {
    title: 'Being Passionate',
    text: 'Showing genuine interest in what you do can make your work more meaningful.',
  },
  {
    title: 'Using Good Body Language',
    text: 'Eye contact, posture, and attentive gestures can help you communicate confidence and respect.',
  },
  {
    title: 'Being Coachable',
    text: 'Being willing to listen, learn, and accept feedback helps you improve.',
  },
  {
    title: 'Doing a Little Extra',
    text: 'Going beyond the minimum can show that you care about the quality of your work.',
  },
  {
    title: 'Being Prepared',
    text: 'Taking time to prepare makes it easier to handle responsibilities and unexpected situations.',
  },
  {
    title: 'Having a Strong Work Ethic',
    text: 'Showing up, staying committed, and following through are habits anyone can develop.',
  },
];

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingXl}>10 Things That Require Zero Talent</h2>

        <ol>
          {things.map((thing) => (
            <li key={thing.title} className={utilStyles.listItem}>
              <strong>{thing.title}</strong>
              <p>{thing.text}</p>
            </li>
          ))}
        </ol>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
