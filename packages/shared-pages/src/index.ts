import { createSolitoRouter } from 'solito';
import { HomeScreen } from './screens/HomeScreen';

export const router = createSolitoRouter({
  initialRouteName: 'home',
  routes: {
    home: {
      component: HomeScreen,
      path: '/',
    },
  },
});
