let some:unknown;
some = 'Text';
let str: string;
str = some;

export {};



if (typeof some === 'string') {
    console.log(some);
}
