let chai = require('chai'),
  path = require('path'),
  spies = require('chai-spies');

import { expect} from "chai";
import Triangle from "../src/js/triangle/triangle";

chai.use(spies);
chai.should();

describe("Triangle", () => {
    let triangle;

    beforeEach(() => {
        triangle = new Triangle();
    });

    describe("gatherSides()", () => {
        it("should gather sides with less number of sides", () => {
            const sides = [7,10];
            const getSides = triangle.gatherSides(sides);
            expect(getSides).to.equal(false);
        });
        it("should gather sides with all number of sides", () => {
            const sides = [7,10, 5];
            const getSides = triangle.gatherSides(sides);
            expect(getSides).to.equal(true);
        });
        it("should gather sides with one side empty", () => {
            const sides = [7,10,''];
            const getSides = triangle.gatherSides(sides);
            expect(getSides).to.equal(false);
        });
    });

    describe("validate()", () => {
        it("should validate triangle", () => {
            triangle.sides = [7,10,5];
            const validate = triangle.validate();
            expect(validate).to.equal(true);
        });
        it("should not validate triangle", () => {
            triangle.sides = [5,8,3];
            const validate = triangle.validate();
            expect(validate).to.equal(false);
        });
    });

    describe("classify()", () => {
        it("should classify scanlene triangle", () => {
            triangle.sides = [7,10,5];
            const classify = triangle.classify();
            expect(classify).to.equal('Scalene');
        });
        it("should classify equilateral triangle", () => {
            triangle.sides = [5,5,5];
            const classify = triangle.classify();
            expect(classify).to.equal('Equilateral');
        });
        it("should classify equilateral triangle", () => {
            triangle.sides = [5,5,7];
            const classify = triangle.classify();
            expect(classify).to.equal('Isosceles');
        });
    });
})