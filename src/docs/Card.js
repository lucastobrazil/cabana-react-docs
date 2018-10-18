import { ButtonSmall, Card, CardBodyText, CardFooter, CardImage, CardTitle, TestButton } from 'cabana-react';

import Docs from './docs';
import React from 'react';

const SampleBodyText = `Discount applies to all vehicle categories. Prices displayed on the easyJet websites 
    include the discount where the offer is applicable. R`;
export default function CardDocs() {
    // return (
    //     <ButtonSmall bg="primary" color="white" iconRight={true}>
    //         View Full Profile
    //     </ButtonSmall>
    // );
    return (
        <Docs title="Cards">
            <div
                style={{
                    maxWidth: 1024,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gridColumnGap: 10,
                    alignItems: 'start',
                }}
            >
                <Card is="article">
                    <CardTitle>James Dean</CardTitle>
                    <CardBodyText>{SampleBodyText}</CardBodyText>
                    <CardFooter>Footer</CardFooter>
                </Card>

                <Card is="article" textAlign="center">
                    <CardTitle>James Dean</CardTitle>
                    <CardBodyText>
                        <p>{SampleBodyText}</p>
                        <ButtonSmall bg="primary" color="white" iconRight={true}>
                            View Full Profile
                        </ButtonSmall>
                    </CardBodyText>
                    <CardFooter>Footer</CardFooter>
                </Card>
                <Card is="article" textAlign="center">
                    <CardImage />
                    <CardTitle>James Dean</CardTitle>
                    <CardBodyText>
                        <p>{SampleBodyText}</p>
                    </CardBodyText>
                    <CardFooter>Footer</CardFooter>
                </Card>
                <Card is="article" p={8}>
                    <CardTitle>More Padding</CardTitle>
                    <CardBodyText>{SampleBodyText}</CardBodyText>
                    <CardFooter p={8} mx={-8} mb={-8} mt={4}>
                        Footer
                    </CardFooter>
                </Card>
                <Card is="article" bg="secondary" borderRadius="small" boxShadow={60}>
                    <CardTitle color="warning" fontWeight="normal">
                        Fancy secondary one
                    </CardTitle>
                    <CardBodyText color="white"> {SampleBodyText}</CardBodyText>
                </Card>
            </div>
        </Docs>
    );
}
