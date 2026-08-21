var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1",
  "title": "08\/24: Introduction and Review",
  "body": " 08\/24: Introduction and Review   Today, we introduce the course, various policies, and then review some prerequisite mathematical material. The course information won't be repeated here - all of the information can be found on Brightspace, via the course syllabus and other materials.    Exponent Review  In a precalculus course, you should have encountered various exponent rules, the constant , and the function .  When we have three numbers , we have the following rules:   (Anything to the power of zero is one.)   (Anything to the power of one is itself.)   (Adding exponents is the same as multiplying a number by the first power by the same number to the second power.)   (Multiplying exponents is the same as taking a number to the first power and then to the second.)   (You can take any exponent and make it negative to switch it into the denominator of a fraction, or vice versa.)   (Raising to a power that is a fraction is the same as taking a root.)  Some examples:                   The constant is a number with an infinite, nonrepeating decimal expansion of , though knowing this decimal expansion is not important for this course. We will see why is special later in the course. For now, we will want to remember that it has special interactions with the function .  When we have three numbers , we have the following rules:                                  Try to simplify the following expressions by combining the exponent rules:                Trig Review  In a precalculus course, you should have seen a few trigonometric functions. Below are some identities to remember. These should be the only trig identities you will need to have memorized for this course:                             While not strictly necessary to memorize, I recommend that you also try to remember some important angles that cause the trig functions to spit out nice numbers, such as:                   You may also find it useful to look up and review the unit circle.   "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "2",
  "title": "08\/26: Introduction and Review",
  "body": " 08\/26: Introduction and Review   Today, we introduce the course, various policies, and then review some prerequisite mathematical material. The course information won't be repeated here - all of the information can be found on Brightspace, via the course syllabus and other materials.       \\bigskip     The left limit  is defined as the value that approaches as approaches from below, if it exists.  Similarly, the right limit , is the value approaches as approaches from above, if it exists.  If the left and right limits are equal, then the limit  exists and is their value.      Evaluate for numerically.    We evaluate limits numerically by plugging in values near the point approaches and assessing where the given function approaches. In this case, we can plug in values closer and closer to , and get the following:                     x  0  0.5  0.9  0.99  0.999  0.9999  1  1.0001  1.001  1.01  1.1  1.5  2       f(x)  3  3.5  4.62  4.96  4.996  4.9996  -  5.0004  5.004  5.04  5.4  7.5  11         Assessing the table, we see that from both sides, the limit will be ; thus       When does a limit not exist?    When there is a jump in the graph of at the point at which we want to evaluate the limit.     The value of depends on the values of close to , but does not depend on . In fact, we don't require to be defined at at all. Or, we can have a discontinuity at where If this is the case, we say is not continuous at .     Draw an example on the board and evaluate some limits graphically.      Let . Note that at , is not defined since we are dividing by . So to check , we need to evaluate the limit numerically.  We get the following table:               x  -1  -0.1  -0.01  0  0.01  0.1  1       f(x)  0.84  0.998  0.9999  not defined  0.9999  0.998  0.84             Another finding limits graphically example.      Some practice problems for the students:     Let . Evaluate numerically, or state that it does not exist.  For , , and for , , so the only way the limit can exist is if it equals . Evaluating numerically, we see that increases as and decreases as , so the limit does not exist.      Graphical example to practice.    Let . Evaluate numerically, or state that it does not exist.    Let . Evaluate numerically, or state that it does not exist.  This time, is always negative. The limit will be .          "
},
{
  "id": "subsection-3-3",
  "level": "2",
  "url": "section-2.html#subsection-3-3",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": "  The left limit  is defined as the value that approaches as approaches from below, if it exists.  Similarly, the right limit , is the value approaches as approaches from above, if it exists.  If the left and right limits are equal, then the limit  exists and is their value.   "
},
{
  "id": "subsection-3-4",
  "level": "2",
  "url": "section-2.html#subsection-3-4",
  "type": "Example",
  "number": "2.2",
  "title": "",
  "body": "  Evaluate for numerically.    We evaluate limits numerically by plugging in values near the point approaches and assessing where the given function approaches. In this case, we can plug in values closer and closer to , and get the following:                     x  0  0.5  0.9  0.99  0.999  0.9999  1  1.0001  1.001  1.01  1.1  1.5  2       f(x)  3  3.5  4.62  4.96  4.996  4.9996  -  5.0004  5.004  5.04  5.4  7.5  11         Assessing the table, we see that from both sides, the limit will be ; thus    "
},
{
  "id": "subsection-3-5",
  "level": "2",
  "url": "section-2.html#subsection-3-5",
  "type": "Question",
  "number": "2.4",
  "title": "",
  "body": "  When does a limit not exist?    When there is a jump in the graph of at the point at which we want to evaluate the limit.   "
},
{
  "id": "subsection-3-6",
  "level": "2",
  "url": "section-2.html#subsection-3-6",
  "type": "Remark",
  "number": "2.5",
  "title": "",
  "body": " The value of depends on the values of close to , but does not depend on . In fact, we don't require to be defined at at all. Or, we can have a discontinuity at where If this is the case, we say is not continuous at .  "
},
{
  "id": "subsection-3-7",
  "level": "2",
  "url": "section-2.html#subsection-3-7",
  "type": "Example",
  "number": "2.6",
  "title": "",
  "body": "  Draw an example on the board and evaluate some limits graphically.   "
},
{
  "id": "subsection-3-8",
  "level": "2",
  "url": "section-2.html#subsection-3-8",
  "type": "Example",
  "number": "2.7",
  "title": "",
  "body": "  Let . Note that at , is not defined since we are dividing by . So to check , we need to evaluate the limit numerically.  We get the following table:               x  -1  -0.1  -0.01  0  0.01  0.1  1       f(x)  0.84  0.998  0.9999  not defined  0.9999  0.998  0.84          "
},
{
  "id": "subsection-3-9",
  "level": "2",
  "url": "section-2.html#subsection-3-9",
  "type": "Example",
  "number": "2.9",
  "title": "",
  "body": "  Another finding limits graphically example.   "
},
{
  "id": "subsection-3-10",
  "level": "2",
  "url": "section-2.html#subsection-3-10",
  "type": "Problem",
  "number": "2.10",
  "title": "",
  "body": "  Some practice problems for the students:     Let . Evaluate numerically, or state that it does not exist.  For , , and for , , so the only way the limit can exist is if it equals . Evaluating numerically, we see that increases as and decreases as , so the limit does not exist.      Graphical example to practice.    Let . Evaluate numerically, or state that it does not exist.    Let . Evaluate numerically, or state that it does not exist.  This time, is always negative. The limit will be .        "
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
