/* eslint-disable */
import ErrorRepository from "./index";

test("test", ()=> {
    const error = new ErrorRepository();
    expect(error.translate(300)).toEqual("The connection is lost")
});

test("test", ()=> {
    const error = new ErrorRepository();
    expect(error.translate(200)).toEqual('Unknown error');
});