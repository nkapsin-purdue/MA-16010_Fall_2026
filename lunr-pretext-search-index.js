var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase",
  "level": "1",
  "url": "#shorttitlelowercase",
  "type": "Article",
  "number": "",
  "title": "DAY 1 WIP",
  "body": " DAY 1 WIP     Simplify the following expressions.                Express as sums, differences, and multiples of basic logarithmic functions, such as , and .           \\newpage      Complete the following trig identities.               Given and is in the fourth quadrant, find , and .    \\medskip         "
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
