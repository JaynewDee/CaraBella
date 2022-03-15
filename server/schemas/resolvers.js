const { AuthenticationError } = require('apollo-server-express');
const { User, Package } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51KLbiADzqI05yRaXswNjugRVLmveyxn6iUB5m1rguhLoDq4LAzlMNacaAYtn0FaR9e2AfgJexChuzl29PHHsHM8J00skGklFfw');

const resolvers = {
  Query: {

    packages: async (parent, args) => {
      
        const packages = await Package.find({}).populate('perks');

        return packages;
    
    },
    
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    addUser: async (parent, {...data}) => {
      const user = await User.create({...data});
      const token = signToken(user);

      return { token, user };
    },
     
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;