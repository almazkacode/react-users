import styles from './Profile.module.scss';

import { useParams } from 'react-router-dom';
import { useUsersQuery } from '../../hooks/useUsersQuery';

export const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: user,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useUsersQuery(id ? Number(id) : undefined);

  return (
    <div className="container">
      {isLoading && <div>Loading...</div>}
      {isError && error instanceof Error && <div>Error: {error.message}</div>}
      {(!user || Array.isArray(user)) && <div>Пользователь не найден</div>}

      {user && isSuccess && !Array.isArray(user) && (
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
      )}
    </div>
  );
};
