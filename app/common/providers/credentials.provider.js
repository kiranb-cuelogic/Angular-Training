'use strict';

angular.module('providers')
    .provider('credentials', [credentials]);

function credentials() {

    this.data = [];

    this.$get = function() {
        var data = this.data;
        return {
            get: function() {
                return data;
            }
        }
    };
    
    this.set = function(credentials) {
        this.data = credentials;
    };

};

angular.module('providers')
    .config(function(credentialsProvider) {
        var credentials = [
            { _id: 1, email: 'ki@gmail.com', password: 'ki' },
            { _id: 2, email: 'kiran.bangale@cuelogic.co.in', password: 'kiran' },
            { _id: 3, email: 'kiranbangale@gmail.com', password: 'kiran' }
        ];
        credentialsProvider.set(credentials);
    });
