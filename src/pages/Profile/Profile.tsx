import styles from './Profile.module.scss';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useUserQuery } from '../../hooks/useUserQuery';

import { ErrorBlock } from '../../components/elements/ErrorBlock/ErrorBlock';
import { Button } from '../../components/ui/Button/Button';
import { Spinner } from '../../components/elements/Spinner/Spinner';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { data: user, isLoading, isError, isSuccess } = useUserQuery(Number(id));

  if (isLoading) {
    return (
      <div className="container">
        <Spinner />
      </div>
    );
  }

  if (isError || !user) {
    return (
      <div className="container">
        <ErrorBlock page="UserNotFound" />
      </div>
    );
  }

  return (
    <div className="container">
      {isSuccess && (
        <div className={styles.wrapper}>
          <Button text="На главную" onClick={() => navigate('/')} />

          <section className={styles.card}>
            <h2 className={styles.name}>{user.name}</h2>
            <ul className={styles.list}>
              <li>
                <strong>Username:</strong> {user.username}
              </li>
              <li>
                <strong>Email:</strong> <a href={`mailto:${user.email}`}>{user.email}</a>
              </li>
              <li>
                <strong>Phone:</strong> <a href={`tel:${user.phone}`}>{user.phone}</a>
              </li>
              <li>
                <strong>Website:</strong>{' '}
                <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
                  {user.website}
                </a>
              </li>
            </ul>

            <h3>Address</h3>
            <address className={styles.address}>
              <ul className={styles.list}>
                <li>
                  {user.address.street}, {user.address.suite}
                </li>
                <li>
                  {user.address.city}, {user.address.zipcode}
                </li>
                <li>
                  <strong>Geo:</strong> lat {user.address.geo.lat}, lng {user.address.geo.lng}
                </li>
              </ul>
            </address>

            <h3>Company</h3>
            <ul className={styles.list}>
              <li>
                <strong>Name:</strong> {user.company.name}
              </li>
              <li>
                <strong>Catch Phrase:</strong> “{user.company.catchPhrase}”
              </li>
              <li>
                <strong>BS:</strong> {user.company.bs}
              </li>
            </ul>
          </section>
        </div>
      )}
    </div>
  );
};

export default Profile;
