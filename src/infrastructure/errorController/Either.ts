type Left<L> = { kind: "left"; leftValue: L };
type Right<R> = { kind: "right"; rightValue: R };

type EitherValue<L, R> = Left<L> | Right<R>;

export class Either<L, R> {
    private constructor(private readonly value: EitherValue<L, R>) { }

    isLeft(): boolean {
        return this.value.kind === "left";
    }
    isRight(): boolean {
        return this.value.kind === "right";
    }

    static left<L, R>(value: L) {
        return new Either<L, R>({ kind: "left", leftValue: value });
    }

    static right<L, R>(value: R) {
        return new Either<L, R>({ kind: "right", rightValue: value });
    }
}