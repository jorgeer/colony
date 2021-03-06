module.exports = function () {
  this.Before(function () {
    this.AuthHelper = {
      login: function (username, password) {
        username = username || "me@example.com";
        password = password || "password";
        /*
        
        client.setValue("#at-field-username_and_email", username);
        client.setValue("#at-field-password", password);
        client.click("#at-btn");
        client.waitForExist("#logged-in");
        */
        client.waitForExist("#at-pwd-form");
        
       
        var fn = function (creds) {
          Meteor.loginWithPassword(creds.username, creds.password);
        };
        
        client.execute(fn, { username: username, password: password });
        
        client.waitForExist("#logged-in");
        expect(client.isExisting("#logged-in")).toBe(true);
      },
      logout: function () {
        client.executeAsync(function (done) {
          Meteor.logout(done);
        });
      },

      createAccount: function (username, password) {
        username = username || "myuser";
        password = password || "password";
        
        return server.call("fixtures/createAccount", {
          email: "me@example.com",
          password,
          username,
        });
      },

      createAccountAndLogin: function (profile) {
        this.createAccount(profile);
        this.login();
      },
      
      createAccountAndSettlementAndLogin () {
        var userId = this.createAccount();
        server.call("fixtures/createSettlement", {
          name: "testtown",
          mayor: {
            name: "bob"
          },
          environment: "mountains",
          userId
        });
        this.login();
      }
    };
  });
};
