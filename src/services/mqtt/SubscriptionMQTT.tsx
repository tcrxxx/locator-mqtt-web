import React from 'react';

import { useSubscription } from 'mqtt-react-hooks';

export default function SubscriptionMQTT() {
  /* Message structure:
   *  topic: string
   *  message: string
   */
  const { message } = useSubscription([
    'teste/teste',
  ]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>{`topic:${message?.topic} - message: ${message?.message}`}</span>
      </div>
    </>
  );
}