var imagenes =['../../assets/images/steve-halama-dfwFFQLvc0s-unsplash 1.png','../../assets/images/shuttergames-9BE8hiqvUM4-unsplash 1.png','../../assets/images/raul-angel-x8Ac6jee_3s-unsplash 2.png',
'../../assets/images/morgan-aragon-BFyTdSthQDA-unsplash 2.png','../../assets/images/jose-alejandro-cuffia-k1LNP6dnyAE-unsplash 2.png','../../assets/images/jesus-santos-ZBBKk2-Cgf8-unsplash 2.png',
'../../assets/images/grace-ho-zej4HPQLR5o-unsplash 1.png','../../assets/images/everton-vila-AsahNlC0VhQ-unsplash 1.png','../../assets/images/eric-weber-nQOQVJW7EY8-unsplash 1.png',
'../../assets/images/bambi-corro-fTPUpUhiBSc-unsplash 2.png','../../assets/images/daniel-apodaca-wmbbbU0LUG8-unsplash 2.png','../../assets/images/alvan-nee-T-0EW-SEbsE-unsplash 1.png'];
var avatar = '../../assets/images/Ruffles.png';

function cambiarAvatar(){
    var avatarImg = document.getElementById('avatar');
    avatarImg.src = avatar;

    console.log(avatarImg);
}

cambiarAvatar();

function cambiarPosts(){
    var postsImg = document.getElementsByClassName('post')

    for(var i=0; i< postsImg.length; i++){
        postsImg[i].src = '../../assets/images/' + imagenes[i];
    }
}

cambiarPosts();

