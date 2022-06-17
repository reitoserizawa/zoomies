class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :size, :img

  belongs_to :user
  has_many :check_ins
end
