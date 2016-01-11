PostStatus=React.createClass({
    handleSubmit(event){
        event.preventDefault();
        console.log(this.refs.inputPost.value);
        var text=this.refs.inputPost.value;
        var self=this;

        var postData={
            text:text,
            comments:[],
            likes:[],
            title:'This is sample Sidebar'
        };
        Meteor.call('insertPost',postData,function(err,res){
            if(!err){
                self.refs.inputPost.value=null;
            }
        });

    },
   render(){
       return <div className="well">
           <form className="form-horizontal" role="form" onSubmit={this.handleSubmit}>
               <h4>What's New</h4>
               <div className="form-group pad-top">
                   <textarea  ref="inputPost" className="form-control" placeholder="Update your status"></textarea>
               </div>
               <button className="btn btn-primary" type="submit">Post</button>
           </form>
       </div>
   }
});