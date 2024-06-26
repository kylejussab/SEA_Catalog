                            /** START OF CLASS DECLARATIONS **/
// Album class to abstract away each array containing an Album's data into an object
// Will contain all data for each album, contains data for soloist as well as there are only 2 soloists.
class Album 
{

    //basic constructor 
    constructor()
    {
        this.album_name = "";
        this.year_released = 0;
        this.no_of_songs = 0;
        this.order_released = 0;
        this.single = "";
        this.solo = "";
        this.title_track = "";
        this.soloist = "";
        this.tracklist = [];
        this.imageUrl = "";
    }

    //instead fill all variables with the given columns(arrays) from the 2d array
    create_from_array(array) {
        this.album_name = array[0];
        this.year_released = array[1];
        this.no_of_songs = array[2];
        this.order_released = array[3];
        this.single = array[4];
        this.solo = array[5];
        this.title_track = array[6];
        let soloCheck = this.solo;
        if (soloCheck === 'true') {
            if (this.album_name === 'zone') {
                this.soloist = "jihyo";
            } else {
                this.soloist = "nayeon";
            }
        }
        else 
        {
            this.soloist = "none";
        }
    }

    setTracklist(array)
    {
        this.tracklist = array;
    }

    setImage(link)
    {
        this.imageUrl = link;
    }
}
                        /** END OF CLASS DECLARATIONS **/

                        /** START   OF  VARIABLE/DATA   DECLARATIONS**/ 

// To not use API calls or Libraries I have directly loaded this data
// All data used here was written by me and can be more cleanly viewed seperately in files in this same directory
// This will be converted into a 2D array
const csvData = `album_name,year_released,no_of_songs,order_released,single,solo,title_track
the_story_begins,2015,6,1,false,false,like_ooh-ahh
page_two,2016,6,1,false,false,cheer_up
twicecoaster:lane_1,2016,7,2,false,false,tt
twicecoaster:lane_2,2017,8,1,false,false,knock_knock
signal,2017,6,2,false,false,signal
twicetagram,2017,13,3,false,false,likey
merry_&_happy,2017,15,4,false,false,heart_shaker
what_is_love_?,2018,5,1,false,false,what_is_love
summer_nights,2018,9,2,false,false,dance_the_night_away
yes_or_yes,2018,7,3,false,false,yes_or_yes
fancy_you,2019,6,1,false,false,fancy
feel_special,2019,7,2,false,false,feel_special
more_&_more,2020,7,1,false,false,more_&_more
eyes_wide_open,2020,13,2,false,false,i_can't_stop_me
cry_for_me,2020,1,3,true,false,cry_for_me
taste_of_love,2021,6,1,false,false,alcohol-free
the_feels,2021,9,2,true,false,the_feels
formula_of_love:_O+T=<3,2021,16,3,false,false,scientist
im_nayeon,2022,7,1,false,true,pop!
between_1&2,2022,7,2,false,false,talk_that_talk
moonlight_sunrise,2023,1,1,true,false,moonlight_sunrise
ready_to_be,2023,7,2,false,false,set_me_free
zone,2023,7,3,false,true,killin'_me_good
i_got_you,2024,1,1,true,false,i_got_you
with_you-th,2024,6,2,false,false,one_spark`;

