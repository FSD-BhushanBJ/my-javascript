let actors = {
  ShahRukhKhan: {
    movie1: {
      name: "Kabhi Khushi Kabhie Gham",
      releasedate: "14 December 2001",
      rating: "7.4",
    },

    movie2: {
      name: "Dilwale Dulhania Le Jayenge",
      releasedate: "20 October 1995",
      rating: "8.0",
    },
    movie3: {
      name: "Chennai Express",
      releasedate: "9 August 2013",
      rating: "6.0",
    },

    movie4: {
      name: "My Name Is Khan",
      releasedate: "12 February 2010",
      rating: "8.0",
    },
    movie5: {
      name: "Pathaan",
      releasedate: "25 January 2023",
      rating: "7.0",
    },
    movie6: {
      name: "KaranArjun",
      releasedate: "25 January 2023",
      rating: "7.0",
    },
  },
  SalmanKhan: {
    movie1: {
      name: "Bajrangi Bhaijaan",
      releasedate: "17 July 2015",
      rating: "8.0",
    },
    movie2: {
      name: "Sultan",
      releasedate: "6 July 2016",
      rating: "7.0",
    },
    movie3: {
      name: "Kick",
      releasedate: "25 July 2014",
      rating: "6.9",
    },
    movie4: {
      name: "Dabangg",
      releasedate: "10 September 2010",
      rating: "6.2",
    },
    movie5: {
      name: "Tiger Zinda Hai",
      releasedate: "22 December 2017",
      rating: "6.0",
    },
    movie6: {
      name: "KaranArjun",
      releasedate: "25 January 2023",
      rating: "7.0",
    },
  },
  AamirKhan: {
    movie1: {
      name: "Lagaan",
      releasedate: "15 June 2001",
      rating: "8.1",
    },
    movie2: {
      name: "3 Idiots",
      releasedate: "25 December 2009",
      rating: "8.4",
    },
    movie3: {
      name: "PK",
      releasedate: "19 December 2014",
      rating: "8.1",
    },
    movie4: {
      name: "Dangal",
      releasedate: "21 December 2016",
      rating: "8.3",
    },
    movie5: {
      name: "Ghajini",
      releasedate: "25 December 2008",
      rating: "7.3",
    },
  },
  AmitabhBachchan: {
    movie1: {
      name: "Sholay",
      releasedate: "15 August 1975",
      rating: "8.2",
    },
    movie2: {
      name: "Don",
      releasedate: "12 May 1978",
      rating: "7.8",
    },
    movie3: {
      name: "Pink",
      releasedate: "16 September 2016",
      rating: "8.1",
    },
    movie4: {
      name: "Piku",
      releasedate: "8 May 2015",
      rating: "7.6",
    },
    movie5: {
      name: "Black",
      releasedate: "4 February 2005",
      rating: "8.2",
    },
  },
  AkshayKumar: {
    movie1: {
      name: "Hera Pheri",
      releasedate: "31 March 2000",
      rating: "8.1",
    },
    movie2: {
      name: "Airlift",
      releasedate: "22 January 2016",
      rating: "8.0",
    },
    movie3: {
      name: "Rustom",
      releasedate: "12 August 2016",
      rating: "7.0",
    },
    movie4: {
      name: "Kesari",
      releasedate: "21 March 2019",
      rating: "7.4",
    },
    movie5: {
      name: "Toilet: Ek Prem Katha",
      releasedate: "11 August 2017",
      rating: "7.2",
    },
  },
  HrithikRoshan: {
    movie1: {
      name: "Kaho Naa... Pyaar Hai",
      releasedate: "14 January 2000",
      rating: "6.9",
    },
    movie2: {
      name: "Koi... Mil Gaya",
      releasedate: "8 August 2003",
      rating: "7.1",
    },
    movie3: {
      name: "Dhoom 2",
      releasedate: "24 November 2006",
      rating: "6.5",
    },
    movie4: {
      name: "Jodhaa Akbar",
      releasedate: "15 February 2008",
      rating: "7.6",
    },
    movie5: {
      name: "War",
      releasedate: "2 October 2019",
      rating: "6.5",
    },
  },
  RanbirKapoor: {
    movie1: {
      name: "Barfi!",
      releasedate: "14 September 2012",
      rating: "8.1",
    },
    movie2: {
      name: "Rockstar",
      releasedate: "11 November 2011",
      rating: "7.7",
    },
    movie3: {
      name: "Yeh Jawaani Hai Deewani",
      releasedate: "31 May 2013",
      rating: "7.2",
    },
    movie4: {
      name: "Sanju",
      releasedate: "29 June 2018",
      rating: "7.6",
    },
    movie5: {
      name: "Brahmāstra",
      releasedate: "9 September 2022",
      rating: "6.5",
    },
  },
  RanveerSingh: {
    movie1: {
      name: "Band Baaja Baaraat",
      releasedate: "10 December 2010",
      rating: "7.2",
    },
    movie2: {
      name: "Goliyon Ki Raasleela Ram-Leela",
      releasedate: "15 November 2013",
      rating: "6.4",
    },
    movie3: {
      name: "Bajirao Mastani",
      releasedate: "18 December 2015",
      rating: "7.2",
    },
    movie4: {
      name: "Padmaavat",
      releasedate: "25 January 2018",
      rating: "7.1",
    },
    movie5: {
      name: "Gully Boy",
      releasedate: "14 February 2019",
      rating: "8.0",
    },
  },
  AjayDevgn: {
    movie1: {
      name: "Singham",
      releasedate: "22 July 2011",
      rating: "6.8",
    },
    movie2: {
      name: "Drishyam",
      releasedate: "31 July 2015",
      rating: "8.2",
    },
    movie3: {
      name: "Tanhaji",
      releasedate: "10 January 2020",
      rating: "7.6",
    },
    movie4: {
      name: "Golmaal",
      releasedate: "14 July 2006",
      rating: "7.4",
    },
    movie5: {
      name: "Omkara",
      releasedate: "28 July 2006",
      rating: "8.1",
    },
  },
  VarunDhawan: {
    movie1: {
      name: "Student of the Year",
      releasedate: "19 October 2012",
      rating: "5.4",
    },
    movie2: {
      name: "Main Tera Hero",
      releasedate: "4 April 2014",
      rating: "5.6",
    },
    movie3: {
      name: "Badlapur",
      releasedate: "20 February 2015",
      rating: "7.4",
    },
    movie4: {
      name: "Badrinath Ki Dulhania",
      releasedate: "10 March 2017",
      rating: "6.1",
    },
    movie5: {
      name: "Jugjugg Jeeyo",
      releasedate: "24 June 2022",
      rating: "6.1",
    },
  },
};

