puts "Seeding started"

10.times do |i|
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        img: Faker::Avatar.image(slug: "my-own-slug", size: "320x320", format: "jpg"),
        active: false,
        username: Faker::Internet.username(specifier: 5..10),
        password: Faker::Internet.password(min_length: 8)
    )
    
end

# NYC's Dog Park Data
katey = User.create(
    first_name: 'Katey',
    last_name: 'Van',
    email: '123@gmail.com',
    img: 'https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg',
    active: false,
    username: 'katey',
    password: '12345',
)

reito_user = User.create(
        first_name: 'Reito',
        last_name: 'Example',
        email: '456@email.com',
        img: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg',
        active: false,
        username: 'reito',
        password: '12345',
)

robot_user = User.create(
        first_name: "Robot",
        last_name: "Example",
        email: '789@eamil.com',
        img: 'https://media.istockphoto.com/photos/cute-blue-robot-giving-thumbs-up-3d-picture-id1350820098?b=1&k=20&m=1350820098&s=170667a&w=0&h=8gO4GcPH-wsEZS6PYn2WXbQN3ZPPv98vE6mBl-Ckwr8=',
        active: false,
        username: 'robot',
        password: '12345',
)

danny = User.create(
        first_name: "Danny",
        last_name: 'Morals',
        email: 'dm@email.com',
        img: 'https://en-media.thebetterindia.com/uploads/2018/03/French_Marigold_-_October_Birthday_Flower_-_Tagetes_patula.jpg',
        active: false,
        username: 'danny',
        password: '12345'
)

norman = User.create(
        first_name: "Norman",
        last_name: "Example",
        email: 'norman@email.com',
        img: 'https://c.tadst.com/gfx/600x337/full-moon-cherry-blossoms.jpg?1',
        active: false,
        username: 'norman',
        password: '12345',
)

Dog.create(name: "Nori", breed: "Border Collie", size: "Medium", img: "https://media.istockphoto.com/photos/happy-brown-and-white-border-collie-dog-in-grass-picture-id1147433946?k=20&m=1147433946&s=612x612&w=0&h=rWeNgcox0CSbR_-yvYovtJJAI25cc2vSai6NFlGaCNk=", user_id: katey.id)
Dog.create(name: "Mini", breed: "Dachshund", size: "Small", img: "https://www.akc.org/wp-content/uploads/2017/11/Longhaired-Dachshund-standing-outdoors.jpg", user_id: reito_user.id)
Dog.create(name: "Milo", breed: "Schnauzer", size: "Medium", img: "https://i.ytimg.com/vi/Thfv3UaAM60/maxresdefault.jpg", user_id: robot_user.id)
Dog.create(name: "Missy", breed: "Australian Shepherd", size: "Medium", img: "https://cf.ltkcdn.net/dogs/images/orig/279404-1600x1066-australian-shepherd.jpg", user_id: danny.id)
Dog.create(name: "Nala", breed: "Labrador Retriever", size: "Large", img: "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2022%2F03%2F22%2Fhappy-labrador-retriever-getty-0322-2000.jpg", user_id: norman.id)







