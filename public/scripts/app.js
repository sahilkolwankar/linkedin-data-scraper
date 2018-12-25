'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('App.js is running!');

var template = React.createElement(
    'p',
    null,
    'This is a template'
);
var placeholder = document.getElementById('placeholder');

//d3.csv("../results_file.csv");

var Drive = function (_React$Component) {
    _inherits(Drive, _React$Component);

    function Drive(props) {
        _classCallCheck(this, Drive);

        var _this = _possibleConstructorReturn(this, (Drive.__proto__ || Object.getPrototypeOf(Drive)).call(this, props));

        _this.state = { value: null };
        _this.readData = _this.readData.bind(_this);
        return _this;
    }

    _createClass(Drive, [{
        key: 'readData',
        value: function readData(event) {
            var current = this;
            d3.csv("../results_file.csv", function (error, data) {
                data.forEach(function (d) {
                    d.date = d.Name;
                    // current.setState({state: d.date});
                });
                current.setState({ value: data });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            this.readData;
            var delay = (function () {
                var data = this.state.value;
                console.log(data);
                var _ref = [data.Name, data.Job, data.Title, data.Company, data.College, data.Location, data.Url],
                    name = _ref[0],
                    job = _ref[1],
                    title = _ref[2],
                    company = _ref[3],
                    college = _ref[4],
                    location = _ref[5],
                    url = _ref[6];
            }, 5000);
            console.log(delay);

            return React.createElement(
                'div',
                null,
                name
            );
        }
    }]);

    return Drive;
}(React.Component);

ReactDOM.render(React.createElement(Drive, null), placeholder);
