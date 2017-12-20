import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updatePlace, currentPlace, toggleModal } from '../actions';

@connect(undefined, { updatePlace, currentPlace, toggleModal })
export default class Place extends Component {
    constructor(props) {
        super(props);

        this.state = ({
          coordX: props.coordX,
          coordY: props.coordY
        });

        this.currentPlace = this.currentPlace.bind(this);
    }

    currentPlace() {
        this.props.currentPlace(this.props.id);
        this.props.toggleModal();
    }

    handleCoordsChange() {
      moveProcess();
    }

    currentCoords(e) {
        this.props.currentPlace(this.props.id);
        var style = getComputedStyle(e.target);
        console.log("Х2", parseInt(style.left), parseInt(style.top));

        e.preventDefault(e);
          this.setState({
            coordX: parseInt(style.top),
            coordY: parseInt(style.left)
          });

          // const place = {
          //     coordX: this.state.coordX,
          //     coordY: this.state.coordY
          // };
          //
          // this.props.updatePlace(this.props.id, place);
    }

    componentDidUpdate(prevProps, prevState) {
      const place = {
          coordX: this.state.coordX,
          coordY: this.state.coordY
      };

      this.props.updatePlace(this.props.id, place);
      console.log("Х4", place);
    }

    render() {
          console.log("Х3", this.state.coordY, this.state.coordX);

          const { title, description, videolink, phone, email } = this.props;

          const circleStyle = {
            left: `${this.state.coordY}px`,
            top: `${this.state.coordX}px`
          }

          return (
            <div className="circleInMap draggable" style={circleStyle} onClick={this.currentPlace.bind(this)} onMouseDown={this.handleCoordsChange.bind(this)} onMouseUp={this.currentCoords.bind(this)}>
              <div>{title}</div>
            </div>
          );
    }
}


function moveProcess() {
document.onmousedown = function(e) {
     var dragElement = e.target;
     if (!dragElement.classList.contains('draggable')) return;

     var coords, shiftX, shiftY, newX, newY;

     startDrag(e.clientX, e.clientY);

     document.onmousemove = function(e) {
       moveAt(e.clientX, e.clientY);
     };

     dragElement.onmouseup = function() {
       finishDrag();
     };

     function startDrag(clientX, clientY) {
       shiftX = clientX - dragElement.getBoundingClientRect().left;
       shiftY = clientY - dragElement.getBoundingClientRect().top;
       dragElement.style.position = 'fixed';
       document.body.appendChild(dragElement);
       moveAt(clientX, clientY);
     };

     function finishDrag() {
       dragElement.style.top = parseInt(dragElement.style.top) + pageYOffset + 'px';
       dragElement.style.position = 'absolute';
       document.onmousemove = null;
       dragElement.onmouseup = null;
     }

     function moveAt(clientX, clientY) {
       newX = clientX - shiftX;
       newY = clientY - shiftY;
       var newBottom = newY + dragElement.offsetHeight;

       if (newBottom > document.documentElement.clientHeight) {
         var docBottom = document.documentElement.getBoundingClientRect().bottom;
         var scrollY = Math.min(docBottom - newBottom, 10);

         if (scrollY < 0) scrollY = 0;
         window.scrollBy(0, scrollY);
         newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
       }

       if (newY < 0) {
         var scrollY = Math.min(-newY, 10);
         if (scrollY < 0) scrollY = 0;
         window.scrollBy(0, -scrollY);
         newY = Math.max(newY, 0);
       }

       if (newX < 0) newX = 0;
       if (newX > document.documentElement.clientWidth - dragElement.offsetHeight) {
         newX = document.documentElement.clientWidth - dragElement.offsetHeight;
       }

       dragElement.style.left = newX + 'px';
       dragElement.style.top = newY + 'px';

       console.log(newX, newY);
     }

     console.log("Херон-1", newX, newY);
     return false;
   }
}
//moveProcess();
