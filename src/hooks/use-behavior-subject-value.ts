import { useEffect, useState } from "react";
import type { BehaviorSubject } from "rxjs";

/**
 * Subscribe to a BehaviorSubject and always return its latest value.
 * - Initializes from subject.getValue()
 * - Cleans up subscription on unmount
 */
export function useBehaviorSubjectValue<T>(subject: BehaviorSubject<T>): T {
  const [value, setValue] = useState<T>(() => subject.getValue());

  useEffect(() => {
    const sub = subject.subscribe(setValue);
    return () => sub.unsubscribe();
  }, [subject]);

  return value;
}

