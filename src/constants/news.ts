import { ArticleContent, NewsArticle, PodcastContent, VideoContent } from "@types";

const articleContent: ArticleContent = {
   author: "Samantha Musanga",
   pfp: "pfp.png",
   date: "03/27/2023",
   image: "article-image.png",
   imageCaption: "NJ/NY Gotham FC forward Ifeoma Onumonu, center left, and Angel City FC defender Vanessa Gilles battle for the ball during the second half of a 2022 NWSL soccer match in Los Angeles.",
   paragraphs: [
    "Los Angeles venture capitalist Kar a Nortman spent eight years researching what she saw as a massive missed opportunity — investing in women&apos;s sports.",
    "Her research led to her involvement with L.A.&apos;s Angel City Football Club, of which Nortman is a co-founder, and now, to a new sports fund called Monarch Collective with investors that include tennis legend Billie Jean King.",
    "The $100-million fund led by Nortman and Miami venture capitalist Jasmine Robinson is focused on investing in women&apos;s sports teams, leagues and related revenue streams, such as media. The idea is to prove that more funding for women&apos;s sports will drive greater returns on investment and spur additional financing.",
    "“This is sort of a joyful way to get people to pay attention to DEI and to put your money where your mouth is,” said Nortman, a former managing partner at L.A.&apos;s Upfront Ventures, referring to diversity, equity and inclusion.",
    "Added Robinson, “Our investment can really prove out the quality and returns that you can drive in this category, and hopefully bring a lot more capital to start paying attention.”",
    "Already, professional women&apos;s sports teams around the world are bringing in fans and big bucks.",
    "New Zealand&apos;s national women&apos;s rugby team attracted a sell-out crowd during last year&apos;s Rugby World Cup Final. British fans packed the stadium for the debut of a women&apos;s soccer club. In India, broadcasting rights to air the new Women&apos;s Indian Premier League cricket games went for about $1 million per game",
    "“I&apos;ve spent a lot of time thinking about where is the right place to put capital now in this ecosystem,” Robinson said. “Over the past couple of years, I just kept coming back to women&apos;s sports.”",
    "Additional investors in the fund include Laela Sturdy, who runs Alphabet&apos;s venture capital arm, and Cindy Holland, a former Netflix vice president.",
    "“Historically there has been chronic under-investment in and woeful distribution and coverage of women&apos;s sports,” Holland said in an email. “The time to change that is now.”",
    "Investors and researchers say women&apos;s sports is at an inflection point.",
    "The landmark Title IX law mandating equal opportunities in sports for women and girls has been in effect for 50 years, resulting in scores of female athletes and more interest in watching women compete at professional levels.",
    "Additionally, cord-cutting has given women&apos;s sports more opportunities to be broadcast on digital media platforms, rather than just relying on traditional broadcast television. That has made games more accessible, said Ceyda Mumcu, chair of the sport management department and an associate professor at the University of New Haven.",
    "“That has been the major challenge for women&apos;s sports,” she said. “If you can&apos;t find it on a media outlet, if you can&apos;t find it in your local, geographic region to go attend, then how can an audience be aware of this product?”",
    "Holland remembered learning that the National Women&apos;s Soccer League was the first professional sport to get back to competition during the early days of the pandemic in 2020. But only “superfans” like her and her partner Annie even knew that the league was back, much less where games were being broadcast. Holland later became an early investor in Angel City.",
    "“I have been a lifelong sports fan, but as a viewer, it has always been hard to find out where to watch women&apos;s sports, if they have been available to watch at all,” Holland wrote in her email.",
    "Already, investment in professional women&apos;s sports is increasing. Last year, the WNBA raised $75 million in its first-ever funding round, and Angel City&apos;s star-studded lineup of owners and investors — including Natalie Portman, Serena Williams, Candace Parker and Gabrielle Union — pushed the team&apos;s valuation to $100 million before it had even played its first game.",
    "“There&apos;s this impression that these folks know what good sports are. So if they&apos;re investing in it, they must know something I don&apos;t know, so I want to check this out,” said Lisa Kaplowitz, assistant professor at the Rutgers Business School and executive director of the Rutgers Center for Women in Business.", "",
    "“You&apos;re also investing in the marketing, of telling that why&apos; to get that fanbase. And then it becomes this virtuous cycle where you&apos;re going to make money off of it,” she said.",
    "Nortman said Monarch Collective is interested in sports with a large global or domestic audience, including women&apos;s soccer and basketball. The fund is also interested in using spo",
    "“If you go back in time on the men&apos;s side, how would you grow ownership groups in these markets so you can have different types of people as community leaders in their hometown?” Nortman said.",
  ],
   twitter: "https://twitter.com",
   linkedin: "https://linkedin.com",
   instagram: "https://instagram.com",  
   email: "example@email.com",  
}
const podcastContent: PodcastContent = {
   author: "Samantha Musanga",
   date: "03/27/2023",
   image: "podcast-image.png",
   subTitle:"Full Time with Meg Linehan: A Show about women&apos;s soccer",
   paragraphs: [
    "Meg is joined by Angel City FC co-founder Kara Nortman to talk about her recent column on Yahoo Sports, With the Women&apos;s World Cup now over, here are 5 big soccer predictions.",
    "Takeaways from the World Cup, the future of the NWSL, and the current situation with the Spanish Football Federation.",
    "With the Women&apos;s World Cup now over, here are 5 big soccer predictions: <a href='https://sports.yahoo.com/op-ed-with-the-womens-world-cup-now-over-here-are-5-big-soccer-predictions-195900905.html' className='underline cursor-pointer' rel='noreferrer' target='_blank' > https://sports.yahoo.com/op-ed-with-the-womens-world-cup-now-over-here-are-5-big-soccer-predictions-195900905.html </a> Learn more about your ad choices. Visit megaphone.fm/adchoices"
  ],
   url: "https://sports.yahoo.com/op-ed-with-the-womens-world-cup-now-over-here-are-5-big-soccer-predictions-195900905.html",
   url2: "https://sports.yahoo.com/op-ed-with-the-womens-world-cup-now-over-here-are-5-big-soccer-predictions-195900905.html",
}
const videoContent: VideoContent = {
  author: "Samantha Musanga",
  date: "03/27/2023",
  url: "https://www.youtube.com/embed/KnumAWWWgUE?si=Sf5Y9SltT-HCZfDz"
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 0,
    title: "Announcing Monarch's first investment",
    content: articleContent,
    type: "article",
    readTime: 10,
    image: "n-1.png",
  },
  {
    id: 1,
    title:
      "First came Angel City FC. Now, meet Monarch Collective, a new way to invest in women's sports",
    content: articleContent,
    type: "article",
    readTime: 10,
    image: "n-2.png",
  },
  {
    id: 2,
    title: "Abundance, Not Fear",
    content: podcastContent,
    type: "podcast",
    readTime: 15.34,
    image: "n-3.png",
  },
  {
    id: 3,
    title: "second small square",
    content: videoContent,
    type: "video",
    readTime: 15.34,
    image: "n-4.png",
  },
  {
    id: 4,
    title: "third small square",
    content: articleContent,
    type: "article",
    readTime: 10,
    image: "n-5.png",
  },
];