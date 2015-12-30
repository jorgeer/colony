Meteor.publish("towns", function () {
    let userId = this.userId;
    console.log(userId);
    return Town.find({ userId });
});

Meteor.publish("userSearch", function (username) {
    check(username, String);
    
    return Meteor.users.find({
        username: { $in: [ new RegExp(username, "g") ] }
    }, {
        limit: 10,
        fields: {
            username: 1
        }
    });
});

Meteor.publish("letters", function () {
    let userId = this.userId;

    let letters = Letter.find({ userId }).fetch();
    let senders = [];
    
    _.each(letters, (letter) => {
        senders.push(letter.senderId);
    });
    
    return [
        Letter.find({ userId }),
        Meteor.users.find({
            _id: { $in: senders }
        }, {
            fields: {
                username: 1
            }
        })
    ]
});

// Publish the current user's record to the client.
Meteor.publish(null, function() {
 if (this.userId) {
   return Meteor.users.find(
     { _id: this.userId },
     {
        fields: {
            username: 1,
            emails: 1,
            friends: 1,
            ignored: 1
        }}
    );
 } else {
   return null;
 }
}, /*suppress autopublish warning*/{is_auto: true});