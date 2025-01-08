import { useState } from 'react';

export function useErrorBoundary() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error('Test error from useErrorBoundary hook');
  }

  return setHasError;
}
