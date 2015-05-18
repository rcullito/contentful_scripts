This folder is meant to make it easier for Zillion to manage what we store in Contentful.

While files already written by Contentful in the example directory follow the convention of supplying arguments via the command line, for these utility scripts, I've found it more readable to keep values inline. To run: 

    $ node entries.js


Additional notes:
I've followed the pattern set forth in the example script of calling: then, tap, or spread on the getSpace method. These methods for working with promises can be found in the bluebird documentation.

I've then uncommented out additional methods one at a time in order to view, edit, update, and publish content.

A full listing of the methods contentful exposes for spaces can be found in ../index.js
