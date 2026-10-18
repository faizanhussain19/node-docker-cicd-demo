const {test} = require("node:test")
const assert = require("node:assert/strict")

const {greet} = require("./app.js")

test("greet returns the correct message" , ()=>{
    assert.equal(greet("Faizan"), "Hello, Faizan");
})
