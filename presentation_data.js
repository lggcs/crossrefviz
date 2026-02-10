const PRESENTATION_STYLES = `
  :root {
    --bg-dark: #0a0e14;
    --bg-mid: #111820;
    --accent-primary: #ffd27f;
    --accent-secondary: #ffb347;
    --accent-glow: rgba(255, 210, 127, 0.5);
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.7);
    --card-bg: rgba(10, 14, 20, 0.9);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    min-height: 100%;
  }

  body {
    font-family: 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
    background: var(--bg-dark);
    color: var(--text-primary);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  /* Animated gradient background */
  .bg-animation {
    position: fixed;
    inset: 0;
    background: 
      radial-gradient(ellipse at 20% 30%, rgba(255, 180, 80, 0.15) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 70%, rgba(255, 210, 127, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 50%, rgba(100, 150, 200, 0.05) 0%, transparent 70%),
      var(--bg-dark);
    animation: bgShift 20s ease-in-out infinite alternate;
    z-index: 0;
  }

  @keyframes bgShift {
    0% { transform: scale(1) rotate(0deg); }
    100% { transform: scale(1.1) rotate(1deg); }
  }

  /* Particle effect overlay */
  .particles {
    position: fixed;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    overflow: hidden;
  }

  .particle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: var(--accent-primary);
    border-radius: 50%;
    opacity: 0;
    animation: particleFloat 8s ease-in-out infinite;
  }

  @keyframes particleFloat {
    0%, 100% { opacity: 0; transform: translateY(100vh) scale(0); }
    10% { opacity: 0.8; }
    90% { opacity: 0.8; }
    100% { opacity: 0; transform: translateY(-100vh) scale(1); }
  }

  .main-container {
    position: relative;
    z-index: 10;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
  }

  .title {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 800;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent-primary);
    text-shadow: 
      0 0 20px var(--accent-glow),
      0 0 40px var(--accent-glow),
      0 0 60px rgba(255, 210, 127, 0.3);
    margin-bottom: 2.5rem;
    animation: titleGlow 3s ease-in-out infinite alternate;
  }

  @keyframes titleGlow {
    0% { text-shadow: 0 0 20px var(--accent-glow), 0 0 40px var(--accent-glow); }
    100% { text-shadow: 0 0 30px var(--accent-glow), 0 0 60px var(--accent-glow), 0 0 80px rgba(255, 210, 127, 0.4); }
  }

  .creed-container {
    width: 100%;
    max-width: 1100px;
    position: relative;
  }

  .slide-container {
    position: relative;
    min-height: 500px;
    perspective: 1000px;
  }

  .slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(30px) scale(0.95);
    background: var(--card-bg);
    border-radius: 24px;
    padding: 2.5rem 3rem;
    border: 1px solid rgba(255, 210, 127, 0.15);
    box-shadow: 
      0 25px 80px rgba(0, 0, 0, 0.6),
      0 0 100px rgba(255, 210, 127, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slide.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
  }

  .slide-content {
    max-height: 450px;
    display: flex;
    flex-direction: column;
  }

  .slide-line {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    line-height: 1.2;
    background: linear-gradient(135deg, #ffffff 0%, var(--accent-primary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .slide-subline {
    font-size: 1.15rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.5;
    font-weight: 400;
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .divider-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
  }

  .divider-text {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent-primary);
  }

  .scripture-box {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    border: 1px solid rgba(255, 210, 127, 0.1);
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--text-secondary);
  }

  .scripture-box::-webkit-scrollbar {
    width: 6px;
  }

  .scripture-box::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }

  .scripture-box::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, var(--accent-primary), var(--accent-secondary));
    border-radius: 3px;
  }

  .scripture-box::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, var(--accent-secondary), var(--accent-primary));
  }

  .verse {
    margin: 0.75rem 0;
    padding-left: 1rem;
    border-left: 2px solid rgba(255, 210, 127, 0.3);
    transition: border-left-color 0.3s ease;
  }

  .verse:hover {
    border-left-color: var(--accent-primary);
  }

  .verse-ref {
    font-weight: 700;
    color: var(--accent-primary);
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Prophecy-specific styles */
  .prophecy-ref {
    font-size: 1.1rem;
    font-weight: 700;
    color: #ff6b6b;
    margin-bottom: 0.5rem;
    letter-spacing: 0.1em;
  }

  .fulfillment-ref {
    font-size: 1.1rem;
    font-weight: 700;
    color: #6bcf7f;
    margin-bottom: 1.25rem;
    letter-spacing: 0.1em;
  }

  .verse-prophecy {
    border-left-color: rgba(255, 107, 107, 0.5);
  }

  .verse-prophecy .verse-ref {
    color: #ff6b6b;
  }

  .verse-fulfillment {
    border-left-color: rgba(107, 207, 127, 0.5);
  }

  .verse-fulfillment .verse-ref {
    color: #6bcf7f;
  }

  /* Progress indicator */
  .progress-container {
    display: flex;
    gap: 8px;
    margin-top: 2rem;
    justify-content: center;
  }

  .progress-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 210, 127, 0.2);
    transition: all 0.4s ease;
    cursor: pointer;
  }

  .progress-dot.active {
    background: var(--accent-primary);
    box-shadow: 0 0 15px var(--accent-glow);
    transform: scale(1.3);
  }

  .progress-dot:hover {
    background: var(--accent-secondary);
  }

  /* Navigation buttons */
  .nav-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    justify-content: center;
  }

  .nav-btn {
    padding: 0.75rem 2rem;
    background: transparent;
    border: 1.5px solid rgba(255, 210, 127, 0.3);
    border-radius: 30px;
    color: var(--accent-primary);
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
  }

  .nav-btn:hover {
    background: var(--accent-primary);
    color: var(--bg-dark);
    box-shadow: 0 0 30px var(--accent-glow);
    border-color: var(--accent-primary);
    transform: translateY(-2px);
  }

  .nav-btn:active {
    transform: translateY(0);
  }

  .pause-btn {
    min-width: 140px;
  }

  .pause-btn.paused {
    background: var(--accent-secondary);
    border-color: var(--accent-secondary);
    color: var(--bg-dark);
  }

  .footer {
    margin-top: 2rem;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.4);
    text-align: center;
    font-style: italic;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .slide.active .verse {
    animation: fadeInUp 0.5s ease forwards;
  }

  .slide.active .verse:nth-child(1) { animation-delay: 0.1s; opacity: 0; }
  .slide.active .verse:nth-child(2) { animation-delay: 0.2s; opacity: 0; }
  .slide.active .verse:nth-child(3) { animation-delay: 0.3s; opacity: 0; }
  .slide.active .verse:nth-child(4) { animation-delay: 0.4s; opacity: 0; }
  .slide.active .verse:nth-child(5) { animation-delay: 0.5s; opacity: 0; }
  .slide.active .verse:nth-child(6) { animation-delay: 0.6s; opacity: 0; }
  .slide.active .verse:nth-child(7) { animation-delay: 0.7s; opacity: 0; }
  .slide.active .verse:nth-child(8) { animation-delay: 0.8s; opacity: 0; }

  @media (max-width: 768px) {
    .slide {
      padding: 1.75rem 1.5rem;
    }

    .slide-line {
      font-size: 1.5rem;
    }

    .slide-subline {
      font-size: 1rem;
    }

    .scripture-box {
      font-size: 0.85rem;
      padding: 1rem;
    }

    .slide-container {
      min-height: 450px;
    }

    .title {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 480px) {
    .slide {
      padding: 1.25rem 1rem;
      border-radius: 18px;
    }

    .slide-line {
      font-size: 1.25rem;
    }

    .slide-subline {
      font-size: 0.9rem;
    }

    .scripture-box {
      font-size: 0.8rem;
      line-height: 1.6;
    }

    .nav-buttons {
      flex-direction: column;
      align-items: center;
    }

    .nav-btn {
      width: 100%;
      max-width: 200px;
    }
  }
`;

