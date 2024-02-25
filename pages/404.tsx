import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Custom404Page: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, []);
  return (
    <div>
      <span>Here we have the custom 404 page</span>
    </div>
  );
};

export default Custom404Page;
