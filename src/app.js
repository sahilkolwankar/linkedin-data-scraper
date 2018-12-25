console.log('App.js is running!');

const template = <p>This is a template</p>
const placeholder = document.getElementById('placeholder');

//d3.csv("../results_file.csv");

class Drive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: null};
        this.readData = this.readData.bind(this);
    }

    readData(event) {
        let current = this;
        d3.csv("../results_file.csv", function(error, data) {
            data.forEach(function(d) {
                d.date = d.Name;
                // current.setState({state: d.date});
            })
            current.setState({value: data});
        });
    }

    render() {
        this.readData;
        var delay= (function(){
            const data = this.state.value;
            console.log(data);
            const [name, job, title, company, college, location, url] =
                [data.Name, data.Job, data.Title, data.Company, data.College, data.Location, data.Url];
        }, 5000 );
        console.log(delay);
        
        return (
            <div>{name}</div>
        );
    }
}


ReactDOM.render(<Drive/>, placeholder);