const creedSlidesHTML = `

      <!-- SLIDE 1 -->
      <div class="slide" data-slide="0">
        <div class="slide-content">
          <div class="slide-line">We believe in one God,</div>
          <div class="slide-subline">Father Almighty, Maker of heaven and earth</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse"><span class="verse-ref">Exodus 20:2–3</span> I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage. Thou shalt have no other gods before me.</div>
            <div class="verse"><span class="verse-ref">Mark 12:29</span> And Jesus answered him, The first of all the commandments is, Hear, O Israel; The Lord our God is one Lord:</div>
            <div class="verse"><span class="verse-ref">Isaiah 44:6</span> Thus saith the LORD the King of Israel, and his redeemer the LORD of hosts; I am the first, and I am the last; and beside me there is no God.</div>
            <div class="verse"><span class="verse-ref">Deuteronomy 6:4</span> Hear, O Israel: The LORD our God is one LORD:</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 2 -->
      <div class="slide" data-slide="1">
        <div class="slide-content">
          <div class="slide-line">Maker of heaven and earth,</div>
          <div class="slide-subline">of all things visible and invisible</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse"><span class="verse-ref">Genesis 1:1</span> In the beginning God created the heaven and the earth.</div>
            <div class="verse"><span class="verse-ref">Isaiah 44:24</span> Thus saith the LORD, thy redeemer, and he that formed thee from the womb, I am the LORD that maketh all things; that stretcheth forth the heavens alone; that spreadeth abroad the earth by myself;</div>
            <div class="verse"><span class="verse-ref">Colossians 1:16</span> For by him were all things created, that are in heaven, and that are in earth, visible and invisible, whether they be thrones, or dominions, or principalities, or powers: all things were created by him, and for him:</div>
            <div class="verse"><span class="verse-ref">John 1:3</span> All things were made by him; and without him was not any thing made that was made.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 3 -->
      <div class="slide" data-slide="2">
        <div class="slide-content">
          <div class="slide-line">We believe in one Lord Jesus Christ,</div>
          <div class="slide-subline">the only-begotten Son of God</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse"><span class="verse-ref">John 3:16</span> For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.</div>
            <div class="verse"><span class="verse-ref">John 1:14</span> And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.</div>
            <div class="verse"><span class="verse-ref">1 John 4:9</span> In this was manifested the love of God toward us, because that God sent his only begotten Son into the world, that we might live through him.</div>
            <div class="verse"><span class="verse-ref">Hebrews 1:5</span> For unto which of the angels said he at any time, Thou art my Son, this day have I begotten thee? And again, I will be to him a Father, and he shall be to me a Son?</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 4 -->
      <div class="slide" data-slide="3">
        <div class="slide-content">
          <div class="slide-line">Begotten, not made,</div>
          <div class="slide-subline">being of one substance with the Father</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse"><span class="verse-ref">John 1:1</span> In the beginning was the Word, and the Word was with God, and the Word was God.</div>
            <div class="verse"><span class="verse-ref">John 10:30</span> I and my Father are one.</div>
            <div class="verse"><span class="verse-ref">Colossians 2:9</span> For in him dwelleth all the fulness of the Godhead bodily.</div>
            <div class="verse"><span class="verse-ref">Philippians 2:6</span> Who, being in the form of God, thought it not robbery to be equal with God:</div>
            <div class="verse"><span class="verse-ref">Isaiah 9:6</span> For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 5 -->
      <div class="slide" data-slide="4">
        <div class="slide-content">
          <div class="slide-line">By whom all things were made;</div>
          <div class="slide-subline">who for us men and for our salvation</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse"><span class="verse-ref">John 1:3</span> All things were made by him; and without him was not any thing made that was made.</div>
            <div class="verse"><span class="verse-ref">Colossians 1:16</span> For by him were all things created, that are in heaven, and that are in earth, visible and invisible, whether they be thrones, or dominions, or principalities, or powers: all things were created by him, and for him:</div>
            <div class="verse"><span class="verse-ref">1 Corinthians 8:6</span> But to us there is but one God, the Father, of whom are all things, and we in him; and one Lord Jesus Christ, by whom are all things, and we by him.</div>
            <div class="verse"><span class="verse-ref">Hebrews 1:2</span> Hath in these last days spoken unto us by his Son, whom he hath appointed heir of all things, by whom also he made the worlds;</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 6 -->
      <div class="slide" data-slide="5">
        <div class="slide-content">
          <div class="slide-line">Came down from heaven,</div>
          <div class="slide-subline">and was incarnate by the Holy Ghost</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse"><span class="verse-ref">John 6:38</span> For I came down from heaven, not to do mine own will, but the will of him that sent me.</div>
            <div class="verse"><span class="verse-ref">John 16:28</span> I came forth from the Father, and am come into the world: again, I leave the world, and go to the Father.</div>
            <div class="verse"><span class="verse-ref">Matthew 1:18–20</span> Now the birth of Jesus Christ was on this wise: When as his mother Mary was espoused to Joseph, before they came together, she was found with child of the Holy Ghost. Then Joseph her husband, being a just man, and not willing to make her a publick example, was minded to put her away privily. But while he thought on these things, behold, the angel of the Lord appeared unto him in a dream, saying, Joseph, thou son of David, fear not to take unto thee Mary thy wife: for that which is conceived in her is of the Holy Ghost.</div>
            <div class="verse"><span class="verse-ref">Luke 1:35</span> And the angel answered and said unto her, The Holy Ghost shall come upon thee, and the power of the Highest shall overshadow thee: therefore also that holy thing which shall be born of thee shall be called the Son of God.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 7 -->
      <div class="slide" data-slide="6">
        <div class="slide-content">
          <div class="slide-line">Of the Virgin Mary,</div>
          <div class="slide-subline">and was made man</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse"><span class="verse-ref">Luke 1:26–33</span> And in the sixth month the angel Gabriel was sent from God unto a city of Galilee, named Nazareth, To a virgin espoused to a man whose name was Joseph, of the house of David; and the virgin's name was Mary. And the angel came in unto her, and said, Hail, thou that art highly favoured, the Lord is with thee: blessed art thou among women. And when she saw him, she was troubled at his saying, and cast in her mind what manner of salutation this should be. And the angel said unto her, Fear not, Mary: for thou hast found favour with God. And, behold, thou shalt conceive in thy womb, and bring forth a son, and shalt call his name JESUS. He shall be great, and shall be called the Son of the Highest: and the Lord God shall give unto him the throne of his father David: And he shall reign over the house of Jacob for ever; and of his kingdom there shall be no end.</div>
            <div class="verse"><span class="verse-ref">Matthew 1:23</span> Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us.</div>
            <div class="verse"><span class="verse-ref">Isaiah 7:14</span> Therefore the Lord himself shall give you a sign; Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 8 -->
      <div class="slide" data-slide="7">
        <div class="slide-content">
          <div class="slide-line">And was crucified also for us</div>
          <div class="slide-subline">under Pontius Pilate</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse"><span class="verse-ref">Matthew 27:22–26</span> Pilate saith unto them, What shall I do then with Jesus which is called Christ? They all say unto him, Let him be crucified. And the governor said, Why, what evil hath he done? But they cried out the more, saying, Let him be crucified. When Pilate saw that he could prevail nothing, but that rather a tumult was made, he took water, and washed his hands before the multitude, saying, I am innocent of the blood of this just person: see ye to it. Then answered all the people, and said, His blood be on us, and on our children. Then released he Barabbas unto them: and when he had scourged Jesus, he delivered him to be crucified.</div>
            <div class="verse"><span class="verse-ref">1 Peter 2:24</span> Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should live unto righteousness: by whose stripes ye were healed.</div>
            <div class="verse"><span class="verse-ref">1 Corinthians 15:3</span> For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures;</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 9 -->
      <div class="slide" data-slide="8">
        <div class="slide-content">
          <div class="slide-line">He suffered and was buried,</div>
          <div class="slide-subline">and the third day he rose again</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse"><span class="verse-ref">Isaiah 53:5–7</span> But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed. All we like sheep have gone astray; we have turned every one to his own way; and the LORD hath laid on him the iniquity of us all. He was oppressed, and he was afflicted, yet he opened not his mouth: he is brought as a lamb to the slaughter, and as a sheep before her shearers is dumb, so he openeth not his mouth.</div>
            <div class="verse"><span class="verse-ref">Matthew 27:59–60</span> And when Joseph had taken the body, he wrapped it in a clean linen cloth, And laid it in his own new tomb, which he had hewn out in the rock: and he rolled a great stone to the door of the sepulchre, and departed.</div>
            <div class="verse"><span class="verse-ref">1 Corinthians 15:4</span> And that he was buried, and that he rose again the third day according to the scriptures:</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 10 -->
      <div class="slide" data-slide="9">
        <div class="slide-content">
          <div class="slide-line">And ascended into heaven,</div>
          <div class="slide-subline">and sitteth on the right hand of the Father</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse"><span class="verse-ref">Mark 16:19</span> So then after the Lord had spoken unto them, he was received up into heaven, and sat on the right hand of God.</div>
            <div class="verse"><span class="verse-ref">Luke 24:50–51</span> And he led them out as far as to Bethany, and he lifted up his hands, and blessed them. And it came to pass, while he blessed them, he was parted from them, and carried up into heaven.</div>
            <div class="verse"><span class="verse-ref">Acts 1:9–11</span> And when he had spoken these things, while they beheld, he was taken up; and a cloud received him out of their sight. And while they looked stedfastly toward heaven as he went up, behold, two men stood by them in white apparel; Which also said, Ye men of Galilee, why stand ye gazing up into heaven? this same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven.</div>
            <div class="verse"><span class="verse-ref">Hebrews 1:3</span> Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power, when he had by himself purged our sins, sat down on the right hand of the Majesty on high;</div>
            <div class="verse"><span class="verse-ref">Ephesians 1:20</span> Which he wrought in Christ, when he raised him from the dead, and set him at his own right hand in the heavenly places,</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 11 -->
      <div class="slide" data-slide="10">
        <div class="slide-content">
          <div class="slide-line">And he shall come again</div>
          <div class="slide-subline">with glory, to judge both the quick and the dead</div>
          <div style="font-size: 0.75rem; color: rgba(255, 255, 255, 0.5); font-style: italic; margin-top: -0.5rem; margin-bottom: 1rem;">
            * quick: the living.     
          </div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse"><span class="verse-ref">Matthew 25:31–32</span> When the Son of man shall come in his glory, and all the holy angels with him, then shall he sit upon the throne of his glory: And before him shall be gathered all nations: and he shall separate them one from another, as a shepherd divideth his sheep from the goats:</div>
            <div class="verse"><span class="verse-ref">Acts 1:11</span> Which also said, Ye men of Galilee, why stand ye gazing up into heaven? this same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven.</div>
            <div class="verse"><span class="verse-ref">2 Timothy 4:1</span> I charge thee therefore before God, and the Lord Jesus Christ, who shall judge the quick and the dead at his appearing and his kingdom;</div>
            <div class="verse"><span class="verse-ref">Revelation 1:7</span> Behold, he cometh with clouds; and every eye shall see him, and they also which pierced him: and all kindreds of the earth shall wail because of him. Even so, Amen.</div>
            <div class="verse"><span class="verse-ref">John 5:22</span> For the Father judgeth no man, but hath committed all judgment unto the Son:</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 12 -->
      <div class="slide" data-slide="11">
        <div class="slide-content">
          <div class="slide-line">Whose kingdom shall have no end</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse"><span class="verse-ref">Luke 1:33</span> And he shall reign over the house of Jacob for ever; and of his kingdom there shall be no end.</div>
            <div class="verse"><span class="verse-ref">Daniel 7:14</span> And there was given him dominion, and glory, and a kingdom, that all people, nations, and languages, should serve him: his dominion is an everlasting dominion, which shall not pass away, and his kingdom that which shall not be destroyed.</div>
            <div class="verse"><span class="verse-ref">Revelation 11:15</span> And the seventh angel sounded; and there were great voices in heaven, saying, The kingdoms of this world are become the kingdoms of our Lord, and of his Christ; and he shall reign for ever and ever.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 13 -->
      <div class="slide" data-slide="12">
        <div class="slide-content">
          <div class="slide-line">We believe in the Holy Spirit,</div>
          <div class="slide-subline">the Lord, the Giver of life</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse"><span class="verse-ref">John 14:16–17</span> And I will pray the Father, and he shall give you another Comforter, that he may abide with you for ever; Even the Spirit of truth; whom the world cannot receive, because it seeth him not, neither knoweth him: but ye know him; for he dwelleth with you, and shall be in you.</div>
            <div class="verse"><span class="verse-ref">John 16:7–8</span> Nevertheless I tell you the truth; It is expedient for you that I go away: for if I go not away, the Comforter will not come unto you; but if I depart, I will send him unto you. And when he is come, he will reprove the world of sin, and of righteousness, and of judgment:</div>
            <div class="verse"><span class="verse-ref">Romans 8:9</span> But ye are not in the flesh, but in the Spirit, if so be that the Spirit of God dwell in you. Now if any man have not the Spirit of Christ, he is none of his.</div>
            <div class="verse"><span class="verse-ref">1 Corinthians 2:10–11</span> But God hath revealed them unto us by his Spirit: for the Spirit searcheth all things, yea, the deep things of God. For what man knoweth the things of a man, save the spirit of man which is in him? even so the things of God knoweth no man, but the Spirit of God.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 14 -->
      <div class="slide" data-slide="13">
        <div class="slide-content">
          <div class="slide-line">Who proceedeth from the Father and the Son</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse"><span class="verse-ref">John 15:26</span> But when the Comforter is come, whom I will send unto you from the Father, even the Spirit of truth, which proceedeth from the Father, he shall testify of me:</div>
            <div class="verse"><span class="verse-ref">John 16:13–15</span> Howbeit when he, the Spirit of truth, is come, he will guide you into all truth: for he shall not speak of himself; but whatsoever he shall hear, that shall he speak: and he will shew you things to come. He shall glorify me: for he shall receive of mine, and shall shew it unto you. All things that the Father hath are mine: therefore said I, that he shall take of mine, and shall shew it unto you.</div>
            <div class="verse"><span class="verse-ref">Ephesians 3:14–16</span> For this cause I bow my knees unto the Father of our Lord Jesus Christ, Of whom the whole family in heaven and earth is named, That he would grant you, according to the riches of his glory, to be strengthened with might by his Spirit in the inner man;</div>
            <div class="verse"><span class="verse-ref">Galatians 4:6</span> And because ye are sons, God hath sent forth the Spirit of his Son into your hearts, crying, Abba, Father.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 15 -->
      <div class="slide" data-slide="14">
        <div class="slide-content">
          <div class="slide-line">We believe in one holy catholic and apostolic Church.</div>
          <div style="font-size: 0.75rem; color: rgba(255, 255, 255, 0.5); font-style: italic; margin-top: -0.5rem; margin-bottom: 1rem;">
            * catholic: the universal body of Christ, all believers in Him.
          </div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse"><span class="verse-ref">Matthew 16:18</span> And I say also unto thee, That thou art Peter, and upon this rock I will build my church; and the gates of hell shall not prevail against it.</div>
            <div class="verse"><span class="verse-ref">Ephesians 4:4–6</span> There is one body, and one Spirit, even as ye are called in one hope of your calling; One Lord, one faith, one baptism, One God and Father of all, who is above all, and through all, and in you all.</div>
            <div class="verse"><span class="verse-ref">1 Corinthians 12:13</span> For by one Spirit are we all baptized into one body, whether we be Jews or Gentiles, whether we be bond or free; and have been all made to drink into one Spirit.</div>
            <div class="verse"><span class="verse-ref">Ephesians 2:20</span> And are built upon the foundation of the apostles and prophets, Jesus Christ himself being the chief corner stone;</div>
            <div class="verse"><span class="verse-ref">1 Corinthians 3:11</span> For other foundation can no man lay than that is laid, which is Jesus Christ.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 16 -->
      <div class="slide" data-slide="15">
        <div class="slide-content">
          <div class="slide-line">We acknowledge one baptism for the remission of sins</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse"><span class="verse-ref">Acts 2:38</span> Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.</div>
            <div class="verse"><span class="verse-ref">Acts 22:16</span> And now why tarriest thou? arise, and be baptized, and wash away thy sins, calling on the name of the Lord.</div>
            <div class="verse"><span class="verse-ref">Romans 6:3–4</span> Know ye not, that so many of us as were baptized into Jesus Christ were baptized into his death? Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life.</div>
            <div class="verse"><span class="verse-ref">1 Peter 3:21</span> The like figure whereunto even baptism doth also now save us (not the putting away of the filth of the flesh, but the answer of a good conscience toward God,) by the resurrection of Jesus Christ:</div>
            <div class="verse"><span class="verse-ref">Mark 16:16</span> He that believeth and is baptized shall be saved; but he that believeth not shall be damned.</div>
          </div>
        </div>
      </div>

    </div>

    `;

