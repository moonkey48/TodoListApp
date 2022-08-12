//1. 액션 타입 선언(Typescript의 타입이 아니라 리덕스 액션에 드어갈 타입)
const INCREASE = 'couter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

//2.액션함수 선언
export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});
export const increaseBy = (diff:number)=>({
    type:INCREASE_BY,
    payload: diff
});

//3.액션 객체들에 대한 type 준비하기(Typescript의 타입 맞음)
//나중에 리듀서를 작성할 때 action파라미터의 타입을 서정하기 위해서
//우리가 만든 모든 액션들의 Typescript 타입을 준비해주어야 한다. 
//ReturnType은 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입이다.

//as const를 사용해주지 않았다면 type의 타입이 무조건 string으로 처리되게 된다.
type CouterAction = 
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>


//4.상태의 타입과 상태의 초기값 선언하기
//type이나 interface를 사용하나 상관없음
type CounterState = {
    count:number;
}
const initialState:CounterState = {
    count:0
}


//5.Reducer 작성하기
/**
 * 함수의 반환 타입에 상태의 타입을 꼭 넣기 
 */
function counter(state:CounterState = initialState, action:CouterAction){
    switch(action.type){
        case INCREASE:
            return {count:state.count+1};
        case DECREASE:
            return {count:state.count-1};
        case INCREASE_BY:
            return {count:state.count+action.payload};
        default:
            return state;
    }
}
export default counter;