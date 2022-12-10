import styles from '../styles/Home.module.css';
import supabase from '../utils/supabase';

type Album = {
  id: string;
  name: string;
};

type Props = {
  albums: Album[];
};

export async function getStaticProps() {
  const { data: albums, error } = await supabase.from('albums').select('*');

  if (error) {
    throw error;
  }

  return {
    props: {
      albums,
    },
  };
}

export default function Home(props: Props) {
  return (
    <div className={styles.container}>
      <h1>Albums</h1>
      <pre>{JSON.stringify(props.albums, null, 2)}</pre>
    </div>
  );
}
