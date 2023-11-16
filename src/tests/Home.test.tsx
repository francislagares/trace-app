import { render } from '@testing-library/react';
import { test } from 'vitest';

import Home from '@/app/page';

test('Pages Router', () => {
  const searchParams = { page: '1' }; // Set up searchParams as needed

  render(<Home searchParams={searchParams} />);
});
