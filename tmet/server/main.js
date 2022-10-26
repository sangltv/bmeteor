import {Meteor} from "meteor/meteor"
import { Accounts } from 'meteor/accounts-base';

if (!Accounts.findUserByUsername("sanglq")){
        Accounts.createUser({
            username:"sanglq",
            password:"Password"
        })
}
    