const prophecySlidesHTML = `

      <!-- SLIDE 1: Virgin Birth -->
      <div class="slide" data-slide="0">
        <div class="slide-content">
          <div class="prophecy-ref">PROPHECY: Isaiah 7:14</div>
          <div class="slide-line">Born of a Virgin</div>
          <div class="fulfillment-ref">FULFILLED: Luke 1:35</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse verse-prophecy"><span class="verse-ref">Isaiah 7:14</span> Therefore the Lord himself shall give you a sign; Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Luke 1:35</span> And the angel answered and said unto her, The Holy Ghost shall come upon thee, and the power of the Highest shall overshadow thee: therefore also that holy thing which shall be born of thee shall be called the Son of God.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Matthew 1:23</span> Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 2: Birthplace Bethlehem -->
      <div class="slide" data-slide="1">
        <div class="slide-content">
          <div class="prophecy-ref">PROPHECY: Micah 5:2</div>
          <div class="slide-line">Born in Bethlehem</div>
          <div class="fulfillment-ref">FULFILLED: Matthew 2:1-6</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse verse-prophecy"><span class="verse-ref">Micah 5:2</span> But thou, Bethlehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Matthew 2:1</span> Now when Jesus was born in Bethlehem of Judaea in the days of Herod the king, behold, there came wise men from the east to Jerusalem,</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Matthew 2:4-6</span> And when he had gathered all the chief priests and scribes of the people together, he demanded of them where Christ should be born. And they said unto him, In Bethlehem of Judaea: for thus it is written by the prophet, And thou Bethlehem, in the land of Juda, art not the least among the princes of Juda: for out of thee shall come a Governor, that shall rule my people Israel.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 3: Seed of Abraham -->
      <div class="slide" data-slide="2">
        <div class="slide-content">
          <div class="prophecy-ref">PROPHECY: Genesis 12:3; 22:18</div>
          <div class="slide-line">Seed of Abraham Blesses All Nations</div>
          <div class="fulfillment-ref">FULFILLED: Galatians 3:8, 16</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse verse-prophecy"><span class="verse-ref">Genesis 12:3</span> And in thee shall all families of the earth be blessed.</div>
            <div class="verse verse-prophecy"><span class="verse-ref">Genesis 22:18</span> And in thy seed shall all the nations of the earth be blessed; because thou hast obeyed my voice.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Galatians 3:8</span> And the scripture, foreseeing that God would justify the heathen through faith, preached before the gospel unto Abraham, saying, In thee shall all nations be blessed.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Galatians 3:16</span> Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, And to thy seed, which is Christ.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 4: Descendant of David -->
      <div class="slide" data-slide="3">
        <div class="slide-content">
          <div class="prophecy-ref">PROPHECY: 2 Samuel 7:12-13; Jeremiah 23:5-6</div>
          <div class="slide-line">Descendant of David</div>
          <div class="fulfillment-ref">FULFILLED: Matthew 1:1; Luke 3:31</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse verse-prophecy"><span class="verse-ref">2 Samuel 7:12-13</span> And when thy days be fulfilled, and thou shalt sleep with thy fathers, I will set up thy seed after thee, which shall proceed out of thy bowels, and I will establish his kingdom. He shall build an house for my name, and I will stablish the throne of his kingdom for ever.</div>
            <div class="verse verse-prophecy"><span class="verse-ref">Jeremiah 23:5-6</span> Behold, the days come, saith the LORD, that I will raise unto David a righteous Branch, and a King shall reign and prosper, and shall execute judgment and justice in the earth. In his days Judah shall be saved, and Israel shall dwell safely: and this is his name whereby he shall be called, THE LORD OUR RIGHTEOUSNESS.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Matthew 1:1</span> The book of the generation of Jesus Christ, the son of David, the son of Abraham.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Luke 3:31</span> Which was the son of Nathan, which was the son of David,</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 5: Messiah's Ministry in Galilee -->
      <div class="slide" data-slide="4">
        <div class="slide-content">
          <div class="prophecy-ref">PROPHECY: Isaiah 9:1-2</div>
          <div class="slide-line">Ministry Begins in Galilee</div>
          <div class="fulfillment-ref">FULFILLED: Matthew 4:12-17</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse verse-prophecy"><span class="verse-ref">Isaiah 9:1-2</span> Nevertheless the dimness shall not be such as was in her vexation, when at the first he lightly afflicted the land of Zebulun and the land of Naphtali, and afterward did more grievously afflict her by the way of the sea, beyond Jordan, in Galilee of the nations. The people that walked in darkness have seen a great light: they that dwell in the land of the shadow of death, upon them hath the light shined.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Matthew 4:12-13</span> Now when Jesus had heard that John was cast into prison, he departed into Galilee; And leaving Nazareth, he came and dwelt in Capernaum, which is upon the sea coast, in the borders of Zabulon and Nephthalim:</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Matthew 4:15-17</span> The land of Zabulon, and the land of Nephthalim, by the way of the sea, beyond Jordan, Galilee of the Gentiles; The people which sat in darkness saw great light; and to them which sat in the region and shadow of death light is sprung up. From that time Jesus began to preach, and to say, Repent: for the kingdom of heaven is at hand.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 6: Triumphal Entry on Donkey -->
      <div class="slide" data-slide="5">
        <div class="slide-content">
          <div class="prophecy-ref">PROPHECY: Zechariah 9:9</div>
          <div class="slide-line">Riding on a Donkey</div>
          <div class="fulfillment-ref">FULFILLED: Matthew 21:1-11</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse verse-prophecy"><span class="verse-ref">Zechariah 9:9</span> Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass, and upon a colt the foal of an ass.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Matthew 21:1-5</span> And when they drew nigh unto Jerusalem, and were come to Bethphage, unto the mount of Olives, then sent Jesus two disciples, Saying unto them, Go into the village over against you, and straightway ye shall find an ass tied, and a colt with her: loose them, and bring them unto me. And if any man say ought unto you, ye shall say, The Lord hath need of them; and straightway he will send them. All this was done, that it might be fulfilled which was spoken by the prophet, saying, Tell ye the daughter of Sion, Behold, thy King cometh unto thee, meek, and sitting upon an ass, and a colt the foal of an ass.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">John 12:12-13</span> On the next day much people that were come to the feast, when they heard that Jesus was coming to Jerusalem, Took branches of palm trees, and went forth to meet him, and cried, Hosanna: Blessed is the King of Israel that cometh in the name of the Lord.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 7: Betrayal for 30 Pieces of Silver -->
      <div class="slide" data-slide="6">
        <div class="slide-content">
          <div class="prophecy-ref">PROPHECY: Zechariah 11:12-13</div>
          <div class="slide-line">Betrayed for Thirty Pieces of Silver</div>
          <div class="fulfillment-ref">FULFILLED: Matthew 26:14-16; 27:3-10</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse verse-prophecy"><span class="verse-ref">Zechariah 11:12-13</span> And I said unto them, If ye think good, give me my price; and if not, forbear. So they weighed for my price thirty pieces of silver. And the LORD said unto me, Cast it unto the potter: a goodly price that I was prised at of them. And I took the thirty pieces of silver, and cast them to the potter in the house of the LORD.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Matthew 26:14-16</span> Then one of the twelve, called Judas Iscariot, went unto the chief priests, And said unto them, What will ye give me, and I will deliver him unto you? And they covenanted with him for thirty pieces of silver. And from that time he sought opportunity to betray him.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Matthew 27:3-5</span> Then Judas, which had betrayed him, when he saw that he was condemned, repented himself, and brought again the thirty pieces of silver to the chief priests and elders, Saying, I have sinned in that I have betrayed the innocent blood. And they said, What is that to us? see thou to that. And he cast down the pieces of silver in the temple, and departed, and went and hanged himself.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 8: False Witnesses – Silent Before Accusers -->
      <div class="slide" data-slide="7">
        <div class="slide-content">
          <div class="prophecy-ref">PROPHECY: Psalm 35:11; Isaiah 53:7</div>
          <div class="slide-line">False Witnesses, Silent Before Accusers</div>
          <div class="fulfillment-ref">FULFILLED: Matthew 26:59-63; 27:12-14</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse verse-prophecy"><span class="verse-ref">Psalm 35:11</span> False witnesses did rise up; they laid to my charge things that I knew not.</div>
            <div class="verse verse-prophecy"><span class="verse-ref">Isaiah 53:7</span> He was oppressed, and he was afflicted, yet he opened not his mouth: he is brought as a lamb to the slaughter, and as a sheep before her shearers is dumb, so he openeth not his mouth.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Matthew 26:59-60</span> Now the chief priests, and elders, and all the council, sought false witness against Jesus, to put him to death; But found none: yea, though many false witnesses came, yet found they none. At the last came two false witnesses,</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Matthew 27:12-14</span> And when he was accused of the chief priests and elders, he answered nothing. Then said Pilate unto him, Hearest thou not how many things they witness against thee? And he answered him to never a word; insomuch that the governor marvelled greatly.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 9: Struck and Spat Upon -->
      <div class="slide" data-slide="8">
        <div class="slide-content">
          <div class="prophecy-ref">PROPHECY: Isaiah 50:6; Micah 5:1</div>
          <div class="slide-line">Struck, Spat Upon, Mocked</div>
          <div class="fulfillment-ref">FULFILLED: Matthew 26:67-68; 27:29-30</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse verse-prophecy"><span class="verse-ref">Isaiah 50:6</span> I gave my back to the smiters, and my cheeks to them that plucked off the hair: I hid not my face from shame and spitting.</div>
            <div class="verse verse-prophecy"><span class="verse-ref">Micah 5:1</span> Now gather thyself in troops, O daughter of troops: he hath laid siege against us: they shall smite the judge of Israel with a rod upon the cheek.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Matthew 26:67-68</span> Then did they spit in his face, and buffeted him; and others smote him with the palms of their hands, Saying, Prophesy unto us, thou Christ, Who is he that smote thee?</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Matthew 27:29-30</span> And when they had platted a crown of thorns, they put it upon his head, and a reed in his right hand: and they bowed the knee before him, and mocked him, saying, Hail, King of the Jews! And they spit upon him, and took the reed, and smote him on the head.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 10: Hands and Feet Pierced -->
      <div class="slide" data-slide="9">
        <div class="slide-content">
          <div class="prophecy-ref">PROPHECY: Psalm 22:16; Zechariah 12:10</div>
          <div class="slide-line">Hands and Feet Pierced</div>
          <div class="fulfillment-ref">FULFILLED: John 19:34-37; 20:25-27</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse verse-prophecy"><span class="verse-ref">Psalm 22:16</span> For dogs have compassed me: the assembly of the wicked have inclosed me: they pierced my hands and my feet.</div>
            <div class="verse verse-prophecy"><span class="verse-ref">Zechariah 12:10</span> And I will pour upon the house of David, and upon the inhabitants of Jerusalem, the spirit of grace and of supplications: and they shall look upon me whom they have pierced, and they shall mourn for him, as one mourneth for his only son, and shall be in bitterness for him, as one that is in bitterness for his firstborn.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">John 19:34-37</span> But one of the soldiers with a spear pierced his side, and forthwith came there out blood and water. And he that saw it bare record, and his record is true: and he knoweth that he saith true, that ye might believe. For these things were done, that the scripture should be fulfilled, A bone of him shall not be broken. And again another scripture saith, They shall look on him whom they pierced.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">John 20:25-27</span> The other disciples therefore said unto him, We have seen the Lord. But he said unto them, Except I shall see in his hands the print of the nails, and put my finger into the print of the nails, and thrust my hand into his side, I will not believe. Then saith he to Thomas, Reach hither thy finger, and behold my hands; and reach hither thy hand, and thrust it into my side: and be not faithless, but believing.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 11: Crucified With Sinners -->
      <div class="slide" data-slide="10">
        <div class="slide-content">
          <div class="prophecy-ref">PROPHECY: Isaiah 53:12</div>
          <div class="slide-line">Numbered With the Transgressors</div>
          <div class="fulfillment-ref">FULFILLED: Mark 15:27-28; Luke 23:33</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse verse-prophecy"><span class="verse-ref">Isaiah 53:12</span> Therefore will I divide him a portion with the great, and he shall divide the spoil with the strong; because he hath poured out his soul unto death: and he was numbered with the transgressors; and he bare the sin of many, and made intercession for the transgressors.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Mark 15:27-28</span> And with him they crucify two thieves; the one on his right hand, and the other on his left. And the scripture was fulfilled, which saith, And he was numbered with the transgressors.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Luke 23:33</span> And when they were come to the place, which is called Calvary, there they crucified him, and the malefactors, one on the right hand, and the other on the left.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Luke 23:34</span> Then said Jesus, Father, forgive them; for they know not what they do. And they parted his raiment, and cast lots.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 12: No Bones Broken -->
      <div class="slide" data-slide="11">
        <div class="slide-content">
          <div class="prophecy-ref">PROPHECY: Exodus 12:46; Psalm 34:20</div>
          <div class="slide-line">Not a Bone of Him Broken</div>
          <div class="fulfillment-ref">FULFILLED: John 19:31-36</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse verse-prophecy"><span class="verse-ref">Exodus 12:46</span> In one house shall it be eaten; thou shalt not carry forth ought of the flesh abroad out of the house; neither shall ye break a bone thereof.</div>
            <div class="verse verse-prophecy"><span class="verse-ref">Psalm 34:20</span> He keepeth all his bones: not one of them is broken.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">John 19:31-33</span> The Jews therefore, because it was the preparation, that the bodies should not remain upon the cross on the sabbath day, (for that sabbath day was an high day,) besought Pilate that their legs might be broken, and that they might be taken away. Then came the soldiers, and brake the legs of the first, and of the other which was crucified with him. But when they came to Jesus, and saw that he was dead already, they brake not his legs:</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">John 19:36</span> For these things were done, that the scripture should be fulfilled, A bone of him shall not be broken.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 13: Buried in Rich Man's Tomb -->
      <div class="slide" data-slide="12">
        <div class="slide-content">
          <div class="prophecy-ref">PROPHECY: Isaiah 53:9</div>
          <div class="slide-line">Buried in a Rich Man's Grave</div>
          <div class="fulfillment-ref">FULFILLED: Matthew 27:57-60</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse verse-prophecy"><span class="verse-ref">Isaiah 53:9</span> And he made his grave with the wicked, and with the rich in his death; because he had done no violence, neither was any deceit in his mouth.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Matthew 27:57-60</span> When the even was come, there came a rich man of Arimathaea, named Joseph, who also himself was Jesus' disciple: He went to Pilate, and begged the body of Jesus. Then Pilate commanded the body to be delivered. And when Joseph had taken the body, he wrapped it in a clean linen cloth, And laid it in his own new tomb, which he had hewn out in the rock: and he rolled a great stone to the door of the sepulchre, and departed.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 14: Resurrection -->
      <div class="slide" data-slide="13">
        <div class="slide-content">
          <div class="prophecy-ref">PROPHECY: Psalm 16:10; Isaiah 53:10</div>
          <div class="slide-line">Resurrected, Not See Corruption</div>
          <div class="fulfillment-ref">FULFILLED: Acts 2:31-32; Romans 6:9</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse verse-prophecy"><span class="verse-ref">Psalm 16:10</span> For thou wilt not leave my soul in hell; neither wilt thou suffer thine Holy One to see corruption.</div>
            <div class="verse verse-prophecy"><span class="verse-ref">Isaiah 53:10</span> Yet it pleased the LORD to bruise him; he hath put him to grief: when thou shalt make his soul an offering for sin, he shall see his seed, he shall prolong his days, and the pleasure of the LORD shall prosper in his hand.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Acts 2:31-32</span> He seeing this before spake of the resurrection of Christ, that his soul was not left in hell, neither his flesh did see corruption. This Jesus hath God raised up, whereof we all are witnesses.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Romans 6:9</span> Knowing that Christ being raised from the dead dieth no more; death hath no more dominion over him.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 15: Ascension -->
      <div class="slide" data-slide="14">
        <div class="slide-content">
          <div class="prophecy-ref">PROPHECY: Psalm 68:18; Psalm 24:7-10</div>
          <div class="slide-line">Ascended into Heaven</div>
          <div class="fulfillment-ref">FULFILLED: Luke 24:50-51; Acts 1:9-11</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse verse-prophecy"><span class="verse-ref">Psalm 68:18</span> Thou hast ascended on high, thou hast led captivity captive: thou hast received gifts for men; yea, for the rebellious also, that the LORD God might dwell among them.</div>
            <div class="verse verse-prophecy"><span class="verse-ref">Psalm 24:7-10</span> Lift up your heads, O ye gates; and be ye lift up, ye everlasting doors; and the King of glory shall come in. Who is this King of glory? The LORD strong and mighty, the LORD mighty in battle. Lift up your heads, O ye gates; even lift them up, ye everlasting doors; and the King of glory shall come in. Who is this King of glory? The LORD of hosts, he is the King of glory. Selah.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Luke 24:50-51</span> And he led them out as far as to Bethany, and he lifted up his hands, and blessed them. And it came to pass, while he blessed them, he was parted from them, and carried up into heaven.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Acts 1:9-11</span> And when he had spoken these things, while they beheld, he was taken up; and a cloud received him out of their sight. And while they looked stedfastly toward heaven as he went up, behold, two men stood by them in white apparel; Which also said, Ye men of Galilee, why stand ye gazing up into heaven? this same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 16: Great I AM -->
      <div class="slide" data-slide="15">
        <div class="slide-content">
          <div class="prophecy-ref">PROPHECY: Exodus 3:14</div>
          <div class="slide-line">The Great "I AM"</div>
          <div class="fulfillment-ref">FULFILLED: John 4:26; 8:58</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse verse-prophecy"><span class="verse-ref">Exodus 3:14</span> And God said unto Moses, I AM THAT I AM: and he said, Thus shalt thou say unto the children of Israel, I AM hath sent me unto you.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">John 4:26</span> Jesus saith unto her, I that speak unto thee am he.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">John 8:58</span> Jesus said unto them, Verily, verily, I say unto you, Before Abraham was, I am.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 17: Suffering Servant - Isaiah 53 -->
      <div class="slide" data-slide="16">
        <div class="slide-content">
          <div class="prophecy-ref">PROPHECY: Isaiah 53:3-5</div>
          <div class="slide-line">Despised and Rejected</div>
          <div class="fulfillment-ref">FULFILLED: Luke 4:28-29; Matthew 27:27-31</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse verse-prophecy"><span class="verse-ref">Isaiah 53:3-5</span> He is despised and rejected of men; a man of sorrows, and acquainted with grief: and we hid as it were our faces from him; he was despised, and we esteemed him not. Surely he hath borne our griefs, and carried our sorrows: yet we did esteem him stricken, smitten of God, and afflicted. But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Luke 4:28-29</span> And all they in the synagogue, when they heard these things, were filled with wrath, And rose up, and thrust him out of the city, and led him unto the brow of the hill whereon their city was built, that they might cast him down headlong.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Matthew 27:27-31</span> Then the soldiers of the governor took Jesus into the common hall, and gathered unto him the whole band of soldiers. And they stripped him, and put on him a scarlet robe. And when they had platted a crown of thorns, they put it upon his head, and a reed in his right hand: and they bowed the knee before him, and mocked him, saying, Hail, King of the Jews! And they spit upon him, and took the reed, and smote him on the head. And after that they had mocked him, they took the robe off from him, and put his own raiment on him, and led him away to crucify him.</div>
          </div>
        </div>
      </div>

      <!-- SLIDE 18: Light to the Gentiles -->
      <div class="slide" data-slide="17">
        <div class="slide-content">
          <div class="prophecy-ref">PROPHECY: Isaiah 42:6; 49:6</div>
          <div class="slide-line">Light to the Gentiles</div>
          <div class="fulfillment-ref">FULFILLED: Acts 13:47; Acts 26:23</div>
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">Scripture</div>
            <div class="divider-line"></div>
          </div>
          <div class="scripture-box">
            <div class="verse verse-prophecy"><span class="verse-ref">Isaiah 42:6</span> I the LORD have called thee in righteousness, and will hold thine hand, and will keep thee, and give thee for a covenant of the people, for a light of the Gentiles;</div>
            <div class="verse verse-prophecy"><span class="verse-ref">Isaiah 49:6</span> And he said, It is a light thing that thou shouldest be my servant to raise up the tribes of Jacob, and to restore the preserved of Israel: I will also give thee for a light to the Gentiles, that thou mayest be my salvation unto the end of the earth.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Acts 13:47</span> For so hath the Lord commanded us, saying, I have set thee to be a light of the Gentiles, that thou shouldest be for salvation unto the ends of the earth.</div>
            <div class="verse verse-fulfillment"><span class="verse-ref">Acts 26:23</span> That Christ should suffer, and that he should be the first that should rise from the dead, and should shew light unto the people, and to the Gentiles.</div>
          </div>
        </div>
      </div>

    </div>

    `;
