import { useEffect, useRef, useState, useCallback } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
  SharedValue,
} from 'react-native-reanimated';

interface IWeatherCondition {
  icon: null | string;
  dayTime: null | string;
}

const INITIAL_STATE: IWeatherCondition = {
  icon: '11d',
  dayTime: 'day',
};

const useWeatherCondition = (conditionIcon: string) => {
  const [iconState, setIconState] = useState(INITIAL_STATE);
  const balance = useSharedValue(0);
  const angle = useSharedValue(0);
  const balanceRef = useRef<SharedValue<number> | number>(balance);
  const intervalRef = useRef<SharedValue<number | null>>(null);
  const isIconPressed = useSharedValue(false);

  const handleWeatherIcon = useCallback(() => {
    const lastCharacterMarker: string = conditionIcon[conditionIcon.length - 1];
    const imageFolder = lastCharacterMarker === 'd' ? 'day' : 'night';
    const newState = {
      icon: conditionIcon,
      dayTime: imageFolder === 'day' ? 'day' : 'night',
    };
    setIconState(newState);
  }, [conditionIcon]);

  const tap = Gesture.Tap()
    .onBegin(() => (isIconPressed.value = true))
    .onFinalize(() => (isIconPressed.value = false));

  const handleBalanceIncrease = () => {
    balance.value += 100;
    balanceRef.current = balance.value;
  };

  const handleBalanceDecrease = () => {
    balance.value -= 100;
    balanceRef.current = balance.value;
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: withRepeat(withSpring(`${angle.value}deg`, { damping: 8, stiffness: 1 }), -1) },
        { scale: withTiming(isIconPressed.value ? 1.2 : 1) },
      ],
    };
  });

  useEffect(() => {
    //@ts-ignore
    intervalRef.current = setInterval(() => {
      if (Number(balanceRef.current) > 0) {
        handleBalanceDecrease();
      } else {
        handleBalanceIncrease();
      }

      angle.value = angle.value === 0 ? 10 : -10;
      if (angle.value === -10) {
        angle.value = 0;
      }
    }, 2500);

    return () => {
      //@ts-ignore
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    handleWeatherIcon();
  }, [conditionIcon]);

  return { tap, animatedStyle, iconState };
};

export default useWeatherCondition;
