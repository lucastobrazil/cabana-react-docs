import SyntaxHighLighter from 'react-syntax-highlighter/prism';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';
import { Box } from 'cabana-react';
import React from 'react';

const CodeExample = props => (
    <Box boxShadow={100} flex={1}>
        <SyntaxHighLighter
            customStyle={{ fontSize: '12px', margin: 0 }}
            style={tomorrow}
            language="javascript"
            {...props}
        />
    </Box>
);

export default CodeExample;
