import Head from 'next/head'

// TODO: Use local packages for tachyons
// <link rel="stylesheet" href="./node_modules/tachyons/css/tachyons.min.css" />
// <link rel="stylesheet" href="./node_modules/tachyons-flexbox/css/tachyons-flexbox.min.css" />
export default () => (
  <header>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, user-scalable=no"/>
      <title>  Erasmoose | Universities ranking. </title>
      <meta name="description" content="Erasmoose is a ranking of erasmus universities. We help you choose between european universities." />
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css"/>
      <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico'/>
      <link rel="stylesheet" href="https://unpkg.com/tachyons-flexbox@2.0.5/css/tachyons-flexbox.min.css" />
      <script src="https://use.typekit.net/nym1duy.js"></script>
      <script dangerouslySetInnerHTML={{ __html: 'try{Typekit.load({ async: false });}catch(e){}' }} />
      <script src="https://use.fontawesome.com/83c3b2a28b.js"></script>
      <script src="static/modernizr.js"></script>
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet"/>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-66664421-3"></script>
      {/* GA snippet */}
      <script dangerouslySetInnerHTML={{__html: `(function(){
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-66664421-3');
      })();`}} />
      {/* Typeform snippet */}
      <script async src="https://embed.typeform.com/embed.js"></script>
    </Head>
  </header>
)



