console.log('--Q1--')
const avgTwoNums = (num1, num2) => {
    return (num1 + num2) / 2;
  }
  console.log(avgTwoNums(4,6));

  console.log('--Q2--')
  const avgThreeNums = (num1, num2, num3) => {
      return (num1 + num2 + num3)/3
  }
  console.log(avgThreeNums(1,3,5))

  console.log('--Q3--')
  const avgArr = (arr) => arr.reduce(total, el) => (total + el) / arr.length
  console.log(avgArr([1,2,3,4,5,10,10]))

  console.log('--Q4--')
  const remEven = (arr) => arr.filter((el) => {
    if (el % 2 !== 0) {
      return el;
    };
  });
  console.log(remEven([1,2,3,4,5,6]));

  console.log('--Q5--')
  const posNum = (arr) => arr.every((el) => {
    if (el > 0) {
      return true;
    };
  });
  console.log(posNum([-4,3,-2,4]));

  console.log('--Q6--')
  const convertStrToLower = (arr) => arr.filter((el) => {
    if (typeof el === 'string') {
      return el;
    }
  }).map(el => {
    return el.toLowerCase();
  });
  console.log(convertStrToLower(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]));

  console.log('--Q7--')

  console.log('--Q8--')

  console.log('--Q1--')
  console.log('--Q1--')