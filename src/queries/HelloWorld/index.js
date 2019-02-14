/* eslint-disable import/prefer-default-export, no-unused-vars */
import {
  GraphQLInt,
} from 'graphql';
import { HelloWorldType } from '../../types/HelloWorld';

const HelloWorldQuery = {
  type: HelloWorldType,
  args: {},
  resolve: (_, args) => {
    return {
      text: 'Hello World!'
    }
  },
};

export {
  HelloWorldQuery,
};
