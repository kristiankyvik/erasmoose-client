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
        // background-color: #F3F6FA;
        background-color: #f8f8f8;
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
      .slick-next:before, .slick-prev:before {
        font-size: 20px;
        line-height: 1;
        color: #000;
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

      .no-pad ul{
        padding: 0!important;
      }
      .active {
        border-color: #F44A4A;
        color: #F44A4A;
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


      @-webkit-keyframes placeHolderShimmer {
        0% {
          background-position: -468px 0
        }
        100% {
          background-position: 468px 0
        }
      }
      
      @keyframes placeHolderShimmer {
        0% {
          background-position: -468px 0
        }
        100% {
          background-position: 468px 0
        }
      }
      
      .animated-background {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-name: placeHolderShimmer;
        animation-name: placeHolderShimmer;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        background: #f6f7f8;
        background: #eeeeee;
        background: -webkit-gradient(linear, left top, right top, color-stop(8%, #eeeeee), color-stop(18%, #dddddd), color-stop(33%, #eeeeee));
        background: -webkit-linear-gradient(left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        -webkit-background-size: 800px 104px;
        background-size: 800px 104px;
        position: relative;
      }
      
      .background-masker {
        background: #fff;
        position: absolute;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }

    `}</style>
  </main>
)
