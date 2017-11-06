import Link from 'next/link'

export default ({ pathname }) => (
  <div className="hero f4 fw8">
    <div className="bar flex items-center">
      <Link prefetch href='/'>
        <a className={pathname === '/' && 'is-active'}>
          <span className="b f4 mr3 flex">
            erasmoose
          </span>
        </a>
      </Link>
      <Link prefetch href='/search'>
        <a className={pathname === '/search' && 'is-active'}>Search</a>
      </Link>
      <Link prefetch href='/about'>
        <a className={pathname === '/about' && 'is-active'}>About</a>
      </Link>
    </div>
    <div className={`cover bg-left bg-center-l ${pathname === '/' ? "" : "dn"}`}>
      <div className="ph3 pv4 w-60-l m0a">
        <h1 className="f2 f1-l fw2 black-90 mb0 lh-title">
          Erasmus universities.
          <div className="fw6">
            Ranked.
          </div></h1>
        <h2 className="fw1 f3 black-80 mt3 mb4"> Ranking european universities.</h2>
      </div>
    </div>

    <style jsx>{`
      .m0a {
        margin: 0 auto;
      }
      .hero {
        padding: 25px 50px;
      }
      header {
        margin-bottom: 25px;
      }
      a {
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        color: rgba(34, 186, 217, 0.4);
      }
      .grad-blue {
        background-image: linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%);
      }
      .grad-pink {
        background-image: linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%);
      }
    `}</style>
  </div>
)
