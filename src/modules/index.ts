import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todo';

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;

/**
 * RootState라는 타입을 만들어서 보내주어야 한다. 이 타입은 추후에
 * 컨테이너 컴포넌트를 만들게 될 때 스토어에서 관리하고 있는 상태를 
 * 조회하기 위해서 useSelector를 사용할 때 필요하다. 
 */
export type RootState = ReturnType<typeof rootReducer>

