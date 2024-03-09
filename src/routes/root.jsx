import Nav from '../ui/NavBar';
import { Outlet } from 'react-router-dom';

export default function Root() {

  return (
    <>
      <Nav />
      <Outlet />

      <section className='dark:bg-neutral-700'>

      </section>
    </>
  );
}
