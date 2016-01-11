App=React.createClass({
   mixins:[ReactMeteorData],
    getMeteorData(){
        return {
            lists:dbList.find({}).fetch()
        }
    },
    render(){
        return (
          <div>
              <h1>Welcome To React Meteor</h1>
              <Lists lists={this.data.lists} />
          </div>

        );

    }



});