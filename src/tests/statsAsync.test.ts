
import * as statsAsync from "./../statsAsync"

xdescribe("stats async", () => {

    it("calculates the sum of all elements ot the array (async)", async ()=>{
        const result = await statsAsync.sum([1,2,3]);
        const expected = 6;
      
        expect(expected).toBe(result);
    });
      
    it("calculates the average of all elements of the array (async)", async ()=>{
        const result = await statsAsync.average([1,2,3]);
        const expected = 2;
       
        expect(expected).toBe(result);
    });
})





  
