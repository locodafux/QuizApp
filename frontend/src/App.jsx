import "./style.css"

export default function App() {
return (
  <>
    <div className="layout">
      <div className="box">
        <div className="header"><h1>Quiz </h1> <span>1/5</span></div>

        <div className="content">
          <div className="question">
            What is your name?
          </div>
          <div className="choices">
            <button>Choice A</button>
            <button>Choice B</button>
            <button>Choice C</button>
            <button>Choice D</button>
          </div>
        </div>
      </div>
    </div>  
  </>
);
}
