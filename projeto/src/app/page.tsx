import photosGet, { Photo } from '@/actions/photos-get';
import Feed from '@/components/Feed/feed';

export default async function Home() {
  const data = (await photosGet()) as Photo[];

  return (
    <section className="container MainContainer">
      <Feed photos={data} />
    </section>
  );
}
