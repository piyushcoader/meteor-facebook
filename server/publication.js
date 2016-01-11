Meteor.publish('posts',function(){
    // just sorting by ascending so that we can reverse the array in react component

    return db.posts.find({},{sort:{updatedDate:1}});
});