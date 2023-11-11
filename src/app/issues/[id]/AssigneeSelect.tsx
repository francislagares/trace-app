'use client';

import { useEffect, useState } from 'react';

import { User } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import axios from 'axios';

const AssigneeSelect = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<User[]>('/api/users');
        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <Select.Root>
      <Select.Trigger placeholder='Assign...' />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          {users.map(user => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
