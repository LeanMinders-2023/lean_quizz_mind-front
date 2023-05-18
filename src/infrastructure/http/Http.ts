export class Http {
    private constructor(private url: string) {}

    public static createInstance(url: string) {
        if(url !== "") {
            return new Http(url)
        }

        throw new Error("The url can not be empty")
    }
}