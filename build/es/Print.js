import React from'react';import PropTypes from'prop-types';import PrintProvider from'./PrintProvider';import{debug}from'./common';var s={_exclusive:'easy-print-Print-_exclusive-3Eag',root:'easy-print-Print-root-2BcA',_main:'easy-print-Print-_main-LssU'};require('load-styles')('/*  imported from Print.css  */\n\n.easy-print-Print-_exclusive-3Eag {\n  display: none;\n}\n\n@media print {\n  .easy-print-Print-root-2BcA {\n    visibility: visible; /* visible element even nested in the hidden one */\n  }\n  .easy-print-Print-_main-LssU {\n    visibility: visible;\n  }\n  .easy-print-Print-_exclusive-3Eag {\n    display: block;\n  }\n}\n');var propTypes={name:PropTypes.string,children:PropTypes.node.isRequired,main:PropTypes.bool,single:PropTypes.bool,exclusive:PropTypes.bool,printOnly:PropTypes.bool};var contextTypes=PrintProvider.childContextTypes;var Print=function(_React$Component){babelHelpers.inherits(Print,_React$Component);function Print(props){babelHelpers.classCallCheck(this,Print);var _this=babelHelpers.possibleConstructorReturn(this,(Print.__proto__||Object.getPrototypeOf(Print)).call(this,props));_this.state={printOffsetLeft:0,printOffsetTop:0};return _this}babelHelpers.createClass(Print,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;if(this.props.name){debug('init printable',this.props.name);var isSingle=this.props.main||this.props.single;this.context.printProvider&&this.context.printProvider.regPrintable(this.props.name,React.createElement(Print,this.props),isSingle)}if(this.props.main||this.props.single){window.matchMedia('print').onchange=function(){var bodyRect=document.body.getBoundingClientRect();var elem=_this2.printElement;var elemRect=elem&&elem.getBoundingClientRect();var printOffsetLeft=elemRect&&elemRect.left-bodyRect.left;var printOffsetTop=elemRect&&elemRect.top-bodyRect.top;_this2.setState({printOffsetTop:printOffsetTop,printOffsetLeft:printOffsetLeft})}}}},{key:'componentWillUnmount',value:function componentWillUnmount(){if(this.props.name){debug('remove printable',this.props.name);this.context.printProvider&&this.context.printProvider.unregPrintable(this.props.name)}if(this.props.main||this.props.single){window.matchMedia('print').onchange=null}}},{key:'render',value:function render(){var _this3=this;var _props=this.props,children=_props.children,main=_props.main,single=_props.single,exclusive=_props.exclusive,printOnly=_props.printOnly;var _state=this.state,printOffsetLeft=_state.printOffsetLeft,printOffsetTop=_state.printOffsetTop;var main_=main||single?s.main:'';var excl_=exclusive||printOnly?s.exclusive:'';var isPrint=window.matchMedia('print').matches;var offset_=(printOffsetTop||printOffsetLeft)&&main_&&isPrint?{marginTop:-printOffsetTop,marginLeft:-printOffsetLeft}:{marginTop:0,marginLeft:0};return React.createElement('div',{ref:function ref(el){return _this3.printElement=el},style:offset_,className:s.root+' '+main_+' '+excl_},children)}}]);return Print}(React.Component);export default Print;Print.contextTypes=contextTypes;
//# sourceMappingURL=Print.js.map