// This is an array containing all URLs necessary for my images, ordered according to the album in twicediscog.csv
const albumUrls = [
    "https://lv2-cdn.azureedge.net/twice/a68274bbdd254344afaa8ad9c0b5151f-THE_STORY_BEGINS.jpg",
    "https://lv2-cdn.azureedge.net/twice/PAGE_TWO.jpg",
    "https://lv2-cdn.azureedge.net/twice/TWICEcoaster_LANE_1.jpg",
    "https://lv2-cdn.azureedge.net/twice/TWICEcoaster_LANE_2.jpg",
    "https://lv2-cdn.azureedge.net/twice/TWICE_SIGNAL.jpg",
    "https://lv2-cdn.azureedge.net/twice/twicetagram.jpg",
    "https://lv2-cdn.azureedge.net/twice/Merry&Happy(2).jpg",
    "https://lv2-cdn.azureedge.net/twice/What_is_Love.jpg",
    "https://lv2-cdn.azureedge.net/twice/Summer_Nights.jpg",
    "https://lv2-cdn.azureedge.net/twice/YES_or_YES.jpg",
    "https://lv2-cdn.azureedge.net/twice/FANCY_YOU.jpg",
    "https://lv2-cdn.azureedge.net/twice/Feel_Special.jpg",
    "https://lv2-cdn.azureedge.net/twice/MORE_MORE(1).jpg",
    "https://lv2-cdn.azureedge.net/twice/9bafe5921dd74c659fc9c0ec89be5f30-087570ec6c704f11a18c23f4177b4a7a-TWICE%20EYES%20WIDE%20OPEN_ONLINECOVER.jpg",
    "https://lv2-cdn.azureedge.net/twice/fa697b89e1a1403d825b5571eb002683-214d4ba8b19e44999403fa60512c2087-CRY%20FOR%20ME.jpg",
    "https://lv2-cdn.azureedge.net/twice/e71950abded14ecab2fccc6643099427-0a4c54764dff4aa795de975f93178439-%EC%98%A8%EB%9D%BC%EC%9D%B8%EC%BB%A4%EB%B2%84_%EB%B3%80%EA%B2%BD.jpg",
    "https://lv2-cdn.azureedge.net/twice/f68d14eb7af247e2a816e6f118c978af-5b2b53c4654743fe809234c297a56ef1-TW-TheFeels-OnlineCover_0817.jpg",
    "https://lv2-cdn.azureedge.net/twice/b907e27dfe5041f99ce3fade2d44fbb8-d2b894fb350d437fa6884a35de893609-TWICE-FOL-ONLINE%20COVER_%EC%B5%9C%EC%A2%85.jpg",
    "https://lv2-cdn.azureedge.net/twice/161be9dcda7d4581a123b2f7b6cbeafb-bd9cbcf3b8ef4aa4beee466ef75a8af4-TW-NY-IMNAYEON_OnlineCover.jpg",
    "https://lv2-cdn.azureedge.net/twice/3c3a44867b7a4acba8838458c168e448-BETWEEN%201&2.jpg",
    "https://lv2-cdn.azureedge.net/twice/2aab47197e5740d9ba4f248b8c948770-873e5183d95e43ebb218c5bca6f7302b-TW-M12-MLSR-Online%20Cover.jpg",
    "https://lv2-cdn.azureedge.net/twice/5c25a76305b54cb5aa2feb5bc7b51956-1f9dc33bea4d4b0f8e897455416c38a7-TWICE%2012TH%20MINI%20ALBUM%20Online%20Cover.jpg",
    "https://lv2-cdn.azureedge.net/twice/c14107d29cc14dd689366ce267bcd46e-TW-JH-M1-OnlineCover.jpg",
    "https://lv2-cdn.azureedge.net/twice/ef9153801e634131bc6bd9c9d82fc2cd-TW-M13-OnlineCover-I%20got%20you.jpg",
    "https://lv2-cdn.azureedge.net/twice/4b23b71065d448f0813e7fcb62d76bb8-TW-M13-OnlineCover-WithYouth.jpg"
];

