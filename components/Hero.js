import Link from 'next/link'

export default ({ pathname }) => (
  <div className="hero f4 fw8">
    <span className="b f2 mr3">
      erasmoose
    </span>
    <Link prefetch href='/'>
      <a className={pathname === '/' && 'is-active'}>Leaderboard</a>
    </Link>

    <Link prefetch href='/about'>
      <a className={pathname === '/about' && 'is-active'}>About</a>
    </Link>
    <div className="cover bg-left bg-center-l">
      <div className="tc-l ph3 pv4">
        <h1 className="f2 f1-l fw2 black-90 mb0 lh-title">Erasmus destinations. <span className="fw6">Ranked.</span></h1>
        <h2 className="fw1 f3 black-80 mt3 mb4"> Coming soon.</h2>
      </div>
    </div>

    <style jsx>{`
      .hero {
        padding: 25px 50px;
        background-color: #F3F3F3;
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
    `}</style>
  </div>
)
