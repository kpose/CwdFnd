import {createContext, useContext} from 'react';

export type AnimatedScrollProps = {
  translateHeader: any;
  scroll: any;
  translateHeaderText: any;
  fadeOut: any;
};

export const AnimatedScrollContext = createContext<AnimatedScrollProps>({
  translateHeader: 0,
  scroll: 0,
  translateHeaderText: 0,
  fadeOut: 0,
});

export const useAnimatedScrollContext = () => useContext(AnimatedScrollContext);
