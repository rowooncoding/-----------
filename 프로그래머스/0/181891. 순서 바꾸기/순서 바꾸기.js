function solution(num_list, n) {
    const answer = [];

    for (let i = n ; i < num_list.length ; i ++) {
        answer.push(num_list[i]);
    }
    
    for (let i = 0 ; i < num_list.length ; i ++) {
        answer.push(num_list[i]);
        
        if (i === n - 1) {
            break;
        }
    }
    
    return answer;
}