// This is the tracklist of each album, ordered according to the album in twicediscog.csv
const tracklistData = [
    ["like_ooh-ahh", "do_it_again", "going_crazy", "truth", "candy_boy", "like_a_fool"],
    ["cheer_up", "precious_love", "touchdown", "tuk_tok", "woohoo", "my_headphones_on"],
    ["TT", "1_to_10", "ponytail", "jelly_jelly", "Pit-a-Pat", "next_page", "one_in_a_million"],
    ["knock_knock", "TT", "1_to_10", "ponytail", "jelly_jelly", "Pit-a-Pat", "next_page", "one_in_a_million"],
    ["signal", "three_times_a_day", "only_you", "hold_me_tight", "eye_eye_eyes", "someone_like_me"],
    ["likey", "turtle", "missing_u", "wow", "ffw", "ding_dong", "24/7", "look_at_me", "rollin'", "love_line", "don't_give_up", "you_in_my_heart", "jaljayo_good_night"],
    ["heart_shaker", "merry_&_happy", "likey", "turtle", "missing_u", "wow", "ffw", "ding_dong", "24/7", "look_at_me", "rollin'", "love_line", "don't_give_up", "you_in_my_heart", "jaljayo_good_night"],
    ["what_is_love", "sweet_talker", "HO!", "dejavu", "say_yes"],
    ["dance_the_night_away", "chillax", "shot_thru_the_heart", "what_is_love", "sweet_talker", "HO!", "dejavu", "say_yes"],
    ["yes_or_yes", "say_you_love_me", "lalala", "young_&_wild", "sunset", "after_moon", "BDZ"],
    ["fancy", "stuck_in_my_head", "girls_like_us", "hot", "turn_it_up", "strawberry"],
    ["feel_special", "rainbow", "get_loud", "trick_it", "love_foolish", "21:29", "breakthrough_(Korean Version)"],
    ["more_&_more", "oxygen", "firework", "make_me_go", "shadow", "don't_call_me_again", "sweet_summer_day"],
    ["i_can't_stop_me", "hell_in_heaven", "up_no_more", "do_what_we_like", "bring_it_back", "believer", "queen", "go_hard", "shot_clock", "handle_it", "depend_on_you", "say_something", "behind_the_mask"],
    ["cry_for_me"],
    ["alcohol-free", "first_time", "scandal", "conversation", "baby_blue_love", "SOS"],
    ["the_feels", "the_feels(Benny Benassi Remix)", "the_feels(The Stereotypes Remix)", "the_feels(YVES V Remix)", "the_feels(Instrumental)", "the_feels(Benny Benassi Remix Extended)", "the_feels(Benny Benassi Remix - Instrumental)", "the_feels(YVES V Remix - Instrumental)", "the_feels(The Stereotypes Remix - Instrumental)"],
    ["scientist", "moonlight", "icon", "cruel", "real_you", "F.I.L.A(Fall In Love Again)", "last_waltz", "espresso", "rewind", "cactus", "push_&_pull", "hello", "1-3-2", "candy", "the_feels", "scientist(R3HAB Remix)"],
    ["pop!", "no_problem(Feat. Felix of Stray Kids)", "love_countdown(Feat. Wonstein)", "candyfloss", "all_or_nothing", "happy_birthday_to_you", "sunset"],
    ["talk_that_talk", "queen_of_hearts", "basics", "trouble", "brave", "gone", "when_we_were_kids"],
    ["moonlight_sunrise"],
    ["set_me_free", "moonlight_sunrise", "got_the_thrills", "blame_it_on_me", "wallflower", "crazy_stupid_love", "set_me_free(ENG)"],
    ["killin'_me_good", "talkin'_about_it(Feat. 24kGoldn)", "closer", "wishing_on_you", "don't_wanna_go_back(Duet with Heize)", "room", "nightmare"],
    ["i_got_you"],
    ["one_spark", "i_got_you", "rush", "new_new", "bloom", "you_get_me"]
];


// This is a 2D array of strings (Contains columns as item 0)
// From item 1 and onward it looks like : [[*Album_Name*, *Year_released*_...],...]
const data2DArray = csvData.split('\n').map(row => row.split(','));
let objectArray = createAlbumsArray(data2DArray, tracklistData);
const albumArray = formatAlbumData(objectArray);

// We work with this array to make everything dynamic happy while allowing us to reset to an everything state
let albumArrayCopy = albumArray;


                        /** END   OF  VARIABLE/DATA   DECLARATIONS**/ 


                        /** START   OF  VARIABLE/DATA   FUNCTIONS**/ 
// These first functions are ones I wrote to help me manipulate data/create my objects

// Will instantiate objects and remove the column data from csv
function createAlbumsArray(discographyData, tracklistData)
{
    rows = discographyData.length;
    columns = discographyData[0].length;
    let albumObjects = [];

    // ARRAY WILL BE OFF BY ONE USE J
    // This gets rid of the columns array in csv file with least workarounds
    let j = 0;
    // This will start one ahead to get rid of column in csv file
    for (let i = 1; i < rows; i++)
    {
        let singleCheck = discographyData[i][4]; // checks for if the album is a single (single col is 4)
        let soloCheck = discographyData[i][5]; // checks if album is solo (solo col is 5)
        let currentAlbum = new Album();


        // Fill the album instance with data from discographyData
        currentAlbum.create_from_array(discographyData[i]);
        currentAlbum.setTracklist(tracklistData[j]);
        currentAlbum.setImage(albumUrls[j]);
    
        // Push the filled album instance into the albums array
        albumObjects.push(currentAlbum);
        j++;
    }

    return albumObjects;
}

