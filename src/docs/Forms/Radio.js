import { Box, Radio } from 'cabana-react';

import React from 'react';

class StatefulRadioButtons extends React.Component {
    constructor() {
        super();

        this.state = {
            selected: 'anakin_skywalker',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            selected: event.target.value,
        });
    }

    render() {
        return (
            <Box
                display="grid"
                style={{
                    gridTemplateColumns: '1fr',
                    alignItems: 'center',
                }}
            >
                <Radio
                    value="obi_wan"
                    label="Obi Wan Kenobi"
                    checked={this.state.selected === 'obi_wan'}
                    onChange={this.handleChange}
                    py={1}
                />
                <Radio
                    value="han_solo"
                    label="Han Solo"
                    checked={this.state.selected === 'han_solo'}
                    onChange={this.handleChange}
                    py={1}
                />
                <Radio
                    value="anakin_skywalker"
                    label="Anakin Skywalker"
                    checked
                    disabled
                    checked={this.state.selected === 'anakin_skywalker'}
                    onChange={this.handleChange}
                    py={1}
                />
            </Box>
        );
    }
}

export default StatefulRadioButtons;
