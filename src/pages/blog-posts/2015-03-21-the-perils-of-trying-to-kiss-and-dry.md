---
title:  "The Perils of Trying to KISS and DRY"
date:   2015-03-21
categories: java coding
slug: "kiss-and-dry"
---
Last week in my programming class we had to write a function that returns the next day. That in itself wasn’t difficult. But when I tried to simplify my code I got stuck in a rut.

The first iteration of my group’s code was this:

```java
public void setTomorrow() {
    int lastDay;
 
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        lastDay = 31;
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        lastDay = 30;
    } else {
        if (isLeapYear()) {
            lastDay = 29;
        } else {
            lastDay = 28;
        }
    }
 
    if (day == lastDay) {
        day = 1;
        if (month == 12) {
            month = 1;
            jahr = jahr + 1;
        } else {
            month = month + 1;
        }
    } else {
        day = day + 1;
    }
}
```

It works just fine, but I didn’t like it. The `lastDay` variable isn’t very elegant, the boolean to check the months is too long and the code just looks like a mess (in my opinion). There are much shorter booleans to check if the month is over. My first attempt at simplifying looked like this:

```java
public void setTomorrow() {
    if (month == 2 && ((day == 28 && !istSchaltjahr()) || (day == 29))) {
        day = 1;
        month += 1;
    } else if ((day == 30 && ((month % 2 == 0 && month <= 6) || (month % 2 == 1 && month > 7)))) {
        day = 1;
        month += 1;
    } else if (day == 31) {
        day = 1;
        month += 1;
    } else {
        day += 1;
    }
    if (month == 13) {
        month = 1;
        jahr += 1;
    }
}
```

Only 18 lines of code compared to the 27. But again, there is some redundancy. The question is though: What part of the code should be put in a seperate method?

The first idea was to extract the update statement in the if-statements.

```java
public void setTomorrow() {
    if (month == 2 && ((day == 28 && !istSchaltjahr()) || (day == 29))) {
        resetMonth();
    } else if ((day == 30 && ((month % 2 == 0 && month <= 6) || (month % 2 == 1 && month > 7)))) {
        resetMonth();
    } else if (day == 31) {
        resetMonth();
    } else {
        day += 1;
    }
    if (month == 13) {
        month = 1;
        jahr += 1;
    }
}
 
public void resetMonth() {
    day = 1;
    month += 1;
}
```

`resetMonth()` isn’t really worth extracting though. The next try looked like this:
	
```java
public void setTomorrow() {
    if (endOfMonth()){
        day = 1;
        month +=1;
    } else {
        day += 1;
    }
    if (month == 13) {
        month = 1;
        jahr += 1;
    }
}
 
public boolean endOfMonth() {
    if (month == 2 && ((day == 28 && !istSchaltjahr()) || (day == 29))) {
        return true;
    }
    if ((day == 30 && ((month % 2 == 0 && month <= 6) || (month % 2 == 1 && month > 7)))) {
        return true;
    }
    if (day == 31) {
        return true;
    }
    return false;
}
```

This is the version I like best. The reason: Should anyone finally realize that February having 28 and sometimes 29 days is a stupid idea and change it, I only have to change the code in the `endOfMonth()` method and everything else will work just fine. So while the number of lines went up, the code is still pretty simple and most importantly maintainable.

Of course, I could mess around with the boolean statements in the if-statements and save 6 lines but that would only take away from the readability of the code.
