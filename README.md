# About

Need parsing HTML in Google Apps Script? Then this solution is for you.

# Installation

Add a library by using the following Script ID in any Google Apps Script:

## Script ID
    1zxwJSKGMMDudY2-qdc31b4OM1kAUtOT6Gycb3UX1_WyUVEgN8FIzJbOL

If you run into an issue while adding the library, you have an option to build it by yourself. The guide how to build the library is after usage section.

# Usage

    /// Use 'load' to parse HTML
    const $ = HtmlParser.getInstance().load('<h1 class="header">Test 1</h1>');

    /// Then use CSS selectors to select elements and extract any data
    console.log($('.header').text()); /// Test 1

For more details please visit [docs](https://cheerio.js.org/docs/basics/selecting) for [cheerio](https://cheerio.js.org/).

# Build

If you need to build your own library for some reason, then follow this guide.

## Prerequisite

Before moving forward, make sure you have installed the following:

 - NodeJS (recommended version is 18);
 - NPM (recommended version is 9);

Also you need to create an empty Google Apps Script, which is going to be used as a library. After you create the script, obtain the Script ID. It's needed for [clasp](https://www.npmjs.com/package/@google/clasp) to push changes to your script instead of mine.

If you don't want to mess up with Script Id and [clasp](https://www.npmjs.com/package/@google/clasp), you can copy-paste the built code manually. Just select the proper section later in this guide. 

## Builder installation

Having downloaded the source, execute the following line in the root folder containing file `package.json`:

    npm ci

or

    npm install

depending on your needs. There is no much difference anyway.

Once, it's done, choose the best option for you how to build and push the library code to your script.

## Pushing via Clasp (recommended)

Remember the Script Id you obtained for your script? Now you need it. Open file `.clasp.json` and replace `scriptId` with yours.

After, you need to login via your Google Account to access your script locally from your machine. Don't worry, it's a common practice. Here is a link to Google [docs](https://developers.google.com/apps-script/guides/clasp?hl=en).

To login, execute the following:

    npm run login

Once you log in, [clasp](https://www.npmjs.com/package/@google/clasp) remembers you, so you don't have to login multiple times.

Now everything is ready to build code and push it to your script. You just need to execute the following:

    npm run push:build

This is going to build the library code and push it to your script. Now go the final section.

## Pushing manually (easier)

If you don't want to use [clasp](https://www.npmjs.com/package/@google/clasp) to push the library source, you can do it manually by copy-pasting. In this case, just execute the following:

    npm run build

Once it's completed, open file `main.gs` via notepad in folder `dist`. There should be about 20 000 lines of code, so don't be suprised of your possible PC lags. Select all lines and copy-paste the code to your script.

## Finall step

The only thing left is just to share the script and use it in any Google Apps Script you want.

One last thing to notice. In the examples above I referenced to `HtmlParser` class. The class name coresponded to the project name I had created. So, when you add your own library, use the name corresponding to your project name.

That's it.
