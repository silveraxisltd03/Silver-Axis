import { Route, Routes } from 'react-router-dom';
import { Footer } from '@/shared/components/layout/Footer';
import { Nav } from '@/shared/components/layout/Nav';
import { ScrollToTop } from '@/shared/components/layout/ScrollToTop';
import { css } from '@/shared/lib/css';
import { appRoutes } from './routes';

export function App() {
  return (
    <div style={css('background:#ffffff;color:#0b1020;minHeight:100vh;overflowX:hidden;position:relative;')}>
      <ScrollToTop />
      <Nav />
      <Routes>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}
