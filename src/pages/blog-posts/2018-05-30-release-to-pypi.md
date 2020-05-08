---
title:	"Releasing a Command-Line App to PyPI When It Really Doesn't Want You To"
date:	2018-05-30
updated:	2018-05-30
categories: python pypi
slug: "pypi-release"
---

Around the turn of the year, I wrote a small command line tool, [snipster](https://github.com/SophieAu/snipster) which I then released on both GitHub and PyPI.

Unfortunately, the release to PyPI went less than great. Basically you could download it fine but you couldn't run it. In the end, there were actually two problems, both of which I will address.

Keep in mind, this tutorial is only for the part relating to the app being a command line tool. For all the general stuff, please refer to another source, e.g. [this amazing page](https://the-hitchhikers-guide-to-packaging.readthedocs.io/en/latest/index.html).

## Tell PyPI That Your App Is Supposed to Be Called From the Command Line
The first issue that I ran into is that I didn't specify in the `setup.py` file that my app had a cli and where the main method was. You need to set the following:

```python
packages     = ['snipster'],
entry_points = {
    'console_scripts': ['snipster=snipster.__main__:main'],
}
```
In `packages` you need to state the name of your package. [Setuptools](https://pypi.org/project/setuptools/) (which I used for my app) has an in-built function to find it for you, `find_packages(where="snipster")`, I didn't use it though because my setting works as well and don't fix what isn't broken, right?

`entry_points` was the part that broke for me. Whatever I tried, I got the same error:

	`ModuleNotFoundError: No module named 'snipster'`

This is very much related to problem number 2 though.

## Make Sure That All the Imports Are Correct
My app worked perfectly fine on my local machine and even installing the app manually (downloading from GitHub and extracting) worked fine. However when installing from pypi it just wouldn't work. It took me literally 5 months to figure it out.

And what it comes down to is import paths. My mistake was not including the package name in the `from` statement. So to fix this, my code went from this:
```python
from Snippet import Snippet
from SnippetList import showSnippetList, lookupSnippetPath
from Sourcer import sourceSnippets
```
to this:
```python
from snipster.Snippet import Snippet
from snipster.SnippetList import showSnippetList, lookupSnippetPath
from snipster.Sourcer import sourceSnippets
```

## Finally: Make Sure the App Actually Runs
Now that everything seems like it's fixed, we need to check that everything actually works. Because I had to do this a lot while trying to fix the app, I wrote two handy scripts:

testInit.sh
```python
python setup.py sdist bdist_wheel
pip install dist/snipster-py-1.0.3.tar.gz
echo " "
echo " "
echo " "
echo " "
snipster
```

testClean.sh
```python
pip uninstall snipster-py
rm -r build
rm -r dist
rm -r snipster_py.egg-info
```

Now, if everything went well the `snipster` command would print the help page on the cli, meaning that python found the entry point.

And there you go. Those were my two big issues when releasing the app. Really quick fixes but oh so hard to find!
