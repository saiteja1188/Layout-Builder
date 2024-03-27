// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar">
              <h1 className="heading">Left Navbar Menu</h1>
              <ul className="list-menu">
                <li className="item">item 1</li>
                <li className="item">item 2</li>
                <li className="item">item 3</li>
                <li className="item">item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sitamet, Consectetur adipiscing elit, sed do
                eicud mood tempor incididnt at labusln ealt msgglsl alksfdj
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="left-navbar">
              <h1 className="heading">Right Navbar</h1>
              <div className="list-menu">
                <p className="box">Ad 1</p>
                <p className="box">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
