Cards=React.createClass({
   render(){
       return (

           <div className="panel panel-default">
               <div className="panel-heading"><a href="#" className="pull-right">View all</a> <h4>{this.props.data.title}</h4></div>
               <div className="panel-body">
                           <p>{this.props.data.text}</p>

                               <form>
                                   <div className="input-group">
                                       <div className="input-group-btn">
                                           <button className="btn btn-default">+1</button><button className="btn btn-default"><i className="glyphicon glyphicon-share"></i></button>
                                       </div>
                                       <input type="text" className="form-control" placeholder="Add a comment.." />
                                   </div>
                               </form>

               </div>
           </div>


       )
   }
});