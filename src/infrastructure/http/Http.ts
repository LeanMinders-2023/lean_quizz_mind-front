export class Http {
    private constructor(private url: URL) {}

    public static createInstance(url: string) {
        if (url === "") {
            throw new Error("The url can not be empty")
        }

        return new Http(new URL(url))
    }

    public async get<T>(endPoint?: string): Promise<T> {
        // endpoint??
        const anyOne = endPoint ? `/${endPoint}` : "";
        const res = await fetch(`${this.url}${anyOne}`)
        return res.json()
    }

    public async post<T>(body: T, endPoint?: string ): Promise<T> {
        const anyOne = endPoint ? `/${endPoint}` : "";
        const res = await fetch(`${this.url}${anyOne}`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(body)
        })
        return res.json()
    }
}