import { Adventure } from './adventure';

export const ADVENTURES: Adventure[] = [
  {
    id: 11,
    title: "You're walking in the woods...",
    author: "John Doe",
    imgUrl: "./assets/images/shia-labeouf.jpg",
    pages: [
      {
        pageNum: 1,
        text: "You're walking in the woods.",
        options: [
          {action: "Look around", turnTo: 3},
          {action: "Keep walking", turnTo: 2}
        ]
      },
      {
        pageNum: 2,
        text: "You get an eerie feeling about the woods.",
        options: [
          {action: "Look around", turnTo: 3}
        ]
      },
      {
        pageNum: 3,
        text: "There's no one around.",
        options: [
          {action: "Take a break", turnTo: 4},
          {action: "Check your phone", turnTo: 6},
          {action: "Keep walking", turnTo: 5}
        ]
      },
      {
        pageNum: 4,
        text: "You want to rest, but feel uneasy in these woods.",
        options: [
          {action: "Keep walking", turnTo: 5},
          {action: "Check your phone", turnTo: 6}
        ]
      },
      {
        pageNum: 5,
        text: "You get a strange feeling you are not alone in the woods.",
        options: [
          {action: "Take a break", turnTo: 4},
          {action: "Check your phone", turnTo: 6}
        ]
      },
      {
        pageNum: 6,
        text: "And your phone is dead",
        options: [
          {action: "Keep walking", turnTo: 7},
          {action: "Look around", turnTo: 8}
        ]
      },
      {
        pageNum: 7,
        text: "You feel like someone is watching you... You decide to look around.",
        options: [
          {action: "Continue", turnTo: 8},
        ]
      },
      {
        pageNum: 8,
        text: "Out of the corner of your eye you spot him, Shia Labeouf",
        options: [
          {action: "Walk", turnTo: 10},
          {action: "Get his autograph", turnTo: 9},
          {action: "Run", turnTo: 10}
        ]
      },
      {
        pageNum: 9,
        text: "He proceeds to eat your face...",
        options: [
        ]
      },
      {
        pageNum: 10,
        text: "He gets down on all fours and breaks into a sprint.",
        options: [
          {action: "Run deeper into the woods", turnTo: 11},
          {action: "Look for your car", turnTo: 12}
        ]
      },
      {
        pageNum: 11,
        text: "He continues to gain on you...",
        options: [
          {action: "Give up running", turnTo: 9},
          {action: "Look for your car", turnTo: 12}
        ]
      },
      {
        pageNum: 12,
        text: "You're looking for your car, but you're all turned around. He's almost "
                + "upon you now and you can see there's blood on his face! My God, "
                + "there's blood everywhere!",
        options: [
          {action: "Run away!", turnTo: 14},
          {action: "Try to fight!", turnTo: 13}
        ]
      },
      {
        pageNum: 13,
        text: "He is ready for you... And you lose...",
        options: [
          {action: "Continue", turnTo: 9}
        ]
      },
      {
        pageNum: 14,
        text: "Running for your life (from Shia Labeouf).",
        options: [
          {action: "Continue", turnTo: 15}
        ]
      },
      {
        pageNum: 15,
        text: "He's brandishing a knife. (It's Shia Labeouf)",
        options: [
          {action: "Continue", turnTo: 16}
        ]
      },
      {
        pageNum: 16,
        text: "Lurking in the shadows. Hollywood superstar Shia Labeouf.",
        options: [
          {action: "Continue", turnTo: 17}
        ]
      },
      {
        pageNum: 17,
        text: "Living in the woods, (Shia Labeouf). Killing for sport, (Shia Labeouf).",
        options: [
          {action: "Continue", turnTo: 18}
        ]
      },
      {
        pageNum: 18,
        text: "Eating all the bodies. Actual canibal, Shia Labeouf.",
        options: [
          {action: "Continue", turnTo: 19}
        ]
      },
      {
        pageNum: 19,
        text: "Now it's dark and you seem to have lost him, but you're hopelessly lost "
                + "yourself. Stranded with a murderer...",
        options: [
          {action: "Hide behind a tree", turnTo: 20},
          {action: "Sneak quietly through the woods", turnTo: 22}
        ]
      },
      {
        pageNum: 20,
        text: "You take a break but feel like it isn't safe to stay here.",
        options: [
          {action: "Keep running", turnTo: 21},
          {action: "Sneakily keep moving", turnTo: 22}
        ]
      },
      {
        pageNum: 21,
        text: "As you run you alert him to your presence. He starts chasing you again.",
        options: [
          {action: "Continue", turnTo: 19}
        ]
      },
      {
        pageNum: 22,
        text: "You creep silently through the underbush. Aha! In the distance, a "
                + "small cottage with a light on. Hope!",
        options: [
          {action: "Move stealthily towards it", turnTo: 23}
        ]
      },
      {
        pageNum: 23,
        text: "But your leg! AH! It's caught in a bear trap!",
        options: [
          {action: "Scream", turnTo: 24},
          {action: "Gnaw off your leg", turnTo: 25}
        ]
      },
      {
        pageNum: 24,
        text: "You give away your location. He grows closer as you struggle to get free.",
        options: [
          {action: "Next", turnTo: 9}
        ]
      },
      {
        pageNum: 25,
        text: "Gnawing off your leg. (Quiet, quiet)",
        options: [
          {action: "Limp towards the cottage", turnTo: 27},
          {action: "Crawl back towards the woods", turnTo: 26}
        ]
      },
      {
        pageNum: 26,
        text: "You crawl onto another bear trap and silently bleed to death.",
        options: [
        ]
      },
      {
        pageNum: 27,
        text: "Limping toward the cottage. (Quiet, quiet)",
        options: [
          {action: "Next", turnTo: 28},
        ]
      },
      {
        pageNum: 28,
        text: "Now you're on the doorstep. Sitting inside, Shia Labeouf.",
        options: [
          {action: "Next", turnTo: 29}
        ]
      },
      {
        pageNum: 29,
        text: "Sharpening an axe. (Shia Labeouf)",
        options: [
          {action: "Go inside", turnTo: 31},
          {action: "Stay outside", turnTo: 30}
        ]
      },
      {
        pageNum: 30,
        text: "You are sitting on the door step, bleeding out.",
        options: [
        ]
      },
      {
        pageNum: 31,
        text: "But he doesn't hear you enter. (Shia Labeouf)",
        options: [
          {action: "Sneak along the wall", turnTo: 32},
          {action: "Sneak up behind him", turnTo: 34}
        ]
      },
      {
        pageNum: 32,
        text: "You knock something off the wall. He hears you and comes at you with the axe.",
        options: [
          {action: "Continue", turnTo: 33}
        ]
      },
      {
        pageNum: 33,
        text: "He's stronger than you think. Using the axe, he takes off your head.",
        options: [
        ]
      },
      {
        pageNum: 34,
        text: "You're sneaking up behind him...",
        options: [
          {action: "Attempt to strangle him", turnTo: 35},
          {action: "Try to take his axe", turnTo: 33}
        ]
      },
      {
        pageNum: 35,
        text: "Strangling superstar Shia Labeouf. Fighting for your life with Shia "
                + "Labeouf. He pulls out a knife.",
        options: [
          {action: "Continue strangling him", turnTo: 36},
          {action: "Attempt to take the knife", turnTo: 37}
        ]
      },
      {
        pageNum: 36,
        text: "He stabs you with the knife. You fall to the floor, weak from your loss of blood.",
        options: [
          {action: "Next", turnTo: 9}
        ]
      },
      {
        pageNum: 37,
        text: "Wrestling a knife from Shia Labeouf. You have taken it from him.",
        options: [
          {action: "Stab him in the gut", turnTo: 38},
          {action: "Go for the neck", turnTo: 40}
        ]
      },
      {
        pageNum: 38,
        text: "Stab it in his kidney. Safe at last from Shia Labeouf.",
        options: [
          {action: "Next", turnTo: 39}
        ]
      },
      {
        pageNum: 39,
        text: "You limp into the dark woods, blood oozing from your stump leg. You've "
                + "beaten Shia Labeouf.",
        options: [
          {action: "Continue", turnTo: 41}
        ]
      },
      {
        pageNum: 40,
        text: "He dodges to the right. You over swing and fall to the floor.",
        options: [
          {action: "Next", turnTo: 9}
        ]
      },
      {
        pageNum: 41,
        text: "Or so you though... End of part 1.",
        options: [
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Pokemon: I Choose You!",
    author: "Billy Bob",
    imgUrl: "./assets/images/pokemon.jpg",
    pages: [
      {
        pageNum: 1,
        text: "First things first. How old are you?",
        options: [
          {action: "Older than 10", turnTo: 3},
          {action: "Younger than 10", turnTo: 2}
        ]
      },
      {
        pageNum: 2,
        text: "\"I'm sorry,\" says Professor Oak. \"You are too young to get a Pokemon.\" "
                + "You walk home disappointed.",
        options: [
          {action: "Wait a couple years", turnTo: 3},
        ]
      },
      {
        pageNum: 3,
        text: "It's the night before you begin your journey to become a Pokemon master. How exciting!",
        options: [
          {action: "It's a big day tomorrow. Better go to sleep early.", turnTo: 4},
          {action: "I'm so excited that I can't sleep!", turnTo: 13}
        ]
      },
      {
        pageNum: 4,
        text: "You wake up and head on over to Professor Oak's lab. \"Good morning,\" "
                + "he greets you. He begins to ask you questions such as your name, "
                + "gender, and the name of his grandson. Eventually, he presents 3 "
                + "Pokeballs to you and asks, \"Which Pokemon would you like to start with?\"",
        options: [
          {action: "Bulbasaur!", turnTo: 5},
          {action: "Charmander!", turnTo: 6},
          {action: "Squirtle!", turnTo: 12}
        ]
      },
      {
        pageNum: 5,
        text: "\"Bulbasaur!?!\" Professor Oak exclaims. \"Everyone knows that grass "
                + "is like the lamest type ever!!!\" Discouraged by his words, you "
                + "leave. Over the infinitely long year, you gain some badges, but "
                + "realize that it's impossible to become a Pokemon master with Bulbasaur.",
        options: [
        ]
      },
      {
        pageNum: 6,
        text: "\"Ahh, Charmander. Good choice! Eventually, he can evolve to a Charizard, "
                + "which is lit.\" You stand content with the choice you make.",
        options: [
          {action: "But someone just walked in!", turnTo: 7}
        ]
      },
      {
        pageNum: 7,
        text: "\"Hey gramps! I'm here to pick up my first Pokemon!\" It's your childhood "
                + "rival and grandson of Professor Oak, Farts.\n \"Well since you "
                + "picked Charmander, I'll go ahead and pick Squirtle!\"",
        options: [
          {action: "FUUUUUUUUUUUU", turnTo: 8}
        ]
      },
      {
        pageNum: 8,
        text: "\"Hey, whatdya say we have a battle to try these Pokemon out?\"",
        options: [
          {action: "Let's do it!", turnTo: 9},
          {action: "No way!", turnTo: 11}
        ]
      },
      {
        pageNum: 9,
        text: "You engage in battle. What move do you use?",
        options: [
          {action: "Scratch", turnTo: 10},
          {action: "Growl", turnTo: 10},
          {action: "Ember", turnTo: 10}
        ]
      },
      {
        pageNum: 10,
        text: "Farts' Squirtle is faster and goes first.\nHe uses Bubble!\nIt's super "
                + "effective!\nCharmander's tail was hit and the flame goes out instantly... "
                + "and he dies.\n\nWhelp, so much for being a Pokemon master.",
        options: [
        ]
      },
      {
        pageNum: 11,
        text: "You can't run away.",
        options: [
          {action: "FUUUUUUUUUUUU", turnTo: 9}
        ]
      },
      {
        pageNum: 12,
        text: "Knowing that the first gym holds rock Pokemon, wisely go with Squirtle..."
                + "\n\nYou proceed to beat the Elite 4 and become a Pokemon master.\n\n=D",
        options: [
        ]
      },
      {
        pageNum: 13,
        text: "The next morning, you wake up late. You rush over to Professor Oak's "
                + "lab without even changing out of your pajamas.",
        options: [
          {action: "Please have Pokemon left for me!", turnTo: 14}
        ]
      },
      {
        pageNum: 14,
        text: "\"Sorry. All the Pokemon have already been claimed,\" Professor Oak "
                + "starts. \"but I did catch this Pikachu this morning. You can have it if you want.\"",
        options: [
          {action: "I guess I'll take it...", turnTo: 15}
        ]
      },
      {
        pageNum: 15,
        text: "You begin your quest, slaying all the Pidgeys you run into with ease. "
                + "Then, out of nowhere, these 2 people pop out!",
        options: [
          {action: "Who are you!?!", turnTo: 16}
        ]
      },
      {
        pageNum: 16,
        text: "\"Prepare for trouble! Make it double! To protect the world from devastation! "
                + "To unite all peoples within our nations! To denounce the evils of "
                + "truth and love! To extend our reach to the starts above! Jessie! "
                + "James! Team Rocket, blast off at the speed of light! Surrender now or prepare to fight! Meowth, that's right!\"",
        options: [
          {action: "What do you guys want from me?", turnTo: 17}
        ]
      },
      {
        pageNum: 17,
        text: "\"We've come to steal your Pikachu!\"",
        options: [
          {action: "Sure. You can have it.", turnTo: 18},
          {action: "No way! Battle me for it!", turnTo: 19}
        ]
      },
      {
        pageNum: 18,
        text: "You hand Team Rocket your Pikachu and head back home. You proceed to "
                + "get great grades that get you into a top private school. From there, "
                + "you become a dentist, meet the love of your life, and continue to "
                + "live a happy and satisfying life.",
        options: [
        ]
      },
      {
        pageNum: 19,
        text: "Team Rocket send out their Weezing, Arbok, and Meowth to battle. Turns "
                + "out these 3 Pokemon are more than enough to beat your Pikachu. "
                + "They do so, steal your Pikachu, and as you walk back home, Pidgeys attack you to avenge their fallen brethren.",
        options: [
        ]
      }
    ]
  },
  {
    id: 13,
    title: "The Mystery of the Haunted House",
    author: "Paul Channel",
    imgUrl: "./assets/images/haunted-house.jpg",
    pages: [
      {
        pageNum: 1,
        text: "It is summertime again, vacation time. You go to your uncle's house. "
                + "He takes you on a tour around the city. There are many old buildings, "
                + "but the oldest of all is on Main Street. The address is 880. He "
                + "says that it is haunted, but you don't believe him.",
        options: [
          {action: "Go inside", turnTo: 2},
          {action: "Don't go inside", turnTo: 3}
        ]
      },
      {
        pageNum: 2,
        text: "You say, \"I will go inside.\" He says, \"I want to watch you.\" You "
                + "start up the stone steps of the old haunted house. You open the "
                + "door and step inside and suddenly a sharp arrow streaks across "
                + "in front of you! But it misses you.",
        options: [
          {action: "Go up the staircase", turnTo: 4},
          {action: "Go through the swinging doors", turnTo: 5}
        ]
      },
      {
        pageNum: 3,
        text: "You stay there. Then you decide to go home, have an ice cream, and go to bed.",
        options: [
        ]
      },
      {
        pageNum: 4,
        text: "You go up the stairs. You lean against the railing and it breaks. You "
                + "fall and that's the end of you.",
        options: [

        ]
      },
      {
        pageNum: 5,
        text: "You go through the swinging doors. You walk through the room.",
        options: [
          {action: "Step inside the closet", turnTo: 6},
          {action: "Take the passageway under the house", turnTo: 7}
        ]
      },
      {
        pageNum: 6,
        text: "You go into the closet. You fall through a trapdoor and break your "
                + "leg. The walls are too smooth to climb. There is no other way up.",
        options: [
        ]
      },
      {
        pageNum: 7,
        text: "You go into a pasaageway under the house. You make your way along and "
                + "it leads to a trapdoor that takes you back to where you started "
                + "from. You meet a policeman at the top and he says to you, \"You "
                + "were lucky to get out of there. Don't ever go in there again!\" "
                + "You go home and have some ice cream.",
        options: [
        ]
      },
    ]
  },
  {
    id: 14,
    title: "My Travels",
    author: "Jane Roe",
    imgUrl: "./assets/images/road.jpg",
    pages: [
      {
        pageNum: 1,
        text: "Your traveling to a distance city (that you’ve never been to before) "
                + "to find work. As you get close to the city, you hear what sounds "
                + "like a small fight a little off the path. You venture closer to see "
                + "what is happening. Three guards are trying to trap one man. The man "
                + "looks to be a weary traveller like yourself, wearing cheap leather "
                + "clothes, and also like yourself, has a descent sword. What do you do?",
        options: [
          {action: "Continue to the city, this has nothing to do with you.", turnTo: 2},
          {action: "Help the guards. Maybe they can help you can get a job.", turnTo: 3},
          {action: "Attack the guards, this isn’t a fair fight, and you like to fight!", turnTo: 4},
          {action: "Wait and see if someone drops something shiny!", turnTo: 5}
        ]
      },
      {
        pageNum: 2,
        text: "Another group of guards finds you. They draw their weapons and start "
                + "to speak in a language you don’t understand. What do you do?",
        options: [
          {action: "Try to explain yourself. You did nothing wrong.", turnTo: 5},
          {action: "Attack the guards! Who the h*ll are they!", turnTo: 6},
          {action: "Run! They must be slower.", turnTo: 7}
        ]
      },
      {
        pageNum: 3,
        text: "You try to help the guards, but end up killing the person they were "
                + "trying to capture. The guards speak in a language that you don’t "
                + "understand, but one of them points to you and says \"murderer\". "
                + "What do you do?",
        options: [
          {action: "Try to explain yourself. You were trying to help!", turnTo: 5},
          {action: "Attack the guards! You can take them!", turnTo: 6},
          {action: "Run! They must be tried.", turnTo: 7}
        ]
      },
      {
        pageNum: 4,
        text: "The two of you end up killing the three guards. The person you helped "
                + "looks at you suspiciously and doesn’t put his sword away. What do you do?",
        options: [
          {action: "Attack him, why not?", turnTo: 6},
          {action: "Start to loot the bodies of the guards, but keeping an eye on the other guy.", turnTo: 8},
          {action: "Leave the area, but keep an eye on the other guy.", turnTo: 7}
        ]
      },
      {
        pageNum: 5,
        text: "The guards don’t understand you and attack you. You are caught off guard and killed.",
        options: [
        ]
      },
      {
        pageNum: 6,
        text: "You kill everyone! All the loot is yours!",
        options: [
        ]
      },
      {
        pageNum: 7,
        text: "You escape, but you dare not go to the city. You start your travels in another direction.",
        options: [
        ]
      },
      {
        pageNum: 8,
        text: "The man ends up trusting you somewhat. He puts his sword away, and "
                + "helps you loot the bodies. The two of you decide to travel together, "
                + "but not to the city.",
        options: [
        ]
      }
    ]
  },
  {
    id: 15,
    title: "High School Romance",
    author: "Tyshawn Johns",
    imgUrl: "./assets/images/high-school.jpg",
    pages: [
      {
        pageNum: 1,
        text: "The homecoming dance is this weekend, and you still don't have a date. "
                + "You're a little shy, and haven't actually asked anyone yet. Who "
                + "would you like to talk to?",
        options: [
          {action: "No one, I'll just go stag.", turnTo: 2},
          {action: "The new girl, Rachel. I don't know anything about her, but I bet she doesn't have a date yet.", turnTo: 4},
          {action: "Shawna, my best friend since kindergarden. I know she'll say yes!", turnTo: 12},
          {action: "Kelly, the homecoming queen. It can't hurt to ask, right?", turnTo: 22}
        ]
      },
      {
        pageNum: 2,
        text: "Are you sure you want to go alone?  Finding a date was really kind of "
                + "the point of this story.",
        options: [
          {action: "Yes, I don't need a date to have fun.", turnTo: 3},
          {action: "You're right, I'll go back and choose a girl.", turnTo: 1}
        ]
      },
      {
        pageNum: 3,
        text: "You go to the homecoming dance by yourself.  And somewhere, miles away, "
                + "a lonely story writer sighs at the thought of the ENTIRE STORY that you missed.",
        options: [
        ]
      },
      {
        pageNum: 4,
        text: "Rachel just moved here last week.  You haven't had the chance to talk "
                + "to her much, but she seems nice enough.\n\nAs you head into your "
                + "math class, you see Rachel sitting at a desk by the window. You "
                + "walk over to her and say",
        options: [
          {action: "\"Hi, Rachel!\"", turnTo: 5},
          {action: "\"Hey, want to go to the dance with me?\"", turnTo: 6}
        ]
      },
      {
        pageNum: 5,
        text: "Rachel looks confused.\n\"Hi?\"\nYou sit down at the desk in front of "
                + "her, and turn to continue speaking.",
        options: [
          {action: "\"I'm sure you don't have a date to the dance yet, so I'll let you go with me\"", turnTo: 6},
          {action: "\"I know this is kinda out of nowhere, but I was wondering if anyone had asked you to the dance.\"", turnTo: 7}
        ]
      },
      {
        pageNum: 6,
        text: "Rachel looks confused, then angry.\n\"That's not funny!\"\n\"No, really, "
                + "I wanted to know if you-\"\n\"Leave me alone!\"\nRachel refuses "
                + "to speak to you the rest of the day.\n\nLooks like you lost your "
                + "chance with Rachel.",
        options: [
        ]
      },
      {
        pageNum: 7,
        text: "Rachel looks like she doesn't know whether to be angry or amused.\n\"Are "
                + "you, like, asking me to go to the dance with you?\"",
        options: [
          {action: "\"No, I just wanted to know if anyone else had.\"", turnTo: 6},
          {action: "\"Yes.\"", turnTo: 8},
          {action: "\"I know you don't really know anyone here yet, and I thought maybe you and I could go together.\"", turnTo: 11}
        ]
      },
      {
        pageNum: 8,
        text: "Rachel gives a small laugh.\n\"You work fast, don't you?\"\nShe twirls "
                + "a piece of her copper-red hair around one finger and gives you "
                + "a playful grin.\n\"So, am I your girlfriend now?\"",
        options: [
          {action: "\"That's a little fast, even for me! How about we just go to the dance together and take it from there?\"", turnTo: 9},
          {action: "\"What? No! I just wanted a date to the dance! What are you, some kind of stalker?\"", turnTo: 6},
          {action: "\"Yeah, and next week my fiancee, and the week after that, we'll get married!\"", turnTo: 10}
        ]
      },
      {
        pageNum: 9,
        text: "Rachel sighs.\n\"I was just kidding. You don't have much of a sense "
                + "of humor, do you?\"\nYou start to say something, but the math "
                + "teacher walks in and you have to turn around and pay attention. "
                + "Halfway through class, Rachel passes you a note.\n\"Do you still "
                + "want to go to the dance?\"\nYou write \"yes\" on the paper and "
                + "hand it back to her.\n\nCongratulations, you got a date to the dance!",
        options: [
        ]
      },
      {
        pageNum: 10,
        text: "Rachel laughs and replies happily,\n\"You're absolutely hilarious! "
                + "Anyway, the joke's on you, because I accept!  We'll live in my "
                + "mom's basement, and have six kids!\"\nShe's still laughing as "
                + "she scribbles something on a piece of paper and hands it to you. "
                + "It's a phone number!\n\"Seriously, I'd love to go to the dance "
                + "with you. You seem like my kind of guy. Call me after school, "
                + "okay?\"\n\nCongratulations!  You got a date to the dance, plus you "
                + "and Rachel seem like a good match!",
        options: [
        ]
      },
      {
        pageNum: 11,
        text: "Rachel looks thoughtful for a second.\n\"Um... no thanks. I don't want "
                + "a pity invite.\"\nBefore you can say anything else, your math "
                + "teacher walks in and you have to turn around and pay attention to "
                + "the class.\n\nLooks like you lost your chance with Rachel.",
        options: [
        ]
      },
      {
        pageNum: 12,
        text: "Shawna is standing by your locker, clearly waiting for you.\n\"Where "
                + "have you been all morning?  Oh my gosh, I have been waiting to "
                + "tell you... it's the best thing ever... Scott Standish asked me "
                + "to the dance!! Can you believe it??!!\"\nScott Standish?  Star "
                + "Athlete--Honor Student--Super Good Looking--Practically Perfect--Scott "
                + "Standish?!\n\nWell, this is good news for Shawna.  She's only been "
                + "trying to get him to ask her out for like, six months.  Still, if "
                + "she goes with Scott, what about your prospects for the dance?",
        options: [
          {action: "\"I think it's great you finally got a date with the boy of your dreams, Shawna.\"", turnTo: 13},
          {action: "\"But Shawna, I was going to ask you to the dance.\"", turnTo: 14}
        ]
      },
      {
        pageNum: 13,
        text: "You tell Shawna how lucky she is, and wish her good luck on her date "
                + "with Scott.  You're a good friend. Not very good at this game, "
                + "but a good friend.",
        options: [
        ]
      },
      {
        pageNum: 14,
        text: "Shawna looks confused.\n\"You want to go to the homecoming dance with me?\"",
        options: [
          {action: "\"Yeah, just as friends.\"", turnTo: 15},
          {action: "\"Yeah, I really like you, Shawna.\"", turnTo: 18}
        ]
      },
      {
        pageNum: 15,
        text: "Shawna laughs at you.\n\"Why would I go to the dance with you when "
                + "Scott asked me first?\"",
        options: [
          {action: "\"You're right, you shoud go with Scott.\"", turnTo: 13},
          {action: "\"Because we've been friends forever!\"", turnTo: 16}
        ]
      },
      {
        pageNum: 16,
        text: "Shawna looks serious now.\n\"You really mean that? You seriously think "
                + "that just because we're friends, I should go to the dance with "
                + "you, when I've already been asked by the hottest guy in school?\"",
        options: [
          {action: "\"Well, yeah!\"", turnTo: 17},
          {action: "\"You're right, you should go ahead and go with Scott\"", turnTo: 13},
          {action: "\"Well.. no. I guess what I mean is, I want it to be like... a date.\"", turnTo: 18}
        ]
      },
      {
        pageNum: 17,
        text: "Shawna stares at you.\n\"You are the most selfish guy I know! I wouldn't "
                + "go to the dance with you even if you had asked me first!!\"\nShawna "
                + "storms off angrily.  Hopefully your friendship isn't ruined-- but "
                + "your chances of taking her to the dance certainly are.",
        options: [
        ]
      },
      {
        pageNum: 18,
        text: "Shawna looks confused.\n\"We've been friends for a long time, and "
                + "you've never acted like you wanted to go out with me before.\"",
        options: [
          {action: "\"I've liked you for a long time, Shawna. I was just too shy to tell you.\"", turnTo: 19},
          {action: "\"Well, once I knew Scott wanted you, I had to have you too.\"", turnTo: 17}
        ]
      },
      {
        pageNum: 19,
        text: "Shawna smiles.\n\"Really?! Cause, I mean, I liked you too, but I didn't "
                + "want to mess up our friendship or anything...\"\n\"Then, will "
                + "you go to the homecoming dance with me?\"\n\"Of course. Scott can "
                + "get another date.\"\nShawna suddenly looks shy. \"Hey, um...\"\n\"What? "
                + "What's wrong?\"\n\"Well, does that mean we're, you know, boyfriend "
                + "and girlfriend?\"",
        options: [
          {action: "\"Yeah, sure we are\"", turnTo: 20},
          {action: "*Kiss Shawna*", turnTo: 21}
        ]
      },
      {
        pageNum: 20,
        text: "Shawna looks disappointed. You get the feeling she was hoping for something "
                + "more...\n\"Yeah, um, okay.  See you later, then...\"\nShe walks "
                + "away from you down the hall.\n\nCongratulations! You got a date "
                + "to the dance. ",
        options: [
        ]
      },
      {
        pageNum: 21,
        text: "Shawna responds to your kiss eagerly. After a moment, you step back "
                + "and smile at her. \"Does that answer your question?\"\nShawna "
                + "holds your hand as the two of you walk to English class together."
                + "\n\nCongratulations! You got a date to the dance, and a new girlfriend!",
        options: [
        ]
      },
      {
        pageNum: 22,
        text: "Kelly is the most popular girl in school. She is standing by her locker, "
                + "surrounded by a group of her cheerleading friends.\nJust as you "
                + "are about to speak to her, you see Jonathan Wilson, the homecoming "
                + "king, walk up and start talking to her.",
        options: [
          {action: "Maybe I'll just ask Rachel instead.", turnTo: 4},
          {action: "Hmm, I guess I'll see if Shawna wants to go with me.", turnTo: 12},
          {action: "\"Hey, Kelly! Will you go to the dance with me?\"", turnTo: 23}
        ]
      },
      {
        pageNum: 23,
        text: "Kelly and all her friends stop and stare at you, then start laughing "
                + "hysterically.\n\nGuess you're not getting a date with Kelly...",
        options: [
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Lilly of the Forest",
    author: "Kaci Ernser",
    imgUrl: "./assets/images/lily.jpg",
    pages: [
      {
        pageNum: 1,
        text: "Lilly is going for a walk in the forest. As she walks along she hears "
                + "something crying behind the trees. (make sound of baby bear crying)",
        options: [
          {action: "Find what is crying", turnTo: 2},
          {action: "Continue her walk in the forest", turnTo: 5}
        ]
      },
      {
        pageNum: 2,
        text: "She looks behind the trees and sees a crying baby bear with his foot "
                + "in a metal trap that looks like it has pointy teeth. Lilly can "
                + "see that the trap really hurts the baby bear's foot.",
        options: [
          {action: "Try to open the trap", turnTo: 3},
          {action: "Continue her walk in the forest", turnTo: 5}
        ]
      },
      {
        pageNum: 3,
        text: "Lilly tries to open the trap, but it's so tight! She keeps trying "
                + "and trying...\n\n... until finally the baby bear's foot is free. "
                + "It looks at Lilly and then runs away into the forest.",
        options: [
          {action: "Follow bear", turnTo: 4},
          {action: "Continue walking through the forest", turnTo: 5}
        ]
      },
      {
        pageNum: 4,
        text: "The little bear runs very fast and Lilly can't keep up. So she stops "
                + "and watches it run away. \"I hope the little bear is ok,\" Lilly thinks.",
        options: [
          {action: "Continue walking through the forest", turnTo: 5},
          {action: "Go home", turnTo: 15}
        ]
      },
      {
        pageNum: 5,
        text: "Lilly continues walking along the path through the forest. As she "
                + "walks along she sees a red kite flying over the tops of the trees.",
        options: [
          {action: "Follow kite", turnTo: 6},
          {action: "Continue her walk in the forest", turnTo: 9},
        ]
      },
      {
        pageNum: 6,
        text: "Lilly tries to follow the kite as it floats along high above. As "
                + "she runs along the forest path she sees the kite get caught in "
                + "the branches of a nearby tree.",
        options: [
          {action: "Climb tree", turnTo: 7},
          {action: "Continue walking", turnTo: 9},
          {action: "Go home", turnTo: 15}
        ]
      },
      {
        pageNum: 7,
        text: "Lilly decides to climb the tree to get the kite. She climbs the branches "
                + "of the tree, higher and higher and HIGHER. She can see the kite "
                + "above her. It's getting scary being up so high!",
        options: [
          {action: "Go back down", turnTo: 8},
          {action: "Continue climbing", turnTo: 18}
        ]
      },
      {
        pageNum: 8,
        text: "Lilly carefully climbs back down the tree until she reaches the ground.",
        options: [
          {action: "Keep walking through forest", turnTo: 9},
          {action: "Go home", turnTo: 15}
        ]
      },
      {
        pageNum: 9,
        text: "As she walks along the forest path, Lilly hears a growling sound. Suddenly "
                + "a wolf jumps out of the trees and snarls at her. Then it slowly "
                + "approaches Lilly. Oh oh.",
        options: [
          {action: "Fight the wolf", turnTo: 10},
          {action: "Run away", turnTo: 17},
        ]
      },
      {
        pageNum: 10,
        text: "Lilly takes a stick from the ground and takes a swing at the wolf. "
                + "She misses. The dog growls at her. So Lilly decides the smartest "
                + "thing is to run away.",
        options: [
          {action: "Run away", turnTo: 11},
          {action: "Keep fighting", turnTo: 16},
        ]
      },
      {
        pageNum: 11,
        text: "Lilly starts to run away. Then suddenly from the forest a great brown "
                + "bear crashes through the trees, the mama bear of the baby bear "
                + "Lilly rescued. The mama bear rears up and ROARS at the wolf. The "
                + "wolf runs off and the mama bear leaves to chase it away. The wolf is gone.",
        options: [
          {action: "Continue her walk in the forest", turnTo: 12},
          {action: "Go home", turnTo: 15}
        ]
      },
      {
        pageNum: 12,
        text: "Lilly continues walking along the forest path until she arrives at a hill.",
        options: [
          {action: "Walk up the hill", turnTo: 13},
          {action: "Go home", turnTo: 15}
        ]
      },
      {
        pageNum: 13,
        text: "Lilly walks up a hill that is covered by soft green grass. At the top "
                + "of the hill she see a small fairy castle.",
        options: [
          {action: "Enter castle", turnTo: 14},
          {action: "Go home", turnTo: 15}
        ]
      },
      {
        pageNum: 14,
        text: "Lilly enters the castle through golden gates and is greeted by a fairy "
                + "princess. Lilly tells her, \"Hi, my name is Lilly. What's your "
                + "name?\"\nThe princess tells her, \"My name is Dewdrop.\"\n\"You "
                + "look tired Lilly,\" she says. \"My golden eagle Highflyer will "
                + "take you home.\"\nSo Lilly climbs up on the eagle. The eagle takes "
                + "off from the castle and flies over the great forest to take her "
                + "home.\n\nWhen Lilly arrives home, her mother gives her a cup of "
                + "hot chocolate and a cookie before Lilly lies down to rest.",
        options: [
        ]
      },
      {
        pageNum: 15,
        text: "Lilly finds her way back home. When Lilly arrives, her mother gives "
                + "her a cup of hot chocolate and a cookie before Lilly lies down to rest.",
        options: [
        ]
      },
      {
        pageNum: 16,
        text: "Lilly starts to fight again. Then suddenly from the forest a great "
                + "brown bear crashes through the trees, the mama bear of the baby "
                + "bear Lilly rescued. The mama bear rears up and ROARS at the wolf. "
                + "The wolf stops chasing Lilly and looks at the mama bear. Then it "
                + "turns and runs off. The mama bear leaves to chase the wolf away. "
                + "WHEW! The wolf is gone!",
        options: [
          {action: "Continue her walk in the forest", turnTo: 12},
          {action: "Go home", turnTo: 15}
        ]
      },
      {
        pageNum: 17,
        text: "Lilly looks at the small stick in her hands and decides that it's "
                + "smarter to run away.\nThen suddenly from the forest a great brown "
                + "bear crashes through the trees, the mama bear of the baby bear "
                + "Lilly rescued. The mama bear rears up and ROARS at the wolf. The "
                + "wolf stops chasing Lilly and looks at the mama bear. Then it turns "
                + "and runs off. The mama bear leaves to chase the wolf away. WHEW! "
                + "The wolf is gone!",
        options: [
          {action: "Continue her walk in the forest", turnTo: 12},
          {action: "Go home", turnTo: 15}
        ]
      },
      {
        pageNum: 18,
        text: "Lilly decides to climb the tree to get the kite. She climbs the branches "
                + "of the tree, higher and higher and HIGHER. She can see the kite above her. It's getting scary being up so high!",
        options: [
          {action: "Go back down", turnTo: 8},
          {action: "Continue climbing", turnTo: 18}
        ]
      },
      {
        pageNum: 19,
        text: "Lilly continues to climb until.... she reaches the red kite. She can "
                + "see it has a yellow sun on it. Then Lilly carefully climb down to the ground "
                + "with the kite in one of her hands.",
        options: [
          {action: "Keep walking through forest", turnTo: 9},
          {action: "Go home", turnTo: 15}
        ]
      }
    ]
  },
  {
    id: 17,
    title: "The Weird Day",
    author: "Christophe Bartell",
    imgUrl: "./assets/images/weird.png",
    pages: [
      {
        pageNum: 1,
        text: "You wake up. Your mom is a big squid.",
        options: [
          {action: "Run", turnTo: 3},
          {action: "Shoot her with a harpoon gun", turnTo: 2}
        ]
      },
      {
        pageNum: 2,
        text: "Unless you keep a harpoon gun in your room, that isn't going to work. "
                + "I have a better idea.",
        options: [
          {action: "Run", turnTo: 3}
        ]
      },
      {
        pageNum: 3,
        text: "You run away, because you just saw a giant squid. Keep running!",
        options: [
          {action: "Keep on running!", turnTo: 4}
        ]
      },
      {
        pageNum: 4,
        text: "You run outside to your house. Your friend's house is next door. Or, "
                + "you could go across the street to Laurence's house.",
        options: [
          {action: "Friend's house", turnTo: 5},
          {action: "Laurence's house", turnTo: 6}
        ]
      },
      {
        pageNum: 5,
        text: "You rush into your friends house. No one is home. Oh yeah, your friend "
                + "is at school. Now what?",
        options: [
          {action: "Go to Laurence's house", turnTo: 6},
          {action: "Look in his friedge and eat crap", turnTo: 7}
        ]
      },
      {
        pageNum: 6,
        text: "You decide to go to Laurence's house instead. You walk into his house.\n"
                + "\"Hello?\" You yell. No one answers.\n\"Yeah?\" Someone replies.",
        options: [
          {action: "Find out who it is", turnTo: 8},
          {action: "Take a dump", turnTo: 20}
        ]
      },
      {
        pageNum: 7,
        text: "You rush into the kitchen and open the fridge. You start eating. Then "
                + "you realize that your friend is pyscho and likes poisoning food.\n\"Shoot.\" "
                + "You say. You die.",
        options: [
        ]
      },
      {
        pageNum: 8,
        text: "You walk in the direction where the voice came from. Eventually, you "
                + "see Laurence eating some Trail Mix.\"Hey.\" Laurence says.",
        options: [
          {action: "Tell Laurence your mom is a squid", turnTo: 9},
          {action: "Ask him for some Trail Mix", turnTo: 19}
        ]
      },
      {
        pageNum: 9,
        text: "\"My mom is a squid.\" You tell Laurence.\nHe looks frightened. Then "
                + "he looks suspicious.\n\"This must be the work of....Them.\"",
        options: [
          {action: "Ask him who's \"Them\"", turnTo: 10},
          {action: "Take an axe and chop Laurence's hand off", turnTo: 14}
        ]
      },
      {
        pageNum: 10,
        text: "\"Who's them?\" You inquire.\nLaurence looks at you. He looks angry. "
                + "He narrows his eyes, still looking at you. \"Let's make waffles.\" He says.",
        options: [
          {action: "What? Waffles? I want to know who's them!", turnTo: 11},
          {action: "I like mine with blueberries", turnTo: 12}
        ]
      },
      {
        pageNum: 11,
        text: "\"No. I want to know who's them!\"\nLaurence looks hurt. \"Fine.\"\nYou "
                + "smile. \"So, who's them?\"\nLaurence looks at you. You'll never forget "
                + "that look. A look of pain. Pure pain.\nLaurence then farts loudly.",
        options: [
          {action: "Forget the fart and eat waffles", turnTo: 12},
          {action: "Commit suicide using a rubber band and a stuffed giraffe", turnTo: 13}
        ]
      },
      {
        pageNum: 12,
        text: "You decide to eat waffles and tell Laurence you want yours with blueberries. "
                + "Unfortunately, Laurence has a stroke and dies. Unable to cope with such "
                + "a loss, you go home.",
        options: [
          {action: "Commit suicide", turnTo: 13}
        ]
      },
      {
        pageNum: 13,
        text: "You commit suicide using a rubber band and a stuffed giraffe.",
        options: [
        ]
      },
      {
        pageNum: 14,
        text: "You go into a store, buy and axe, go back to Laurence's house, and "
                + "chop Laurence's hand off.\n\"Hey.\" He said. \"You chopped my hand off.\""
                + "\nYou look at him. \"Yes. Yes, I did.\" You say.\n\"Oh. Okay.\" Laurence "
                + "says. He goes back to eating Trail Mix.",
        options: [
          {action: "Tell him you're sorry you chopped his hand off.", turnTo: 15},
          {action: "Go on Laurence's computer and delete his important files just to be mean", turnTo: 16}
        ]
      },
      {
        pageNum: 15,
        text: "You apologize about chopping his hand off.\nLaurence looks up at you, "
                + "looking forgiving. Then he rips his face off, revealing a huge monster.\n"
                + "\"Eww.\" You say. That was really gross!\nThe Laurence monster "
                + "goes up to you and eats you.",
        options: [
        ]
      },
      {
        pageNum: 16,
        text: "You go up to Laurence's computer room, leaving the one handed man alone "
                + "with his trail mix. You flip his computer on.Unfortunately, the "
                + "computer is a Mac and is very slow. Too slow. You here Laurence "
                + "coming towards you. \"What are you doing?\" He yells. He's getting "
                + "closer to you. What should you do?",
        options: [
          {action: "Yell, \"Oh, nothing!\"", turnTo: 17},
          {action: "Apologize for the hand dismemberment you gave him earlier.", turnTo: 15}
        ]
      },
      {
        pageNum: 17,
        text: "You yell, \"Oh, nothing!\" It doesn't work. He's still coming. FInally "
                + "he reaches the computer room. Then he does something. Bad.",
        options: [
          {action: "What? What does he do? Tell me!", turnTo: 18}
        ]
      },
      {
        pageNum: 18,
        text: "You die, very suddenly, without knowing what Laurence did that was so bad.",
        options: [
        ]
      },
      {
        pageNum: 19,
        text: "\"Can I have some trail mix?\" You ask. Laurence looks at you. He then "
                + "looks at the bag. Then, he looks at the wall. Finally, he looks back at "
                + "you.\n\n\"No.\" He says.",
        options: [
          {action: "Tell Laurence your mom is a squid", turnTo: 9}
        ]
      },
      {
        pageNum: 20,
        text: "What? You walk into a house and take a dump? What's your excuse?",
        options: [
          {action: "Hey, it was an option, and it seemed more exciting than finding out who said \"Yeah\".", turnTo: 21},
          {action: "I had to go.", turnTo: 22}
        ]
      },
      {
        pageNum: 21,
        text: "Hey, your mom is a giant squid. You might as well try to find out "
                + "about whats going on instead of taking a dump!",
        options: [
          {action: "Pull up your pants, and go find who said yeah", turnTo: 8},
        ]
      },
      {
        pageNum: 22,
        text: "Oh. Okay. Sorry. I'll wait.",
        options: [
          {action: "Done!", turnTo: 23},
        ]
      },
      {
        pageNum: 23,
        text: "Okay. Are we done with \"the business\"? Can we get on with the "
                + "story? Let's find out who said Yeah.",
        options: [
          {action: "OK! I'm ready!", turnTo: 8}
        ]
      }
    ]
  }
];
