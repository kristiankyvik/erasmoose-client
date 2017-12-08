import Link from 'next/link'
import TypeformButton from '../components/TypeformButton'

export default ({ pathname }) => (
  <div className="hero f4 fw8 grad-pink">
    <div className="bar flex items-center relative">
      <Link prefetch href='/'>
        <a className={pathname === '/' && 'is-active'}>
          <span className="b f4 flex">
            erasmoose
          </span>
        </a>
      </Link>
      <Link prefetch href='/search' > 
        <a className={pathname === '/search' && 'is-active' }>Search</a>
      </Link>
    </div>
    <div className={`cover bg-left bg-center-l ${pathname === '/' ? "" : "dn"}`}>
      <div className="ph1 pv4 w-80-l m0a">
        <h1 className="fw2 hero-text mb0 lh-title">
          Erasmus universities.
          <div className="fw6">
            Ranked.
          </div></h1>
        <h2 className="fw5 lblue f3 black-80 mt3 mb4"> Ranking of european universities.</h2>
          <Link prefetch href='/search' > 
            <a className="ur-btn">Search</a>
          </Link>
      </div>
    </div>

    <style jsx>{`
      .hero-text {
        font-size: 3em;
      }
      .m0a {
        margin: 0 auto;
      }
      .hero {
        padding: 25px 50px;
        color: #003945;
        background-color: #fff;
      }
      header {
        margin-bottom: 25px;
      }
      .lblue {
        color: #1EC4BC;
      }
      a {
        margin-right: 15px;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.41);
      }
      a:hover {
        color: black;
      }
      .is-active {
        color: black;
      }
    `}</style>
  </div>
)
