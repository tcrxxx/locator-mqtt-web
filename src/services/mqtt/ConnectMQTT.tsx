import React from 'react';

import { Connector } from 'mqtt-react-hooks';
import Status from './Status';
import SubscriptionMQTT from './SubscriptionMQTT';

export default function ConnectMQTT() {
  return (
    <Connector brokerUrl="ws://192.168.1.165:1884" options={{"username":"mosquitto_user", "password":"mqtt099812"}}>
      <Status />
      <SubscriptionMQTT />
    </Connector>
  );
}