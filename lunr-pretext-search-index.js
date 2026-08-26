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
  "body": " 08\/26: Finding Limits Numerically, One-Sided Limits, and Finding Limits Graphically   A critical mathematical notion that we will be using in this course is the notion of a limit . Today, we introduce limits of functions, and discuss how to calculate them.    Defining Limits  So far in math, you have probably seen functions used as a basic in-out machine; you put some number into the function, and it spits out another number. Stick comes out. In this lesson, we will start to consider what these functions look like around a given number.    The Left Limit  is defined as the value that the function approaches as approaches the number from below, or from the left, if it exists.  Similarly, the Right Limit , is the value approaches as approaches from above, or from the right, if it exists.    A way to think about it: as the values get close to on the -axis, the values get close to the limit on the -axis.    Evaluate the following limits numerically:     We evaluate limits numerically by plugging in values near the point that is approaching and observing to what number the given function appears to be approaching. In this case, we can plug in values closer and closer to . From below , or from the left, we can pick numbers like . From above , or from the right, we can pick numbers like . From these, we can make a table like the following:                     x  0  0.5  0.9  0.99  0.999  0.9999  1  1.0001  1.001  1.01  1.1  1.5  2       f(x)  3  3.5  4.62  4.96  4.996  4.9996  -  5.0004  5.004  5.04  5.4  7.5  11         Assessing the table, we can see that from the left, our function outputs are approaching , and from the right, our function outputs are also approaching , and so we have that:    A graph showing how the left limit is calculated numerically.   The red curve is . The dotted green lines show where on the curve we are taken by plugging in numbers progressively closer to from below, i.e. from the left. The dotted blue lines show that the limit is on the curve when we finally get to .        If the left and right limits of a function are equal, then the Limit  exists and is their value. Otherwise, the limit does not exist.    In the previous example, since both the left and right limits were the same, we would have that     In the previous question, we could have just gotten the answer by plugging the number we were given directly into the function. This leads to the question, for need of politer phrasing, \"what's the point of finding a limit?\"  We can start answer this by asking a different question: When does a limit not exist? Graphically, how does a function appear when it has a limit that doesn't exist somewhere?    Limits don't exist when the right and left limits don't agree, i.e. when the function approaches a different number from the left than it does from the right. Graphically, this is usually where there is a jump in the graph of at the point at which we want to evaluate the limit.     The value of depends on the values of close to , but does not depend on . In fact, we don't require to be defined at at all. We'll see an example of this in the next limit.     Calculate the left and right limits to determine whether the following limit exists:     Since does not exist, plugging in won't work. If is negative, then . If is positive, then . So, we will have that: Since the left and right limits do not agree, the limit does not exist.  Graphically, there is a jump at , where the horizontal line on suddenly switches to the line , from right to left.   A graph showing how the two limits from different directions are unequal.   The red curve is . The open circles at the ends of the lines indicate that the function is not defined at . From the left, the curve approaches , and from the right, the curve approaches         Let . Again, at , is not defined since we are dividing by . This time, to find , we should evaluate the limit numerically.  We get the following table:               x  -1  -0.1  -0.01  0  0.01  0.1  1       f(x)  0.84  0.998  0.9999  not defined  0.9999  0.998  0.84         This time, even though the function isn't defined at , the right and left limits agree, and so we have   Graphically, this function will appear as other nice functions do, without any jumps, but there will be a hole at , where the function is not defined.   A graph of    The red curve is . The left and right of both converge to , despite the fact that the function is not defined there.      Some practice problems:     Let . Evaluate numerically, or state that it does not exist.    Let . Evaluate numerically, or state that it does not exist.    Let . Evaluate numerically, or state that it does not exist.      "
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
  "id": "subsection-3-5",
  "level": "2",
  "url": "section-2.html#subsection-3-5",
  "type": "Example",
  "number": "2.2",
  "title": "",
  "body": "  Evaluate the following limits numerically:     We evaluate limits numerically by plugging in values near the point that is approaching and observing to what number the given function appears to be approaching. In this case, we can plug in values closer and closer to . From below , or from the left, we can pick numbers like . From above , or from the right, we can pick numbers like . From these, we can make a table like the following:                     x  0  0.5  0.9  0.99  0.999  0.9999  1  1.0001  1.001  1.01  1.1  1.5  2       f(x)  3  3.5  4.62  4.96  4.996  4.9996  -  5.0004  5.004  5.04  5.4  7.5  11         Assessing the table, we can see that from the left, our function outputs are approaching , and from the right, our function outputs are also approaching , and so we have that:    A graph showing how the left limit is calculated numerically.   The red curve is . The dotted green lines show where on the curve we are taken by plugging in numbers progressively closer to from below, i.e. from the left. The dotted blue lines show that the limit is on the curve when we finally get to .     "
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
  "id": "subsection-3-8",
  "level": "2",
  "url": "section-2.html#subsection-3-8",
  "type": "Question",
  "number": "2.5",
  "title": "",
  "body": "  In the previous question, we could have just gotten the answer by plugging the number we were given directly into the function. This leads to the question, for need of politer phrasing, \"what's the point of finding a limit?\"  We can start answer this by asking a different question: When does a limit not exist? Graphically, how does a function appear when it has a limit that doesn't exist somewhere?    Limits don't exist when the right and left limits don't agree, i.e. when the function approaches a different number from the left than it does from the right. Graphically, this is usually where there is a jump in the graph of at the point at which we want to evaluate the limit.   "
},
{
  "id": "subsection-3-9",
  "level": "2",
  "url": "section-2.html#subsection-3-9",
  "type": "Remark",
  "number": "2.6",
  "title": "",
  "body": " The value of depends on the values of close to , but does not depend on . In fact, we don't require to be defined at at all. We'll see an example of this in the next limit.  "
},
{
  "id": "subsection-3-10",
  "level": "2",
  "url": "section-2.html#subsection-3-10",
  "type": "Example",
  "number": "2.7",
  "title": "",
  "body": "  Calculate the left and right limits to determine whether the following limit exists:     Since does not exist, plugging in won't work. If is negative, then . If is positive, then . So, we will have that: Since the left and right limits do not agree, the limit does not exist.  Graphically, there is a jump at , where the horizontal line on suddenly switches to the line , from right to left.   A graph showing how the two limits from different directions are unequal.   The red curve is . The open circles at the ends of the lines indicate that the function is not defined at . From the left, the curve approaches , and from the right, the curve approaches      "
},
{
  "id": "subsection-3-11",
  "level": "2",
  "url": "section-2.html#subsection-3-11",
  "type": "Example",
  "number": "2.8",
  "title": "",
  "body": "  Let . Again, at , is not defined since we are dividing by . This time, to find , we should evaluate the limit numerically.  We get the following table:               x  -1  -0.1  -0.01  0  0.01  0.1  1       f(x)  0.84  0.998  0.9999  not defined  0.9999  0.998  0.84         This time, even though the function isn't defined at , the right and left limits agree, and so we have   Graphically, this function will appear as other nice functions do, without any jumps, but there will be a hole at , where the function is not defined.   A graph of    The red curve is . The left and right of both converge to , despite the fact that the function is not defined there.     "
},
{
  "id": "section-3",
  "level": "1",
  "url": "section-3.html",
  "type": "Section",
  "number": "3",
  "title": "08\/28: Finding Limits Analytically",
  "body": " 08\/28: Finding Limits Analytically   Last class, we defined limits and used numerical and graphical techniques to find them. Both of these techniques can be slow, so today we will introduce faster ways to determine limits for certain nice functions.   Warm-up Question   What is a limit? What does the statement mean? Try to come up with a 1-2 sentence description. Use casual language if it helps you understand the concept.      Continuous Functions  Last time, we saw that for some functions, finding a limit is as simple as plugging in the number we're approaching into the function. We introduce some terminology we can use for such functions:    We say that a function is continuous at (the point) if the following is true: In other words, when the limit of a function at a point is equal to the function at that point.  We say that a function is continuous if it is continuous at for every single choice of .    If we are every asked to compute the limit of a continuous function at a point, we can just evaluate the function at that point. Graphically, continuous functions are those that you can draw on a piece of paper in one stroke without lifting up your pen.  Some useful examples of common continuous functions that we will see:   All polynomials    Sine and Cosine          (For positive values of )       Solve      is a polynomial, so it's continuous. In particular, it is continuous at . Thus if , then for any , so in this case we have .     This example was an example of finding a limit analytically. We will say that we are finding a limit analytically when we are using any special technique or rule that allows us to solve a limit more concisely than writing a big numerical table or squinting at a graph.    Discontinuous Functions  We introduce several more of these rules below when finding :    evaluates to . This means that is not defined at , and that there is a vertical asymptote at instead. We will analyze the limits at from below (left) and above (right) to get more information, as illustrated by the following example.   Evaluate     Trying to evaluate would give us , so we need to check the sign of above and below (and close to it). Graphing , we see that it is negative to the left of and positive to the right, so will be negative to the left and positive to the right. Thus and , so the desired limit does not exist.     When a function shoots up vertically to infinity on both sides, or shoots down vertically to negative infinity on both sides, we allow ourselves to write or , respectively. This is a little handwavey, since \" \" is not a number that we can work with - what is important is that the limit describes the behavior of the function right around        evaluates to . In this case there might be a vertical asymptote at , but we can't be sure quite yet. To handle functions that give us this, we will try to reduce them into a simpler form that can be handled by another case.  In this course, we will only do this by factoring and cancelling. Once we're in one of the previous cases, we can compute the limit either by solving for or evaluating the left and right limits as before.   Find if it exists.     is a zero of both the numerator and denominator, so we are in the case. Factoring gives us , found by cancelling the matching factors in the numerator and the denominator. With this new simplification, - we are in the continuous case, so our limit is .     The fact that we reduced to a function which evaluated to a number at means that the original function had a hole there. If we simplified by cancellation and got something which evaluated to , this would mean we had a vertical asymptote and would have needed to use the techniques in the corresponding case.     Find if it exists.    This evaluates to , so we want to factor and cancel . Doing so yields , which evaluates to . Thus we need to check the limits from above and below (and close to ). We see that with , but with , , so just like the first example, the limit does not exist.        We may also work with piecewise functions, where we split a function up into parts depending on the value of the we put into it.     Find , if it exists, for     The function is split at , so we'll need to check both sides. Both the left side ( ) and the right side ( ) are continuous at , so we can solve analytically for the left and right limits. Both evaluate to , so the limit is . Graphically, the curves drawn by both sides link up at          Let   Find and , if they exist.  At , we are not at a boundary, and evaluates to a number, so the limit is . At , we need to check from the left and the right, ignoring , since the limit there doesn't care about the value of the function at that point. From the left, we can evaluate at to get the limit from the left as , but from the right, gives a limit of . Thus the limit of at does not exist.          "
},
{
  "id": "section-3-2-2",
  "level": "2",
  "url": "section-3.html#section-3-2-2",
  "type": "Question",
  "number": "3.1",
  "title": "Warm-up Question.",
  "body": " Warm-up Question   What is a limit? What does the statement mean? Try to come up with a 1-2 sentence description. Use casual language if it helps you understand the concept.   "
},
{
  "id": "def_3_1",
  "level": "2",
  "url": "section-3.html#def_3_1",
  "type": "Definition",
  "number": "3.2",
  "title": "",
  "body": "  We say that a function is continuous at (the point) if the following is true: In other words, when the limit of a function at a point is equal to the function at that point.  We say that a function is continuous if it is continuous at for every single choice of .   "
},
{
  "id": "subsection-3_1-6",
  "level": "2",
  "url": "section-3.html#subsection-3_1-6",
  "type": "Example",
  "number": "3.3",
  "title": "",
  "body": "  Solve      is a polynomial, so it's continuous. In particular, it is continuous at . Thus if , then for any , so in this case we have .   "
},
{
  "id": "subsection-3_1-8",
  "level": "2",
  "url": "section-3.html#subsection-3_1-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "analytically. "
},
{
  "id": "subsection-3_2-2-2-1-1-7",
  "level": "2",
  "url": "section-3.html#subsection-3_2-2-2-1-1-7",
  "type": "Example",
  "number": "3.4",
  "title": "",
  "body": "  Evaluate     Trying to evaluate would give us , so we need to check the sign of above and below (and close to it). Graphing , we see that it is negative to the left of and positive to the right, so will be negative to the left and positive to the right. Thus and , so the desired limit does not exist.   "
},
{
  "id": "subsection-3_2-2-2-1-1-8",
  "level": "2",
  "url": "section-3.html#subsection-3_2-2-2-1-1-8",
  "type": "Remark",
  "number": "3.5",
  "title": "",
  "body": " When a function shoots up vertically to infinity on both sides, or shoots down vertically to negative infinity on both sides, we allow ourselves to write or , respectively. This is a little handwavey, since \" \" is not a number that we can work with - what is important is that the limit describes the behavior of the function right around   "
},
{
  "id": "subsection-3_2-2-2-2-2-2",
  "level": "2",
  "url": "section-3.html#subsection-3_2-2-2-2-2-2",
  "type": "Example",
  "number": "3.6",
  "title": "",
  "body": "  Find if it exists.     is a zero of both the numerator and denominator, so we are in the case. Factoring gives us , found by cancelling the matching factors in the numerator and the denominator. With this new simplification, - we are in the continuous case, so our limit is .   "
},
{
  "id": "subsection-3_2-2-2-2-2-3",
  "level": "2",
  "url": "section-3.html#subsection-3_2-2-2-2-2-3",
  "type": "Remark",
  "number": "3.7",
  "title": "",
  "body": " The fact that we reduced to a function which evaluated to a number at means that the original function had a hole there. If we simplified by cancellation and got something which evaluated to , this would mean we had a vertical asymptote and would have needed to use the techniques in the corresponding case.  "
},
{
  "id": "subsection-3_2-2-2-2-2-4",
  "level": "2",
  "url": "section-3.html#subsection-3_2-2-2-2-2-4",
  "type": "Example",
  "number": "3.8",
  "title": "",
  "body": "  Find if it exists.    This evaluates to , so we want to factor and cancel . Doing so yields , which evaluates to . Thus we need to check the limits from above and below (and close to ). We see that with , but with , , so just like the first example, the limit does not exist.   "
},
{
  "id": "subsection-3_2-3",
  "level": "2",
  "url": "section-3.html#subsection-3_2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "piecewise "
},
{
  "id": "subsection-3_2-5",
  "level": "2",
  "url": "section-3.html#subsection-3_2-5",
  "type": "Example",
  "number": "3.9",
  "title": "",
  "body": "  Find , if it exists, for     The function is split at , so we'll need to check both sides. Both the left side ( ) and the right side ( ) are continuous at , so we can solve analytically for the left and right limits. Both evaluate to , so the limit is . Graphically, the curves drawn by both sides link up at    "
},
{
  "id": "subsection-3_2-6",
  "level": "2",
  "url": "section-3.html#subsection-3_2-6",
  "type": "Problem",
  "number": "3.10",
  "title": "",
  "body": "     Let   Find and , if they exist.  At , we are not at a boundary, and evaluates to a number, so the limit is . At , we need to check from the left and the right, ignoring , since the limit there doesn't care about the value of the function at that point. From the left, we can evaluate at to get the limit from the left as , but from the right, gives a limit of . Thus the limit of at does not exist.        "
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
