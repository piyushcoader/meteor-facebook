
db.posts=new Mongo.Collection('posts');


Meteor.methods({
   insertPost(post){
       post.updatedDate=new Date();
       return db.posts.insert(post);
   }
});


