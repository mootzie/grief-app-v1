let quotes = [
    '"Grief does not change you, Hazel. It reveals you." ― John Green, The Fault in Our Stars ',
    ' "I will not say: do not weep; for not all tears are an evil." ― J.R.R. Tolkien, The Return of the King',
    ' "You will lose someone you can’t live without,and your heart will be badly broken, and the bad news is that you never completely get over the loss of your beloved. But this is also the good news. They live forever in your broken heart that doesn’t seal back up. And you come through. It’s like having a broken leg that never heals perfectly—that still hurts when the weather gets cold, but you learn to dance with the limp." ― Anne Lamott',
    '“Tears shed for another person are not a sign of weakness. They are a sign of a pure heart.” ― José N. Harris, MI VIDA: A Story of Faith, Hope and Love',
    '“The darker the night, the brighter the stars, the deeper the grief, the closer is God!” — Fyodor Dostoevsky',
    '“No one ever told me that grief felt so like fear.” — C.S. Lewis',
    '“Without you in my arms, I feel an emptiness in my soul. I find myself searching the crowds for your face — I know its an impossibility, but I cannot help myself.” — Nicholas Sparks',
    '“Come back. Even as a shadow, even as a dream.” ― Euripides',
    '“Grief is an amputation, but hope is incurable hemophilia: You bleed and bleed and bleed.” ― David Mitchell',
    '“There is no grief like the grief that does not speak.” ― Henry Wadsworth Longfellow',
    '“Grief is a curious thing, when it happens unexpectedly. It is a band-aid being ripped away, taking the top layer off a family. And the underbelly of a household is never pretty, ours no exception.” ― Jodi Picoult',
    '“Only people who are capable of loving strongly can also suffer great sorrow, but this same necessity of loving serves to counteract their grief and heals them.” — Leo Tolstoy',
    '“Deep grief sometimes is almost like a specific location, a coordinate on a map of time. When you are standing in that forest of sorrow, you cannot imagine that you could ever find your way to a better place. But if someone can assure you that they themselves have stood in that same place, and now have moved on, sometimes this will bring hope.” — Elizabeth Gilbert',
    '',

]
let images = [
    'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.6435-9/130519965_4131942923501628_7227848491406564217_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=T2LxDFm6zB0AX9GCf8z&_nc_ht=scontent.fapa1-2.fna&oh=00_AT8kMpbYJz6HOwfKG8-wLEsNxsXa6Z3eMUDexJ5sGAP1fA&oe=6350A0F3',
    'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.6435-9/106924232_3643302239032368_511086534629969476_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=Kv85OAwlNEcAX_TdFAE&_nc_ht=scontent.fapa1-2.fna&oh=00_AT9ipYRlWdFRV4b68-pFRnp5zA9fPnwzCj7IwgNBnCOBlg&oe=634FB983',
    'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-9/47151737_2386493811379890_1636607948249628672_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0a2iYPslQiMAX-aI0HX&_nc_ht=scontent.fapa1-1.fna&oh=00_AT9DBIAmw0SpS-YuzoJUsCzEZ5mLIYQy42xK8Vf2GgDbFA&oe=634F78F5',
    'https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-6/305761847_2007953742741738_2156891777488261780_n.jpg?stp=dst-jpg_s600x600&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MRApcL61iI4AX8THAGy&_nc_ht=scontent.fapa1-1.fna&oh=00_AT-IlTfkfWQlCUS1h_Ol4v2vi6yivFghCLBTcC0hhLMP0g&oe=632FCAED',
    'https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-6/305301936_1746098405756390_221547510644592784_n.jpg?stp=cp6_dst-jpg_s720x720&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=VG9_6oDqtfoAX-s1dOp&tn=7GFQuwpnPxXHhuYT&_nc_ht=scontent.fapa1-1.fna&oh=00_AT_gOf_B3fYLWXpVWAfhy2jpqqlo9U6AmxqGfoUyu2Uvxg&oe=63301E30',
'https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-6/305205160_10217967668223125_3129992278233428909_n.jpg?stp=dst-jpg_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=s3KjfErmadQAX9g-tyN&_nc_ht=scontent.fapa1-1.fna&oh=00_AT-KZ9GS3Tc6v3jDjNDiLE6xTbft5GYLZDQCCm6jNVKJsA&oe=632F1380',
'https://scontent.fapa1-2.fna.fbcdn.net/v/t39.30808-6/302307285_5935087843187197_6711663017363583244_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=q4M-QZkD9Z8AX-Ybu0w&_nc_ht=scontent.fapa1-2.fna&oh=00_AT_gSFONx1Q0LbyH4rV-aWm4eGaHdU8QWFker2sFGscH7w&oe=63300C2D',
    
]
let imgTarget = document.getElementById("imgDisplay");

function newImage(){
    let randomNumber = Math.floor(Math.random() * images.length);
    // document.write(images[randomNumber]);
    document.getElementById("imgDisplay").innerHTML = '<img src = "'+images[randomNumber]+'" />';
    imgTarget.src=images[randomNumber];
}

function newQuote(){
    let randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quotesDisplay').innerHTML = quotes[randomNumber];
    console.log(quotes.length);
    console.log(quotes[randomNumber]);
    newImage();

}

