import { useEffect, useMemo } from "react";
import { BehaviorSubject } from "rxjs";


export const useBehaviorSubjectFromState = <T>(state: T) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const subject = useMemo(() => new BehaviorSubject(state), []);
  useEffect(() => {
    const current = subject.getValue();
    if (current !== state) {
      subject.next(state);
    }
  }, [state,subject]);
  return subject;
};