reito = Dog.create(
                name: "Reito",
                breed: "Golden Retriever",
                size: "Large",
                img: "https://www.prestigeanimalhospital.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=scGfz-nI",
                user_id: 1
        )

    DogPark.create(
        name: "Dog Park East River Esplanade South",
        address: "South, E River Greenway, New York, NY 10016",
        img: "https://assets.dnainfo.com/generated/photo/2012/06/1339531674.jpg/extralarge.jpg",
        capacity: 20
        )

    DogPark.create(
        name: "Fishbridge Park Garden Dog Run",
        address: "Dover St, New York, NY 10038",
        img: "https://photos.smugmug.com/SustainabilityandEnvironment/Liveable-urban-centres/Built-environment-and-urban-gr/i-Kz2kJ9m/0/95081a15/L/IMG_8869-L.jpg",
        capacity: 10
        )

    DogPark.create(
        name: "Little West Dog Run",
        address: "70 Little W St, New York, NY 10280",
        img: "https://fastly.4sqi.net/img/general/600x600/119904289_tvDVgSJNuM4TFj1bxuQuH4_9UL07sG_kGpfwQEDYHxQ.jpg",
        capacity: 10
        )

    DogPark.create(
        name: "Sirius Dog Run",
        address: "385 South End Ave, New York, NY 10280",
        img: "https://lh3.googleusercontent.com/W41AJCM1bX7heVpUmzXY_u9O1OBC_9IYl8RUaYB_TYish5ATEG5de64EjUJaEkcfkv4EDWQ7UABZSFAg9Nf0mLZISR3JBuD7gjLhm1tR-YB4cQ4HachrzJtJasPvMnmW8rafwNBa",
        capacity: 30
        )
    
    DogPark.create(
            name: "Tribeca Dog Run",
            address: "114 Warren St, New York, NY 10007",
            img: "http://www.dogspin.com/wp-content/uploads/2013/07/pier-26-dog-run-smaller.jpg",
            capacity: 40
            )

    DogPark.create(
            name: "Soho Grand Dog Park",
            address: "39 Grand St, New York, NY 10013",
            img: "https://d3rg18dos0rgue.cloudfront.net/wp-content/uploads/2019/08/dog-park-soho-nyc.jpg",
            capacity: 15
            )

    DogPark.create(
            name: "Leroy Street Dog Park",
            address: "353 West St, New York, NY 10014",
            img: "https://static.wixstatic.com/media/fa9c59_643972d337a34c69b68c79cd3e0e71ad~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_560,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fa9c59_643972d337a34c69b68c79cd3e0e71ad~mv2_d_4032_3024_s_4_2.jpg",
            capacity: 25
            )

    DogPark.create(
            name: "Washington Square Park Dog Run",
            address: "52 Washington Square S, New York, NY 10012",
            img: "https://i0.wp.com/www.urbandognyc.com/wp-content/uploads/2015/01/Washington-Square-Dog-Park.jpg?resize=1160%2C804&ssl=1",
            capacity: 40
            )

    DogPark.create(
            name: "Robin Kovary Dog Run",
            address: "59 Washington Square S, New York, NY 10012",
            img: "https://live.staticflickr.com/3879/14911470902_e4bede90d7_b.jpg",
            capacity: 15
            )

    DogPark.create(
            name: "Tompkins Square Dog Run",
            address: "99 1/2 St Marks Pl, New York, NY 10009",
            img: "https://images.squarespace-cdn.com/content/v1/5313d3e9e4b0d7a86d52896e/abb60960-5316-4f5b-b187-101bdffc94f0/Fall_2020_Large-Run-web.jpg?format=1000w",
            capacity: 50
            )

    DogPark.create(
            name: "Stuyvesant Park Dog Run",
            address: "306-318 E 15th St, New York, NY 10003",
            img: "https://live.staticflickr.com/84/233369861_c307a7b7f5_b.jpg",
            capacity: 30
            )

    DogPark.create(
            name: "Union Square Dog Run",
            address: "Union Square W, New York, NY 10003",
            img: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/union-square-dog-run-paul-coco.jpg",
            capacity: 20
            )
    
    DogPark.create(
            name: "West Village D.O.G. Run",
            address: "55 Little W 12th St, New York, NY 10014",
            img: "https://cdn.businessyab.com/assets/uploads/4e50f5a0fe84a4bd50941a56446372e7_-united-states-new-york-new-york-county-manhattan-little-west-12th-street-55-west-village-dog-run.jpg",
            capacity: 10
            )

    DogPark.create(
            name: "Bellevue South Park Dog Run",
            address: "Mt Carmel Pl & E 26th St, New York, NY 10016",
            img: "https://www.nycgovparks.org/photo_gallery/full_size/24445.jpg",
            capacity: 30
            )

    DogPark.create(
            name: "Jemmy's Dog Run",
            address: "Broadway & W 25th St, New York, NY 10010",
            img: "https://18p95aamd693k2glx3ytryxr-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/Dogs-hero.jpg",
            capacity: 20
            )

    DogPark.create(
            name: "Chelsea Waterside Dog Park",
            address: "11th Ave & W23rd Street, New York, NY 10011",
            img: "https://hudsonriverpark.org/app/uploads/2012/03/CWP-Dog-Run-1-1-scaled.jpg",
            capacity: 40
            )

    DogPark.create(
            name: "Pier 84 Dog Run",
            address: "353 West St, New York, NY 10036",
            img: "https://joannapertz.com/wp/wp-content/uploads/2020/03/HRPT-Dog-Run-Perspective-flat-scaled-e1613172647175-1024x505.jpg",
            capacity: 20
            )

    DogPark.create(
            name: "Robert Moses Dog Run",
            address: "417-421 E 42nd St, New York, NY 10017",
            img: "https://www.nycgovparks.org/photo_gallery/full_size/20177.jpg",
            capacity: 20
            )

    DogPark.create(
            name: "Peter Detmold Park",
            address: "454 E 51st St, New York, NY 10022",
            img: "https://sqdte9mbh615zsvesmkh1eyq-wpengine.netdna-ssl.com/wp-content/uploads/2014/09/51st-Peter-Detmold-Park-LT-4.jpg",
            capacity: 40
            )

    DogPark.create(
            name: "Andrew Haswell Green Dog Park",
            address: "Bobby Wagner Walk & E 63rd Street Pedestrian Bridge, New York, NY 10065",
            img: "https://esna-nyc.net/wp-content/uploads/2021/08/Local-Resources-1.jpg",
            capacity: 20
            )

puts "Seeding done"

