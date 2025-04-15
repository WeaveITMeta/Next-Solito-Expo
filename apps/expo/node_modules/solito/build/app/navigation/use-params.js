import { Platform } from 'react-native';
import useNextParams from './use-next-params';
import { useRoute } from '../../params/use-route';
export function useParams(_settings = {}) {
    if (Platform.OS === 'web') {
        return useNextParams();
    }
    const route = useRoute();
    if (!route) {
        console.error(`[useParams] route is undefined. Is your ${Platform.OS} app properly configured for React Navigation?`);
    }
    return route?.params;
}
//# sourceMappingURL=use-params.js.map