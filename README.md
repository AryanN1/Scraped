# Scraped

In this assignment, you'll create a web app that lets users leave comments on the latest news. But you're not going to actually write any articles; instead, you'll flex your Mongoose and Cheerio muscles to scrape news from another site.

### Before You Begin

1. Create a GitHub repo for this assignment and clone it to your computer. Any name will do -- just make sure it's related to this project in some fashion.

2. Run `npm init`. When that's finished, install and save these npm packages:
3. express
4. express-handlebars
5. mongoose
6. body-parser
7. cheerio
8. request
9. **NOTE**: If you want to earn complete credit for your work, you must use all six of these packages in your assignment.

10. In order to deploy your project to Heroku, you must set up an mLab provision. mLab is remote MongoDB database that Heroku supports natively. Follow these steps to get it running:
11. Create a Heroku app in your project directory. 
12. Run this command in your Terminal/Bash window: 
    * `heroku addons:create mongolab`
    * This command will add the free mLab provision to your project.
13. You'll need to find the URI string that connects Mongoose to mLab. Run this command to grab that string: 
    * `heroku config | grep MONGODB_URI`
    * Notice the value that appears after `MONGODB_URI =>`. This is your URI string. Copy it to a document for safekeeping.
14. When you’re ready to connect Mongoose with your remote database, simply paste the URI string as the lone argument of your `mongoose.connect()` function. That’s it!

15. [Watch this demo of a possible submission](Week-18-Homework-Video.mov). 
16. Your site doesn't need to match the demo's style, but feel free to attempt something similar if you'd like. Otherwise, just be creative!

## Instructions

* Create an app that follows this user story:

  1. Whenever a user visits your site, the app will scrape stories from a news outlet of your choice. The data should at least include a link to the story and a headline, but feel free to add more content to your database (photos, bylines, and so on).
  2. Use Cheerio to grab the site content and Mongoose to save it to your MongoDB database. 
  3. All users can leave comments on the stories you collect. They should also be allowed to delete whatever comments they want removed. All stored comments should be visible to every user.
  4. You'll need to use Mongoose's model system to associate comments with particular articles. 

**Good Luck!**
