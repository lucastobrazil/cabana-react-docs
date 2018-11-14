import { Box, Checkbox } from 'cabana-react';

import React from 'react';

class StatefulCheckbox extends React.Component {
    constructor() {
        super();

        this.state = {
            checked: false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
            checked: !this.state.checked,
        });
    }

    render() {
        const { label, value, disabled } = this.props;
        return (
            <Checkbox
                disabled={disabled}
                value={value}
                label={label}
                checked={this.state.checked}
                onChange={this.handleChange}
                py={1}
            />
        );
    }
}

const Checkboxes = () => (
    <Box
        display="grid"
        style={{
            gridTemplateColumns: '1fr',
            alignItems: 'center',
        }}
    >
        <StatefulCheckbox value="jar_jar" label="Jar Jar Binks" />
        <StatefulCheckbox value="queen_amidala" label="Queen Amidala" />
        <StatefulCheckbox disabled value="mon_mothma" label="Mon Mothma" />
    </Box>
);

export default Checkboxes;
