'use client';

import { Box, Container, Flex } from '@radix-ui/themes';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { AiFillBug } from 'react-icons/ai';

const NavBar = () => {
  const currentPath = usePathname();
  const { status } = useSession();

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues/list' },
  ];

  return (
    <nav className='mb-5 h-14 border-b px-5 py-3'>
      <Container>
        <Flex justify='between'>
          <Flex align='center' gap='3'>
            <Link href='/'>
              <AiFillBug />
            </Link>
            <ul className='flex space-x-6'>
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    className={classNames({
                      'text-zinc-900': href === currentPath,
                      'text-zinc-500': href !== currentPath,
                      'transition-colors hover:text-zinc-800': true,
                    })}
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
          <Box>
            {status === 'authenticated' && (
              <Link href='/api/auth/signout'>Log out</Link>
            )}
            {status === 'unauthenticated' && (
              <Link href='/api/auth/signin'>Log in</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
