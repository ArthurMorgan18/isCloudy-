import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

import { theme } from '../../utils';
const CloseModalIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={theme.primaryColor} {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
      stroke={theme.primaryColor} // Apply color directly to the Path
    />
  </Svg>
);
export default CloseModalIcon;
