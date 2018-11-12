import React from 'react';
import { Box, SmallText } from 'cabana-react';
import Section from '../components/Section';

const year = new Date().getFullYear();
const Copyright = () => <SmallText color="grey">Made with 💜 by @Mrcndrw and @LucasArundell &copy; {year}</SmallText>;

export default function Footer() {
    return (
        <Box bg="#fafafa">
            <Section>
                <Copyright />
            </Section>
        </Box>
    );
}
