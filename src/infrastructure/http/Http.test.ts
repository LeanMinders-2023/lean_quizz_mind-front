import {Http} from "@infrastructure/http/Http.ts";

describe("Http", () => {
    it("should be defined if the url is not empty", () => {
        const http = Http.createInstance("url");

        expect(http).toBeDefined();
    });
});