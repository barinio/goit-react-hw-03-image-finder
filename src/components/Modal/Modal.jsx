import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onToggle();
    }
  };
  onClick = e => {
    if (e.target !== e.currentTarget) {
      this.props.onToggle();
    }
  };
  render() {
    const { img, alt } = this.props;
    return (
      <div className="overlay" onClick={this.onClick}>
        <div className="modal">
          <img src={img} alt={alt} />
        </div>
      </div>
    );
  }
}
