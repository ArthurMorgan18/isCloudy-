import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { theme } from '../../utils';
const LocationIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={30}
    height={30}
    viewBox="0 0 60 60"
    fill={theme.primaryColor}
    {...props}>
    <Path d="M44.394 13.091 8.633 29.503a1 1 0 0 0 .252 1.895l15.833 2.653 1.809 14.95a1.002 1.002 0 0 0 1.889.324l17.291-34.882a1 1 0 0 0-1.313-1.352zM28.11 45.438l-1.496-12.369a1.002 1.002 0 0 0-.828-.866l-13.362-2.239L42.66 16.087 28.11 45.438z" />
    <Path d="M30 0C13.458 0 0 13.458 0 30s13.458 30 30 30 30-13.458 30-30S46.542 0 30 0zm0 58C14.561 58 2 45.439 2 30S14.561 2 30 2s28 12.561 28 28-12.561 28-28 28z" />
  </Svg>
);
export default LocationIcon;
