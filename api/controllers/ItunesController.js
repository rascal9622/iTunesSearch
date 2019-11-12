/**
 * ItunesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  search: function (req, res) {
    var socket = req.socket;
    var io = sails.io;

    var data = { message: "connected" };

    return res.view(data);
  },

};

