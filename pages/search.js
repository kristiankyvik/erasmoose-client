import App from '../components/App'
import Header from '../components/Header'
import Submit from '../components/Submit'
import Hero from '../components/Hero'
import UniList from '../components/UniList'
import withData from '../lib/withData'
import Footer from '../components/Footer'
import FeedbackWidget from '../components/FeedbackWidget'

export default withData((props) => (
  <App>
    <Header/>
  	<Hero pathname={props.url.pathname} />
    <UniList pathname={props.url.pathname} query={props.url.query} liveFilter={true}/>
    <FeedbackWidget />
    <Footer />
  </App>
))
