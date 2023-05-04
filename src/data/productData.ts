
interface productsListType {
  id:string,
  title:string,
  author:string,
  price:number,
  image:string,
  desc:string,
  category:string,
  category1:string,
  publisher:string,
  tag:string
}



const productlist:productsListType[] = [
    {
        id: '1',
        title:"You'll Burn in the Storm",
        author:'John Verdon',
        publisher: "Corridor Publishing",
        price: 65.75,
        image: "https://i.dr.com.tr/cache/500x400-0/originals/0001780436001-1.jpg",
        desc: "In the quiet New York town of White River, a sniper is terrorizing and the murdered cop gets a warning message on their phone. Gurney, who is called to advise on the investigation, where no one trusts anyone, has nothing but a mysterious note in his hands.",
        category: "Detective",
        category1: "all",
        tag:'detective '
      },
      {
        id: '2',
        title:"On Friendship",
        author:'Cicero',
        publisher: " Chronicle Book",
        price: 19.50,
        image: "https://i.dr.com.tr/cache/500x400-0/originals/0001969015001-1.jpg",
        desc: "The most famous jurist, politician and orator of the Roman Republic, Cicero had a special interest in philosophy from the very beginning of his education, and showed the depth of his thoughts and the mastery of the pen with his various works. On Friendship (De Amicitia), which is one of the leading books in which he conveys his philosophical thoughts, is a timeless work that contains wise advice on what friendship is and how it should be, which is one of the most important values ​​of the Ancient Age and is seen as an art form. .",
        category: "Philosophical Science",
        category1: "all",
        tag:'philosophy '
      },
      {
        id: '3',
        title:"Sadist",
        author:'Stephen King',
        publisher: "Golden Books - Famous Series of Novels",
        price: 68.25,
        image: "https://i.dr.com.tr/cache/500x400-0/originals/0000000059161-1.jpg",
        desc: "He was a very famous writer, but he never thought that one day he would have to write a book to survive...",
        category: "Horror thriller",
        category1: "all",
        tag:'horror '
      },
      {
        id: '4',
        title:"Pet Cemetery",
        author:'Stephen King',
        publisher: "Corridor Publishing",
        price: 74.75,
        image: "https://i.dr.com.tr/cache/500x400-0/originals/0000000059245-1.jpg",
        desc: "In the quiet New York town of White River, a sniper is terrorizing and the murdered cop gets a warning message on their phone. Gurney, who is called to advise on the investigation, where no one trusts anyone, has nothing but a mysterious note in his hands.",
        category: "Horror thriller",
        category1: "all",
        tag:'horror'
      },
      {
        id: '5',
        title:"Heretics of Dune",
        author:'Frank Herbert',
        publisher: " IMPORT PUBLICATIONS",
        price: 102.85,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:11298110/wh:true/wi:300",
        desc: "Frank Herbert is one of the most important representatives of the new wave science fiction movement, which brings together the good literature is good literature in the genre, where experimental approaches rather than experiments reach their peak. Dune Heretics , the fifth book in the Dune series, which uses all the possibilities of the genre until it runs out, is a work that blurs the line between faith and unbelief, and moves the stones before the end of the epic series.",
        category: "Sci-Fi-Fantasy",
        category1: "all",
        tag:'fantasy'
      },
      {
        id: '6',
        title:"Of Mice and Men",
        author:'John Steinbeck',
        publisher: " IMPORT PUBLICATIONS",
        price: 42.90,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:11227945/wh:true/wi:800",
        desc: "Of Mice and Men tells the story of two opposing seasonal farm workers, the brilliant George Milton and his strong but mentally unstable comrade Lennie Small. Friendship and solidarity have an important place in the story of these two, who dream of buying a small land and living a humane life. In this epic novel, Steinbeck not only tells the relationship of man with man, but also the relations of man with nature and society. As in the Robert Burns poem that inspired the title of the book; “The best plans of rats and humans ",
        category: "Novel",
        category1: "all",
        tag:'novel'
      },
      {
        id: '7',
        title:"Brothers Karamazov",
        author:'Fyodor Dostoevsky',
        publisher: "BOYNER PUBLICATIONS",
        price: 14.32,
        image: "https://i.dr.com.tr/cache/500x400-0/originals/0001803800001-1.jpg",
        desc: "The Brothers Karamazov is one of Fyodor Dostoyevskys most voluminous works and famous novels. In this work, the writer directs the reader's attention to spiritual and philosophical issues. The characters of the work - Ivan, Alexey and Dmitri Karamazov are engaged in judgments about the primary reason and ultimate goals of existence. They approach the issue of God and the immortality of the soul in different ways and make their own choices.",
        category: "Fiction",
        category1: "all",
        tag:'novel'
      },      {
        id: '8',
        title:"Exhalation",
        author:'Ted Chiang',
        publisher: "Pan Macmillan",
        price: 19.20,
        image: "https://static.insales-cdn.com/images/products/1/7110/651615174/9781529014495.jpg",
        desc: "One of the most exciting writers in science fiction . . . Although dark in premise, these parables - threaded through with references to ancient mythology and folklore - are filled with hope and humanism: a balm for anxious souls.' - Daily Telegraph From the acclaimed author of Stories of Your Life and Others - the basis for the Academy Award nominated film Arrival - comes a groundbreaking second collection of short fiction: nine stunningly original, provocative, and poignant stories. These are tales that tackle some of humanity's oldest questions along with new quandaries that only Ted Chiang could imagine.",
        category: "Fantastic",
        category1: "all",
        tag:'novel'
      },
      {
      id: '9',
      title:"Cage",
      author:'Josh Malerman',
      publisher: "İthaki Publications",
      price: 9.20,
      image: "https://i.dr.com.tr/cache/500x400-0/originals/0001789823001-1.jpg",
      desc: "If you've read Stephen King and Jonathan Carroll novels, you've probably experienced how much a book can raise your heart rate. So hold your breath! Josh Malerman is regarded by many authorities as the equal of King and Carroll with his first work, The Cage ",
      category: "Horror thriller",
      category1: "all",
      tag:'novel'
    },
    {
      id: '10',
      title:"Bozkurt",
      author:'Harold C: Armstrong',
      publisher: "Dorlion Publishing House",
      price: 29.20,
      image: "https://i.dr.com.tr/cache/500x400-0/originals/0001959925001-1.jpg",
      desc: "Atatürk carried out secular and nationalistic reforms in the political, economic and cultural fields to create a modern , progressive and secular nation state . Thus, the economic privileges granted to foreign countries were canceled and their enterprises and railways were nationalized",
      category: "Biography",
      category1: "all",
      tag:'biography'
    },
    {
      id: '11',
      title:"Genghis Khan",
      author:' Jack Weatherford',
      publisher: "Chronicle Book",
      price: 39.20,
      image: "https://i.dr.com.tr/cache/500x400-0/originals/0001749405001-1.jpg",
      desc: "Genghis Khan was the last great tribal emperor in world history. He was the heir to the 10,000-year war between the nomadic tribes and the civilized world, the struggle of hunters and shepherds against farmers. It was a story as old as the story of Cain, who killed his brother Abel",
      category: "Biography",
      category1: "all",
      tag:'biography'
    },
    {
      id: '12',
      title:"I Robot",
      author:'Isaac Asimov',
      publisher: "Ithaki Publications",
      price: 49.20,
      image: "https://i.dr.com.tr/cache/500x400-0/originals/0000000720264-1.jpg",
      desc: "Isaac Asimov creates an extraordinary fiction that will fascinate science fiction fans with Ben Robot . This book, which contains 10 different robot stories together, invites the reader to the depths of a world he has never known.",
      category: "Science fiction",
      category1: "all",
      tag:'novel'
    },
    {
      id: '13',
      title:"Cosmos",
      author:'Carl Sagan',
      publisher: "Golden Books",
      price: 59.20,
      image: "https://i.dr.com.tr/cache/500x400-0/originals/0000000059256-1.jpg",
      desc: "Carl Sagan is one of the most brilliant scientists of our time... He has created a magnificent piece of science's past, present and future as he articulates the eternity of the mind-blowing Cosmos in which we exist.",
      category: "Astronomy",
      category1: "all",
      tag:'science'
    },
    {
      id: '14',
      title:"22/11/63",
      author:'Stephen King',
      publisher: "Golden Books",
      price: 79.20,
      image: "https://i.dr.com.tr/cache/500x400-0/originals/0000000400741-1.jpg",
      desc: "On November 22, 1963, three gunshots were heard in Dallas, President Kennedy died, and world history changed. What if you had the chance to change all that? ",
      category: "Horror thriller",
      category1: "all",
      tag:'novel'
    },
    {
      id: '15',
      title:"He",
      author:'Stephen King',
      publisher: "Golden Books",
      price: 39.20,
      image: "https://i.dr.com.tr/cache/500x400-0/originals/0000000059516-1.jpg",
      desc: "The immortal work of the American novelist and story writer Stephen King, published in 1986, It is among the most outstanding examples of the horror and thriller genre in world literature.",
      category: "Horror thriller",
      category1: "all",
      tag:'novel'
    },
    {
      id: '16',
      title:"Martian",
      author:'Andy Weir',
      publisher: "İthaki Publications",
      price: 25.60,
      image: "https://i.dr.com.tr/cache/500x400-0/originals/0000000625238-1.jpg",
      desc: "The adventures of a novel hero who landed on a deserted island have always been a subject of great curiosity in literature and popular culture. Well, how about witnessing this breathtaking adventure outside the world now? ",
      category: "Science fiction",
      category1: "all",
      tag:'novel'
    },


]

export default productlist;