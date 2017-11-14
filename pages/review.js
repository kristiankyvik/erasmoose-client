import App from '../components/App'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import FeedbackWidget from '../components/FeedbackWidget'

export default (props) => (
  <App>
    <Header/>
    <div className="fixed right-0 left-0">
      <Hero pathname={props.url.pathname} />
    </div>
    <iframe id="typeform-full" width="100%" height="100%" frameBorder="0" src={`https://kyvikbcn.typeform.com/to/FsuJQm?${props.url.query ? `id=${props.url.query.id}&cityid=${props.url.query.cityid}` : ""}`}></iframe> 
    <style jsx>{`
      html{ 
        margin: 0;
        height: 100%;
        overflow: hidden;
      } 
      iframe{
        position: absolute;
        left:0;
        right:0;
        bottom:70px;
        top:70px;
        border:0;
      }
    `}</style>
    <FeedbackWidget />
  </App>
)