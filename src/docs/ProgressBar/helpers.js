import { Box, ProgressBar } from 'cabana-react';
import React, { Fragment } from 'react';

const Slider = ({ onChange, amount }) => (
  <Fragment>
    <input type="range" style={{ width: '100%' }} step="1" value={amount} onChange={onChange} list="tickmarks" />
    <datalist id="tickmarks">
      <option value="0" />
      <option value="10" />
      <option value="20" />
      <option value="30" />
      <option value="40" />
      <option value="50" />
      <option value="60" />
      <option value="70" />
      <option value="80" />
      <option value="90" />
      <option value="100" />
    </datalist>
  </Fragment>
);

class StatefulExample extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: 62,
    };
  }

  onChange(event) {
    this.setState({ amount: parseInt(event.target.value, 10) });
  }

  render() {
    const { amount } = this.state;
    const { innerBg, outerBg, borderRadius, p, fontSize, showNumber, minHeight, color } = this.props;
    return (
      <Box mt={3}>
        <Slider onChange={this.onChange.bind(this)} amount={amount} />
        <ProgressBar
          color={color}
          p={p}
          innerBg={innerBg}
          outerBg={outerBg}
          amount={amount}
          borderRadius={borderRadius}
          fontSize={fontSize}
          showNumber={showNumber}
          minHeight={minHeight}
        />
      </Box>
    );
  }
}

export { StatefulExample, Slider };