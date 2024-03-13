import Acesso from '@/components/acesso';
import ServerFetch from '@/components/server-fetch';
import Width from '@/components/width';

export default async function Home() {
  return (
    <main>
      <h1>Home</h1>
      {/* <Acesso /> */}
      {/* <Width /> */}
      <ServerFetch />
    </main>
  );
}
