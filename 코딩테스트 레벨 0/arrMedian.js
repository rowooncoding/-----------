// 중앙값 구하기
function solution(array) {
  // 중앙값 찾기
  const midNum = Math.floor(array.length / 2);

  // 오름차순 정렬
  const array = array.sort((a, b) => a - b);

  // 오름 차순 중 중간 값 반환하기
  return array[midNum];
}

/*
1. 중앙값을 찾는다
  1-1. 배열 길이를 2로 나눠서 중앙 index를 뽑는다
    1-1-1. 만약 index가 홀수라면 소수점이 반환된다
  1-2. Math.floor을 사용하여 소수점을 자른다
2. sort를 사용하여 오름차순 정렬을 한다
  2-1. a와 b라는 것은 배열의 순차적인 값 두개를 의미한다
  2-2. 두 수를 빼서 음수라면 그대로 놔둔다 (작은 수가 a에 위치한 올바른 위치)
  2-3. 양수라면 두 수의 위치를 바꾼다 (큰수가 a에 위치하는 것은 오름차순이 아님)
3. 배열로 리턴한다
*/