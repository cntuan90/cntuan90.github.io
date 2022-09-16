import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App-container'>
        <div className='App-group'>
          <div className='App-group-1'>
            <div className='App-item-1'></div>
            <div className='App-item-2'></div>
            <img src="/avatar.jpeg" alt='logo' className='App-img' style={{ objectFit: 'cover' }} />
          </div>
          <div className='App-group-2'>
            <h1 className='App-group-2-h1'>Cao Ngoc Tuan</h1>
            <span className='App-group-2-span'>_</span>
            <div className='category'>
              <div className='group-category'>
                <img src="/favicon.ico" alt="react" />
                <p>Frontend Developer</p>
              </div>
              <a href='https://gist.github.com/cntuan90/fe676663500e76dab12f76ed12ee7562' className="App-view-all">View All</a>
            </div>

            <div>
              <a href='https://www.linkedin.com/in/tuan-ngoc-68b586a4/' rel='Linkedin' className="media">Linkedin</a>
              <a href='https://github.com/cntuan90' rel='Github' className="media">Github</a>
              <a href='https://gitlab.com/cntuan90' rel='Gitlab' className="media">Gitlab</a>
              <a href='https://www.facebook.com/cntuan90/' rel='facebook' className="media">Facebook</a>
              <a href='https://www.instagram.com/ngoc_tuan633/' rel='instagram' className="media">Instagram</a>
              <a href='https://cntuan90.github.io/my-cv/' rel='CV' className="media">CV</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
