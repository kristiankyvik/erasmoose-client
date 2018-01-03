import Router from 'next/router';
import { gql, graphql } from 'react-apollo'

class FeedbackWidget extends React.Component {
  constructor(props) {
    super(props);
    this.emailInput = null;
    this.feedbackInput = null;
    this.state = {
      showFeedbackModal: false
    };
  }

  async sendFeedback () {
    const response = await this.props.send(this.emailInput.value, this.feedbackInput.value);
    if (response.data.sendFeedback.ok) {
      this.setState({showFeedbackModal: !this.state.showFeedbackModal})
    }
  }

  render() {
    return (
      <div className="relative">
        <div className={`feedbackWidgetModal ${this.state.showFeedbackModal ? "" : "dn"}`}>
          <div className="b f4">
            Have some feedback?
          </div>
          <div className="pt1">
            We would love to hear your thoughts!
          </div>
          <textarea
            ref={(el) => { this.feedbackInput = el; }}
            className="mt3 f5"
            autoFocus="true"
            id="feedback-message"
            name="message"
            placeholder="Feedback..."
            rows="3"
          ></textarea>
          <input 
            ref={(el) => { this.emailInput = el; }}
            className="f5"
            name="email" 
            placeholder="Your email" 
            type="email"
          />
          <div className="btn-new mt3" onClick={() => this.sendFeedback()}>
            Submit
          </div>
        </div>

        <div className="feedBackWidgetButton" onClick={() => this.setState({showFeedbackModal: !this.state.showFeedbackModal})}>
          { this.state.showFeedbackModal ? <div> <i className="fa fa-times white" aria-hidden="true"></i> </div> : <div> <i className="fa fa-bullhorn mr1" aria-hidden="true"></i> Feedback </div>}
        </div>
        <style jsx>{`

          .feedbackWidgetModal {
            bottom: 62px;
            max-width: 480px;
            right: 15px;
            bottom: 84px;
            height: auto;
            padding: 32px 34px;
            position: fixed;
            height: 320px;
            background-color: #fff;
            bottom: 74px;
            width: 90%;
            box-shadow: 0 5px 20px rgba(0,0,0,.15);
            border-radius: 10px;
            z-index: 2;
            text-align: center;
            overflow: hidden;
            color: #0a0a0a;
          }
          .feedBackWidgetButton {
            display: block;
            right: 18px;
            bottom: 17px;
            padding: 6px 9px;
            font-size: 16px;
            box-shadow: 0 5px 20px rgba(0,0,0,.1);
            position: fixed;
            background: #000;
            padding: 10px 14px;
            border-radius: 100px;
            color: #fff;
            font-weight: 500;
            cursor: pointer;
            z-index: 3;
          }
          input {
            border-radius: 5px;
            padding: 14px;
            box-sizing: border-box;
            width: 100%;
            -webkit-appearance: none;
            border: 1px solid #ccc;
          }
          #feedback-message {
            border-radius: 5px;
            padding: 14px;
            box-sizing: border-box;
            width: 100%;
            -webkit-appearance: none;
            border: 1px solid #ccc;
            height: auto;
            min-height: 50px;
            overflow: auto;
          }
          .btn-new {
            background-color: rgb(244, 74, 74);
          }
        `}</style>
      </div>
    )
  }
}
const sendFeedback = gql`
  mutation sendFeedback($email: String, $message: String) {
    sendFeedback(email: $email, message: $message) {
      ok   
    }
  }
`

export default graphql(sendFeedback, {
  props: ({ ownProps, mutate }) => ({
    send: (email, message) => mutate({
        variables: { email, message }
      }
    )
  })
})(FeedbackWidget)
