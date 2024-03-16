import Countdown from '@/components/Countdown';
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>StormHacks 2024</title>
      </Head>
      
      <Countdown></Countdown>
    </div>
  );
}
