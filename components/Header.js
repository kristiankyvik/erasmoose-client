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
      <link rel="stylesheet" href="https://unpkg.com/tachyons-flexbox@2.0.5/css/tachyons-flexbox.min.css" />
      <script src="https://use.fontawesome.com/83c3b2a28b.js"></script>
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet"/>
      <script async src="https://embed.typeform.com/embed.js"></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-66664421-3"></script>
      <script dangerouslySetInnerHTML={{__html: `(function(){
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-66664421-3');
      })();`}} />
      <script dangerouslySetInnerHTML={{__html: `(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); console.log("OLA K ASE"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q); } })()` }}></script>
    </Head>
    <Link prefetch href='/'>
      <a className={pathname === '/' && 'is-active'}>Home</a>
    </Link>

    <Link prefetch href='/about'>
      <a className={pathname === '/about' && 'is-active'}>About</a>
    </Link>

    <style jsx global>{`
       body { 
         background-color: #fbfbfb;
       }
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
