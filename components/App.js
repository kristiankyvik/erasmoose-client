export default ({ children }) => (
  <main>
    {children}
    <style jsx global>{`
      * {
        // font-family: 'Source Sans Pro', sans-serif;
        font-family: "futura-pt",sans-serif;
      }
      body {
        margin: 0;
        background-color: #F3F6FA;
        -webkit-font-smoothing: antialiased;
        -webkit-font-smoothing: subpixel-antialiased;
        font-smoothing: antialiased;
        text-rendering: optimizelegibility;
      }
      a {
        color: black;
        text-decoration: none;
      }
      p {
        font-size: 19px;
        line-height: 24px;
      }
      article {
        margin: 0 auto;
        max-width: 650px;
      }
      button {
        align-items: center;
        background-color: #22BAD9;
        border: 0;
        color: white;
        display: flex;
        padding: 5px 7px;
      }
      .ur-btn {
         -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: inline-block;
        cursor: default;
        background-color: #ED6863;
        width: auto;
        height: 45px;
        line-height: 38px;
        padding: 5px 20px 0 20px;
        font-size: 25px;
        border-radius: 4px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        text-align: center;
        font-weight: bold;
        font-family: "Source Sans Pro",sans-serif;
        // max-width: 610px;
        overflow: hidden;
        -moz-transition: background-color ease-out 100ms 0ms;
        -webkit-transition: background-color ease-out 100ms 0ms;
        -o-transition: background-color ease-out 100ms 0ms;
        transition: background-color ease-out 100ms 0ms;
        color: #8d1510;
        -webkit-box-shadow: 0 3px 12px 0 rgba(0,0,0,0.1);
        -moz-box-shadow: 0 3px 12px 0 rgba(0,0,0,0.1);
        box-shadow: 0 3px 12px 0 rgba(0,0,0,0.1);
      }
      .ur-btn:hover {
        -webkit-transition: background-color ease-out 100ms 0ms;
        -o-transition: background-color ease-out 100ms 0ms;
        transition: background-color ease-out 100ms 0ms;
        background-color: #f29491;
        cursor: pointer;
      }
      .modalOpen {
        overflow: hidden;
      }
      .max {
        max-width: 925px;
      }

      .btn-new {
        display: inline-block;
        cursor: pointer;
        padding: .4375em 1.5em .5em;
        color: #fff;
        font-size: 1.4em;
        font-weight: 800;
        line-height: 1;
        vertical-align: middle;
        text-align: center;
        white-space: nowrap;
        border: 3px solid transparent;
        border-radius: 2.5em;
      }

      // GLOBAL CARD STYLES
      .no-touchevents .ur-card:hover::before {
        background-color: rgba(0,0,0,0.6);
      }
      .no-touchevents .ur-card:hover {
        justify-content: center;          
      }
      .no-touchevents .ur-card:hover .card-front {
        visibility: hidden;
      }
      .no-touchevents .ur-card:hover .card-back {
        display: flex;
      }

      @keyframes placeHolderShimmer{
        0%{
          background-position: -468px 0
        }
        100%{
          background-position: 468px 0
        }
      }

      .m0a {
        margin: 0 auto;
      }

      .text-shadow {
        text-shadow: 1px 1px 0 rgba(0,0,0,0.35);
      }

      // .animated-background {
      //   animation-duration: 3s;
      //   animatiounin-fill-mode: forwards;
      //   animation-iteration-count: infinite;
      //   animation-name: placeHolderShimmer;
      //   animation-timing-function: linear;
      //   background: #f6f7f8;
      //   background: linear-gradient(to right, #eeeeee 15%, #dddddd 30%, #eeeeee 15%);
      //   background-size: 800px 104px;
      //   height: 96px;
      //   position: relative;
      // }

    `}</style>
  </main>
)
