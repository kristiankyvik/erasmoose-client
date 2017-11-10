import App from '../components/App'
import Header from '../components/Header'
import Submit from '../components/Submit'
import Hero from '../components/Hero'
import UniList from '../components/UniList'
import withData from '../lib/withData'
import Footer from '../components/Footer'

export default (props) => (
  <App>
  	{/* Typeform snipped */}
    <Header/>
  	<Hero pathname={props.url.pathname} />
    <UniList pathname={props.url.pathname} liveFilter={false}/>
    <Footer />
  </App>
)
