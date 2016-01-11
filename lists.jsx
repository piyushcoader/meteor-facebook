Lists=React.createClass({

    render(){
        return <ul>
            {this.props.lists.map((listsData)=><li key={listsData._id}>{listsData.text}</li>)}
        </ul>



    }


});