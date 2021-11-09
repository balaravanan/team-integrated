import './App.css';
import FileUploader from './FileUploader';
import Upload from './Upload';
import { VideoInput } from './VideoInput';

function App() {
  return (
    <div className="App">
      <h1>Image Uploading</h1>
     <Upload/>
     <br/><br/><br/>
     <h1>Video Uploading</h1>
    <VideoInput/>
     <br/><br/><br/>
     <h1>Audio Uploading</h1>
    <FileUploader/>
    </div>
  );
}

export default App;
