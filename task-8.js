function User(name = 'name', email = 'email@.gmail.com', image = User.getAvatar()) {
    this.name = name;
    this.email = email;
    this.photoUrl = image;
}

User.avatars = [
    "https://pre00.deviantart.net/50f9/th/pre/i/2011/217/e/8/pikachu_2_by_nostalgiaattack-d45jd3i.png",
    "https://cdn.diversityavatars.com/wp-content/uploads/2018/01/Vector-Smart-Object-5.png",
    "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png",
    "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-L3-icon.png",
    "https://findicons.com/files/icons/1072/face_avatars/300/i05.png",
    "http://www.iconarchive.com/download/i51043/hopstarter/halloween-avatars/Gomez.ico",
    "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Zombie-2-icon.png",
    "https://vignette.wikia.nocookie.net/yogscast/images/8/8a/Avatar_Turps_2015.jpg"
];

User.admin = {
    photoURL: "https://i.pinimg.com/originals/3d/47/4f/3d474f82ff71595e8081f9a120892ae8.gif",
    name: "admin"
};

User.getAvatar = function () {
    return this.avatars.shift();
};

User.prototype.messageBox = (function() {
    var messageContainer = document.body.appendChild(document.createElement('div'));
    messageContainer.roleInfo = messageContainer.appendChild(document.createElement('div'));
    messageContainer.picture = messageContainer.roleInfo.appendChild(document.createElement('img'));
    messageContainer.role = messageContainer.roleInfo.appendChild(document.createElement('span'));
    messageContainer.textField = messageContainer.appendChild(document.createElement('textarea'));
    messageContainer.textField.placeholder = "Введите сообщение";

    messageContainer.textField.oninput = function(event) {
        event.target.parentNode.querySelector('span').innerHTML = User.admin.name;
        event.target.parentNode.querySelector('img').src = User.admin.photoURL;
    };

    messageContainer.style = `
        position: fixed;
        top: 50px;
        left: 0;
        width: 360px;
        height: 250px;
        padding: 15px;
        border-radius: 3px;
        background-color: #f3e5ff;
    `;

    messageContainer.roleInfo.style = `
        padding-bottom: 10px;
    `;

    messageContainer.role.style = `
        color: #5b5b5b;
        font-weight: bold;
    `;

    messageContainer.picture.style = `
        max-width: 50px;
        max-height: 70px;
        margin-right: 15px;
    `;

    messageContainer.textField.style = `
        width: calc(100% - 22px);;
        height: calc(100% - 106px);
        padding: 10px;
        overflow-y: auto;
        resize: none;
        border-radius: 3px;
    `;

    return messageContainer;
})();


User.prototype.write = function(txt) {
    this.messageBox.role.innerHTML = this.name;
    this.messageBox.picture.src = this.photoUrl;
    this.messageBox.value = txt;
};

// User.prototype.write = function () {
//     // для чего эта ф-ция?
//     // она не вызывается в коде ниже
// };


///-------------------------------------------------------------

var users = [];
users.push ( new User ( "Иван" ) );
users.push ( new User ( 'Alex', "alex@gmail.com" ) );
users.push ( new User ( 'Bob', "bob777@gmail.com" ) );
users.push ( new User ( 'Dima', "dima888@gmail.com" ) );
users.push ( new User ( 'Fima', "fima999@gmail.com" ) );

var k = 1;
users.forEach (
    function ( user ) {
        setTimeout (
            function () {
                user.write ( `Hello, I'm ${user.name}` );
            }, 3000 * k++
        )
    }
);


