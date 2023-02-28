import EditorPage from "./EditorPage";
import './index.css'

function App() {
  return (
    <>
      <h1>Video Player With Sprite Thumbnail</h1>
      <EditorPage streamingUrl="http://localhost:5000/file/01.mp4" />
    </>
  );
}

export default App;
