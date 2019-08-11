$('#job-exp').hide()
$('#bg-education').hide()
$('#job-exp-button').hide()
$('#favourites').hide()
$('#favourites-button').hide()

$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

function home() {
    $('#profile').show()
    $('#bg-education-button').show()
    $('#job-exp').hide()
    $('#bg-education').hide()
    $('#job-exp-button').hide()
    $('#favourites').hide()
    $('#favourites-button').hide()
}

function background() {
    $('#bg-education').show()
    $('#job-exp-button').show()
    $('#bg-education-button').hide()
    $('#profile').hide()
    $('#job-exp').hide()
    $('#favourites').hide()
    $('#favourites-button').hide()
}

function experience() {
    $('#job-exp').show()
    $('#favourites-button').show()
    $('#job-exp-button').hide()
    $('#bg-education').hide()
    $('#bg-education-button').hide()
    $('#job-exp-button').hide()
    $('#profile').hide()
    $('#favourites').hide()
}

function favourites() {
    $('#favourites').show()
    $('#job-exp').hide()
    $('#favourites-button').hide()
    $('#job-exp-button').hide()
    $('#bg-education').hide()
    $('#bg-education-button').hide()
    $('#job-exp-button').hide()
    $('#profile').hide()
}
//==============================================================================================
$('#profile').append(
    `
    <table id="personal-info">
        <tr>
            <th>Full Name</th>
            <th>Born Identity</th>
            <th>Hobbies</th>
            <th>Hometown</th>
        </tr>
        <tr>
            <td>Vincentius Pramudito</td>
            <td class="line">
                I born at 19 Januari 1991.
                It's a cool number if you
                join it together..right??
            </td>
            <td class="line">
                I really like playing some musik,
                do sports, playing games, and watch the movies.
            </td>
            <td>
                I was born in Depok, Jawa Barat and I think i'm really happy borned there.
                It's a nice place to stay for a long time. You can contact me if you invite this town
            </td>
        </tr>
    </table>
    `
)

$('#job-exp').append(
    `<p> I started working when I was in college, around 6 months.
    Then after graduating I worked in Bogor for 3 years in injection moding companies as product development staff.
    After that I moved to the "Pasar Kemis" area as a Research and Development staff for 6 months. Because of the distance,
    I decided to resign and finally got a job in the Kapuk Muara area as a product Engineer staff. Someday I talk to my friend and
    see the opportunity in digital industry and finally I decided to join One of the best boothcamp in Indonesia.
    <br><br>
    My job experience was so fun and I really enjoy it. But now, I must focus on bothcamp so I can start my new
    job and make my dream come true..
    Next part I will show you my favourites music, sport, games and anime. Click button below here...
    `
)

$('#bg-education').append(
    `
    <center>
    <img src="../locals/bg-education.jpg" id="img-edu">
    </center>
    `
)

$('#favourites').append(
    `
    <table id="personal-info">
        <tr>
            <th>Music</th>
            <th>Sport</th>
            <th>Games</th>
            <th>Anime</th>
        </tr>
        <tbody id="myTable">
            <tr>
                <td>Tak Akan Ada Cinta yang Lain - Dewa 19</td>
                <td class="line">Jogging</td>
                <td class="line">Underlord - Dota</td>
                <td>One Piece</td>
            </tr>
            <tr>
                <td>Hidup adalah Perjuangan - Dewa 19</td>
                <td class="line">Walking</td>
                <td class="line">Need for Speed</td>
                <td>One Punch Man</td>
            </tr>
            <tr>
                <td>Perempuan Dalam Pelukan - Payung Teduh</td>
                <td class="line">Badminton</td>
                <td class="line">Tetris</td>
                <td>Fairy Tail</td>
            </tr>
        </tbody>
    </table>
    `
)

//==============================================================================================
$('#bg-education-button').append(
    `<a onclick="background()"href="#" class="btn btn-primary d-flex justify-content-center">Background Education</a>`
)

$('#job-exp-button').append(
    `<a onclick="experience()"href="#" class="btn btn-primary d-flex justify-content-center">Job Experience</a>`
)

$('#favourites-button').append(
    `<a onclick="favourites()"href="#" class="btn btn-primary d-flex justify-content-center">My Favourites</a>`
)