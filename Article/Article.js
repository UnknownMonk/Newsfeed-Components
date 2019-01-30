// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    this.articles = document.querySelector('.articles');

    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector('.expandButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.articles.addEventListener('mousedown', () => this.slideIn());

    this.expandButton.addEventListener('click', () => this.expandArticle());

    TweenMax.to('.article', 2, { x: 1800 }, 0.5);
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    TweenMax.to('.article', 5, { x: -1800 }, 2);
  }

  slideIn() {
    TweenMax.to('.article', 5, { x: 1800 }, 2);
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article');

articles.forEach(artical => new Article(artical));
