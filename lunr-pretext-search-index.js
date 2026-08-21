var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1",
  "title": "08\/24: Introduction and Review",
  "body": " 08\/24: Introduction and Review   Today, we introduce the course, various policies, and then review some prerequisite mathematical material. The course information won't be repeated here - all of the information can be found on Brightspace, via the course syllabus and other materials.    Exponent Review  In a precalculus course, you should have encountered various exponent rules, the constant , and the function .  When we have three numbers , we have the following rules:   (Anything to the power of zero is one.)   (Anything to the power of one is itself.)   (Adding exponents is the same as multiplying a number by the first power by the same number to the second power.)   (Multiplying exponents is the same as taking a number to the first power and then to the second.)   (You can take any exponent and make it negative to switch it into the denominator of a fraction, or vice versa.)   (Raising to a power that is a fraction is the same as taking a root.)  Some examples:                   The constant is a number with an infinite, nonrepeating decimal expansion of , though knowing this decimal expansion is not important for this course. We will see why is special later in the course. For now, we will want to remember that it has special interactions with the function .  When we have three numbers , we have the following rules:                                  Try to simplify the following expressions by combining the exponent rules:                Trig Review  In a precalculus course, you should have seen a few trigonometric functions. Below are some identities to remember. These should be the only trig identities you will need to have memorized for this course:                             While not strictly necessary to memorize, I recommend that you also try to remember some important angles that cause the trig functions to spit out nice numbers, such as:                             You may also find it useful to look up and review the unit circle.   "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "2",
  "title": "08\/26: Finding Limits Numerically, One-Sided Limits, and Finding Limits Graphically",
  "body": " 08\/26: Finding Limits Numerically, One-Sided Limits, and Finding Limits Graphically   A critical mathematical notion that we will be using in this course is the notion of a limit . Today, we introduce limits of functions, and discuss how to calculate them.    Defining Limits  So far in math, you have probably seen functions used as a basic in-out machine; you put some number into the function, and it spits out another number. Stick comes out. In this lesson, we will start to consider what these functions look like around a given number.    The Left Limit  is defined as the value that the function approaches as approaches the number from below, or from the left, if it exists.  Similarly, the Right Limit , is the value approaches as approaches from above, or from the right, if it exists.      Evaluate the following limits numerically:     We evaluate limits numerically by plugging in values near the point that is approaching and observing to what number the given function appears to be approaching. In this case, we can plug in values closer and closer to . From below , or from the left, we can pick numbers like . From above , or from the right, we can pick numbers like . From these, we can make a table like the following:                     x  0  0.5  0.9  0.99  0.999  0.9999  1  1.0001  1.001  1.01  1.1  1.5  2       f(x)  3  3.5  4.62  4.96  4.996  4.9996  -  5.0004  5.004  5.04  5.4  7.5  11         Assessing the table, we can see that from the left, our function outputs are approaching , and from the right, our function outputs are also approaching , and so we have that:       If the left and right limits of a function are equal, then the Limit  exists and is their value. Otherwise, the limit does not exist.    In the previous example, since both the left and right limits were the same, we would have that     In the previous question, we could have just gotten the answer by plugging the number we were given directly into the function. This leads to the question, for need of politer phrasing, \"what's the point of finding a limit?\"  We can start answer this by asking a different question: When does a limit not exist? Graphically, how does a function appear when it has a limit that doesn't exist somewhere?    Limits don't exist when the right and left limits don't agree, i.e. when the function approaches a different number from the left than it does from the right. Graphically, this is usually where there is a jump in the graph of at the point at which we want to evaluate the limit.     The value of depends on the values of close to , but does not depend on . In fact, we don't require to be defined at at all.     Calculate the left and right limits to determine whether the following limit exists:     Since does not exist, plugging in won't work. If is negative, then . If is positive, then . So, we will have that: Since the left and right limits do not agree, the limit does not exist.  Graphically, there is a jump at , where the horizontal line on suddenly switches to the line , from right to left.      Let . Again, at , is not defined since we are dividing by . This time, to find , we should evaluate the limit numerically.  We get the following table:               x  -1  -0.1  -0.01  0  0.01  0.1  1       f(x)  0.84  0.998  0.9999  not defined  0.9999  0.998  0.84         This time, even though the function isn't defined at , the right and left limits agree, and so we have   Graphically, this function will appear as other nice functions do, without any jumps, but there will be a hole at , where the function is not defined.    Some practice problems:     Let . Evaluate numerically, or state that it does not exist.    Let . Evaluate numerically, or state that it does not exist.    Let . Evaluate numerically, or state that it does not exist.      "
},
{
  "id": "section-2-2-1",
  "level": "2",
  "url": "section-2.html#section-2-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "limit "
},
{
  "id": "subsection-3-3",
  "level": "2",
  "url": "section-2.html#subsection-3-3",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": "  The Left Limit  is defined as the value that the function approaches as approaches the number from below, or from the left, if it exists.  Similarly, the Right Limit , is the value approaches as approaches from above, or from the right, if it exists.   "
},
{
  "id": "subsection-3-4",
  "level": "2",
  "url": "section-2.html#subsection-3-4",
  "type": "Example",
  "number": "2.2",
  "title": "",
  "body": "  Evaluate the following limits numerically:     We evaluate limits numerically by plugging in values near the point that is approaching and observing to what number the given function appears to be approaching. In this case, we can plug in values closer and closer to . From below , or from the left, we can pick numbers like . From above , or from the right, we can pick numbers like . From these, we can make a table like the following:                     x  0  0.5  0.9  0.99  0.999  0.9999  1  1.0001  1.001  1.01  1.1  1.5  2       f(x)  3  3.5  4.62  4.96  4.996  4.9996  -  5.0004  5.004  5.04  5.4  7.5  11         Assessing the table, we can see that from the left, our function outputs are approaching , and from the right, our function outputs are also approaching , and so we have that:    "
},
{
  "id": "def-",
  "level": "2",
  "url": "section-2.html#def-",
  "type": "Definition",
  "number": "2.4",
  "title": "",
  "body": "  If the left and right limits of a function are equal, then the Limit  exists and is their value. Otherwise, the limit does not exist.   "
},
{
  "id": "subsection-3-7",
  "level": "2",
  "url": "section-2.html#subsection-3-7",
  "type": "Question",
  "number": "2.5",
  "title": "",
  "body": "  In the previous question, we could have just gotten the answer by plugging the number we were given directly into the function. This leads to the question, for need of politer phrasing, \"what's the point of finding a limit?\"  We can start answer this by asking a different question: When does a limit not exist? Graphically, how does a function appear when it has a limit that doesn't exist somewhere?    Limits don't exist when the right and left limits don't agree, i.e. when the function approaches a different number from the left than it does from the right. Graphically, this is usually where there is a jump in the graph of at the point at which we want to evaluate the limit.   "
},
{
  "id": "subsection-3-8",
  "level": "2",
  "url": "section-2.html#subsection-3-8",
  "type": "Remark",
  "number": "2.6",
  "title": "",
  "body": " The value of depends on the values of close to , but does not depend on . In fact, we don't require to be defined at at all.  "
},
{
  "id": "subsection-3-9",
  "level": "2",
  "url": "section-2.html#subsection-3-9",
  "type": "Example",
  "number": "2.7",
  "title": "",
  "body": "  Calculate the left and right limits to determine whether the following limit exists:     Since does not exist, plugging in won't work. If is negative, then . If is positive, then . So, we will have that: Since the left and right limits do not agree, the limit does not exist.  Graphically, there is a jump at , where the horizontal line on suddenly switches to the line , from right to left.   "
},
{
  "id": "subsection-3-10",
  "level": "2",
  "url": "section-2.html#subsection-3-10",
  "type": "Example",
  "number": "2.8",
  "title": "",
  "body": "  Let . Again, at , is not defined since we are dividing by . This time, to find , we should evaluate the limit numerically.  We get the following table:               x  -1  -0.1  -0.01  0  0.01  0.1  1       f(x)  0.84  0.998  0.9999  not defined  0.9999  0.998  0.84         This time, even though the function isn't defined at , the right and left limits agree, and so we have   Graphically, this function will appear as other nice functions do, without any jumps, but there will be a hole at , where the function is not defined.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
