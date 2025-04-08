import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={416}
    height={142}
    viewBox="0 0 416 142"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="20" y="30" rx="4" ry="4" width="376" height="22" />
    <rect x="20" y="70" rx="4" ry="4" width="376" height="22" />
    <rect x="20" y="110" rx="4" ry="4" width="376" height="22" />
  </ContentLoader>
);
