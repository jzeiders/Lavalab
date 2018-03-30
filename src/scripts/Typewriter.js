import React from 'react';

class Typewriter extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        let { text } = this.props;

        if (Array.isArray(text)) {
            this._originalString = text.reverse().pop();
        } else {
            this._originalString = text;
        }

        this._originalString = this._originalString.split('').reverse();
        this.setState({ text: '' });
    }

    componentDidMount() {
        this.type(this._originalString.pop());
    }

    type(char) {
        let {
            speed, randomSpeed, text
        } = this.props;

        speed = randomSpeed ? this.randomizeSpeed(speed) : speed;

        setTimeout(() => {
            this.setState({
                text: this.state.text + char
            });

            if (this._originalString.length) {
                this.type(this._originalString.pop());
            } else {
                if (Array.isArray(text) && text.length) {
                    text.unshift(this.state.text);
                    this._originalString = text.pop().split('').reverse();
                    setTimeout(() => {
                        this.setState({text: ''});
                        this.type(this._originalString.pop());
                    }, 3000);
                }
            }
        }, speed);
    }

    randomizeSpeed(baseline = 50) {
        return Math.floor(Math.random() * (baseline - 220) + 220);
    }

    render() {
        return <span className={this.props.className}> {this.state.text} </span>
    }
}

Typewriter.defaultProps = {
    speed: 1,
    randomSpeed: false,
    tag: 'p'
};

export default Typewriter;
