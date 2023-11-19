import { render } from '@testing-library/react';
import { test, vi } from 'vitest';

import Home from '@/app/page';

vi.mock('next/router', () => require('./mockRouter')); // Mock the useRouter implementation

test('Pages Router', () => {
  render(<Home />);
});
