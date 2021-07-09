import { MutableRefObject, useEffect } from 'react';

type TrueCondition = (entry: IntersectionObserverEntry) => void;
type FalseCondition = ((entry: IntersectionObserverEntry) => void) | null;
type IntersectionObserverFuncion = IntersectionObserver;
type Options = IntersectionObserverInit;
type Entries = IntersectionObserverEntry[];

function evaluateEntries(
  entries: Entries,
  trueCondition: TrueCondition,
  falseCondition: FalseCondition
) {
  if (falseCondition) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        trueCondition(entry);
      } else {
        falseCondition(entry);
      }
    });
  } else {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        trueCondition(entry);
      }
    });
  }
}

export function useIntersectionObserver(
  trueCondition: TrueCondition,
  falseCondition: FalseCondition = null,
  queryElement: string,
  options?: Options
) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      evaluateEntries(entries, trueCondition, falseCondition);
    }, options);

    const queryElements = document.querySelectorAll(queryElement);

    queryElements.forEach((element) => {
      observer.observe(element);
    });
  }, []);
}

// function toggleClass(
//   add: string,
//   remove: string | null = null,
//   element: Element | String | null
// ) {
//   if (typeof add === 'string') {
//   }
//   if (remove) {
//   } else {
//   }
// }

// class Element {
//   private add: globalThis.Element | null;
//   private remove: Element;

//   toggleClass(
//     add: string,
//     remove: string | null = null,
//     element: Element | String | null
//   ) {
//     if (typeof add === 'string') {
//       this.add = this.getElement(add);
//     }
//   }

//   private getElement(name: string) {
//     const element = document.querySelector(name);
//     if (element === null) {
//       console.warn('Can´t find the element, verify the class, id, name or tag');
//     }
//     return element;
//   }
// }
