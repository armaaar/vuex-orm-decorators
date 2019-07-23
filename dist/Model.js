/**
 * Creates an vuex-orm Model
 * @param entityName The name of the entity to be used as the key for the state
 */
export function OrmModel(entityName, parentEntity) {
    return function (constructor) {
        var model = constructor;
        constructor.entity = entityName;
        constructor.baseEntity = parentEntity;
        constructor.fields = function () { return constructor._fields || {}; };
        return constructor;
    };
}
//# sourceMappingURL=model.js.map