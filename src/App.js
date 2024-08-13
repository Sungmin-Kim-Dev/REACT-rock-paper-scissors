import './App.css';
import {useState} from 'react';
import Btn from './components/Btn';
import ResultBox from './components/ResultBox';

// 1. 박스 2개 - 타이틀, 사진, 결과 텍스트
// 2. 가위 바위 보 버튼
// 3. 버튼을 누르면 그 값을 왼쪽 박스에 표시
// 4. 컴퓨터는 랜덤 선택
// 5. 3, 4의 결과에 따라 승패 판단
// 6. 결과에 따라 테두리 색 - 이기면 빨강, 지면 파랑, 비기면 검정

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const play = (e) => {
    setUserSelect(e.target.alt);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="buttons mt-8 flex gap-6 justify-center">
        <Btn name="scissors" onPress={play}></Btn>
        <Btn name="rock" onPress={play}></Btn>
        <Btn name="paper" onPress={play}></Btn>
      </div>
      <div className="result-text text-center my-6 text-4xl sm:text-6xl">You win!</div>
      <div className="result-box max-w-[712px] grid grid-cols-2 gap-6">
        <ResultBox
          title="You"
          name={userSelect ? userSelect : 'unknown'}
          result="Win"
          color={userSelect ? 'border-red-500' : 'border-stone-600'}></ResultBox>
        <ResultBox title="Computer" name="scissors" result="Lose" color="border-blue-500"></ResultBox>
      </div>
    </div>
  );
}

export default App;
