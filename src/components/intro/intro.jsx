import "./intro.css"

const Intro = () => {
    return(
        <div className="i">
            <div className="i-left"></div>
                <div className="i-left-wrapper">
                    <h2 className="i-introduction">Hello, my name is </h2>
                    <h1 className="i-name">Kassandra Diaz</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper"></div>
                        <div className="i-title-item">UTSA Alumni</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Resume</div>
        
                    </div>
                </div>

            <div className="i-right">right</div>
        </div>
    )
}

export default Intro