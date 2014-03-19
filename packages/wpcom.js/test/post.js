
/**
 * WPCONN module
 */

var WPCONN = require('../');
var Site = require('../lib/site');
var Post = require('../lib/post');
var util = require('./util');

/**
 * Testing data
 */

var tdata = require('./data');

/**
 * WPCONN instance
 */

var wpconn = new WPCONN();

/**
 * Create a `Site` instance
 */

describe('post', function(){

  describe('sync', function(){

    it('should be an instance of `Site`', function(){
      var wpconn = new WPCONN();
      wpconn.site.post
        .should.be.an.instanceOf(Post);
    });

  });

  describe('async', function(){

    it('should add a new post', function(done){
      var wpconn = util.private_site();
      wpconn.site.post.add(tdata.post_data, function(err, post){
        if (err) throw err;

        // checking some post date
        post
          .should.be.ok
          .and.be.an.instanceOf(Object);

        post.ID
          .should.be.an.instanceOf(Number);

        post.site_ID
          .should.be.an.instanceOf(Number)
          .and.be.eql(tdata.private_site_id);

        done();
      });
    });

  });

});
