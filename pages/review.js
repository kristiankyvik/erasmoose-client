import App from '../components/App'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default (props) => (
  <App>
   <iframe id="typeform-full" width="100%" height="100%" frameborder="0" src={`https://kyvikbcn.typeform.com/to/FsuJQm?id=${props.url.query ? props.url.query.id : ""}`}></iframe> 
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
      bottom:0;
      top:0;
      border:0;
    }
   `}</style>
  </App>
)