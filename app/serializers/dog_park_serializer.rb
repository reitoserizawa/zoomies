class DogParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :img, :capacity, :dog_count

  has_many :users
  has_many :dogs

  def dog_count
    dogs = object.dogs.count
    return dogs
  end
end
