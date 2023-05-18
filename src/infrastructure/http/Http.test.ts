import {Http} from "@infrastructure/http/Http.ts";

describe("Http", () => {
    it("should be defined", () => {
        const http = new Http();

        expect(http).toBeDefined();
    });
});