class DogParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :img, :capacity

  has_many :users
  has_many :dogs
end
