import React, { createContext, useState } from "react";

export const store = createContext();

const Details = (props) => {
  const [details, setDetails] = useState([
    {
      id: 1,
      title:
        "These 5 floating bridges ought to give you an experience of a lifetime    ",
      Image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/untitled_design_-_2023-02-03t181212.090-sixteen_nine.png?VersionId=i3yQs9OVuZZzZvIz1eeRp506Dn9CNUh1&size=690:388",
      category: "travel",
      description:
        "By Daphne Clarance: How would it feel if you were driving on a road floating in the middle of a water body? A bit scary yet exhilarating, right? Among many man-made structures in the world, some of the most fascinating ones have to be floating bridges.While bridges are constructed to connect to landmasses separated by a large water body, floating bridges, also called pontoon bridges, were used as temporary structures during wartime and civil emergencies.",
    },
    {
      id: 2,
      title:
        "Himachal Pradesh boasts of world's best Paragliding site at Bir-Billing, Manali",
      Image:
        "https://www.hindustantimes.com/ht-img/img/2023/03/05/550x309/A-tourist-enjoying-paragliding-in-Manali-on-Wednes_1677987836956_1677987837147_1677987837147.jpg",
      category: "travel",
      description:
        "Paragliding site at Bir-Billing in Kangra has hosted many international competitions and the pre-world cup paragliding championships. Besides, Himachal Pradesh has other Paragliding sites at Bandla Dhar in district Bilaspur and Solang near Manali",
    },
    {
      id: 3,
      title: "6 picturesque road trip destinations for travelholics",
      Image:
        "https://www.hindustantimes.com/ht-img/img/2023/03/04/550x309/jytre_1677933583519_1677933613856_1677933613856.jpg",
      category: "travel",
      description:
        "Are you a travelholic looking for an exciting road trip? Look no further! From stunning mountain views to serene coastlines, these six picturesque road trip destinations are sure to provide you with the perfect getaway.",
    },
    {
      id: 4,
      title: "Mission Majnu",
      Image:
        "https://stat5.bollywoodhungama.in/wp-content/uploads/2020/12/Mission-Majnu-6.jpg",
      category: "Bollywood",
      Release: "20 January, 2023",
      rating: "3.5/5",
      description:
        "MISSION MAJNU is the story of an Indian spy in Pakistan. In 1974, India successfully conducted nuclear tests, shocking the world. Pakistan’s Prime Minister Zulfikar Ali Bhutto (Rajit Kapur) is upset. At the advice of ISI Chief Maqsood Alam (Shishir Sharma), Pakistan decides to invite Abdul Qadeer Khan (Mir Sarwar), a nuclear scientist based in the Netherlands. A Q Khan is given the responsibility of building an atomic bomb and Pakistan plans to secure its parts from the black market. RAW’s chief R N Kao (Parmeet Sethi) learns that Pakistan is upto some mischief. With the approval of the Prime Minister of India (Avantika Akerkar), he informs his secret agent in Rawalpindi, Amandeep Singh aka Tariq (Sidharth Malhotra) to find out more details and the whereabouts of the atom bomb facility. Tariq is working as a tailor and has successfully created his image of a good-natured simpleton. Hence, no one has the slightest doubt that he’s a spy. He falls in love with Nasreen (Rashmika Mandanna), a blind girl and both get married. Tariq works at the tailor shop of Nasreen’s uncle Momin (Manoj Bakshi) and they often get the order of stitching clothes for the Pakistani army. Tariq uses this opportunity to speak to the Pakistani brigadier and finds out information about the bomb and who is the scientist who’s spearheading it. His mission isn’t easy as he needs to be very careful that the Pakistani army or the intelligence does not find out the truth about him. Moreover, he has a tragic past. His father was caught selling sensitive defence information about India to Pakistan. Tariq’s handler Sharma (Zakir Hussain) in Delhi leaves no opportunity to remind him that he’s the son of a traitor. Moreover, Tariq is not expected to marry and fall in love. Yet, he is crazily in love with Nasreen and they are also expecting a child. What happens next forms the rest of the film.",
    },

    {
      id: 5,
      title: "Selfiee Movie",
      Image:
        "https://media5.bollywoodhungama.in/wp-content/uploads/2022/01/Selfiee.jpg",
      category: "Bollywood",
      Release: "24 February, 2023",
      rating: "4.5/5",
      description:
        "SELFIEE is the story of an actor's fight with his fan. Om Prakash Agarwal (Emraan Hashmi) is an RTO inspector based in Bhopal. He lives with his wife Minti (Nushrratt Bharuccha) and son Gabbu (Neev Ahuja). He's a die-hard fan of Bollywood superstar Vijay Kumar (Akshay Kumar) and always makes sure to watch the latter's film, first day first show. Om's joy knows no bounds when he learns that Vijay Kumar will be shooting his film ‘Falak Tak’ in Bhopal. He and Gabbu go to see him, hoping to click a selfie. But he doesn't get a chance as thousands of fans have also arrived to welcome Vijay Kumar. But he gets another chance when the corporator Vimla Tiwari (Meghna Malik) requests Om to help Vijay Kumar get the driving license, which the actor has lost. Om readily agrees and expresses the desire to click a picture with Vijay. Hence, he asks Vijay to arrive at the RTO office. Vijay agrees. When he reaches the RTO office, Vijay is shocked to see that the media has already arrived. A narrative is spread that Vijay never had a driving licence and that all these years, he was illegally driving a car. Assuming that Om called the media, Vijay blasts him and leaves. An angry Om stops him from driving the car, citing that he doesn't possess a driving license. The moment is captured by the media. In no time, Om Prakash Agarwal becomes a celebrity and is praised for taking on a mighty, arrogant star. What happens next forms the rest of the film.",
    },
    {
      id: 6,
      title: "Padmaavat",
      Image:
        "https://media5.bollywoodhungama.in/wp-content/uploads/2017/11/Padmavati-2.jpg",
      category: "Bollywood",
      cat: "home",
      Release: "25 January, 2018",
      rating: "4/5",
      description:
        "Padmavati journeys to Mewar with Ratan Singh and is blessed by his royal priest, Raghav Chetan. Chetan is caught watching Ratan Singh and Padmavati sharing an intimate moment and is banished from the kingdom. He travels to Delhi and informs Alauddin of Padmavati's beauty. Alauddin, who is fixated with having anything that is exceptional, invites the Rajputs to Delhi. His invitation is rejected. Enraged, he lays siege to Ratan Singh's capital Chittor. After waiting for six months and yet unsuccessful in his attempts to conquer the kingdom, Alauddin feigns peace on account of Holi and is allowed to enter Chittor where he meets Ratan Singh. He asks to see Padmavati. The Rajputs, knowing his intentions, threaten him. Ratan Singh grants Alauddin's request to see Padmavati, but does so only for a moment while preventing Alauddin from seeing her face.",
    },
    {
      id: 7,
      title: "Pathaan",
      Image:
        "https://media5.bollywoodhungama.in/wp-content/uploads/2023/01/Pathaan-2-12.jpg",
      category: "Bollywood",
      Release: "25 January, 2023",
      rating: "4.5/5",
      description:
        "PATHAAN is the story of a passionate agent working for the country. In 2019, after the government of India revoked Article 370, an enraged Pakistan general Qadir (Manish Wadhwa) decides to take revenge. He signs a contract with Jim (John Abraham), a dreaded terrorist who has an extreme enmity towards India. RAW's Nandini (Dimple Kapadia), meanwhile, gets a glimpse of a mysterious lady in France, with whom she has had sort of a past connection. Due to this development, she decides to meet Pathaan (Shah Rukh Khan), an agent who was once one of the best agents for India but has now supposedly gone rogue. Three years ago, Pathaan had come across Rubina Mohsin (Deepika Padukone) and from thereon, things went downhill for him. But the country right now needs Pathaan to save itself from the clutches of Jim. What happens next forms the rest of the film.",
    },

    {
      id: 8,
      title: "Shehzada",
      Image:
        "https://stat4.bollywoodhungama.in/wp-content/uploads/2023/02/Shehzada-1-1.jpg",
      category: "Bollywood",
      cat: "home",
      Release: "17 February, 2023",
      rating: "4.0/5",
      description:
        "SHEHZADA is the story of a man fighting for his family. 25 years ago, Bantu and Raj are born on the same day in the same hospital. Raj is born to Valmiki (Paresh Rawal) while Bantu is born to Randeep Nanda (Ronit Roy) and Yashu (Manisha Koirala). Valmiki is jealous of Randeep as both started their careers together. But Randeep ended up marrying Yashu, the daughter of the very wealthy Aditya Jindal (Sachin Khedekar). Overnight, Randeep became stinking rich and this is what angered Valmiki. Circumstances are such that Valmiki swaps Bantu and Raj on the day of their birth. As a result, he takes home Bantu while Valmiki's son Raj grows up in the house of the Jindals, unaware of the fact that he is their employee's son. In the present day, Bantu (Kartik Aaryan) is frustrated in life as Valmiki has always ill-treated him. Meanwhile, Raj (Ankur Rathee) has returned from abroad after completing his degree and Valmiki dotes on him as he's his own son. Bantu takes up a job in a law firm run by Samara (Kriti Sanon). Both end up falling in love. Samara's father (Rakesh Bedi), however, fixes her marriage with Raj. Bantu advises Samara to meet Randeep and reveal the truth. Just before their meeting, Randeep is attacked by Vikrant (Vinay Rana), a rival. Vikrant halts the office elevator and locks up the staircase so that Randeep is unable to reach the hospital. Yet, Bantu manages to provide timely medical help to Randeep and save his life. At the hospital, by a stroke of luck, he also finds out that Randeep is the one who is his biological father. What happens next forms the rest of the film.",
    },
    {
      id: 9,
      title: "Dangal",
      Image:
        "https://stat4.bollywoodhungama.in/wp-content/uploads/2016/03/Dangal-7.jpg",
      category: "Bollywood",
      cat: "home",
      Release: "23 December, 2016",
      rating: "3.5/5",
      description:
        "The film is a biopic of Mahavir Singh Phogat, one of the legendary wrestlers of India. Right from the word go, Mahavir Singh Phogat (Aamir Khan) lives with a dream of winning a gold medal for India in the international arena. Because of reasons which were beyond his control, he becomes unsuccessful in fulfilling his most cherished dream. That’s why he dreams of having a son from his pregnant wife (Sakshi Tanwar), in order to fulfil his dream. As luck would have it, all the four children turn out to be daughters, which saddens Mahavir Singh Phogat to a large extent. One day, a certain incident in the school involving his two daughters Geeta (Zaira Wasim) and Babita (Suhani Bhatnagar) changes his perspective about his daughters. Thereafter, he starts his rigorous training sessions with Geeta and Babita, in order to enable them to win the much cherished gold medal for India.Does Mahavir Singh Phogat’s incessant training with his daughters bear fruits, do his daughters make him proud by realising his dream of winning the gold medal and what are the constraints that the Phogats face whilst achieving their goal is what forms the rest of the fill",
    },

    {
      id: 10,
      title:
        "Legal action against Paps who jumped into Saif Ali Khan – Kareena Kapoor Khan’s building compound; security guard sacked",
      Image:
        "https://media5.bollywoodhungama.in/wp-content/uploads/2023/03/Legal-action-against-Paps-who-jumped-into-Saif-Ali-Khan-%E2%80%93-Kareena-Kapoor-Khans-building-compound-security-guard-sacked.jpg",
      category: "Bollywood-Top",
      description:
        "Where does it stop? The invasive impulses of the paparazzi crossed all limits—literally—on Thursday when as many as twenty photographers leapt over the compound wall of Saif Ali Khan and Kareena Kapoor Khan’s home, thereby not only violating the couple’s privacy but also endangering the safety of their children.",
    },
    {
      id: 11,
      title:
        "Shahid Kapoor and Raashii Khanna feature in romantic track ‘Aasmaan’ from Farzi, watch video",
      Image:
        "https://media5.bollywoodhungama.in/wp-content/uploads/2023/03/Shahid-Kapoor-and-Raashii-Khanna-feature-in-romantic-track-Aasmaan-from-Farzi-watch-video.jpg",
      category: "Bollywood-Top",
      subcat: "Bollywood",

      description:
        "Farzi continues to create ripples globally. Celebrating the success, Prime Video has dropped a soothing melodic track 'Aasmaan' from Farzi. The song’s soothing vibe provides a stark contrast to the series’ fast-paced storyline and has a melody that is sure to rule everyone’s playlists. The song is composed by Tanishk Bagchi and sung by Raghav Meattle and Anumita Nadesan.",
    },
    {
      id: 12,
      title:
        "Tu Jhoothi Main Makkaar runtime REVEALED! Ranbir Kapoor-Shraddha Kapoor starrer gets UA certificate; advance booking to start from March 5",
      Image:
        "https://stat4.bollywoodhungama.in/wp-content/uploads/2023/03/TJMM_Runtime_Certificate.jpeg",
      category: "Bollywood-Top",
      description:
        "Ranbir Kapoor and Shraddha Kapoor starrer Tu Jhoothi Main Makkaar is all set to release on the big screen on March 8, 2023. The film has been cleared by the Central Board of Film Certification (CBFC) with a U/A certificate. The rom-com is clocked at 159.59 minutes (2 hours, 39 min, 59 sec). While the first half will be one-hour-nine-minutes-thirty-nine-seconds long, the second half is one-hour-thirty-minute-and-twenty-seconds long. On the other hand, the makers will open advance booking for the forthcoming film in India on March 5, which is three days before the release.",
    },
    {
      id: 13,
      title:
        "Suniel Shetty on Hera Pheri 4, “Like all good things, this one took some time”..",
      Image:
        "https://stat4.bollywoodhungama.in/wp-content/uploads/2023/02/Hera-Pheri-3.jpg",
      category: "Bollywood-Top",
      subcat: "Bollywood",

      description:
        "After literally waiting for years, the official announcement of the third film in the Hera Pheri franchise happened last month. The film will see the return of the famous trio of Akshay Kumar, Suniel Shetty and Paresh Rawal in the roles of the iconic characters Raju, Ghanshyam aka Shyam and Baburao Ganpatrao Apte respectively. Shetty has penned a long note expressing his happiness on the green signal for the third film in the series, which is called Hera Pheri 4.",
    },

    {
      id: 14,
      title:
        "Kiara Advani adds her elegant touch to Slice’s new ad as she becomes the new face of the brand",
      Image:
        "https://media5.bollywoodhungama.in/wp-content/uploads/2023/03/Kiara-Feature.jpg",
      category: "Bollywood-Top",
      subcat: "Bollywood",
      description:
        "Bollywood actress Kiara Advani is one superstar who is ticking all the right boxes on the rise of her stardom. From consecutive streak of successful films to peaking with popularity on the internet, and signing a long list of brands, the girl with a golden touch is leaving no stone unturned. Adding to the list, the actor has been roped in as the new face of Slice.",
    },
    {
      id: 15,
      title:
        "Mrs. Chatterjee Vs Norway song ‘Shubho Shubho’ out: This feel-good track starring Rani Mukerji encapsulates a variety of emotions, watch",
      Image:
        "https://stat4.bollywoodhungama.in/wp-content/uploads/2023/03/Mrs_Chatterjee_Vs_Norway_First_Track_Out.jpeg",
      category: "Bollywood-Top",
      subcat: "Bollywood",

      description:
        "The trailer of Rani Mukerji’s Mrs. Chatterjee Vs Norway hit the internet just a few days back that moved the audiences. The makers drop their first song - ‘Shubho Shubho,’ a glimpse of which we saw in the much-loved trailer. A word that symbolises the ultimate translation of pure intentions and good wishes, a word that every Indian would have at least heard of, if not known. Shubho signifies auspiciousness, in everything.",
    },

    {
      id: 16,
      title: "Everything Everywhere All At Once",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg",
      category: "Hollywood",
      cat: "holly",
      Release: "16 Sep, 2022",
      rating: "4.5/5",
      description:
        "Story: Evelyn Wang (Michelle Yeoh) is an Asian immigrant mother whose life seems to be falling apart. As she struggles to connect with her daughter Joy (Stephanie Hsu), her marriage with Waymond (Ke Huy Quan) is headed for divorce. Together they own a laundromat business and are preparing for an audit by the IRS, courtesy one grumpy agent, Deirdre (Jamie Lee Curtis). Amidst all that, Evelyn also needs to brace herself for a visit by her hard-to-please conservative father (James Hong).",
    },
    {
      id: 17,
      title: "The Banshees Of Inisherin",
      Image: "https://timesofindia.indiatimes.com/photo/96194882.cms",
      category: "Hollywood",
      subcat: "Hollywood",

      Release: " Dec 15, 2022",
      rating: "4/5",
      description:
        "Story: Padraic and Colm, both middle-aged bachelors, have been lifelong friends, but when Colm suddenly decides to end the relationship in order to devote more time to activities for which he will be known, Padraic finds it incredibly difficult to honour Colm's choice. When Padraic makes multiple attempts to rekindle the relationship, things take an ugly turn with serious repercussions.    ",
    },
    {
      id: 18,
      title: "Fall ",
      Image: "https://timesofindia.indiatimes.com/photo/96115641.cms",
      category: "Hollywood",
      Release: "09 Dec, 2022",
      rating: "4.5/5",
      description:
        "Story: Becky (Grace Caroline Currey) takes to drowning her sorrows following a sudden death of her husband Dan. Her best friend Hunter (Virginia Gardner), convinces the grief-stricken rock climber to dust herself off and join her in a deadly new adventure which takes a disastrous turn.",
    },
    {
      id: 19,
      title: "Sidney",
      Image: "https://timesofindia.indiatimes.com/photo/94429136.cms",
      category: "Hollywood",
      subcat: "Hollywood",

      Release: "23 Sep, 2022",
      rating: "3.3/5",
      description:
        "Story: ‘Sidney’ tells the story of iconic Hollywood star Sidney Poitier and pays glowing tribute to the first black star to win an Academy Award. The documentary traces his journey from his extremely humble origins in the Bahamas to reaching the pinnacle of stardom in Hollywood.    ",
    },
    {
      id: 20,
      title: "Avatar: The Way Of Water",
      Image:
        "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
      category: "Hollywood",
      cat: "holly",
      Release: "16 Dec, 2022",
      rating: "4.5/5",
      description:
        "Story: A worthy sequel to the 2009 film Avatar, James Cameron takes us back to the stunning world of Pandora, where human turned Na'vi Jake Sully (Sam Worthington) and Na'vi princess Ney'tiri (Zoe Saldaña) must do everything it takes to protect their children from the ‘sky people’ (humans from earth).",
    },
    {
      id: 21,
      title: "Black Panther: Wakanda Forever",
      Image:
        "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
      category: "Hollywood",
      cat: "holly",
      subcat: "Hollywood",

      Release: "11 Nov, 2022",
      rating: "4.7/5",
      description:
        "Story: With King T'Challa's death (Chadwick Boseman), Wakanda is deemed attainable by external forces that envy and fear its resources (metal Vibranium). Can Queen Ramonda (Angela Bassett) and daughter Shuri (Letitia Wright), defend their kingdom in the absence of its benevolent king — the mighty Black Panther?",
    },
    {
      id: 22,
      title:
        "F.R.I.E.N.D.S Forever: A Jennifer Aniston, Courteney Cox And Lisa Kudrow Reunion. Could We Be More Happy?    ",
      Image:
        "https://c.ndtvimg.com/2023-02/db6iq618_jennifer-aniston_625x300_28_February_23.jpg",
      category: "Hollywood-Top",
      subcat: "Hollywood",

      description:
        "We are not crying, you are. So, Courteney Cox made it to the Hollywood Walk of Fame and guess who were there for her big day? Her F.R.I.E.N.D.S co-stars Jennifer Aniston (Rachel Green) and Lisa Kudrow (Pheobe Buffay). The pictures from Courteney Cox's big day were shared by Jennifer on her Instagram profile. The first shot features the actresses celebrating Courteney's big moment. The second picture features them hugging. The last one is a throwback of the trio from their F.R.I.E.N.D.S days.Very proud of our girl Courteney Cox today. I love these women with literally every ounce of my heart and soul. Lisa Kudrow and I were on a cloud being able to celebrate her and her incredible achievements,Jennifer Aniston captioned the post.",
    },
    {
      id: 23,
      title:
        "Makeup artist Rebecca Wachtel reveals details of Riley Keough's transformation into drug-fuelled rockstar Daisy Jones    ",
      Image: "https://static.toiimg.com/photo/98388174.cms",
      category: "Hollywood-Top",
      description:
        "Rebecca did that expertly with the help of a few selected shades of eyeshadow and foundation. To show the sun-kissed look on a fresh-faced Daisy, the make-up used was cream-based. Then, she becomes a rockstar and begins to wear some makeup. Later, when at the height of her fame, Daisy Jones turns into a junkie, she is supposed to look washed out, and to hide that, heavy makeup was used in garish shades to reflect the time.    ",
    },
    {
      id: 24,
      title:
        "Selena Gomez enjoys a carefree fishing trip with her half sister and family    ",
      Image:
        "https://static.toiimg.com/thumb/msid-98386516,width-800,height-600,resizemode-75,imgsize-57680,pt-32,y_pad-40/98386516.jpg",
      category: "Hollywood-Top",
      description:
        "Selena Gomez was recently seen thoroughly enjoying a fishing trip with her family. She posted several pics with her half sister, who is 21 years younger than her. In one photo, she can even be seen casually sporting what appears to be a double chin.    ",
    },
    {
      id: 25,
      title:
        "Will Smith makes award show appearence one year after slap-gate at Oscars    ",
      Image: "https://static.toiimg.com/photo/98389781.cms",
      category: "Hollywood-Top",
      description:
        "Almost a year after slapping comedian Chris Rock during last year's Oscars ceremony for a joke on his wife, actor Will Smith recently made his first award show appearance since the incident.According to report, a US-based entertainment news outlet, Smith took the stage to accept the Beacon Award at the African American Film Critics Association Awards for his role in 'Emancipation",
    },
    {
      id: 26,
      title:
        "Tom Cruise shooting 'Mission: Impossible - Dead Reckoning Part Two' scenes on US aircraft carrier    ",
      Image: "https://static.toiimg.com/photo/98385359.cms",
      category: "Hollywood-Top",
      description:
        "Hollywood star Tom Cruise recently helicoptered onto a US aircraft carrier off the eastern coast of Italy to film sequences for his upcoming film 'Mission: Impossible - Dead Reckoning Part Two', confirmed the chairman of the Apulia Film Commission., reported, a USA-based news outlet.",
    },
    {
      id: 27,
      title:
        "Trailer of Disney's Peter Pan & Wendy sparks inclusivity debate as Yara Shahidi, Alexander Molony and Jude Law star in the remake    ",
      Image: "https://static.toiimg.com/photo/98360525.cms",
      category: "Hollywood-Top",
      description:
        "The trailer for Disney’s remake of an old classic, Peter Pan & Wendy is out with netizens loving the all-inclusive look of diversity in the trailer. Yara Shahidi plays Tinker Bell in this remake, with Alexander Molony playing Peter Pan. The role of the evil Hook has gone to Jude Law. The first Peter Pan film was the animated classic made back in 1953.    ",
    },
    {
      id: 28,
      title:
        "Autonomous Car Start-ups: Top Autonomous Self-Driving Car Unicorns to Watchout ",
      Image:
        "https://www.analyticsinsight.net/wp-content/uploads/2021/09/Top-Autonomous-Self-driving-Car-Unicorns-to-Watchout.jpg",
      category: "Technology",
      description:
        "Autonomous self-driving cars have now become a trend in the world. There are big automakers and technology companies involved in the automation industry, but it is the startups that are making their place in the industry with new inventions. In a populous field of more than 300 startups in self-driving cars, let’s take a closer look at the top autonomous self-driving car companies that have achieved unicorn status. ",
    },
    {
      id: 29,
      title:
        "Apple Blocks an Email App Using Customized Version of OpenAI’s GPT-3",
      Image:
        "https://www.analyticsinsight.net/wp-content/uploads/2023/03/Apple-Blocks-an-Email-App-Using-Customized-Version-of-OpenAIs-GPT-3.jpg",
      category: "Technology-Top",
      description:
        "“Apple continues to treat BlueMail unfairly and discriminate against us, and it has blocked the update for BlueMail. According to Volach, other GPT-powered applications do not appear to be restricted.According to a document viewed by Reuters, Apple asked Blix to either modify the app’s age rating for users older than 17 or implement content filtering before rejecting the update last week. Blix asserts that many other apps on Apple’s app store with similar features do not have age restrictions.",
    },
    {
      id: 30,
      title: "Quartile 3 Robotics Releases Xina AI",
      Image:
        "https://www.analyticsinsight.net/wp-content/uploads/2023/03/Xina-AI-is-released-by-Quartile-3-Robotics.jpg",
      category: "Technology",
      description:
        "Xina AI is released by quartile 3 robotics, Restaurants are always looking for new, creative methods to increase productivity, cut expenses, and deliver outstanding customer service.A voice-ordering app for eateries and motels called Xina AI has been released by Miami Beach-based software firm Quartile 3 Robotics. Restaurant customers can benefit from speech commands to make their purchases through kiosks or mobile devices thanks to Xina AI‘s improvements and use of voice technology. The meal’s details, including quantity, taste, cooking temp, and side dishes, are then determined by Xina’s queries. Additionally, she upsells beverages, sides, and desserts in addition to offering item enhancement.",
    },
    {
      id: 31,
      title:
        "China Brings Sci-Fi Nightmares to Reality! Creates a Dangerous Robot    ",
      Image:
        "https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2022-08/headshots-humanoid-robotics.png",
      category: "Technology",
      description:
        "A video showing a Chinese-made drone carrying a dangerous robot has begun to circulate on social media, and it appears to be a scene from a futuristic war film. As seen in the viral video that a four-legged robot was dropped by a drone that carried a huge gun around.Although it’s not immediately clear whether the video was shot as part of a Chinese military practice or more likely as an attempt to demonstrate how the pairing will work, even without that information, the scene may provide a glimpse of the robot technology that could be used on future battlefields. China creates a dangerous robot, the one-minute video was first published on the Chinese microblogging site Weibo by a user who was either connected to or standing in for the regional defense business that, according to reports, produces the drone being used to launch the robot weapon, a robodog.",
    },
    {
      id: 32,
      title: "How AI Helps Track Contagious Coronavirus Outbreak? ",
      Image:
        "https://media.springernature.com/lw685/springer-static/image/art%3A10.1186%2Fs41205-020-00064-7/MediaObjects/41205_2020_64_Fig1_HTML.png?as=webp",
      description:
        "The novel coronavirus is spreading across the whole world. The outbreak has victimized a number of people. As fast as the COVID-19 virus is spreading, doctors, scientists, and researchers are making great efforts to discover preventive and curing measures. A team headquartered at Boston Children’s Hospital is implementing machine learning to scour through social posts, news reports, data from official public health channels and information supplied by doctors for warning signs that the virus is taking hold in locations outside of China. “There’s incredible data that’s locked away in various tools like online news sites, social media, crowdsourcing, data sources, that you wouldn’t think of that would be used for public health,” said Dr. John Brownstein, chief innovation officer at Boston Children’s Hospital. “But actually they have incredible amounts of information that you wouldn’t find in any sort of traditional government system.” While others in Australian region are using predictive analytics, a branch of artificial intelligence (AI), to forecast how many confirmed COVID-19 cases and deaths can be expected in the near future. According to this, by March 13, the virus death toll will have climbed to 3,913, and confirmed cases will reach 116,250 worldwide, based on data available up to March 5. To develop contingency plans and hopefully head off the worst effects of the coronavirus, governments need to be able to anticipate the future course of the outbreak. This is where predictive analytics could prove invaluable. ",
      subcat: "Technology",
      cat: "Tech",
    },
    {
      id: 33,
      title:
        "How 3D Printing Companies Are Tackling the COVID-19 Pandemic?    ",
      Image:
        "https://www.futuremedicine.com/cms/10.2217/3dp-2020-0028/asset/images/medium/figure1.gif",
      category: "Technology",
      cat: "Tech",
      description:
        "Coronavirus caused COVID-19 pandemic is the worst terrifying episode of mankind’s reign on Earth to date. Not only it has claimed over a hundred thousand lives in its wake, but it has also given many sleepless nights to medical and research professionals across the globe. However, technological advancements occur in the apex of crisis times. Like submarine (U-boats), computers, man’s first step on the moon, etc. have been fruits of war rivalry or race to be labeled as the best of nations. But this is a different battle human civilization is caught up with. With several fields of modern science and computing trying to up the game, there are many unsung heroes too. 3D-printing is such a noble name. 3D printing is viewed as a stopgap solution in this time of crisis of lack of medical equipment shortages. Hospitals and government are turning to industries to come up with innovative ways of resolving this pandemic induced emergency. Automaker legend Volkswagen is using 3D printing to produce face shield components. This aid comes under a joint transnational initiative by Airbus and the 3D printing network, “Mobility goes Additive”. This collaboration includes about 25 companies. And it will send the necessary components to Spain. ŠKODA has developed a 3D printing process to produce reusable FFP3 respirators. Tech giant HP is employing its 3D printing expertise by turning its research-and-development centers in Spain and the United States into factories to manufacture urgent personal protective equipment (P.P.E.). ",
    },
    {
      id: 34,
      title:
        "Significant Implications of Google CEO Sundar Pichai Heading Alphabet",
      Image:
        "https://www.analyticsinsight.net/wp-content/uploads/2019/12/Sundar-Pichai-Google.jpg",
      category: "Technology-Top",
      subcat: "Technology",
      cat: "Tech",
      description:
        "Recently, Google’s CEO Sundar Pichai has replaced Larry Page and Sergey Brin from Alphabet Inc. The latter serves as a parent company to Google. Both the founders have taken a retreat from their active management from the company after 21 years. In a blog that published on Tuesday, Page and Brin quoted, “While it has been a tremendous privilege to be deeply involved in the day-to-day management of the company for so long, we believe it’s time to assume the role of proud parents offering advice and love, but not daily nagging!” It will be interesting to see how Pichai will lead Alphabet which owns over a dozen companies including self-driving car technology business Waymo and health care software company Verily. However, all three leaders have expressed their keenness towards developing and advancing AI software to enhance web searching and other tasks. The new CEO, over time, has made significant efforts in making such technologies globally available. Amid this, as per the investors, streamlining management could also help Alphabet better address challenges and put more focus on growing profits. As this announcement has taken the industry by a boom, here are the few implications and analysis of this leadership shift, suggested by experts – Casey Newton, Silicon Valley Editor and Dieter Bohn, Executive Editor for The Verge and Shira Ovide, former Wall Street Journal reporter. ",
    },
    {
      id: 35,
      title: "Data Analytics will Drive the Growth of IoT",
      Image:
        "https://www.zdnet.com/a/img/resize/fe3cd4335dd088e466578422640b646f641609ec/2020/09/28/6b225a1a-381a-4ceb-b13c-d2d314d41bd7/what-is-the-iot-everything-you-need-to-k-5f6cc13d5f60de4b41b7f3d4-1-sep-28-2020-16-19-38-poster.jpg?auto=webp&fit=crop&height=675&width=1200",
      category: "Technology",
      description:
        "IoT and data remain naturally connected together. Data consumed and created continues developing at an ever-increasing rate. This convergence of data is energizing widespread IoT adoption as there will be almost 30.73 billion IoT connected gadgets by 2020. The Internet of Things (IoT) is an interconnection of a few gadgets, networks, technologies, and HR to accomplish a common objective. There are a variety of IoT-based applications being utilized in various segments and have succeeded with regards to giving gigantic advantages to the users. The ability to present data in an absorbable and important manner is the thing that makes an IoT solution alluring to customers. Anybody can print datasets on a page and hand them off, yet it would require significant investment and time on the user’s end to filter through that data physically and shape it into something they can work with. Data analytics provides clients with the ability to effortlessly get on trends or patterns within the data gathered by their device. The insight given by the data analysis guarantees a user is well furnished with the knowledge expected to settle on effective business or personal product decisions with confidence.",
    },
    {
      id: 36,
      title: "Max Healthcare Improves Efficiency with UiPath Robots",
      Image:
        "https://blog.hettshow.co.uk/hs-fs/hubfs/SAP%20-%20Sponsored%20Content%20-%20Tablet%20lock-up.png?width=200&name=SAP%20-%20Sponsored%20Content%20-%20Tablet%20lock-up.png",
      category: "Technology-Top",
      description:
        "Max Healthcare was facing challenges in processing large volumes of patient transactions while ensuring the accuracy and security of documents. They adopted the UiPath Enterprise RPA Platform to streamline high volume processes like claims processing, data entry, and reconciliation for government healthcare schemes. Being one of the largest hospital networks in North India, Max Healthcare deals with a lot of patient transaction data that needs to be processed on a daily basis. From recording customer details to claims processing and reconciliation of data for government health schemes, everything needs a high level of accuracy and efficiency. Manually processing such large volumes of information is not just time consuming but can also be prone to a lot of errors and security issues. Max Healthcare decided to use the UiPath Enterprise RPA platform to be able to handle this data more efficiently. RPA (Robotic Process Automation has not just ensured a massive reduction in turnaround time (TAT) in current processes but has also paved the path for the organization to move faster on its digital transformation journey. “We deal with so much data here in our system, you know, every patient may probably have hundreds of interactions or episodes within a day. ",
    },
    {
      id: 37,
      title: "How do Data Engineers Control Big Data?    ",
      Image:
        "https://www.analyticsinsight.net/wp-content/uploads/2023/03/How-data-engineers-control-Big-Data.jpg",
      category: "Technology-Top",
      subcat: "Technology",

      description:
        "Data engineers are critical in managing and processing large amounts of data. They are in charge of designing, constructing, and maintaining the infrastructure and tools required to effectively manage and process large amounts of data. This entails collaborating closely with data analysts and data scientists to ensure that big data is efficiently stored, processed, and analyzed to generate insights that inform decision-making. In this article, we have given insight into how data engineers control big data, maintain the systems and implement data security measures. Read to know more.    ",
    },
    {
      id: 38,
      title:
        "The Importance of Emotional AI in Business in the 21st Century    ",
      Image:
        "https://www.analyticsinsight.net/wp-content/uploads/2021/09/The-Importance-of-Emotional-AI-in-Business-in-the-21st-Century.jpg",
      category: "Technology",
      description:
        "The world is moving towards a future dependent on artificial intelligence; therefore, the need for emotional intelligence is now greater than ever. Our relationship with advanced technologies is growing increasingly complex. Mobiles, tablets, and laptops have become an inherent part of our lives. We rely on technology like never before. Emotional intelligence in business management is important because it helps manage the utilization of AI in business and analyzes the marketing efforts for a better customer experience. Several large and small-scale organizational are adopting AI technologies to amplify their growth and surpass prior business results. What is emotional intelligence? To put it in simple words, emotional intelligence is the ability of AI technologies to not just solve complex business problems but to understand the reasons behind the occurrence of such problems and how it is impacting everyone. The machine can care. Learn more about the importance of emotional AI in businesses and how it might affect us in the future. First and foremost, emotional AI allows all business leaders to be empathic and understandable towards each customer in the time of their need.",
    },
    {
      id: 39,
      title:
        "Quantum Computing Will Soon Takeover the Tech-Sphere Leading the Digital Era    ",
      Image:
        "https://www.analyticsinsight.net/wp-content/uploads/2021/09/Quantum-Computing.jpg",
      category: "Technology-Top",
      subcat: "Technology",

      description:
        "The word “quantum” gained momentum in the late twentieth century as a descriptor i.e., something so huge that it defied the normal adjectives. For instance, a “quantum leap” is an emotional headway with lots of drama in it. Now, at the point when “quantum” is applied to “computing,” nonetheless, we are without a doubt entering a time of emotional progression with dramatic advancement. Quantum computing is an innovation that is dependent on the standards and principles of quantum theory, which clarifies the idea of energy and matter on the atomic and subatomic levels. It depends on the presence of mind-bending quantum-mechanical phenomena, like superposition and entanglement. Erwin Schrödinger’s popular 1930’s psychological experiment including a cat that was both dead and alive simultaneously was expected to feature the evident idiocy of superposition, the rule that quantum frameworks can exist in various states at the same time until noticed or estimated. Today, quantum computers contain many qubits (quantum bits), which exploit that very rule. Each qubit exists in a superposition of zero and one (for example has non-zero probabilities to be a zero or a one) until estimated.",
    },
    {
      id: 40,
      title:
        "Viral Blue Ginger is driving the internet nuts: This is what it is actually    ",
      Image:
        "https://pbs.twimg.com/media/Fpf8I5JaIAIhJoK?format=jpg&name=small",
      category: "",
      subcat: "Food",

      description:
        "Viral Blue Ginger is driving the internet nuts: This is what it is actually Ginger is a medicinal spice that has many health benefits. From treating coughs to boosting digestion, it is helpful in many ways. While we all associate ginger with brown or golden tones, the internet is currently going gaga over blue-colored ginger. Yes, you read it right! We are talking about blue ginger. Angellica Aribam, a political activist, recently posted about deep blue ginger on Twitter, and the tweet has taken the internet by storm.",
    },

    {
      id: 41,
      title: "5 Worst Food Items That Can Trigger Stress In Your Body    ",
      Image:
        "https://images.news18.com/ibnlive/uploads/2023/03/untitled-design-2023-03-01t181523.818-16776747633x2.png?impolicy=website&width=510&height=356",
      category: "Food",
      description:
        "What you eat can affect your body’s stress response. In simple terms, food provides the human body with the energy it requires to function. The nutrients from what you eat are observed inside which act like chemical messengers to keep your system healthy and safe. However, when in stress, either you need up eating too much or not eating at all. This is because the food you eat directly affects the body, by either keeping the stress in check or spiking its level. Recently, an award-winning nutritionist Lovneet Batra opened up about the worst food that can trigger stress in the body. ",
    },
    {
      id: 42,
      title:
        "Food Trends for 2023: Sustainable Plant-Forward Diets, Foods for Sleep & Healthy Snacks    ",
      Image:
        "https://images.news18.com/ibnlive/uploads/2023/02/shutterstock_291921743-16768231583x2.jpg?impolicy=website&width=510&height=356",
      category: "Food",
      subcat: "Food-Top",

      description:
        "Food trends for 2023 predict that people will be making responsible food choices, keeping their own and the planet’s wellbeing in mind. It is expected that foods that are sustainable and functional, targeting specific health conditions will find favour with food aficionados and conscious eaters alike. Prakriti Poddar, Global Head, Mental Health and Wellbeing, RoundGlass, explains, “Global food trends for 2023 are closely aligned to mental wellbeing and health. The focus is on marrying scientific knowledge to indigenous wisdom in food to achieve harmony between eating and overall wellness.",
    },
    {
      id: 43,
      title:
        "Replace Your Lunch With These Quick Salad Recipes For Weight Loss    ",
      Image:
        "https://images.news18.com/ibnlive/uploads/2023/02/ketogenic-low-carbs-diet-food-selection-white-wall-16769158063x2.jpg?impolicy=website&width=510&height=356",
      category: "Food",
      subcat: "Food-Top",

      description:
        "If you are following a weight loss routine, all salads may not be suitable for you as many of them could be loaded with unhealthy toppings and dressings. However, there are plenty of quick and healthy salad options which are both nutritious and satisfying. Whether you’re looking for a vegan, vegetarian, or high-protein option the choices are many. So, grab your favorite salad bowl and get ready to create a tasty and healthy lunch.    ",
    },
    {
      id: 44,
      title:
        "Here’s How You Can Order Home-Style Food at Rs.89 From Zomato    ",
      Image:
        "https://images.news18.com/ibnlive/uploads/2023/01/untitled-design-2023-01-23t081915.440-16744423913x2.jpg?impolicy=website&width=510&height=356",
      subcat: "Food-Top",
      description:
        "On Wednesday, the online food delivery business Zomato introduced Zomato Everyday, a service that offers fresh, inexpensive meals that are prepared by real home chefs. According to the platform, Zomato Everyday is presently only offered in a few locations in Gurugram, with fresh meals starting at just Rs 89.",
    },
    {
      id: 45,
      title: "Know All About Priyanka Chopra's Diet Plan To Stay In Shape    ",
      Image:
        "https://images.news18.com/ibnlive/uploads/2023/02/untitled-design-2023-02-24t001928.242-16771782163x2.png?impolicy=website&width=510&height=356",
      category: "Food-Top",
      description:
        "For breakfast, she enjoys something like an omelette or avocado toast. However, if she is craving Indian food, she would go for idli, dosa, or poha. When she visits India, she enjoys eating homemade parathas. For lunch, she also prefers an Indian meal consisting of ragi roti, bhindi, pulses, or potatoes. Sometimes she also goes for a fresh salad bowl or roasts fish with veggies. She mentions that when she is busy with work, she prefers a homemade grain or vegetable salad.    ",
    },
    {
      id: 46,
      title: "Healthy Eating    ",
      Image:
        "https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie-768.jpg",
      category: "Food",
      description:
        "Healthy eating doesn’t have to be overly complicated. If you feel overwhelmed by all the conflicting nutrition and diet advice out there, you’re not alone. It seems that for every expert who tells you a certain food is good for you, you’ll find another saying exactly the opposite. The truth is that while some specific foods or nutrients have been shown to have a beneficial effect on mood, it’s your overall dietary pattern that is most important. The cornerstone of a healthy diet should be to replace processed food with real food whenever possible. Eating food that is as close as possible to the way nature made it can make a huge difference to the way you think, look, and feel.    ",
    },
    {
      id: 47,
      title: "Cooking at Home    ",
      Image:
        "https://www.helpguide.org/wp-content/uploads/woman-mixing-ingredients-and-vegetables-in-pan-while-preparing-lunch-768.jpg",
      category: "Food",
      description:
        "When you prepare your own meals, you have more control over the ingredients. By cooking for yourself, you can ensure that you and your family eat fresh, wholesome meals. This can help you to look and feel healthier, boost your energy, stabilize your weight and mood, and improve your sleep and resilience to stress.    ",
    },
    {
      id: 48,
      title: "Eating Well on a Budget    ",
      Image:
        "https://www.helpguide.org/wp-content/uploads/vegetables-in-bag-pomegranate-apple-piggy-bank-768.jpg",
      category: "Food",
      description:
        "Eating a healthy diet is crucial to your mental and emotional health as well as your physical wellbeing. It can make a huge difference to your mood, energy, waistline, and how well you think and feel. But at a time when so many of us are out of work, facing an uncertain financial future, or living on a tight budget, finding food that is both wholesome and affordable can be a challenge.    ",
    },
    {
      id: 49,
      title: "Healthy Food for Kids    ",
      Image:
        "https://www.helpguide.org/wp-content/uploads/hands-holding-veges-768.jpg",
      subcat: "Food-Top",
      description:
        "Peer pressure and TV commercials for junk food can make getting your children to eat well an uphill struggle. Factor in your own hectic schedule and it’s no wonder so many kids’ diets are built around convenience and takeout food. But switching to a healthy diet can have a profound effect on your child’s health, helping them to maintain a healthy weight, stabilize their moods, sharpen their minds, and avoid a variety of health problems. A healthy diet can also have a profound effect on your child’s sense of mental and emotional wellbeing, helping to prevent conditions such as depression, anxiety, bipolar disorder, schizophrenia, and ADHD.    ",
    },
    {
      id: 50,
      title: "The Diabetes Diet    ",
      Image:
        "https://www.helpguide.org/wp-content/uploads/closeup-man-slicing-veggies-woman-behind-768.jpg",
      category: "Food",
      description:
        "Whether you're trying to prevent or control diabetes, your nutritional needs are virtually the same as everyone else, so no special foods are necessary. But you do need to pay attention to some of your food choices—most notably the carbohydrates you eat. While following a Mediterranean or other heart-healthy diet can help with this, the most important thing you can do is to lose a little weight.    ",
    },
    {
      id: 51,
      title: "Emotional Eating and How to Stop It    ",
      Image:
        "https://www.helpguide.org/wp-content/uploads/young-woman-having-a-midnight-snack-768.jpg",
      subcat: "Food-Top",
      description:
        "Emotional eating is using food to make yourself feel better—to fill emotional needs, rather than your stomach. Unfortunately, emotional eating doesn’t fix emotional problems. In fact, it usually makes you feel worse. Afterward, not only does the original emotional issue remain, but you also feel guilty for overeating.    ",
    },
    {
      id: 52,
      title: "Adding yoga to aerobic exercise",
      Image:
        "https://domf5oio6qrcr.cloudfront.net/medialibrary/13573/66c60680-18fd-46dd-af5e-15774aaefc2f.jpg",
      category: "Fitness",
      description:
        "Yoga can help increase flexibility and balance, but the ancient practice could have another benefit: helping to lower high blood pressure.Researchers recruited 60 people diagnosed with high blood pressure and metabolic syndrome, a cluster of conditions that raises the risk of heart problems and stroke. Participants were randomly divided into two groups. For three months, everyone did 30 minutes of aerobic exercise five days a week followed by either 15 minutes of yoga or 15 minutes of regular muscle stretching.",
    },
    {
      id: 53,
      title: "Taking up adaptive sports",
      Image:
        "https://domf5oio6qrcr.cloudfront.net/medialibrary/13578/e77a02bf-5c6f-4c27-bb39-caa1e6d97d4d.jpg",
      category: "Fitness",
      description:
        "Regular exercise is a prescription for staying healthy and active as you age. But sometimes it’s not that easy. Many older adults face an injury, illness, health condition, or disability that makes activities difficult, if not seemingly impossible. If you are in this category, adaptive sports could be a welcome opportunity.Eventually, almost everyone will experience some kind of disability that impedes regular exercise, whether it’s mild arthritis, a joint problem requiring knee or hip replacement, limited vision, or a more significant physical disability,says Dr. Cheri Blauwet, an associate professor in Physical Medicine and Rehabilitation at Harvard Medical School and a former wheelchair racer,",
    },
    {
      id: 54,
      title: "Hiking, biking, swimming, and more",
      Image:
        "http://content.health.harvard.edu/wp-content/uploads/2022/05/59302d7a-5d09-4388-9257-81ea90f0a035.jpg",
      category: "Fitness",
      description:
        "My favorite summer activities officially kick in when the calendar flips to May. It's prime time for open water swimming, running, cycling, hiking, and anything else that gets me outside and moving. Yet, my first step is to get my legs in shape.Legs are the foundation for most activities, says Vijay Daryanani, a physical therapist at Harvard-affiliated Spaulding Rehabilitation Hospital. They're home to some of the body’s largest muscles, and building healthy legs can improve one’s performance, reduce injury, and increase endurance.",
    },
    {
      id: 55,
      title: "Power your paddle sports",
      Image:
        "https://domf5oio6qrcr.cloudfront.net/medialibrary/12577/320556aa-870b-4186-8366-49e0a3b4f290.jpg",
      category: "Fitness",
      subcat: "Fitness",

      description:
        "Paddling a kayak, canoe, or paddleboard relies on muscles that we likely haven’t used much during winter,says Kathleen Salas, a physical therapist with Spaulding Adaptive Sports Centers at Harvard-affiliated Spaulding Rehabilitation Network.Even if you regularly weight train, the continuous and repetitive motions involved in paddling require endurance and control of specific muscles that need to be properly stretched and strengthened.    ",
    },
    {
      id: 56,
      title: "No equipment necessary",
      Image:
        "https://domf5oio6qrcr.cloudfront.net/medialibrary/10736/949c58ed-7ccc-4a6b-9432-9344e0582274.jpg",
      category: "Fitness",
      description:
        "Body-weight exercises offer many unique benefits for older adults. First of all, they are versatile: you can do them anywhere and don’t need any equipment. Body-weight training is also ideal when returning after an injury or long layoff, when you need to build endurance and confidence.    ",
    },
    {
      id: 57,
      title: "Step up your walking workouts    ",
      Image:
        "https://domf5oio6qrcr.cloudfront.net/medialibrary/13601/1557f4e7-63a1-408e-ab76-2b09c845956f.jpg",
      category: "Fitness",
      subcat: "Fitness",

      description:
        "Walking is one of the most straightforward exercises. You just need a good pair of walking shoes, and off you go.Like any kind of cardio activity, walking can improve your heart health, strengthen your immune system, and help you manage your weight.",
    },
    {
      id: 58,
      title: "Shift work can harm sleep and health: What helps?",
      Image:
        "https://domf5oio6qrcr.cloudfront.net/medialibrary/13612/9fbd722e-c7b8-4512-a70c-8a893b1f2ce8.jpg",
      category: "Fitness-Top",
      description:
        "Mounting evidence, including several new studies, paints a worrisome picture of the potential health fallout of nontraditional shift work schedules that affect 15% to 30% of workers in the US and Europe, including factory and warehouse workers, police officers, nurses, and other first responders.So-called shift work disorder mainly strikes people who work the overnight or early morning shift, or who rotate their shifts, says Eric Zhou, an assistant professor in the Division of Sleep Medicine at Harvard Medical School. ",
    },
    {
      id: 59,
      title: "Energy-boosting coffee alternatives: What to know    ",
      Image:
        "https://domf5oio6qrcr.cloudfront.net/medialibrary/13606/f71a6fa5-2b44-438a-851e-cd6f77bff05b.jpg",
      category: "Fitness-Top",
      subcat: "Fitness",

      description:
        "Coffee-alternative wellness drinks may contain similar plant compounds to those found in regular coffee and green or black tea. It’s fine to choose them if you like the taste. Just don’t assume that they’re healthier, because no strong evidence supports claims of weight loss, heart health, or cancer prevention.These beverages are best enjoyed plain or with only a touch of lemon, honey, unsweetened milk, or plant milk. Processing and added ingredients can negate any health-promoting effects from naturally-occurring plant compounds. For example, some research suggests that adding protein and fat to tea through milk or creamer can reduce antioxidant properties and might deactivate flavonoids.",
    },
    {
      id: 60,
      title: "Do activity trackers make us exercise more?    ",
      Image:
        "http://content.health.harvard.edu/wp-content/uploads/2022/10/5d89bf97-d734-402c-9caa-65c57378bedf.jpg",
      category: "Fitness-Top",
      subcat: "Fitness",

      description:
        "Activity trackers can do more than ever before. They can measure your heart rate, heart rhythm, blood oxygen levels, calories burned, and the number of minutes you spend exercising or sleeping. They can talk to your smartphone or smart gym machines and connect you to workout videos, recipes, or guided meditation. Do trackers get you to move more? Studies of this question have been mixed. ",
    },
    {
      id: 61,
      title: "5 numbers linked to ideal heart health    ",
      Image:
        "http://content.health.harvard.edu/wp-content/uploads/2023/01/e8e80fe7-0a4a-40f2-9163-b773c86e52e4.jpg",
      category: "Fitness-Top",
      cat: "Fit",
      description:
        "How well are you protecting yourself against heart disease, the nation’s leading cause of death? A check of five important numbers can give you a good idea: blood pressure, blood sugar, LDL cholesterol and triglyceride levels, and waist circumference. Those values provide a picture of a person’s overall health and, more specifically, what factors they may need to address to lower their chance of a heart attack or stroke.",
    },
    {
      id: 62,
      title: "Using weight loss or sports supplements? Exercise caution    ",
      Image:
        "https://domf5oio6qrcr.cloudfront.net/medialibrary/11076/74303300-2323-4a01-ae6e-4e5e699c49b9.jpg",
      category: "Fitness-Top",
      cat: "Fit",
      description:
        "The dietary supplement market has boomed to an estimated $46 billion in the US. And it’s expected to continue to expand. If you believe the ads, supplements can improve your memory, joint health, heart health, sexual function, and enhance your well-being in many more ways. But let’s be clear: many dietary supplements — perhaps most — are completely unproven, and may do little to improve health or fight disease. Worse, as a recent study shows, some can actually harm you.",
    },
    {
      id: 63,
      title: "Coming out of COVID    ",
      Image:
        "https://domf5oio6qrcr.cloudfront.net/medialibrary/10735/6f999aaf-9dfa-44a0-9c24-b1eded6a8626.jpg",
      category: "Fitness-Top",
      cat: "Fit",
      description:
        "While many people are anxious to return to their former lives, they should not expect to pick up exactly where they left off,says Dr. Olivia Okereke, a psychiatrist with Harvard-affiliated Massachusetts General Hospital.We don’t know how this new reality will look and feel, at least in the short term, so it’s a good idea to begin preparing mentally and emotionally for returning to a sense of normalcy.",
    },
  ]);
  return (
    <div>
      <store.Provider value={[details, setDetails]}>
        {props.children}
      </store.Provider>
    </div>
  );
};

export default Details;
