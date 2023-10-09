/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise<T, U> () {
  return new Promise<[T, U]>((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise<string, number>()
  .then((data) => {
    const [text, number] = data;
    console.log(text); 
    console.log(number); 
  });