import {documentDir} from "@tauri-apps/api/path";

function App() {
  let dir;

  documentDir().then((path) => {
    dir = path;
  });

  return (
    <div class="App">
      <header class="App-header">
        <p>{dir}</p>
      </header>
    </div>
  );
}

export default App;
