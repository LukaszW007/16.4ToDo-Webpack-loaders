class Title extends React.Component{
    constructor (props){
        super(props);
        titleName: 'ToDo list';
    }
    static defaultProps ={
        numberOfItems: 0
    }
    static propTypes = {
        numberOfItems:React.PropTypes.number.isRequired
    }
    render(){
        return(
            <div className = "titlecontainer">
                <div className = "title">{this.state.titleName}</div>
                <div className = "numberOfItems">{this.props.numberOfItems}</div>
            </div>
        )
    }

}

export default Title;