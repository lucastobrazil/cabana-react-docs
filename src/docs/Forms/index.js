import { Box, FormLabel, HeadingFive, TextInput, ValidationLabel } from 'cabana-react';

import Checkboxes from './Checkbox';
import Docs from '../docs';
import React from 'react';
import StatefulRadioButtons from './Radio';

export default function FormsDocs() {
    return (
        <Docs title="Forms">
            Todo:{' '}
            <ul>
                <li>Inputs with icons left and right</li>
                <li>Textarea</li>
                <li>Toggle switch</li>
            </ul>
            <HeadingFive>Text Inputs</HeadingFive>
            <Box
                display="grid"
                style={{
                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    gridColumnGap: 16,
                    gridRowGap: 16,
                    alignItems: 'center',
                }}
            >
                <TextInput placeholder="Default" />
                <TextInput borderColor="primary" placeholder="Active" />
                <TextInput borderColor="success" defaultValue="Success" />
                <TextInput borderColor="error" color="error" defaultValue="Error" />
                <TextInput borderColor="error" disabled />
                <TextInput borderRadius="large" placeholder="Large border radius" />
                <TextInput borderRadius="none" placeholder="No border radius" />
                <TextInput borderRadius="none" />
                <div>
                    <FormLabel htmlFor="textInput">First Name</FormLabel>
                    <TextInput borderColor="error" name="textInput" />
                    <ValidationLabel>This is a required field</ValidationLabel>
                </div>
                <div>
                    <FormLabel htmlFor="textInput2">Phone Number</FormLabel>
                    <TextInput borderColor="success" name="textInput2" defaultValue="(015) 2323 2320" />
                    <ValidationLabel color="success">Verified</ValidationLabel>
                </div>
            </Box>
            <Box
                display="grid"
                style={{
                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    gridColumnGap: 16,
                    gridRowGap: 16,
                    alignItems: 'center',
                }}
            >
                <div>
                    <HeadingFive>Radio Buttons</HeadingFive>
                    <StatefulRadioButtons />
                </div>
                <div>
                    <HeadingFive>Checkboxes</HeadingFive>
                    <Checkboxes />
                </div>
            </Box>
        </Docs>
    );
}
