import React from'react';import PropTypes from'prop-types';var s={root:'easy-print-NoPrint-root-1A10',_force:'easy-print-NoPrint-_force-1-C_'};require('load-styles')('/*  imported from NoPrint.css  */\n\n@media print {\n  .easy-print-NoPrint-root-1A10 {\n    visibility: hidden;\n  }\n  .easy-print-NoPrint-_force-1-C_ {\n    display: none;\n  }\n}\n');var propTypes={force:PropTypes.bool,children:PropTypes.node.isRequired};var NoPrint=function(_React$PureComponent){babelHelpers.inherits(NoPrint,_React$PureComponent);function NoPrint(){babelHelpers.classCallCheck(this,NoPrint);return babelHelpers.possibleConstructorReturn(this,(NoPrint.__proto__||Object.getPrototypeOf(NoPrint)).apply(this,arguments))}babelHelpers.createClass(NoPrint,[{key:'render',value:function render(){var _props=this.props,children=_props.children,force=_props.force;var force_=force?s.force:'';return React.createElement('div',{className:s.root+' '+force_},children)}}]);return NoPrint}(React.PureComponent);export default NoPrint;
//# sourceMappingURL=NoPrint.js.map