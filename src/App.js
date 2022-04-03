import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "윈터",
    content: "에스파는 나야 둘이 될 수 없어",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "카리나",
    content: "모든 걸 삼켜버릴 블랙맘바",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "지젤",
    content: "중심을 잃고 목소리도 잃고",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
