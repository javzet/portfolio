import { Children } from '../../types';

export const SectionContainer = ({ children }: { children: Children }) => {
  return <div className="banner-container section-container">{children}</div>;
};
