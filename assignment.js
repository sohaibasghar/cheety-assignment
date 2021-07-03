  const spirallyTraverse = (row, column, matrix) => {
    const traversedArray = [];
    if (row < 1 || column > 100) {
      return;
    }
    while (matrix.length) {
      traversedArray.push(
        ...matrix.shift(),
        ...matrix.map((a) => a.pop()),
        ...(matrix.pop() || []).reverse(),
        ...matrix.map((a) => a.shift()).reverse()
      );
    }
    return traversedArray;
  };
//to sort activities by finish time activities 
    const sortByEndTime = (f, s, n) => {
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (f[j] > f[j + 1]) {
          let tempStart = s[j];
          let tempFinish = f[j];

          f[j] = f[j + 1];
          s[j] = s[j + 1];

          f[j + 1] = tempFinish;
          s[j + 1] = tempStart;
        }
      }
    }
    return {
      finish: f,
      start: s
    };
  };
  const activitySelection = (start, finish, n) => {
    let current, next;
    current = 0;
    const selectedActivity = [];
    for (next = 1; next < n; next++) {
      if (start[next] >= finish[current]) {
        current = next;
        selectedActivity.push(current);
      }
    }
    return selectedActivity;
  };
  
  function longestCommonSequence(str, reverseStr, m, n)
{
    let dpTable = [...Array(m)];
    for(let i = 0; i < m + 1; i++)
    {
        dpTable[i] = [...Array(n)];
        for(let j = 0; j < n + 1; j++)
        {
            dpTable[i][j] = 0;
        }
    }
     
    let i, j;
    for (i = 0; i <= m; i++)
    {
        for (j = 0; j <= n; j++)
        {
            if (i == 0 || j == 0)
                dpTable[i][j] = 0;
            else if (str[i - 1] == reverseStr[j - 1])
                dpTable[i][j] = dpTable[i - 1][j - 1] + 1;

            else
                dpTable[i][j] = Math.max(dpTable[i - 1][j], dpTable[i][j - 1]);
        }
    }
    return dpTable[m][n];
}

  const candyStore=(arr,n,k)=>{
  arr.sort((a,b)=>a-b)
  let minimumAmount = 0 , maximumAmount = 0,index=0;
  for(let i = 0 ;i<n ; i++){
  minimumAmount = minimumAmount+arr[i]
  n = n-k
  }
  for(let j = arr.length - 1; j >= index; j--){
        maximumAmount = maximumAmount + arr[j];
        index += k;
    }
    return{
    minimumAmount,
    maximumAmount
    }
}  

//Stub data 
let mat =  [ [1, 2, 3, 4, 5, 6],
            [7, 8, 9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18]
          ];

  //Question one
const row = mat.length
const col = mat[0].length 
const response = spirallyTraverse(row,col, mat); 
console.log("Spirally Traverse" ,response);  
      
let s = [1, 3, 0, 5, 8, 5];
let f = [2, 0, 4, 3, 1, 5];
let n = s.length;

//Question two
const { finish, start } = sortByEndTime(f, s, n);
const activities = activitySelection(start, finish, n);
console.log("activities",activities);

const candies = [1,4,5,6,7,3,4,5,3,2,1,4]
let free = 2
const length = candies.length

//Question 3
const countMin=(str, n)=>
{
    let revString = str.split('').reverse().join('');
    if(str.toLowerCase() === revString.toLowerCase()){
    return 0
    }else{
    return (n - longestCommonSequence(str, revString , n, n));
    }
         
    }
    let str = "Civic";
    console.log("Minimum insertion", countMin(str, str.length))

//Question 4
const {minimumAmount,maximumAmount} =  candyStore(candies,length,free)
console.log("Minimum Amount :" ,minimumAmount,"MaximumAmount :",maximumAmount)
