import { useEffect } from 'react';
import { Entries, TrueCondition, FalseCondition, Options } from '../types';

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
  options: Options
) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      evaluateEntries(entries, trueCondition, falseCondition);
    }, options);

    document.querySelectorAll(queryElement).forEach((e) => {
      observer.observe(e);
    });
  }, [trueCondition, falseCondition, queryElement, options]);
}
