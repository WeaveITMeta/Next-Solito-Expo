type OrArray<Type> = Type | Type[];
export declare function useParams<Type extends Record<string, OrArray<string | number | boolean>>, TypesSettings extends 'enforce-safety' | 'ignore-safety' = 'enforce-safety', CatchAllSegments extends Partial<Record<keyof Type, true>> = {}>(_settings?: {
    types?: TypesSettings;
    catchAllSegments?: CatchAllSegments;
}): { [Key in keyof Type]: TypesSettings extends "ignore-safety" ? Type[Key] : Key extends keyof CatchAllSegments ? (string | Type[Key])[] : string | Type[Key]; };
export {};
//# sourceMappingURL=use-params.d.ts.map