const trivia = {

  'hamilton': [
    {
      'q': 'At this year’s Tony Awards, Hamilton set a record for most nominations with a total of 16. What two musicals, from 2001 and 2009, were the previous record holders with 15 nominations each?',
      'a': 'The Producers (2001) and Billy Elliot (2009)'
    },
    {
      'q': 'Lin-Manuel Miranda is a huge fan (and occasional guest) of what podcast that is hosted (in part) by Polygon’s very own Justin and Griffin McElroy?',
      'a': 'My Brother, My Brother and Me'
    },
    {
      'q': 'The first television spot in the iconic “Got Milk?” campaign was centered around a Hamilton-Burr Duel museum docent with a mouthful of food, and has been named one of the “10 best commercials of all time.” What now-famous blockbuster director directed it?',
      'a': 'Michael Bay'
    },
    {
      'q': 'Leading up to the start of the Revolutionary War, Hamilton was a student at King’s College in NYC. After the war, he helped reopen the university under what new name, one that it holds to this day?',
      'a': 'Columbia University'
    },
    {
      'q': 'LMM co-composed, co-wrote, and co-performed this song for the highest grossing film ever released by Walt Disney Studios. Name the film?',
      'a': 'Star Wars: The Force Awakens'
    },
    {
      'q': '“10 Duel Commandments” is a direct homage to “10 Crack Commandments,” a song that appeared on what rapper’s posthumously-released album in 1997?',
      'a': 'Notorious B.I.G. / Biggie Smalls'
    },
    {
      'q': 'Prior to Hamilton, LMM could sometimes be seen spitting rhymes on what PBS children’s show that ran from 2009 to 2013?',
      'a': 'The Electric Company'
    },
    {
      'q': 'Hamilton served as George Washington’s Aides-de-Camp for much of the Revolutionary War, until 1781 when he was given a command and allowed to fight in what battle that ultimately culminated in the end of the war?',
      'a': 'Battle/Siege of Yorktown (aka German Battle)'
    },
    {
      'q': 'Philipa Soo, who portrayed Eliza Hamilton in the original cast, is set to star in a new Broadway play based on what 2001 romantic comedy that still holds the record for highest-grossing French-language film ever released in the United States?',
      'a': 'Amélie'
    },
    {
      'q': 'According to LMM, Hamilton the musical was inspired by a book he picked up at the airport while on vacation. The title was “Alexander Hamilton,” a 2004 biography penned by what writer/journalist/historian who would later become the historical consultant for the musical?',
      'a': 'Ron Chernow'
    }
  ],

  'songs': [
    `Fetty Wap - Trap <dfn>Queen</dfn><br/>
      Abba - Dancing <dfn>Queen</dfn><br/>
      Billy Ocean - Caribbean <dfn>Queen</dfn>`,

    `Beyonce - Run the <dfn>World</dfn><br/>
      Tears for Fears - Everybody Wants to Rule the <dfn>World</dfn><br/>
      Imagine Dragons - On Top of the <dfn>World</dfn>`,

    `Sublime - Caress Me <dfn>Down</dfn><br/>
      Europe - The Final Count<dfn>down</dfn><br/>
      Macklemore - <dfn>Down</dfn>town`,

    `Sheryl Crow - The First Cut Is the <dfn>Deep</dfn>est<br/>
      Savage Garden - Truly Madly <dfn>Deep</dfn>ly<br/>
      Adele - Rolling in the <dfn>Deep</dfn>`,

    `Justin Timberlake - Can’t <dfn>Stop</dfn> the Feeling<br/>
      Miley Cyrus - We Can't <dfn>Stop</dfn><br/>
      Journey - Don't <dfn>Stop</dfn> Believin'`,

    `White Zombie - More <dfn>Human</dfn> Than <dfn>Human</dfn><br/>
      Bjork - <dfn>Human</dfn> Behaviour<br/>
      Bruce Springsteen - <dfn>Human</dfn> Touch`,

    `Bachman Turner Overdrive - Taking <dfn>Care</dfn> of Business<br/>
      George Michael - <dfn>Care</dfn>less Whisper<br/>
      Drake - Take <dfn>Care</dfn>`,

    `Red Hot Chili Peppers - Give It <dfn>Away</dfn><br/>
      Genesis - Throwing It All <dfn>Away</dfn><br/>
      Carrie Underwood - Blown <dfn>Away</dfn>`,

    `Laura Branigan - Self <dfn>Control</dfn><br/>
      Missy Elliott - Lose <dfn>Control</dfn><br/>
      Eric Carmen - Make Me Lose <dfn>Control</dfn>`,

    `Justin Bieber - Get <dfn>Used</dfn> To It<br/>
      Madonna - This <dfn>Used</dfn> To Be My Playground<br/>
      Gotye - Somebody That I <dfn>Used</dfn> To Know`
  ]

}

document.querySelectorAll('[data-trivia]').forEach(function (el, i) {
  const path = el.dataset.trivia;
  el.innerHTML = eval(`trivia.${path}`);
});