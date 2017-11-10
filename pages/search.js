import App from '../components/App'
import Header from '../components/Header'
import Submit from '../components/Submit'
import Hero from '../components/Hero'
import UniList from '../components/UniList'
import withData from '../lib/withData'
import Footer from '../components/Footer'

export default withData((props) => (
  <App>
    <Header/>
  	<Hero pathname={props.url.pathname} />
    <UniList pathname={props.url.pathname} liveFilter={true} query={props.url.query}/>
    <Footer />
  </App>
))
