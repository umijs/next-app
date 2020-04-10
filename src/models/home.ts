import { useState } from 'react';

export default () => {
  const [hello, setHello] = useState('');
  return { hello, setHello };
};
