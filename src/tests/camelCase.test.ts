
import { toCamelCase } from '../core/camelCase';

describe('Camel case converter', ()=> {

    it('Allows empty text', ()=> {
        expect( toCamelCase('') ).toBe('')
    })

    it('Allows capitalized word', ()=> {
        expect( toCamelCase('Foo') ).toBe('Foo')
    })

    it('Joins the capitalized words that are separated by spaces', ()=> {
        expect( toCamelCase('Foo Bar') ).toBe('FooBar')
    })


})
