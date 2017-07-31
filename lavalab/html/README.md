#LavaLab's Website

Hosted at www.usclavalab.org

Anyone can contribute to this website!

You are _required_ to make a branch and submit a pull request before any changes go to the live site. be sure not to break this rule!

##adding your team to the portfolio (October 25th)
To add your team to the [portfolio page](http://usclavalab.org/portfolio.html):
- CREATE A NEW BRANCH LOCALLY using ```$git checkout -b [branchname]``` where you replace [branchname] with the name that you want the branch to be.
- Add both your logo using the template that old teams used on [this line](https://github.com/LavaLabUSC/usclavalab.org/blob/master/lavalab/html/portfolio.html#L54).
- Add your modal with a brief description (that you and your team agrees on) at the bottom of the file, [here](https://github.com/LavaLabUSC/usclavalab.org/blob/master/lavalab/html/portfolio.html#L147)
- Upload your logo image with the following properties to [this folder](https://github.com/LavaLabUSC/usclavalab.org/tree/master/lavalab/html/assets/images/projects)
  - Transparent Background
  - PNG of less than 100kb (but smaller is better)
  - Square aspect ratio. This means you might have to stick your logo into a new PSD that is square and export that.
- Push your code using ```$git push origin [branchname]```, then submit a pull request on github.com. Drake or Sagar will merge it with master.
