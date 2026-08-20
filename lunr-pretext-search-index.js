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
