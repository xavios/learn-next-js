export interface News {
  id: number;
  title: string;
  content: string;
  time: Date;
  slug: string;
  image: string;
}

export const LatestNews: News[] = [
  {
    id: 0,
    slug: "iphone-16",
    title: `iPhone 16 Series Camera Features, Capture Button Details Leaked
        via Hands-on Video`,
    content: `iPhone 16 family comprising vanilla iPhone 16, iPhone 16 Plus,
         iPhone 16 Pro, and iPhone 16 Pro Max are due to arrive this September. 
         The rumour mill about the new lineup has been churning away for months
          and most recently, a hands-on video of dummy units of the iPhone 16 
          series has emerged on the Web. The video suggests the camera 
          specifications of upcoming Apple handsets. The iPhone 16 lineup is 
          also said to feature an all-new Capture button. The vanilla models are
           seen to have a dual rear camera unit, while the Pro models appear to
            have three sensors at the rear.`,
    time: new Date(2024, 7, 20),
    image: "ai-robot.jpg",
  },
  {
    id: 1,
    slug: "cheaters",
    title: `3 Men Pose As Seers, Extort Money, Jewellery From Naval Officer'
     Wife In Delhi`,
    content: `New Delhi: Three men were arrested for allegedly extorting money
    and jewellery from the wife of a naval officer by posing as seers and
    threatening her with a dummy snake in Delhi's RK Puram area, police
    said on Tuesday. The accused were identified as Debu Nath (20), Vinod Kamat
    (45), and Rajender Sharma (50), police said. On April 5, the accused, posing
    as seers, extorted money and jewellery from the wife of a Naval officer near
    African Avenue Road, Deputy Commissioner of Police (southwest) Rohi
    Meena said.`,
    time: new Date(2024, 6, 12),
    image: "beaver.jpg",
  },
  {
    id: 2,
    slug: "banned",
    title: `Anil Ambani, 24 Others Banned From Securities Market By SEBI For
    5 Years `,
    content: `SEBI has imposed a penalty of ₹ 25 crore on Anil Ambani and
    restrained him from being associated with the securities market including
    as a director or Key Managerial Personnel (KMP) in any listed company, or
    any intermediary registered with the market regulator, for a period
    of 5 years.`,
    time: new Date(2024, 5, 22),
    image: "couple-cooking.jpg",
  },
  {
    id: 3,
    slug: "hiking",
    title: "Hiking is the best!",
    image: "hiking.jpg",
    time: new Date(2024, 0, 1),
    content:
      "Hiking is a great way to get some exercise and enjoy the great outdoors. It is also a great way to clear your mind and reduce stress. So what are you waiting for? Get out there and start hiking!",
  },
  {
    id: 4,
    slug: "landscape",
    title: "The beauty of landscape",
    image: "landscape.jpg",
    time: new Date(2022, 6, 1),
    content:
      "Landscape photography is a great way to capture the beauty of nature. It is also a great way to get outside and enjoy the great outdoors. So what are you waiting for? Get out there and start taking some pictures!",
  },
];
