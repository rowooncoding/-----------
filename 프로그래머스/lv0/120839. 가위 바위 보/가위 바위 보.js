function solution(rsp) {
  let obj = { 2: 0, 0: 5, 5: 2 };
  return [...rsp].map((el) => obj[el]).join("");
}
