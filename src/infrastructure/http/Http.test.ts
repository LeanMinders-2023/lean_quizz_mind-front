import {Http} from "@infrastructure/http/Http.ts";

describe("Http", () => {
    it("should be defined", () => {
        const http = new Http();

        expect(http).toBeDefined();
    });

    it("should have a get method", () => {
        const http = new Http();

        expect(http.get).toBeDefined();
    });
});