var contentful = require('../index');
var _ = require('lodash');

var client = contentful.createClient({
  // access token valid for rob's contentful user account
  accessToken: '2daa24205609a5608a85eb5f3cfb6f663597e7b4b9253a38e49a4c2a78edae83',
  host: 'api.contentful.com'
});

// space id for real appeal dev
client.getSpace('02o36124tiz8')
  .catch(reportInvalidSpace)
  .then(getEntries)
  //.spread(logEntries)
  //.spread(countEntries)
  //.spread(updateEntries)
  .spread(publishEntries)
  .done();

function reportInvalidSpace (error) {
  console.log('Error ' + error);
  throw error;
}

function getEntries (space) {
  return [space, space.getEntries({
    // content type id for quizzes in the real appeal dev space
    // content_type: '44LkCwT8IM0GKgO02uc0Ow',
    // content type id for activities in the real appeal dev space
    content_type: '6CJow7hVHqICksqcuQ42YA',
    // limit: 10
  })];
}


function logEntries(space, entries) {
    _.each(entries, function (entry) {
      console.log(entry);
    });
}


function updateEntries(space, entries) {
    _.each(entries, function (entry) {
      if (entry.fields.description) {
        entry.fields.description['en-US'] = '';
        // we don't want to start publishing until all of these have been updated
        space.updateEntry(entry).then(function (entry) {
          console.log('updated entry ' + entry.sys.id);
        });
      }
    });
}

// change this to publish
function publishEntries(space, entries) {
    _.each(entries, function (entry) {
      space.publishEntry(entry).then(function (entry) {
        console.log('published entry ' + entry.sys.id);
      });
    });
}

function countEntries(space, entries) {
  console.log('There are ' + entries.length  + ' total entries.');
};
