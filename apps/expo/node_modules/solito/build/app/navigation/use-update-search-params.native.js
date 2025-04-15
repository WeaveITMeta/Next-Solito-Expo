import { useCallback } from 'react';
import { useNavigation } from '../../router/use-navigation';
export default function () {
    const navigation = useNavigation();
    return useCallback((params) => {
        navigation?.setParams(params);
    }, [navigation]);
}
//# sourceMappingURL=use-update-search-params.native.js.map