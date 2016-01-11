Home=React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData(){
      var subs=Meteor.subscribe('posts');
        return {
          isReady:subs.ready(),
          posts:db.posts.find({}).fetch()
      }
    },
    renderPosts(){
        // reverse to load latest post in top It didn't worked like in blaze
        // it pushed the post at the bottom of the post Array

        return this.data.posts.reverse().map((postData)=>{
            return <Cards key={postData._id} data={postData} />
        });
    },
    renderIfReady(){
        return
    },
    render(){
        if(this.data.isReady){
            console.log(this.data.posts);
            return (

                <div className="row">
                    <div className="col-md-12">
                        <PostStatus />
                        <div className="row">
                            <div className="col-sm-12">
                                {this.renderPosts()}
                            </div>
                        </div>

                    </div>

                </div>


            )
        }else{
           return  <h3 className="text-center"> Loading ...</h3>
        }

    }
});