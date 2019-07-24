import { ORMDatabase } from './database';
/**
 * Creates an vuex-orm Model
 * @param entityName The name of the entity to be used as the key for the state
 */
export function OrmModel(entityName, parentEntity, types, typeKey) {
    return function (constructor) {
        var model = constructor;
        // Set the entity name on the model constructor
        constructor.entity = entityName;
        // Set the parent entity name on the model constructo (if present)
        if (parentEntity) {
            constructor.baseEntity = parentEntity;
        }
        // Seup the types and descriminator (if set)
        constructor.types = types;
        if (types && typeKey) {
            constructor.typeKey = typeKey;
        }
        // Add the fields generated by tha attribute decorators
        constructor.fields = function () { return constructor._fields || {}; };
        // Register the entity in the database
        ORMDatabase.registerEntity(constructor);
        return constructor;
    };
}
//# sourceMappingURL=model.js.map