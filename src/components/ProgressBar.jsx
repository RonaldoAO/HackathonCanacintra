import React from 'react';
import { Flex, Progress } from 'antd';
const ProgressBar = () => (
  <Flex gap="small" vertical>
    
    
    <Progress
      percent={50}
      percentPosition={{
        align: 'start',
        type: 'inner',
      }}
      size={[, 20]}
      strokeColor="#B7EB8F"
    />
    
    {/*
    <Progress
      percent={60}
      percentPosition={{
        align: 'start',
        type: 'outer',
      }}
    />*/}
    
    
  </Flex>
);
export default ProgressBar;