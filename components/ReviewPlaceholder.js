export default class ReviewPlaceholder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="review-placeholder w-50 w-30-ns">
        <div className="h-200 animated-background">
          <div className="background-masker white-line first"></div>
          <div className="background-masker white-line second"></div>
          <div className="background-masker white-line third"></div>
          <div className="background-masker white-line fourth"></div>
          <div className="background-masker white-line fifth"></div>
          <div className="background-masker white-line large"></div>
          <div className="background-masker white-line large"></div>
          <div className="background-masker white-line small-l"></div>
          <div className="background-masker white-line small-r"></div>
        </div>
        <style jsx>
          {`
              * {
                min-height: 0;
                min-width: 0;
              }
              .no-reviews-bg {
                // background-color: #8080808f;
              }
              .no-reviews-box {
                border: 1px solid;
                border-color: #e5e6e9 #dfe0e4 #d0d1d5;
              }
              .review {
                border: 1px solid #ededee;
                color: #4f5057;
                max-width: 50%;
                min-width: 240px;
                height: 250px;
                background-color: white;
              }
              .review-text {
                height: 182px;
                overflow-y: scroll;
              }
              .h-200 {
                height: 200px;
              }
              .review-placeholder {
                background: #fff;
                border: 1px solid;
                border-color: #e5e6e9 #dfe0e4 #d0d1d5;
                border-radius: 3px;
                padding: 25px;
                height: 250px;
                box-sizing: border-box;
              }
              .animated-background {
              }
              ::-webkit-scrollbar {
                  width: 0px;  /* remove scrollbar space */
                  background: #FFF;  /* optional: just make scrollbar invisible */
              }
              /* optional: show position indicator in red */
              ::-webkit-scrollbar-thumb {
                  background: #FFF;
              }
              .bluish {
                background-color: #25d6c9;
              }

              .white-line {
                position: absolute;
                right: 0px;
                left: 0px;
                height: 10px;
              }

              .first {
                top: 10px;
              }
              .second {
                top: 30px;
              }
              .third {
                top: 50px;
              }
              .fourth {
                top: 70px;
              }
              .fifth {
                top: 90px;
              }
              .large {
                height: 80px;
                top: 110px
              }
              .small-l {
                top: 190px;
                width: 30px;
                height: 20px;
              }
              .small-r {
                top: 190px;
                right: 0px;
                width: 30px;
                height: 20px;
                left: auto;
              }
            `}
        </style>
      </div> 
    );
  }
}