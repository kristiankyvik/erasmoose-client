import Link from 'next/link'
import Head from 'next/head'

// TODO: Use local packages for tachyons
// <link rel="stylesheet" href="./node_modules/tachyons/css/tachyons.min.css" />
// <link rel="stylesheet" href="./node_modules/tachyons-flexbox/css/tachyons-flexbox.min.css" />
export default ({ pathname }) => (

  <header>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css"/>
      <link rel="stylesheet" href="http://unpkg.com/tachyons-flexbox@2.0.5/css/tachyons-flexbox.min.css" />
      <script src="https://use.fontawesome.com/83c3b2a28b.js"></script>
    </Head>
    <Link prefetch href='/'>
      <a className={pathname === '/' && 'is-active'}>Home</a>
    </Link>

    <Link prefetch href='/about'>
      <a className={pathname === '/about' && 'is-active'}>About</a>
    </Link>

    <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
  </header>
)