// Should be handed album array (unformatted)
function formatAlbumData(unformattedAlbumArray)
{
    // The strings I need to fix for every album are:
        // album_name, title_track must become properly formatted (capitalize + remove underscores)
    for (let i = 0; i < unformattedAlbumArray.length; i++)
    {
        let selectedAlbum = unformattedAlbumArray[i];
        unformattedAlbumArray[i].album_name = fixString(selectedAlbum.album_name);
        unformattedAlbumArray[i].title_track = fixString(selectedAlbum.title_track);
        for (let j = 0; j < selectedAlbum.tracklist.length; j++)
        {
            selectedAlbum.tracklist[j] = fixString(selectedAlbum.tracklist[j]); 
        }
    }

    return unformattedAlbumArray;
}

// This will properly format the string handed to it from a csv file
function fixString(myString)
{
    // Capitalizes first character of each string if it is a letter
    if (isLetter(myString[0]))
    {
        myString = capitalization(myString, 0);
    }
    // console.log(myString);
    let fixedString = myString;

    if (myString.includes("_"))
    {
        // Finds all underscores and places their index into an array
        let posArray = []
        let i = 0;
        for (let j = 0; j < myString.length; j++)
        {
            i = myString.indexOf('_', i);
            if (i === -1)
            {
                break;
            }
            else
            {
                posArray.push(i);
            }
            i++;
        }

        // Checks array of underscore positions and capitalizes the next character if its a letter
        if (posArray.length > 0)
        {
            for (let i = 0 ; i < posArray.length; i++)
            {
                let nextIndex = posArray[i]+1;
                if (isLetter(myString[nextIndex]) && nextIndex < myString.length)
                {
                    myString = capitalization(myString, nextIndex)
                }
            }
        }

        
        // Replaces all underscores with spaces
        const re = /_/g;
        fixedString = myString.replace(re, " ");
    }
    return fixedString;
}

// For fixString
function isLetter(char) {
    // Check if the character is a letter (uppercase or lowercase)
    return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
}

// For fixString
function capitalization (str, index)
{
    // Convert the character at the specified index to uppercase
    return str.substring(0, index) + str.charAt(index).toUpperCase() + str.substring(index + 1);

}

                            /** END   OF  VARIABLE/DATA   FUNCTIONS**/ 



                            /** START   OF  DISPLAY   FUNCTIONS**/ 

                        
// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < albumArrayCopy.length; i++){
        let selectedAlbum = albumArrayCopy[i];
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, selectedAlbum.album_name, selectedAlbum.imageUrl); // Edit title and image


        let cardHeight = document.querySelector('.card').height;
        generateBulletPoints(nextCard, selectedAlbum.tracklist, cardHeight);

        
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function sortingTools()
{
    const dropdown = document.getElementById('sorting-dropdown');
    dropdown.innerHTML = "";
    generateDropdownYears(dropdown, albumArrayCopy);

}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;  

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Album";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    // console.log("new card:", newTitle, "- html: ", card);
    
}

function grabYears (shownAlbums)
{
    let years = new Set();
    years.add("all");
    //console.log(shownAlbums);
    for (let i = 0; i < shownAlbums.length; i++)
    {
        //console.log(shownAlbums[i].year_released);
        years.add(shownAlbums[i].year_released);
    }
    //console.log(years)
    return years;
}


function createDropdownOptions(optionsData) {
    const dropdown = document.getElementById("sorting-dropdown");

    // Clear existing options
    dropdown.innerHTML = "";

    // Create options dynamically based on the data
    optionsData.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option.toLowerCase().replace(/\s/g, "_"); // Convert option text to lowercase with underscores
        optionElement.textContent = option;
        dropdown.appendChild(optionElement);
    });
}


