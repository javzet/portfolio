import { Children } from '../../types';

export const SectionContainer = (props: {
  children: Children;
  className?: string;
}) => {
  return (
    <div className={`${props.className && props.className} section-container`}>
      {props.children}
    </div>
  );
};
