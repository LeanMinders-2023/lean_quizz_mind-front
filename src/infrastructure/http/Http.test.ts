import {Http} from "@infrastructure/http/Http.ts";

describe("Http", () => {
    it("should be defined if the url is not empty", () => {
        const http = Http.createInstance("http://localhost:8080");

        expect(http).toBeDefined();
    });

    it("throws an error if the url is empty", () => {
        expect(() => Http.createInstance("")).toThrow("The url can not be empty")
    })

    it("should have a get method", () => {
        const http = Http.createInstance("http://localhost");

        expect(http.get).toBeDefined();
    });

    it("should return a promise", () => {
        const http = Http.createInstance("https://jsonplaceholder.typicode.com/todos");

        expect(http.get()).toBeInstanceOf(Promise)
    })
});