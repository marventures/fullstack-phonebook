import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook welcome page</h1>
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
