document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

generate = () => {
  var quotes = {
    "- Marie Curie ": '"We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained."',
    "- Marie M. Daly ": '"Courage is like — it’s a habitus, a habit, a virtue: you get it by courageous acts. It’s like you learn to swim by swimming. You learn courage by couraging."',
    "- Rosalind Franklin": '"Science and everyday life cannot and should not be separated."',
    "- Rita Levi": '"I tell young people: Do not think of yourself, think of others. Think of the future that awaits you, think about what you can do and do not fear anything."',
    "- Karen Spärck Jones": '"I think it’s very important to get more women into computing. My slogan is: Computing is too important to be left to men."',
    "- Eleanor K. Baum": '"An engineer is a problem solver. Not only can engineering be used to solve problems, but engineers can work to “make the world a better place, improve conditions and improve lives."',
    "- Anousheh Ansari": '"If people can see Earth from up here, see it without those borders, see it without any differences in race or religion, they would have a completely different perspective. Because when you see it from that angle, you cannot think of your home or your country. All you can see is one Earth…"',
    "- Kimberly Bryant": '"You can absolutely be what you can’t see! That’s what innovators and disruptors do."',
    "- Florence Nightingale": '"I attribute my success to this: I never gave or took any excuse."',
    "- Grace Hopper": '"A ship in port is safe, but that’s not what ships are built for."',
    "- Sheryl Sandberg": '"If you are offered a seat on a rocket ship, don’t ask what seat! Just get on."',
    "- Susan Wojcicki": '"Though we do need more women to graduate with technical degrees, I always like to remind women that you don’t need to have science or technology degrees to build a career in tech."',
    "- Marissa Mayer": '"People ask me all the time: ‘What is it like to be a woman at Google?’ I’m not a woman at Google, I’m a geek at Google. And being a geek is just great. I’m a geek, I like to code, I even like to use spreadsheets when I cook."',
    "- Weili Dai": '"I believe every single woman could accomplish what I’ve accomplished."',
    "- Limor Fried": '"We are showing people that engineering isn’t just the physics of how a transistor works. It’s using the technology, and being creative with it, and solving problems that people have, or creating something beautiful with it. And I think that’s opening up engineering to a whole new group of people that maybe never would have thought that engineering was for them."',
    "- Margaret Hamilton": '"When I first started using the phrase software engineering, it was considered to be quite amusing. They used to kid me about my radical ideas. Software eventually and necessarily gained the same respect as any other discipline."',
    "- Ada Lovelace": '"That brain of mine is something more than merely mortal; as time will show."',
    "- Adele Goldberg": '"Don’t ask whether you can do something, but how to do it."',
    "- Radia Perlman": '"The kind of diversity that I think really matters isn’t skin shade and body shape, but different ways of thinking."',
    "- Annie J Easley": '"You’re never too old, and if you want to, as my mother said, you can do anything you want to, but you have to work at it."',
    "- Emilie Du Chatelet": '"Let us choose for ourselves our path in life, and let us try to strew that path with flowers."',
    "- Hypatia": '"Reserve your right to think, for even to think wrongly is better than not to think at all."',
    "- Katherine Coleman Goble Johnson": '"Like what you do, and then you will do your best. "',
    "- Karen Nyberg": '"When I was in high school, I was certain that being an astronaut was my goal. Sally Ride was making her first flight into space and she had a real impact on me. Those firsts kind of stick in your head and really become inspirations for you."',
    "- Dr. Francis Allen": '"You need to hire and develop great people. You need to set the vision and trust them to do the right thing. You need to let go of control. That’s wonderful for all involved because you’re empowering and trusting your people to do what’s right for the brand."',
    "- Helen Octavia Dickens": '"Somewhere along the way, I decided that if I was going to be a nurse, I might as well become a doctor."',
    "- Regina Agyare": '"By learning to create technology, girls learn to speak up."',
    "- Roshni Nadar": '"To make a difference, you have to have large aspirations."',
    "- Jane Goodall": '"What you do makes a difference, and you have to decide what kind of difference you want to make."',
    "- Grace Hopper": '"We’ve tended to forget that no computer will ever ask a new question."',
    "- Mae Jemison": '"Sciences provide an understanding of a universal experience, Arts are a universal understanding of personal experience. The arts and sciences are avatars of human creativity"',
    "- Mrs Lade Araba": '"Keep trying, what is the worst they can do?."',
    "- Marie Curie": '"Nothing in life is to be feared. It is only to be understood. Now is the time to understand more, so that we may fear less."',
    "- Maryam Mirzakhani": '"I dont have any particular recipe. It is the reason why doing research is challenging as well as attractive. It is like being lost in a jungle and trying to use all the knowledge that you can gather to come up with some new tricks, and with some luck, you might find a way out."',
  };

  // grab all the keys in the dictionary (authors) and store in an array
  var authors = Object.keys(quotes);
  // grab a random key (author) and store it in author
  var author = authors[Math.floor(Math.random() * authors.length)];
  // grab the value(quote) that belongs to that key
  var quote = quotes[author]

  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;

  let tweet= document.getElementById("tweet-quote");
  tweet.href = 'https://twitter.com/intent/tweet?hashtags=quotes&text="' + quote + '"_' + author;
}
