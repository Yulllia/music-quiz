const mockResponse = 
     [
      {
        id: "1",
        genre: "jazz",
        data: [
          {
            id: "1-1",
            name: "Louis Armstrong",
            songTitle: "What a Wonderful World",
            image: "images/1-1.jpg",
            audio: "audio/1-1.mp3",
            description:
              'Louis Daniel Armstrong (August 4, 1901 - July 6, 1971), nicknamed "Satchmo", "Satch", and "Pops", was an American trumpeter and vocalist. He is among the most influential figures in jazz. His career spanned five decades and different eras in the history of jazz.',
          },
          {
            id: "1-2",
            name: "Miles Davis",
            songTitle: "Freddie Freeloader",
            image: "images/1-2.jpg",
            audio: "audio/1-2.mp3",
            description:
              "Miles Dewey Davis III (May 26, 1926 - September 28, 1991) was an American trumpeter, bandleader, and composer. He is among the most influential and acclaimed figures in the history of jazz and 20th-century music. Davis adopted a variety of musical directions in a five-decade career that kept him at the forefront of many major stylistic developments in jazz.",
          },
          {
            id: "1-3",
            name: "Ella Fitzgerald",
            songTitle: "Blue Skies",
            image: "images/1-3.jpg",
            audio: "audio/1-3.mp3",
            description:
              'Ella Jane Fitzgerald (April 25, 1917 - June 15, 1996) was an American jazz singer, sometimes referred to as the "First Lady of Song", "Queen of Jazz", and "Lady Ella". She was noted for her purity of tone, impeccable diction, phrasing, timing, intonation, and a "horn-like" improvisational ability, particularly in her scat singing.',
          },
          {
            id: "1-4",
            name: "John Coltrane",
            songTitle: "Everytime We Say Goodbye",
            image: "images/1-4.jpg",
            audio: "audio/1-4.mp3",
            description:
              "John William Coltrane (September 23, 1926 - July 17, 1967) was an American jazz saxophonist and composer. Working in the bebop and hard bop idioms early in his career, Coltrane helped pioneer the use of modes and was one of the players at the forefront of free jazz. He led at least fifty recording sessions and appeared on many albums by other musicians, including trumpeter Miles Davis and pianist Thelonious Monk.",
          },
        ],
      },
      {
        id: "2",
        genre: "rock",
        data: [
          {
            id: "2-1",
            name: "Pink Floyd",
            songTitle: "High Hopes",
            image: "images/2-1.jpg",
            audio: "audio/2-1.mp3",
            description:
              "Pink Floyd were an English rock band formed in London in 1964. Gaining an early following as one of the first British psychedelic groups, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows. They became a leading band of the progressive rock genre, cited by some as the greatest progressive rock band of all time.",
          },
          {
            id: "2-2",
            name: "AC/DC",
            songTitle: "Thunderstruck",
            image: "images/2-2.jpg",
            audio: "audio/2-2.mp3",
            description:
              'AC/DC are an Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young. Their music has been variously described as hard rock, blues rock, and heavy metal, but the band themselves call it simply "rock and roll".',
          },
          {
            id: "2-3",
            name: "Linkin Park",
            songTitle: "Numb",
            image: "images/2-3.jpg",
            audio: "audio/2-3.mp3",
            description:
              "Linkin Park is an American rock band from Agoura Hills, California. The band's current lineup comprises vocalist/rhythm guitarist/keyboardist Mike Shinoda, lead guitarist Brad Delson, bassist Dave Farrell, DJ/turntablist Joe Hahn and drummer Rob Bourdon, all of whom are founding members. Vocalists Mark Wakefield and Chester Bennington are former members of the band. Categorized as alternative rock, Linkin Park's earlier music spanned a fusion of heavy metal and hip hop, while their later music features more electronica and pop elements.",
          },
          {
            id: "2-4",
            name: "Nickelback",
            songTitle: "When We Stand Together",
            image: "images/2-4.jpg",
            audio: "audio/2-4.mp3",
            description:
              "Nickelback is a Canadian rock band formed in 1995 in Hanna, Alberta. It is composed of guitarist and lead vocalist Chad Kroeger, guitarist, keyboardist and backing vocalist Ryan Peake, bassist Mike Kroeger, and drummer Daniel Adair. It went through several drummer changes between 1995 and 2005, achieving its current lineup when Adair replaced Ryan Vikedal.",
          },
        ],
      },
      {
        id: "3",
        genre: "pop",
        data: [
          {
            id: "3-1",
            name: "Beyoncé",
            songTitle: "Halo",
            image: "images/3-1.jpg",
            audio: "audio/3-1.mp3",
            description:
              "Beyoncé Giselle Knowles-Carter is an American singer, songwriter, and actress. Born and raised in Houston, Texas, Beyoncé performed in various singing and dancing competitions as a child. She rose to fame in the late 1990s as the lead singer of Destiny's Child, one of the best-selling girl groups of all time.",
          },
          {
            id: "3-2",
            name: "Michael Jackson",
            songTitle: "Smooth Criminal",
            image: "images/3-2.jpg",
            audio: "audio/3-2.mp3",
            description:
              'Michael Joseph Jackson was an American singer, songwriter and dancer. Dubbed the "King of Pop", he is regarded as one of the most significant cultural figures of the 20th century. Over a four-decade career, his contributions to music, dance and fashion, along with his publicized personal life, made him a global figure in popular culture. Jackson influenced artists across many music genres; through stage and video performances, he popularized complicated dance moves such as the moonwalk, to which he gave the name, as well as the robot. He is the most awarded individual music artist in history.',
          },
          {
            id: "3-3",
            name: "Madonna",
            songTitle: "Hung Up",
            image: "images/3-3.jpg",
            audio: "audio/3-3.mp3",
            description:
              'Madonna Louise Ciccone is an American singer-songwriter and actress. She is considered one of the most influential figures in popular culture and has often been referred to as the "Queen of Pop". Madonna is noted for her continual reinvention and versatility in music production, songwriting, and visual presentation.',
          },
          {
            id: "3-4",
            name: "Elton John",
            songTitle: "I'm Still Standing",
            image: "images/3-4.jpg",
            audio: "audio/3-4.mp3",
            description:
              'Madonna Louise Ciccone is an American singer-songwriter and actress. She is considered one of the most influential figures in popular culture and has often been referred to as the "Queen of Pop". Madonna is noted for her continual reinvention and versatility in music production, songwriting, and visual presentation.',
          },
        ],
      },
      {
        id: "4",
        genre: "soundtrack",
        data: [
          {
            id: "4-1",
            name: "Two Steps from Hell",
            songTitle: "Victory",
            image: "images/4-1.jpg",
            audio: "audio/4-1.mp3",
            description:
              "Two Steps from Hell is an American production music company based in Los Angeles, California, founded by Thomas Bergersen and Nick Phoenix in 2006. The company focuses predominantly on movie and trailer music, and has supplied tracks to films such as Harry Potter, Pirates of the Caribbean, and X-Men.",
          },
          {
            id: "4-2",
            name: "Hans Zimmer",
            songTitle: "Time",
            image: "images/4-2.jpg",
            audio: "audio/4-2.mp3",
            description:
              "Hans Florian Zimmer is a German film score composer and record producer. His works are notable for integrating electronic music sounds with traditional orchestral arrangements. Since the 1980s, Zimmer has composed music for over 150 films. His works include The Lion King (for which he won the Academy Award for Best Original Score in 1995), Crimson Tide, Gladiator, the Pirates of the Caribbean series, The Dark Knight Trilogy, Inception, Interstellar, Dunkirk, Blade Runner 2049, and Dune. He has received four Grammy Awards, three Classical BRIT Awards, three Golden Globes, and an Academy Award. He was also named on the list of Top 100 Living Geniuses, published by The Daily Telegraph.",
          },
          {
            id: "4-3",
            name: "Audiomachine",
            songTitle: "Guardians At the Gate",
            image: "images/4-3.jpg",
            audio: "audio/4-3.mp3",
            description:
              "Audiomachine is an American production music company based in Beverly Hills, California. The company was founded by Paul Dinletir and Carol Sovinski in August 2005, producing music composed by Paul Dinletir and Kevin Rix.",
          },
          {
            id: "4-4",
            name: "Really Slow Motion",
            songTitle: "Collapsing Universe",
            image: "images/4-4.jpg",
            audio: "audio/4-4.mp3",
            description:
              "ReallySlowMotion is a music and sound production team of experienced professionals whose main focus is Film, Game, TV. We write, record, produce and mix under your request to provide you with any soundtrack or sound design your project may need.",
          },
        ],
      },
    ]
  export default mockResponse
  
  