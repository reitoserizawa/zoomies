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

reito = 
    Dog.create(
        name: "Reito",
        breed: "Reito",
        size: "Small",
        img: "Reito",
        user_id: 1
        )

tokyo =
    DogPark.create(
        name: "Tokyo",
        address: "Tokyo 1234567",
        img: "Tokyo",
        capacity: 50
        )

checkReito =

    CheckIn.create(
        user_id: 1,
        dog_park_id: tokyo.id,
        dog_id: reito.id
    )

puts "Seeding done"