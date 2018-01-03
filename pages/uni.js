import App from '../components/App'
import Header from '../components/Header'
import Submit from '../components/Submit'
import Hero from '../components/Hero'
import UniList from '../components/UniList'
import withData from '../lib/withData'
import Footer from '../components/Footer'
import FeedbackWidget from '../components/FeedbackWidget'
import UniWithData from '../components/UniWithData'

export default withData((props) => (
  <App>
    <Header sdf={console.log("HIHDISHO", props)} />
		<UniWithData uni_id={props.url.query.uni_id} />
    <FeedbackWidget />
    <Footer />
  </App>
))
