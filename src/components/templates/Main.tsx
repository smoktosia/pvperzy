import Router from '../molecules/Router'
import Navigation from '../organisms/Navigation'
import './Main.scss'

const MainTemplate = () => {
    return (
        <div className="app">
            <Navigation />
            <div className="content">
                <Router />
            </div>
        </div>
    )
}

export default MainTemplate
