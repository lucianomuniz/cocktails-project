import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section error-page'>
      <div className='error-container'>
        <h1>oops! It's a dead end</h1>
        <Link to='/' className='btn-primary'>
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