let newData = [
  {
    name: "Varun Dhawan",
    movies: [
      {
        name: "Jugjugg Jeeyo",
        releasedate: "24 June 2022",
        rating: "6.1",
      },
      {
        name: "Badrinath Ki Dulhania",
        releasedate: "10 March 2017",
        rating: "6.1",
      },
      {
        name: "Badlapur",
        releasedate: "20 February 2015",
        rating: "7.4",
      },
      {
        name: "Main Tera Hero",
        releasedate: "4 April 2014",
        rating: "5.6",
      },
      {
        name: "Student of the Year",
        releasedate: "19 October 2012",
        rating: "5.4",
      },
    ],
  },
{
  name:"AjayDevgn",
  movies:[
    {
      name: "Brahmāstra",
      releasedate: "9 September 2022",
      rating: "6.5",
    },
    {
      name: "Golmaal",
      releasedate: "14 July 2006",
      rating: "7.4",
    },
    {name: "Tanhaji",
      releasedate: "10 January 2020",
      rating: "7.6",
    },
    {
      name: "Drishyam",
      releasedate: "31 July 2015",
      rating: "8.2",
    },
    {
      name: "Singham",
      releasedate: "22 July 2011",
      rating: "6.8",
    }
  ]
}
];

let newData2 = [
  {
    name: "Shah Rukh Khan",
    image:"https://media.voguearabia.com/photos/6819d1d8ab0eb8b684f6d5dd/2:3/w_2560%2Cc_limit/GettyImages-2213072415.jpg",
    movies: [
      {name:"Dilwale Dulhania Le Jayenge", Release_date:"1995", IMDB_Rating:8.0, Image:"https://m.media-amazon.com/images/M/MV5BNDYzNDczNzE0MV5BMl5BanBnXkFtZTcwMzMzODc0MQ@@._V1_.jpg"},
      {name:"My Name Is Khan", Release_date:"2010", IMDB_Rating:8.0, Image:"https://upload.wikimedia.org/wikipedia/en/5/5d/My_Name_Is_Khan_film_poster.jpg"},
      {name:"Chak De! India", Release_date:"2007", IMDB_Rating:8.1, Image:"https://m.media-amazon.com/images/M/MV5BMjYyOTdmYTYtYjQ4Ni00ZmFiLWJlZjYtZmJkNDI5MmNlNjMyXkEyXkFqcGc@._V1_.jpg"},
      {name:"Om Shanti Om", Release_date:"2007", IMDB_Rating:6.8, Image:"https://upload.wikimedia.org/wikipedia/en/4/41/Om_Shanti_Om.jpg"},
      {name:"Raees", Release_date:"2017", IMDB_Rating:6.7, Image:"https://images.jdmagicbox.com/comp/jd_social/news/2018aug08/image-232464-avv07hch4c.jpg"},
      {name:"Raees2", Release_date:"2017", IMDB_Rating:6.7, Image:"https://images.jdmagicbox.com/comp/jd_social/news/2018aug08/image-232464-avv07hch4c.jpg"},
      {name:"Raees3", Release_date:"2017", IMDB_Rating:6.7, Image:"https://images.jdmagicbox.com/comp/jd_social/news/2018aug08/image-232464-avv07hch4c.jpg"},
    ]
  },
  {
    name: "Salman Khan",
    movies: [
      {name:"Bajrangi Bhaijaan", Release_date:"2015", IMDB_Rating:8.0, Image:"https://upload.wikimedia.org/wikipedia/en/0/0b/Bajrangi_Bhaijaan_Poster.jpg"},
      {name:"Sultan", Release_date:"2016", IMDB_Rating:7.0, Image:"https://upload.wikimedia.org/wikipedia/en/0/0d/Sultan_poster.jpg"},
      {name:"Kick", Release_date:"2014", IMDB_Rating:5.2, Image:"https://upload.wikimedia.org/wikipedia/en/e/e3/Kick_poster.jpg"},
      {name:"Wanted", Release_date:"2009", IMDB_Rating:6.5, Image:"https://upload.wikimedia.org/wikipedia/en/a/a2/Wanted_movie.jpg"},
      {name:"Dabangg", Release_date:"2010", IMDB_Rating:6.2, Image:"https://upload.wikimedia.org/wikipedia/en/3/3b/Dabangg_poster.jpg"},
    ]
  },
  {
    name: "Aamir Khan",
    movies: [
      {Name:"Rang De Basanti", Release_date:"2006", IMDB_Rating:8.1, Image:"https://upload.wikimedia.org/wikipedia/en/9/90/Rang_De_Basanti_poster.jpg"},
      {Name:"Ghajini", Release_date:"2008", IMDB_Rating:7.1, Image:"https://upload.wikimedia.org/wikipedia/en/6/69/Ghajini_Poster.jpg"},
      {Name:"Dil Chahta Hai", Release_date:"2001", IMDB_Rating:8.1, Image:"https://upload.wikimedia.org/wikipedia/en/2/28/Dil_Chahta_Hai.jpg"},
      {Name:"PK", Release_date:"2014", IMDB_Rating:8.1, Image:"https://upload.wikimedia.org/wikipedia/en/9/98/PK_poster.jpg"},
      {Name:"Dangal", Release_date:"2016", IMDB_Rating:8.4, Image:"https://upload.wikimedia.org/wikipedia/en/7/7a/Dangal_poster.jpg"},
    ]
  },
  {
    name: "Hrithik Roshan",
    movies: [
      {name:"War", Release_date:"2019", IMDB_Rating:6.5, Image:"https://upload.wikimedia.org/wikipedia/en/1/11/War_film_poster.jpg"},
      {name:"Bang Bang!", Release_date:"2014", IMDB_Rating:6.2, Image:"https://upload.wikimedia.org/wikipedia/en/8/8c/Bang_Bang_poster.jpg"},
      {name:"Kaho Naa... Pyaar Hai", Release_date:"2000", IMDB_Rating:7.2, Image:"https://upload.wikimedia.org/wikipedia/en/f/fd/Kaho_Naa..._Pyaar_Hai.jpg"},
      {name:"Super 30", Release_date:"2019", IMDB_Rating:7.9, Image:"https://upload.wikimedia.org/wikipedia/en/e/e3/Super_30_poster.jpg"},
      {name:"Guzaarish", Release_date:"2010", IMDB_Rating:7.5, Image:"https://upload.wikimedia.org/wikipedia/en/f/f3/Guzaarish_poster.jpg"},
    ]
  },
  {
    name: "Ranbir Kapoor",
    movies: [
      {name:"Barfi!", Release_date:"2012", IMDB_Rating:8.1, Image:"https://upload.wikimedia.org/wikipedia/en/3/3c/Barfi_poster.jpg"},
      {name:"Sanju", Release_date:"2018", IMDB_Rating:7.7, Image:"https://upload.wikimedia.org/wikipedia/en/7/74/Sanju_poster.jpg"},
      {name:"Rockstar", Release_date:"2011", IMDB_Rating:7.6, Image:"https://upload.wikimedia.org/wikipedia/en/3/37/Rockstar_poster.jpg"},
      {name:"Wake Up Sid", Release_date:"2009", IMDB_Rating:7.5, Image:"https://upload.wikimedia.org/wikipedia/en/4/42/Wake_Up_Sid_Poster.jpg"},
      {name:"Ae Dil Hai Mushkil", Release_date:"2016", IMDB_Rating:5.8, Image:"https://upload.wikimedia.org/wikipedia/en/c/c9/Ae_Dil_Hai_Mushkil_poster.jpg"},
    ]
  },
  {
    name: "Amitabh Bachchan",
    movies: [
      {Name:"Sholay", Release_date:"1975", IMDB_Rating:8.2, Image:"https://upload.wikimedia.org/wikipedia/en/2/29/Sholay_poster.jpg"},
      {Name:"Piku", Release_date:"2015", IMDB_Rating:7.6, Image:"https://upload.wikimedia.org/wikipedia/en/6/6d/Piku_movie.jpg"},
      {Name:"Pink", Release_date:"2016", IMDB_Rating:8.1, Image:"https://upload.wikimedia.org/wikipedia/en/a/a3/Pink_poster.jpg"},
      {Name:"Black", Release_date:"2005", IMDB_Rating:8.2, Image:"https://upload.wikimedia.org/wikipedia/en/e/e0/Black_poster.jpg"},
      {Name:"Sarkar", Release_date:"2005", IMDB_Rating:7.6, Image:"https://upload.wikimedia.org/wikipedia/en/8/80/Sarkarfilm.jpg"},
    ]
  },
  {
    name: "Akshay Kumar",
    movies: [
      {name:"Hera Pheri", Release_date:"2000", IMDB_Rating:8.2, Image:"https://upload.wikimedia.org/wikipedia/en/3/36/Hera_Pheri.jpg"},
      {name:"Airlift", Release_date:"2016", IMDB_Rating:7.4, Image:"https://upload.wikimedia.org/wikipedia/en/4/42/Airlift_film_poster.jpg"},
      {name:"Toilet: Ek Prem Katha", Release_date:"2017", IMDB_Rating:7.1, Image:"https://upload.wikimedia.org/wikipedia/en/4/4f/Toilet_-_Ek_Prem_Katha_poster.jpg"},
      {name:"Kesari", Release_date:"2019", IMDB_Rating:7.1, Image:"https://upload.wikimedia.org/wikipedia/en/f/f6/Kesari_film_poster.jpg"},
      {name:"Rustom", Release_date:"2016", IMDB_Rating:7.1, Image:"https://upload.wikimedia.org/wikipedia/en/4/42/Rustom_Poster.jpg"},
    ]
  },
  {
    name: "Ranveer Singh",
    movies: [
      {name:"Padmaavat", Release_date:"2018", IMDB_Rating:7.0, Image:"https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Padmaavat_poster.jpg/250px-Padmaavat_poster.jpg"},
      {name:"Gully Boy", Release_date:"2019", IMDB_Rating:7.9, Image:"https://upload.wikimedia.org/wikipedia/en/9/9a/Gully_Boy_poster.jpg"},
      {name:"Bajirao Mastani", Release_date:"2015", IMDB_Rating:7.2, Image:"https://upload.wikimedia.org/wikipedia/en/4/4f/Bajirao_Mastani_film_poster.jpg"},
      {name:"Simmba", Release_date:"2018", IMDB_Rating:6.1, Image:"https://upload.wikimedia.org/wikipedia/en/e/e2/Simmba_film_poster.jpg"},
      {name:"Rocky Aur Rani Kii Prem Kahaani", Release_date:"2023", IMDB_Rating:6.2, Image:"https://upload.wikimedia.org/wikipedia/en/5/59/Rocky_Aur_Rani_Kii_Prem_Kahaani_film_poster.jpg"},
    ]
  },
  {
    name: "Ajay Devgn",
    movies: [
      {name:"Drishyam", Release_date:"2015", IMDB_Rating:8.2, Image:"https://upload.wikimedia.org/wikipedia/en/1/19/Drishyam_poster.jpg"},
      {name:"Tanhaji", Release_date:"2020", IMDB_Rating:7.4, Image:"https://upload.wikimedia.org/wikipedia/en/4/4a/Tanhaji_the_unsung_warrior_film_poster.jpg"},
      {name:"Golmaal Again", Release_date:"2017", IMDB_Rating:5.4, Image:"https://upload.wikimedia.org/wikipedia/en/7/7b/Golmaal_Again_poster.jpg"},
      {name:"Once Upon a Time in Mumbaai", Release_date:"2010", IMDB_Rating:7.3, Image:"https://upload.wikimedia.org/wikipedia/en/f/f8/Once_upon_a_time_in_mumbaai.jpg"},
      {name:"Singham", Release_date:"2011", IMDB_Rating:6.8, Image:"https://upload.wikimedia.org/wikipedia/en/4/4c/Singham_film.jpg"},
    ]
  }
];

