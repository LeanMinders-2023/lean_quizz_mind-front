export class Http {
    private constructor(private url: string) {}

    public static createInstance(url: string) {
        if (url === "") {
            throw new Error("The url can not be empty")
        }

        return new Http(url)
    }

    public get<T>(endPoint?: string): Promise<T> {

    }
}