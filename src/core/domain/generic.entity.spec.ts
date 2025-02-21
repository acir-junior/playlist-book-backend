import { GenericEntity, IGeneric } from "./generic.entity";

describe('GenericEntity', () => {
    interface IMockProps extends IGeneric {
        name: string;
        age: number;
        address: string;
    }

    class MockGenericEntity extends GenericEntity<IMockProps> {};

    let instance: MockGenericEntity;

    beforeEach(() => {
        instance = new MockGenericEntity({
            name: 'John Doe',
            address: '123 Main St',
            age: 30,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }); 

    test('should create an instance of GenericEntity', () => {
        expect(instance).toBeInstanceOf(GenericEntity);
        expect(instance.id).toBeDefined(); // auto-generated id
        expect(instance.createdAt).toBeDefined(); // auto-generated createdAt
        console.log(instance.toJson());
    });

    test('should return the correct JSON representation', () => {
        const json = instance.toJson();
        
        expect(json).toEqual({
            id: instance.id,
            createdAt: instance.createdAt,
            name: 'John Doe',
            address: '123 Main St',
            age: 30,
            updatedAt: instance.getProps().updatedAt,
        });
    });

    test('should update the props', () => {
        instance.updateProps({
            name: 'Jane Doe',
            age: 31,
        });

        expect(instance.getProps().name).toBe('Jane Doe');
        expect(instance.getProps().age).toBe(31);
        expect(instance.updatedAt).toBeDefined();
        console.log(instance.toJson());
        
    });
});