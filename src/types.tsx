import { ReactNode } from 'react';
import { LinkProps } from 'react-scroll';

export type Children = ReactNode;

export type Options = IntersectionObserverInit;
export type FalseCondition =
  | ((entry: IntersectionObserverEntry) => void)
  | null;
export type TrueCondition = (entry: IntersectionObserverEntry) => void;
export type Entries = IntersectionObserverEntry[];

export type NavigateLinkProps = {
  className: string;
  children: Children;
  config: LinkProps;
  to: string;
};
