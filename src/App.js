import './App.css';
import Btn from './components/Btn';
import ResultBox from './components/ResultBox';

// 1. 박스 2개 - 타이틀, 사진, 결과 텍스트
// 2. 가위 바위 보 버튼
// 3. 버튼을 누르면 그 값을 왼쪽 박스에 표시
// 4. 컴퓨터는 랜덤 선택
// 5. 3, 4의 결과에 따라 승패 판단
// 6. 결과에 따라 테두리 색 - 이기면 초록, 지면 빨강, 비기면 검정

function App() {
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="buttons mt-16 flex gap-6 justify-center">
        <Btn name="scissors"></Btn>
        <Btn name="rock"></Btn>
        <Btn name="paper"></Btn>
      </div>
      <div className="result-text text-center my-8 text-4xl sm:text-6xl">You win!</div>
      <div className="result-box max-w-6xl grid grid-cols-2 gap-6">
        <ResultBox title="You" name="rock"></ResultBox>
        <ResultBox title="Computer" name="scissors"></ResultBox>
      </div>
    </div>
  );
}

export default App;