// Function to generate bullet points
function generateBulletPoints(card, tracklist, cardHeight) {
    // Get the ul element where bullet points will be added
    const bulletList = card.querySelector('#bulletList');

    // Clear existing bullet points
    bulletList.innerHTML = '';
    //Check for length of array
    // I want max tracks to show up to be 7 (most albums are length 7)
    // If it goes over amount, show number of how many tracks are not shown on final bullet point instead
    let maxTracks = 7;
    if (tracklist.length > maxTracks)
    {
        let tracksLeft = tracklist.length - 5;
        // Loop through each TV show title
        for (let i = 0; i < maxTracks-2; i++)
        {
            // Create a new li element
            let listItem = document.createElement('li');
            
            // Set the text of the li element to the TV show title
            listItem.textContent = tracklist[i];

            // Append the li element to the ul element
            document.querySelector('.bullet-points').style.height = `${cardHeight}px`;
            bulletList.appendChild(listItem);
        }
        
        // insert and x more statement here
        // Create a new li element
        let listItem = document.createElement('li');

        // Set the text of the li element to the TV show title
        let message = "... and " + tracksLeft + " more!";
        listItem.textContent = message;
        document.querySelector('.bullet-points').style.height = `${cardHeight}px`;
        // Append the li element to the ul element
        bulletList.appendChild(listItem);

    }
    else
    {
        // Loop through each TV show title
        for (let i = 0; i < tracklist.length; i++)
        {
            // Create a new li element
            let listItem = document.createElement('li');
            
            // Set the text of the li element to the TV show title
            listItem.textContent = tracklist[i];
            document.querySelector('.bullet-points').style.height = `${cardHeight}px`;
            // Append the li element to the ul element
            bulletList.appendChild(listItem);
        }
    }
}





                            /** END   OF  DISPLAY   FUNCTIONS**/ 

                            /** START   OF  FUNCTIONIONALITY (ex getQuote)  FUNCTIONS**/ 


document.addEventListener("DOMContentLoaded", function() {
    showCards();
    createDropdownOptions(grabYears(albumArrayCopy));
    

    const onlySolosCheckbox = document.getElementById('only-solos');
    const onlySinglesCheckbox = document.getElementById('only-singles');
    const excludeSolosCheckbox = document.getElementById('exclude-solos');
    const excludeSinglesCheckbox = document.getElementById('exclude-singles');
    const dropdown = document.getElementById('sorting-dropdown');
    const myButton = document.getElementById('myButton');
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', updateFilteredArray);

    // Add event listeners
    onlySolosCheckbox.addEventListener('change', updateFilteredArray);
    onlySinglesCheckbox.addEventListener('change', updateFilteredArray);
    excludeSolosCheckbox.addEventListener('change', updateFilteredArray);
    excludeSinglesCheckbox.addEventListener('change', updateFilteredArray);
    dropdown.addEventListener('change', updateFilteredArray);
    myButton.addEventListener('click', randSong);

    function updateFilteredArray() {
        // Reset albumArrayCopy to the original albumArray if all checkboxes are unchecked
        if (!onlySolosCheckbox.checked && !onlySinglesCheckbox.checked && !excludeSolosCheckbox.checked && !excludeSinglesCheckbox.checked) {
            albumArrayCopy = albumArray.slice();
        } else {
            // Otherwise, apply filters based on checkbox state
            albumArrayCopy = albumArray.slice();
    
            if (onlySolosCheckbox.checked) {
                albumArrayCopy = albumArrayCopy.filter(album => album.solo === 'true');
            }
    
            if (onlySinglesCheckbox.checked) {
                albumArrayCopy = albumArrayCopy.filter(album => album.single === 'true');
            }
    
            if (excludeSolosCheckbox.checked) {
                albumArrayCopy = albumArrayCopy.filter(album => album.solo === 'false');
            }
    
            if (excludeSinglesCheckbox.checked) {
                albumArrayCopy = albumArrayCopy.filter(album => album.single === 'false');
            }
        }
        // Get the selected year from the dropdown
        let selectedYear = dropdown.value;

        // Filter albums based on the selected year
        if (selectedYear !== 'all') {
            albumArrayCopy = albumArrayCopy.filter(album => album.year_released === selectedYear);
        }

        let searchQuery = searchBar.value.trim(); // deal with any whitespace

        if (searchQuery) {
            albumArrayCopy = albumArrayCopy.filter(album => 
                album.album_name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                album.tracklist.some(track => track.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }
        // Call showCards again to refresh with the updated albumArrayCopy
        
        showCards();
    }
});




function randSong() {
    let max = albumArrayCopy.length;
    if (max === 0)
    {
        alert("There are no songs!");
    }
    let albumChosen = albumArrayCopy[getRandomInt(0, max)];
    max = albumChosen.tracklist.length;
    let song = albumChosen.tracklist[getRandomInt(0, max)];
    alert(song);
}

function removeLastCard() 
{
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min)) + min;
}


function search(searchInput)
{
    
}


                            /** END OF  FUNCTIONIONALITY (ex getQuote)  FUNCTIONS**/ 

